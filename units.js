import express from 'express';
//import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const units = [
    {
        unitname: "Kreftregisteret",
        unitversion: 2,
        unitid: 11
    },
    {
        unitname: "Akershus universitetssykehus HF",
        unitversion: 1,
        unitid: 12
    },
    {
        unitname: "Sørlandet sykehus HFe",
        unitversion: 2,
        unitid: 13
    },
    {
        unitname: "Vestre Viken HFe",
        unitversion: 2,
        unitid: 14
    }
]

router.get('/', (req, res) => {
    res.send(units);
});

export default router;