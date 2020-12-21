import express from 'express';

const router = express.Router();

let users = [
    {
        username: "Bob",
        userVersion: 2,
        id: 2
    }
]
let userRoles = [
    {
        validFrom: "2020-01-28 00:00:00",
        validTo: "(no value)",
        roleId: 101,
        unitId: 12,
        userId: 2,
        roleVersion: 2,
        userRoleId: 1004
    },
    {
        validFrom: "2020-01-28 00:00:00",
        validTo: "(no value)",
        roleId: 105,
        unitId: 12,
        userId: 2,
        roleVersion: 1,
        userRoleId: 1005
    },
]
router.get('/', (req, res) => {
    res.send({
        users,
        userRoles
    });
});

export default router;