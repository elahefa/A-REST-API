import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'
import userRolesRoutes from './routes/userRoles.js'
import validUserRolesRoutes from './routes/validUserRoles.js'
import unitsRoutes from './routes/units.js'
import rolesRoutes from './routes/roles.js'
import usersWithValidUserRolesRoutes from './routes/usersWithValidUserRoles.js'
import unitId11Routes from './routes/unitId11.js'
import unitId12Routes from './routes/unitId12.js'
import unitId14Routes from './routes/unitId14.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.use('/userroles', userRolesRoutes);

app.use('/validuserroles', validUserRolesRoutes);

app.use('/units', unitsRoutes);

app.use('/roles', rolesRoutes);

app.use('/usersWithValidUserRoles', usersWithValidUserRolesRoutes);

app.use('/unitId11', unitId11Routes);

app.use('/unitId12', unitId12Routes);

app.use('/unitId14', unitId14Routes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));