import { mysqlConn } from "../base/mysql";
import { VeiculoSchema} from "../schemas/veiculo.schema";
import type { Veiculo } from "../schemas/veiculo.schema";

export async function findAllVeiculos(): Promise<Veiculo[]> {
    const result = await mysqlConn.query("SELECT * FROM Veiculo");
    return result.map((row) => VeiculoSchema.parse(row));
}

export async function findVeiculoByCPF(cpf: string): Promise<Veiculo | null> {
    const result = await mysqlConn.query("SELECT cpf, nome, vencimento_cnh, categoria_cnh FROM Veiculo WHERE cpf = ?", [cpf]);

    if (result.length === 0) return null;

    return VeiculoSchema.parse(result[0]);
}
export async function createVeiculo(VeiculoData: Veiculo): Promise<Veiculo> {
    const { placa } = VeiculoData;

    const selectResult = await findVeiculoByCPF(placa);

    if (selectResult === null) throw new Error("Failed to create Veiculo");

    return VeiculoSchema.parse(selectResult);
}

