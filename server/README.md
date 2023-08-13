
!!!Todas as rotas, exceto as de criação de usuário e login, requerem o uso do token de autorização (bearer token).!!!

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

## LOGIN

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

## UPDATE

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

## DELETE

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

## GET BY CPF

### http://localhost:3000/user/43338992101

#### GET

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



## UPDATE

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


# ACCOUNT 

## CREATE

### http://localhost:3000/account

#### POST

```
na criação todos os dados já são preenchidos automaticamente
acount: 0001, 
agency: numero aleatorio de 6 digitos
balance: 0
```

response: 


status: 201 CREATED

```
{
  "id": 5,
  "balance": 0,
  "acount": 115073,
  "agency": "0001",
  "userId": 15
}
```

## GET

### http://localhost:3000/account

#### GET

response: 


status: 200 OK

```
{
  "id": 5,
  "balance": 0,
  "acount": 115073,
  "agency": "0001",
  "userId": 15
}
```

## TRANSFER 

### http://localhost:3000/account/transfer

#### POST


body:

```
{
  "destinationCpf": "43338992198",
  "amount": 100
}
```

response:

status: 201 CREATED

```
{
  "transferTo": "tercio",
  "amount": 100,
  "date": "2023-08-11T14:12:39.365Z",
  "receiveTo": "tercio"
}
```

## DEPOSIT

### http://localhost:3000/account/deposit

### PATCH

body:

```
{
  "amount": 1000
}
```

response:

status: 200 OK

```
{
  "id": 1,
  "balance": 14231,
  "acount": 773835,
  "agency": "001",
  "userId": 13
}
```


## WITHDRAWN

### http://localhost:3000/account/withdrawn

### PATCH

body:

```
{
  "amount": 1000
}
```

response:

status: 200 OK

```
{
  "id": 1,
  "balance": 14231,
  "acount": 773835,
  "agency": "001",
  "userId": 13
}
```


## TRANSFER

### http://localhost:3000/account/transfer

### POST

body:

```
{
  "destinationCpf": "43338992128",
  "amount": 22
}
```

response:

status: 200 OK

```
{
  "transferTo": "tercio",
  "amount": 22,
  "date": "2023-08-11T21:55:02.035Z"
}
```

# HISTORIC

## GET 

### http://localhost:3000/historic

#### GET 


response:

status: 200 OK

```
[
  {
    "id": 9,
    "transferTo": "danilo",
    "receivedFrom": null,
    "amount": 22,
    "date": "2023-08-12T21:39:51.612Z",
    "userId": 2
  }
  ...
]
```