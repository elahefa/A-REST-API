import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { userRoles } from './userRoles.js'; 

const router = express.Router();

let users = [
    {
        username: "Alice",
        userVersion: 1,
        id: 1
    },
    {
        username: "Bob",
        userVersion: 2,
        id: 2
    },
    {
        username: "Eve",
        userVersion: 1,
        id: 3
    }
]

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    const userWithId = { ... user, id: uuidv4() }

    userWithId.userVersion = 1;

    users.push(userWithId);

    res.send(`User with the name ${user.username} added to the database.`);
}); 

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { username, userVersion } = req.body;

    if (userVersion == null) res.send('Please specify a userVersion.');
    else {  
        const newUser = users.find(user => user.id == id);
        const newUserVersion = newUser.userVersion;
        if (userVersion !== newUserVersion) res.send('Version mismatch.');
        else {

            const user = users.find((user) => user.id == id);

            if(username) user.username = username;
            if(userVersion) user.userVersion = userVersion;

            res.send(`User with the id ${id} has been updated.`);
        }
    }
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
});

router.delete('/:id/:userVersion', (req, res) => {
    const { id } = req.params;
    const { userVersion } = req.params;

    const newUser = users.find(user => user.id == id);
    const newUserVersion = newUser.userVersion;
    if (userVersion != newUserVersion) {
        res.send('Version mismatch.');
    } else {
    
        const foundUserId = userRoles.some(userRole => userRole.userId == id);
        if (foundUserId) res.send(`User with the id ${id} can not be deleted from the database.`);
        else {
            users = users.filter((user) => user.id != id);
        
            res.send(`User with the id ${id} deleted from the database.`);
        }
    }

});

export default router;