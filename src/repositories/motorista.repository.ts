import { mysqlConn } from "../base/mysql";
import { MotoristaSchema, type Motorista } from "../schemas/motorista.schema";

export async function findAllMotoristas(): Promise<Motorista[]> {
  const result = await mysqlConn.query("SELECT * FROM MOTORISTA");
  return result.map((row) => MotoristaSchema.parse(row));
}

export async function findMotoristaByCPF(cpf: string): Promise<Motorista | null> {
  const result = await mysqlConn.query(
    "SELECT cpf, nome, vencimento_cnh, categoria_cnh FROM motorista WHERE cpf = ?",
    [cpf],
  );

  if (result.length === 0) return null;

  return MotoristaSchema.parse(result[0]);
}
export async function createMotorista(motoristaData: Motorista): Promise<Motorista> {
  const { CPF } = motoristaData;

  const selectResult = await findMotoristaByCPF(CPF);

  if (selectResult === null) throw new Error("Failed to create motorista");

  return MotoristaSchema.parse(selectResult);
}
