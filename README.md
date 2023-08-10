
# USER

## Register

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

## Login

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

## Update

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

## Delete

### http://localhost:3000/user

#### DELETE

status: 200 OK

```
{
  "id": 8,
  "name": "tercio",
  "subName": "almeida",
  "cpf": "43338992101",
  "email": "walthercio@gmail.com"
}
```

# ADDRESS

## CREATE

### http://localhost:3000/address

#### POST 



Body:
```
{
  "cep": 12345678,
  "city": "natal",
  "state": "rio grande do norte",
  "district": "ponta negra",
  "street": "avenida anhanguera",
  "number": 8
}
```

response: 

status: 201 CREATED

```
{
  "id": 6,
  "cep": 12345678,
  "city": "natal",
  "state": "rio grande do norte",
  "district": "ponta negra",
  "street": "avenida anhanguera",
  "number": 8,
  "userId": 13
}
```

## GET

### http://localhost:3000/address

#### GET

response:

status: 200 OK

```
{
  "id": 3,
  "cep": 12345678,
  "city": "natal",
  "state": "rio grande do norte",
  "district": "ponta negra",
  "street": "avenida anhanguera",
  "number": 8,
  "userId": 12
}
```



## Update

### http://localhost:3000/address

#### PATCH

body:

```
{
  "cep": 12345678,
  "city": "natal",
  "state": "rio grande do nortp",
  "district": "ponta negra",
  "street": "avenida anhangueras",
  "number": 10
}
```

response:

status: 200 OK

```
{
  "cep": 12345678,
  "city": "natal",
  "state": "rio grande do nortp",
  "district": "ponta negra",
  "street": "avenida anhangueras",
  "number": 10
}
```