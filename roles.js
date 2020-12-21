import express from 'express';
//import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const roles = [
    {
        id: 101,
        version: 1,
        name: "User administration"
    },
    {
        id: 102,
        version: 2,
        name: "Endoscopist administration"
    },
    {
        id: 103,
        version: 1,
        name: "Report colonoscopy capacity"
    },
    {
        id: 104,
        version: 2,
        name: "Send invitations"
    },
    {
        id: 105,
        version: 1,
        name: "View statistics"
    }
]

router.get('/', (req, res) => {
    res.send(roles);
});

export default router;