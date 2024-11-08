# ORDER API Specs

## Create Order API

Endpoint : **POST /api/orders**

Headers : 
- Authorization : token

Request Body :

```json
    {
        "price":"15000",
        "delivery_price":"4000",
        "type_service":"COD",
        "time_delivery":"15:40", //datetime
        "location":"Gedung FSM",
        "give_receipt":"true",
        "description":"Di kliping"
    }
```

Response Body Success:

```json
    {
        "status":"OK",
        "message":"Successfully create order",
        "data":{
            "id": "1",
            "status" : "on process", //optional
            "price":"15000",
            "delivery_price":"4000",
            "type_service":"COD",
            "time_delivery":"15:40", //datetime
            "location":"Gedung FSM",
            "give_receipt":"true", // boolean
            "description":"Di kliping",
            "create_at":"12/12/2024",
            "update_at":"12/12/2024"
        }
    }
```

Response Body Failed:

```json
    {
        "status":"Unauthorized",
        "message":"Silakan login terlebih dahulu",
        "data":{}
    }
```


## Update Order API

Endpoint : **PUT /api/orders/:id**

Headers : 
- Authorization : token

Request Body :

```json
    {
        "status" : "on delivery", //optional
        "price":"15000", //optional
        "delivery_price":"4000", //optional
        "type_service":"COD", //optional
        "time_delivery":"15:40", //optional
        "location":"Gedung FSM", //optional
        "give_receipt":"true", //optional
        "description":"Di kliping" //optional
    }
```

Response Body Success:

```json
    {
        "status":"OK",
        "message":"Successfully create order",
        "data":{
            "id": "1",
            "status" : "on delivery",
            "price":"15000",
            "delivery_price":"4000",
            "type_service":"COD",
            "time_delivery":"15:40", //datetime
            "location":"Gedung FSM",
            "give_receipt":"true", // boolean
            "description":"Di kliping",
            "create_at":"12/12/2024",
            "update_at":"12/12/2024"
        }
    }
```

Response Body Failed:

```json
    {
        "status":"Unauthorized",
        "message":"Silakan login terlebih dahulu",
        "data":{}
    }
```

## Get Order API


Endpoint : **GET /api/orders/:id**

Headers : 
- Authorization : token

Response Body Success:

```json
    {
        "status":"OK",
        "message":"Successfully create order",
        "data":{
            "id": "1",
            "status" : "on delivery",
            "price":"15000",
            "delivery_price":"4000",
            "type_service":"COD",
            "time_delivery":"15:40", //datetime
            "location":"Gedung FSM",
            "give_receipt":"true", // boolean
            "description":"Di kliping",
            "create_at":"12/12/2024",
            "update_at":"12/12/2024"
        }
    }
```

Response Body Failed:

```json
    {
        "status":"Not Found",
        "message":"Order tidak ditemukan",
        "data":{}
    }
```

## Remove Order API


Endpoint : **DELETE /api/orders/:id**

Headers : 
- Authorization : token

Response Body Success:

```json
    {
        "status":"OK",
        "message":"Successfully delete order",
        "data":{}
    }
```

Response Body Failed:

```json
    {
        "status":"Not Found",
        "message":"Order not found",
        "data":{}
    }
```
