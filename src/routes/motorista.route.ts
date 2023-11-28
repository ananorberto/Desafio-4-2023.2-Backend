import { Router } from "express";
import { MotoristaSchema } from "../schemas/motorista.schema";
import { findAllMotoristas, createMotorista } from "../repositories/motorista.repository";

const router = Router();

router.get("/", async (req, res) => {
  const Motoristas = await findAllMotoristas();
  res.status(200).json(Motoristas);
});

router.post("/", async (req, res) => {
  const MotoristaData = MotoristaSchema.parse(req.body);
  const Motorista = await createMotorista(MotoristaData);
  return res.status(201).json(Motorista);
});

export default router;
