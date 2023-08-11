# Register

### http://localhost:3000/user

#### POST

body:

```
{
"email": "walthercio@gmail.com",
"password":"Example7",
"name": "walthercio",
"subName": "almeida",
"cpf": "47443129809"
}
```

response:

status: 201 created

```
{
"id": 6,
"name": "walthercio",
"subName": "almeida",
"cpf": "47443129809"
"email": "walthercio@gmail.com"
}
```

# Login

### http://localhost:3000/login

#### POST



body:

```
{
"email": "walthercio@gmail.com",
"password":"Example7",
}
```

response:

status: 200 OK

```
{
"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6InRlcmNpbyIsInN1Yk5hbWUiOiJhbG1laWRhIiwiY3BmIjoiNDc0NDMyMjk4MDkiLCJlbWFpbCI6IndhbHRoZXJjaW8zQGdtYWlsLmNvbSIsImlhdCI9MTY5MTY2OTY1NCwiZXhwIjoxNjkxNzU2MDU0fQ.xJa0JQXtBvfRRO14ES50J5jLfUfRi7OhshUcMFbvRw3"
}
```

# Update

### http://localhost:3000/user

#### PATCH

body:

```
{
"email": "walthercio@gmail.com",
"password":"Example7",
"name": "walthercio",
"subName": "almeida",
"cpf": "47443129809"
}
```

response:

status: 200 OK

```
{
"id": 6,
"name": "walthercio",
"subName": "almeida",
"cpf": "47443129809"
"email": "walthercio@gmail.com",
}
```

# Delete

### http://localhost:3000/user

#### DELETE

status: 204 NO CONTENT

```
{
  "id": 8,
  "name": "tercio",
  "subName": "almeida",
  "cpf": "43338992101",
  "email": "walthercio@gmail.com"
}
```

# GET BY CPF

### http://localhost:3000/user/43338992101

#### GET

```
{
  "id": 8,
  "name": "tercio",
  "subName": "almeida",
  "cpf": "43338992101",
  "email": "walthercio@gmail.com"
}
```
