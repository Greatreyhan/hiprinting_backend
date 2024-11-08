import supertest from "supertest"
import { web } from "../src/application/web.js"
import { deleteUserTest } from "./utils.js"

describe('POST /api/users/register', function () {

    afterEach(async ()=>{
        deleteUserTest();
    })

    it('Shoud create new user', async () => {
        const result = await supertest(web)
            .post('/api/users/register')
            .send({
                username: "test",
                email: "test@gmail.com",
                password: "test",
                whatsapp_number: "000000"
            })

        console.log(result.body)

        expect(result.status).toBe(201)
        expect(result.body.data.email).toBe("test@gmail.com")
        expect(result.body.data.username).toBe("test")
    })

    it('Shoud Reject for invalid input', async () => {
        const result = await supertest(web)
            .post('/api/users/register')
            .send({
                username: "",
                email: "",
                password: "",
                whatsapp_number: ""
            })

        console.log(result.body)

        expect(result.status).toBe(400)
        expect(result.body.status).toBe('Failed')
    })
})