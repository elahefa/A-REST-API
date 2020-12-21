# A-REST-API

## Description

This project implements a REST API.

## Installation
   You need to download and install Node.js. You [can download it here.](https://nodejs.org/en/download/)
   
   I use Postman for testing. You can [download it here.](https://www.postman.com/downloads/)
   
## Prerequisites
* Dependencies:

     * Express: I use [Express web framework for Node.js](https://expressjs.com/). You can install it using the command: `$ npm install --save express` in the terminal of your code editor. (I use [Visual Studio Code](https://code.visualstudio.com/download).)
   
     * uuid: install it using the command: `npm install uuid`
   
* DevDependencies:

     * Nodemon: You can install nodemon by the command: `$ npm install --save-dev nodemon` Start nodemon using the command: `$ npm start`
    
## How to compile and execute the code covering the functionalities of the assignment

Please note:

  * Everything in the HTTP message body should be as JSON, except where explicitly noted.
  * Use the user, unit, role and user role data shown above as the starting state for every request.
  * When a new resource (user or user role) is created, it is automatically given an identifier (the next in the sequence for the shown types) and version 1:
  
  An example for creating a new user, given an automatic identifier and version 1:
  
  ```
  curl -X POST \
  http://localhost:5000/users \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: b0b5b0ca-5b33-ccbe-a458-e0cbb78d6f1a' \
  -d '    {
        "username": "Alice",
        "userVersion": 13,
        "id": 1
    }'
  ```  
 
  * In requests that update or delete an existing resource, the version must always be specified. If the specified version does not match the resource's current version, a response indicating a version mismatch must be returned.
  
  For deleting an existing userrole, the version number should be specified in the url. An example of when specified version for deleting does not match the userrole's current version:
  
  ```
  curl -X DELETE \
  http://localhost:5000/userroles/1002/1 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9a60b369-967e-39c5-a5ae-24f436337c05' \
  -d '    {
        "validFrom": "2022-01-02 00:00:00",
        "validTo": "2021-12-31 23:59:59",
        "roleVersion": 1
    }'
  ```
  
  For updating an existing userrole, the version number should be specified in the url. An example of when specified version for updating does not match the userrole's current version:
  
  ```
  curl -X PATCH \
  http://localhost:5000/userroles/1002 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: e91be7fd-6580-f4a0-5b8f-b8a2d0082371' \
  -d '    {
        "validFrom": "2019-01-02 00:00:00",
        "validTo": "2021-12-31 23:59:59",
        "roleVersion": 1
    }'
  ```
  
  For deleting an existing user, the version number should be specified in the url. An example of when specified version for deleting does not match the user's current version:
  
  ```
  curl -X DELETE \
  http://localhost:5000/users/1/3 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: b962ec4c-910a-1dbc-66b7-cab5131203a6' \
  -d '    {
        "validFrom": "2019-01-02 00:00:00",
        "validTo": "2021-12-31 23:59:59",
        "roleVersion": 1
    }'
  ```
  
  For updating an existing user, the version number should be specified in the url. An example of when specified version for updating does not match the user's current version:
  
  ```
  curl -X PATCH \
  http://localhost:5000/users/1 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: bdd54ebe-2c51-87d0-3677-af03a86cc46b' \
  -d '    {
        "username": "Alice",
        "userVersion": 10
    }'
  ```

1. List all users.

```
curl -X GET \
  http://localhost:5000/users \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: d1f2af9a-2686-c554-a69d-efc45202e4fc' \
  -d '    {
        "username": "John",
        "userVersion": 1,
        "id": 1
    }'
```
2. List all users with at least one valid user role at a given unit at a given time.

```
curl -X GET \
  http://localhost:5000/usersWithValidUserRoles \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: fa900567-d51d-5dbd-fe04-b147ecac9810' \
  -d '    {
        "username": "John",
        "userVersion": 1,
        "id": 1
    }'
```

3. List all units.

```
curl -X GET \
  http://localhost:5000/units \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: dca68fb2-d8dc-4907-3245-b6260e7eda1c' \
  -d '    {
        "username": "John",
        "userVersion": 1,
        "id": 1
    }'
```

4. List all roles.

```
curl -X GET \
  http://localhost:5000/roles \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 797c7d62-fa49-f34a-33cf-917ab1d441ba' \
  -d '    {
        "username": "John",
        "userVersion": 1,
        "id": 1
    }'
```
5. List all user roles (both currently valid and invalid) for a given user id and unit id.

```
curl -X GET \
  http://localhost:5000/userRoles \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ed080e59-32a7-34da-928b-73ffb19735a6' \
  -d '    {
        "username": "John",
        "userVersion": 1,
        "id": 1
    }'
```
6. List only valid user roles for a given user id and unit id at a given timestamp.

```
curl -X GET \
  http://localhost:5000/validUserRoles \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ad42bfb6-d129-a7de-650d-4292290034bd' \
  -d '    {
        "username": "John",
        "userVersion": 1,
        "id": 1
    }'
```
7. Create a new user.

```
curl -X POST \
  http://localhost:5000/users \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 449a233a-9861-9f71-9243-bd7744c4b815' \
  -d '    {
        "username": "John",
        "userVersion": 1,
        "id": 1
    }'
```
8. Update an existing user.

Id number of the user should be entered in the url for example for updating a user with id number 2, `/2` should be entered in the url at the end of `/users`.

```
curl -X PATCH \
  http://localhost:5000/users/2 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 3181bef6-bc0f-1c9a-d436-32fd5e7187aa' \
  -d '    {
        "username": "Joe",
        "userVersion": 2,
        "id": 2
    }'
```
9. Delete an existing user. A user can only be deleted if there are no user roles for that user.

Id number and version of the user should be entered in the url for example for deleting a user with id number 3 and version number 1, `/3/1` should be entered in the url at the end of `/users`.

```
curl -X DELETE \
  http://localhost:5000/users/3/1 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 24aee83f-93b8-505a-64a7-c0b5b72ccd40' \
  -d '    {
        "username": "Eve",
        "userVersion": 1,
        "id": 3
    }'
```
For the second part if we enter a user with id number 1 and version number 1 it shows: `user can not be deleted from the database.` because there is a user role for this user.

```
curl -X DELETE \
  http://localhost:5000/users/1/1 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: c3879b2d-e7d0-d3ab-cb32-e83dfe8a2e65' \
  -d '    {
        "username": "Eve",
        "userVersion": 1,
        "id": 3
    }'
```
10. Create a new user role for a given user id, unit id, role id, an optional valid from timestamp (if not specified, default to the current date and time) and an optional valid to timestamp (if not specified, default to no timestamp). If a valid to timestamp is specified, it must be after the valid from timestamp (or the current date and time if valid from timestamp is not specified in the request). At most one user role for a given combination of user id, unit id and role id can be valid at any point in time.

Creating a new user role for a given user id, unit id, role id, a valid from and valid to timestamps:

```
curl -X POST \
  http://localhost:5000/userroles \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: df201cb5-e04f-516d-ed56-719087ca0b04' \
  -d '    {
        "validFrom": "2019-01-02 00:00:00",
        "validTo": "2019-12-31 23:59:59",
        "roleId": 101,
        "unitId": 11,
        "userId": 2,
        "roleVersion": 1,
        "userRoleId": 1001
    }'
```

Creating a new user role for a given user id, unit id, role id, without a valid from timestamp, so default to the current date and time:

```
curl -X POST \
  http://localhost:5000/userroles \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 38e9e7c7-6860-c503-5503-56f02d22dbdf' \
  -d '    {
        "validTo": "2019-12-31 23:59:59",
        "roleId": 101,
        "unitId": 11,
        "userId": 5,
        "roleVersion": 1,
        "userRoleId": 1001
    }'
```

Creating a new user role for a given user id, unit id, role id, without a valid to timestamp, so default to no timestamp:

```
curl -X POST \
  http://localhost:5000/userroles \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 73d1a6a7-a881-3fe8-683c-094621bd15cf' \
  -d '    {
        "validFrom": "2019-01-02 00:00:00",
        "roleId": 101,
        "unitId": 11,
        "userId": 6,
        "roleVersion": 1,
        "userRoleId": 1001
    }'
```

Creating a new user role for a given user id, unit id, role id, without a valid to timestamp, so default to no timestamp, and without a valid from timestamp, so default to the current date and time:

```
curl -X POST \
  http://localhost:5000/userroles \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: d41e46c4-c4a4-0f53-1f92-7c2860803619' \
  -d '    {
        "roleId": 101,
        "unitId": 11,
        "userId": 7,
        "roleVersion": 1,
        "userRoleId": 1001
    }'
```
If a valid to timestamp is specified, it must be after the valid from timestamp. An example of a valid to timestamp that is not after the valid from timestamp:

```
curl -X POST \
  http://localhost:5000/userroles \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 75d0f452-93b1-692d-90e4-9b0f5d43a910' \
  -d '    {
        "validFrom": "2021-01-02 00:00:00",
        "validTo": "2019-12-31 23:59:59",
        "roleId": 101,
        "unitId": 11,
        "userId": 1,
        "roleVersion": 1,
        "userRoleId": 1001
    }'
```
At most one user role for a given combination of user id, unit id and role id can be valid at any point in time. An example of when this is not the case:

```
curl -X POST \
  http://localhost:5000/userroles \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: d6dddea8-a3dc-a457-cbff-99e3c5807e77' \
  -d '    {
        "validFrom": "2019-01-02 00:00:00",
        "validTo": "2019-12-31 23:59:59",
        "roleId": 101,
        "unitId": 11,
        "userId": 1,
        "roleVersion": 1,
        "userRoleId": 1006
    }'
```

11. Update an existing user role. Only the valid from and valid to timestamps can be changed. The valid from timestamp, if specified, must be a timestamp (a user role must always have a valid from timestamp). The requirement that the valid to timestamp, if specified, must come after the valid from timestamp   must be enforced, and an update that would cause two user roles for the same user id, unit id and role id to be valid at the same time must be rejected.

Updating an existing user role. Only the valid from and valid to timestamps have been changed and version has been specified. Also userRoleId should be specified in the url:

```
curl -X PATCH \
  http://localhost:5000/userroles/1001 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: be06a272-a07e-6675-bbda-ec9e7b5726f0' \
  -d '    {
        "validFrom": "2019-01-02 00:00:00",
        "validTo": "2021-12-31 23:59:59",
        "roleVersion": 1
    }'
```

Valid from timestamp must be a timestamp. An example of when this is not the case:

```
curl -X PATCH \
  http://localhost:5000/userroles/1002 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 78b31906-8399-98b3-2cb0-e7e5fc212694' \
  -d '    {
        "validTo": "2019-12-31 23:59:59",
        "roleVersion": 2
    }'
```

The requirement that the valid to timestamp, if specified, must come after the valid from timestamp must be enforced. An example of when the update request of the valid from timestamp is after the valid to timestamp:

```
curl -X PATCH \
  http://localhost:5000/userroles/1001 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 49543cdf-51c0-4c09-0355-97a7dd91b67c' \
  -d '    {
        "validFrom": "2022-01-02 00:00:00",
        "validTo": "2021-12-31 23:59:59",
        "roleVersion": 1
    }'
```

An update that would cause two user roles for the same user id, unit id and role id to be valid at the same time must be rejected:

```
curl -X PATCH \
  http://localhost:5000/userroles/1002 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: c6c38686-7ada-7f02-164c-2ecc61433c7a' \
  -d '    {
        "validFrom": "2019-01-02 00:00:00",
        "validTo": "2022-12-31 23:59:59",
        "roleVersion": 2
    }'
```

12. Delete an existing user role. userRoleId and roleVersion have been specified in url:

```
curl -X DELETE \
  http://localhost:5000/userroles/1001/1 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 0cd43034-d27b-3e1e-25c4-ec4590e3f4cf' \
  -d '    {
        "validFrom": "2022-01-02 00:00:00",
        "validTo": "2021-12-31 23:59:59",
        "roleVersion": 1
    }'
```

13. For a given unit id, list all users with at least one user role at that unit (whether the user role is currently valid or not), and for each user, list   all of the user's user roles at the given unit id. If application/xml is specified in the Accept header of the request, the message body of the response     should be valid XML. If application/json is specified in the Accept header of the request, the message body of the response should be as JSON.

All users with at least one user role at that unit (whether the user role is currently valid or not) for unit id 11, and for each role, list of all the user's user roles at unit id 11:

```
curl -X GET \
  http://localhost:5000/unitid11 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 17665b80-3b10-72cd-aca1-04631d813578' \
  -d '    {
        "validFrom": "2019-01-02 00:00:00",
        "validTo": "2022-12-31 23:59:59",
        "roleVersion": 2
    }'
```

All users with at least one user role at that unit (whether the user role is currently valid or not) for unit id 12, and for each role, list of all the user's user roles at unit id 12:

```
curl -X GET \
  http://localhost:5000/unitid12 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ea40a09e-f6ac-e78d-b6db-081a5444bf95' \
  -d '    {
        "validFrom": "2019-01-02 00:00:00",
        "validTo": "2022-12-31 23:59:59",
        "roleVersion": 2
    }'
```


All users with at least one user role at that unit (whether the user role is currently valid or not) for unit id 14, and for each role, list of all the user's user roles at unit id 14:

```
curl -X GET \
  http://localhost:5000/unitid14 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 4bf81c1f-188c-26ae-5b9f-08c17392c230' \
  -d '    {
        "validFrom": "2019-01-02 00:00:00",
        "validTo": "2022-12-31 23:59:59",
        "roleVersion": 2
    }'
```


      
   
   
   
