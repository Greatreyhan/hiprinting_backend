# File API Specs

## Create File API

Endpoint : **POST /api/orders/:orderId/files**

Headers : 
- Authorization : token

Request Body :

```json
    {
        "link":"http://filename.com",
        "total_page":"10",
        "total_BNW":"11",
        "total_NCL":"12", 
        "total_FCL":"32",
        "price":"12000",
        "size":"A4",
        "mode":"Color",
        "description":"Di pisah"
    }
```

Response Body Success:

```json
    {
        "status":"OK",
        "message":"Successfully create order",
        "data":{
            "id": "1",
            "status" : "not printed",
            "link":"http://filename.com",
            "total_page":"10",
            "total_BNW":"11",
            "total_NCL":"12", 
            "total_FCL":"32",
            "price":"12000",
            "size":"A4",
            "mode":"Color",
            "description":"Di pisah",
            "create_at":"12/12/2024",
            "update_at":"12/12/2024"
        }
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


## Update File API

Endpoint : **PUT /api/orders/:orderId/files/:fileId**

Headers : 
- Authorization : token

Request Body :

```json
    {
        "status" : "printed", // optional
        "link":"http://filename.com", // optional
        "total_page":"10", // optional
        "total_BNW":"11", // optional
        "total_NCL":"12", // optional 
        "total_FCL":"32", // optional
        "price":"12000", // optional
        "size":"A4", // optional
        "mode":"Color", // optional
        "description":"Di pisah" // optional
    }
```

Response Body Success:

```json
    {
        "status":"OK",
        "message":"Successfully update order",
        "data":{
            "id": "1",
            "status" : "on delivery",
            "price":"15000",
            "link":"http://filename.com",
            "total_page":"10",
            "total_BNW":"11",
            "total_NCL":"12", 
            "total_FCL":"32",
            "price":"12000",
            "size":"A4",
            "mode":"Color",
            "description":"Di pisah",
            "create_at":"12/12/2024",
            "update_at":"12/12/2024"
        }
    }
```

Response Body Failed:

```json
    {
        "status":"Not Found",
        "message":"File not found",
        "data":{}
    }
```

## Get File API


Endpoint : **GET /api/orders/:orderId/files/:fileId**

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
            "link":"http://filename.com",
            "total_page":"10",
            "total_BNW":"11",
            "total_NCL":"12", 
            "total_FCL":"32",
            "price":"12000",
            "size":"A4",
            "mode":"Color",
            "description":"Di pisah",
            "create_at":"12/12/2024",
            "update_at":"12/12/2024"
        }
    }
```

Response Body Failed:

```json
    {
        "status":"Not Found",
        "message":"File not found",
        "data":{}
    }
```

## Remove File API


Endpoint : **DELETE /api/orders/:orderId/files/:fileId**

Headers : 
- Authorization : token

Response Body Success:

```json
    {
        "status":"OK",
        "message":"Successfully delete file",
        "data":{}
    }
```

Response Body Failed:

```json
    {
        "status":"Not Found",
        "message":"File not found",
        "data":{}
    }
```
