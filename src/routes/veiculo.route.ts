import { Router } from "express";
import { VeiculoSchema } from "../schemas/veiculo.schema";
import { findAllVeiculos, createVeiculo } from "../repositories/veiculo.repository";

const router = Router();

router.get("/", async (req, res) => {
  const Veiculos = await findAllVeiculos();
  res.status(200).json(Veiculos);
});

router.post("/", async (req, res) => {
  const VeiculoData = VeiculoSchema.parse(req.body);
  const Veiculo = await createVeiculo(VeiculoData);
  return res.status(201).json(Veiculo);
});

export default router;
