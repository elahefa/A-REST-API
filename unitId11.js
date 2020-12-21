import express from 'express';

const router = express.Router();

let users = [
    {
        username: "Alice",
        userVersion: 1,
        id: 1
    }
]
let userRoles = [
    {
        validFrom: "2019-01-02 00:00:00",
        validTo: "2019-12-31 23:59:59",
        roleId: 101,
        unitId: 11,
        userId: 1,
        roleVersion: 1,
        userRoleId: 1001
    },
    {
        validFrom: "2019-01-02 00:00:00",
        validTo: "2019-12-31 23:59:59",
        roleId: 104,
        unitId: 11,
        userId: 1,
        roleVersion: 2,
        userRoleId: 1002
    },
    {
        validFrom: "2019-06-11 00:00:00",
        validTo: "2019-12-31 23:59:59",
        roleId: 105,
        unitId: 11,
        userId: 1,
        roleVersion: 1,
        userRoleId: 1003
    },
    {
        validFrom: "2020-02-01 07:00:00",
        validTo: "(no value)",
        roleId: 101,
        unitId: 11,
        userId: 1,
        roleVersion: 1,
        userRoleId: 1008
    },
    {
        validFrom: "2020-02-01 07:00:00",
        validTo: "(no value)",
        roleId: 104,
        unitId: 11,
        userId: 1,
        roleVersion: 1,
        userRoleId: 1009
    }
]
router.get('/', (req, res) => {
    res.send({
        users,
        userRoles
    });
});

export default router;