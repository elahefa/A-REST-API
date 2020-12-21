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
        unitId: 14,
        userId: 2,
        roleVersion: 1,
        userRoleId: 1006
    },
    {
        validFrom: "2020-01-28 00:00:00",
        validTo: "(no value)",
        roleId: 102,
        unitId: 14,
        userId: 2,
        roleVersion: 1,
        userRoleId: 1007
    }
]

//router.get('/application/xml', (req, res) => {
   // var parseString = require('xml2js').parseString;
   // var xml = res.send(xml({
     //   users,
     //   userRoles
   // }));
   // parseString(xml, function (err, result) {
    //});

router.get('/', (req, res) => {
    res.send({
        users,
        userRoles
    });
});

export default router;