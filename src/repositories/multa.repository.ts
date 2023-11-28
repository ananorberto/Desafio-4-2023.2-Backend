import { mysqlConn } from "../base/mysql";
import { MultaSchema, type Multa } from "../schemas/multa.schema";

export async function findAllMultas(): Promise<Multa[]> {
  const result = await mysqlConn.query("SELECT * FROM MULTA");
  return result.map((row) => MultaSchema.parse(row));
}

export async function findMultaById(id: number): Promise<Multa | null> {
  const result = await mysqlConn.query("SELECT * FROM MULTA WHERE ID = ?", [id]);

  if (result.length === 0) return null;

  return MultaSchema.parse(result[0]);
}

export async function createMulta(multaData: Multa): Promise<Multa> {
  const { ID, ...insertData } = multaData;

  const insertResult = await mysqlConn.execute(
    "INSERT INTO MULTA (valor, data, pontosPenalidade, tipoInfração) VALUES (?, ?, ?, ?)",
    [insertData.valor, insertData.data, insertData.pontosPenalidade, insertData.tipoInfração],
  );

  const selectResult = await findMultaById(insertResult.insertId);

  if (selectResult === null) throw new Error("Failed to create multa");

  return MultaSchema.parse(selectResult);
}
