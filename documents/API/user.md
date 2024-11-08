# User  API Spec

## Register User API

Endpoint : **POST /api/users/register**

Request Body :

```json
    {
        "username":"username",
        "email":"user@gmail.com",
        "password":"****",
        "whatsapp_number":"08989898"
    }
```

Response Body Success:

```json
    {
        "status":"OK",
        "message":"Successfully create user",
        "data":{
            "username":"username",
            "email":"user@gmail.com",
        }
    }
```

Response Body Failed:

```json
    {
        "status":"Failed",
        "message":"Username already registered",
        "data":{}
    }
```


## Login User API

Endpoint : **POST /api/users/login**

Request Body :

```json
    {
        "email":"user@gmail.com",
        "password":"****",
    }
```

Response Body Success:

```json
    {
        "status":"OK",
        "message":"Successfully login as user",
        "data":{
            "token":"token"
        }
    }
```

Response Body Failed:

```json
    {
        "status":"Failed",
        "message":"Password invalid",
        "data":{}
    }
```

## Update  User API

Endpoint : **PATCH /api/users**

Headers : 
- Authorization : token


Request Body :

```json
    {
        "username":"username", //optional
        "email":"user@gmail.com", //optional
        "password":"****", //optional
        "whatsapp_number":"08989898"  //optional
    }
```

Response Body Success:

```json
    {
        "status":"OK",
        "message":"Successfully update user",
        "data":{
            "username":"username",
            "email":"user@gmail.com"
        }
    }
```

Response Body Failed:

```json
    {
        "status":"Unauthorized",
        "message":"Token invalid",
        "data":{}
    }
```

## Get User API

Endpoint : **GET /api/users**

Headers : 
- Authorization : token

Response Body Success:

```json
    {
        "status":"OK",
        "message":"Successfully update user",
        "data":{
            "username":"username", 
            "email":"user@gmail.com", 
            "whatsapp_number":"08989898" 
        }
    }
```

Response Body Failed:

```json
    {
        "status":"Unauthorized",
        "message":"Token invalid",
        "data":{}
    }
```

## Log Out User API


Endpoint : **DELETE /api/users**

Headers : 
- Authorization : token

Response Body Success:

```json
    {
        "status":"OK",
        "message":"Successfully logout user",
        "data":{}
    }
```

Response Body Failed:

```json
    {
        "status":"Unauthorized",
        "message":"Token invalid",
        "data":{}
    }
```