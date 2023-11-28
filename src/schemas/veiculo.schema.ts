import { z } from "zod";

export const VeiculoSchema = z.object({
    placa: z.string().length(7),
    marca: z.string().max(100),
    modelo: z.string().max(150),
    ano: z.number().int(),
    cor: z.string().max(50),
});

export type Veiculo = z.infer<typeof VeiculoSchema>;
