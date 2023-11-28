import { z } from "zod";

export const MultaSchema = z.object({
  ID: z.number().int(),
  valor: z.number().positive(),
  data: z.date(),
  pontosPenalidade: z.number().int().positive(),
  tipoInfração: z.string().max(200),
});

export type Multa = z.infer<typeof MultaSchema>;
