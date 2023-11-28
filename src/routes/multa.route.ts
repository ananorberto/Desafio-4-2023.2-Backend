import { Router } from "express";
import { MultaSchema } from "../schemas/multa.schema";
import {
  findAllMultas,
  createMulta,
} from "../repositories/multa.repository";

const router = Router();

router.get("/", async (req, res) => {
    const multas = await findAllMultas();
    res.status(200).json(multas);
});

router.post("/", async (req, res) => {
    const multaData = MultaSchema.parse(req.body);
    const multa = await createMulta(multaData);
    return res.status(201).json(multa);
});

export default router;
