import express from 'express';

const router = express.Router();

const validUserRoles = [
    {
        validfrom: "2019-01-02 00:00:00",
        validto: "2019-12-31 23:59:59",
        roleid: 101,
        unitid: 11,
        userid: 1,
        roleversion: 1,
        roleid: 1001
    },
    {
        validfrom: "2019-01-02 00:00:00",
        validto: "2019-12-31 23:59:59",
        roleid: 104,
        unitid: 11,
        userid: 1,
        roleversion: 2,
        roleid: 1002
    },
    {
        validfrom: "2019-06-11 00:00:00",
        validto: "2019-12-31 23:59:59",
        roleid: 105,
        unitid: 11,
        userid: 1,
        roleversion: 1,
        roleid: 1003
    }
]

router.get('/', (req, res) => {
    res.send(validUserRoles);
}); 

export default router;