import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import id from './users.js'; 

const router = express.Router();

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
    res.send(userRoles);
});

router.post('/', (req, res) => {
    const userRole = req.body;

    const userRoleWithId = { ... userRole, userRoleId: uuidv4() }
    userRoleWithId.roleVersion = 1;

    const newUserId = userRole.userId;
    const newUnitId = userRole.unitId;
    const newRoleId = userRole.roleId;
    const newValidTo = userRole.validTo;
    const newValidFrom = userRole.validFrom;

    var newDate1 = new Date(newValidFrom);
    var newDate2 = new Date(newValidTo);

    if (newDate1 > newDate2) res.send(`validTo should be greater than validFrom.`);

    const foundNewUserRole = userRoles.some(userRole => ((userRole.validFrom == newValidFrom) && (userRole.validTo == newValidTo) && (userRole.unitId == newUnitId) && (userRole.roleId == newRoleId) && (userRole.userId == newUserId)));

    if(foundNewUserRole){
        res.send(`Userrole can not be updated. There exist a userrole for the same userid, unitid and roleid valid at the same time.`);
    }
    if (newValidFrom == null && newValidTo == null) {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        userRole.validFrom = date + ' ' + time;
        userRole.validTo = "(no value)";
        userRoles.push(userRole);
        res.send(`Userrole with the roleId ${userRole.roleId} added to the database.`);
    }
    if (newValidTo == null && newValidFrom !== null) {
        userRole.validTo = "(no value)";
        userRoles.push(userRole);
        res.send(`Userrole with the roleId ${userRole.roleId} added to the database.`);
    } 
    if (newValidFrom == null && newValidTo !== null) {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        userRole.validFrom = date + ' ' + time;
        userRoles.push(userRole);
        res.send(`Userrole with the roleId ${userRole.roleId} added to the database.`);
    } else if (newValidFrom !== null && newValidTo !== null && newDate1 < newDate2) {
        userRoles.push(userRole);
        res.send(`Userrole with the roleId ${userRole.roleId} added to the database.`);
    }
}); 

router.get('/:userRoleId', (req, res) => {
    const { userRoleId } = req.params;
    
    const foundUserRole = userRoles.find((userRole) => userRole.userRoleId == userRoleId);

    res.send(foundUserRole);
});

router.patch('/:userRoleId', (req, res) => {
    const { userRoleId } = req.params;
    const { validFrom, validTo, roleVersion } = req.body;
    
    if (roleVersion == null) res.send('Please specify a roleVersion.');
    else {
        const newUserRole = userRoles.find(userRole => userRole.userRoleId == userRoleId);
        const newRoleVersion = newUserRole.roleVersion;
        if (roleVersion !== newRoleVersion) res.send('Version mismatch.');
        else if (validFrom == null) res.send('Please specify a validFrom.');
        else {

            var newDate1 = new Date(validFrom);
            var newDate2 = new Date(validTo);

            if (newDate1 > newDate2) res.send(`validTo should be greater than validFrom.`);
            else {
                const newUserRole = userRoles.find(userRole => userRole.userRoleId == userRoleId);
                const newUnitId = newUserRole.unitId;
                const newRoleId = newUserRole.roleId;
                const newUserId = newUserRole.userId
                const foundNewUserRole = userRoles.some(userRole => ((userRole.validFrom == validFrom) && (userRole.validTo == validTo) && (userRole.unitId == newUnitId) && (userRole.roleId == newRoleId) && (userRole.userId == newUserId)));

                if(foundNewUserRole){
                    res.send(`Userrole can not be updated. There exist a userrole for the same userid, unitid and roleid valid at the same time.`);
                } else {
                    const userRole = userRoles.find(userRole => userRole.userRoleId == userRoleId);
                    if(validFrom) userRole.validFrom = validFrom;
                    if(validTo) userRole.validTo = validTo;
                    res.send(`Userrole with the roleId ${userRole.roleId} has been updated.`);
                }
            }
        }

    }

 });

router.delete('/:userRoleId/:roleVersion', (req, res) => {
    const { userRoleId } = req.params;
    const { roleVersion } = req.params;

    const newUserRole = userRoles.find(userRole => userRole.userRoleId == userRoleId);
    const newRoleVersion = newUserRole.roleVersion;
    if (roleVersion != newRoleVersion) {
        res.send('Version mismatch.');
    } else {
        userRoles = userRoles.filter((userRole) => userRole != newUserRole);
        res.send(`Userrole with the roleId ${userRoleId} deleted from the database.`);
    }

});

export { userRoles };
export default router;
