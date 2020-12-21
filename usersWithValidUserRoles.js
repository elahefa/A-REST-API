import express from 'express';

const router = express.Router();

let usersWithValidUserRoles = [
    {
        username: "Alice",
        userVersion: 1,
        id: 1
    }
]

router.get('/', (req, res) => {
    res.send(usersWithValidUserRoles);
});

export default router;