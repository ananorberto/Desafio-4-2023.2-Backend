import { z } from "zod";

export const MotoristaSchema = z.object({
  CPF: z.string().length(11),
  nome: z.string().max(150),
  vencimentoCNH: z.date(),
  categoriaCNH: z.string().length(2),
});

export type Motorista = z.infer<typeof MotoristaSchema>;
