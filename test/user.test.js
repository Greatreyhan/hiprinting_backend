import supertest from "supertest"
import { web } from "../src/application/web.js"
import { createUserTest, deleteUserTest, getUserTest } from "./utils.js"
import bycrypt from "bcrypt"

describe('POST /api/users/register', function () {

    afterEach(async ()=>{
        await deleteUserTest();
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

describe('POST /api/users/login', function () {

    beforeEach(async ()=>{
        await createUserTest();
    })

    afterEach(async ()=>{
        await deleteUserTest();
    })

    it('Shoud login as user', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                email:"test@gmail.com",
                password:"test"
            })

        console.log(result.body)

        expect(result.status).toBe(200)
        expect(result.body.data.token).toBeDefined()
    })

    it('Should not login as request invalid', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                email:"123@gmail.com",
                password:""
            })

        console.log(result.body)

        expect(result.status).toBe(400)
        expect(result.body.data.token).toBeUndefined()
    })
})


describe('GET /api/users', function () {

    beforeEach(async ()=>{
        await createUserTest();
    })

    afterEach(async ()=>{
        await deleteUserTest();
    })

    it('Should get user data', async () => {
        const result = await supertest(web)
            .get('/api/users')
            .set('Authorization', 'test')

        console.log(result.body)

        expect(result.status).toBe(200)
        expect(result.body.status).toBe('OK')
    })

    it('Should not get user data with wrong token', async () => {
        const result = await supertest(web)
            .get('/api/users')
            .set('Authorization', 'salah')

        console.log(result.body)

        expect(result.status).toBe(401)
        expect(result.body.status).toBe('Unauthorized')
    })

})

describe('PATCH /api/users', function () {

    beforeEach(async ()=>{
        await createUserTest();
    })

    afterEach(async ()=>{
        await deleteUserTest();
    })

    it('Should update user data', async () => {
        const result = await supertest(web)
            .patch('/api/users')
            .set('Authorization', 'test')
            .send({
                username: "tist",
                password: "tist",
                address : "tist",
                whatsapp_number: "99999"
            })

        console.log(result.body)

        expect(result.status).toBe(200)
        expect(result.body.status).toBe('OK')
        expect(result.body.data.username).toBe('tist')

        const user = await getUserTest()
        expect(await bycrypt.compare("tist", user.password)).toBe(true)
    })

    it('Should reject if request not valid', async () => {
        const result = await supertest(web)
            .patch('/api/users')
            .set('Authorization', 'test')
            .send({
                username: "",
                password: "",
                address : "",
                whatsapp_number: ""
            })

        console.log(result.body)

        expect(result.status).toBe(400)
    })


})


describe('DELETE /api/users', function () {

    beforeEach(async ()=>{
        await createUserTest();
    })

    afterEach(async ()=>{
        await deleteUserTest();
    })

    it('Should logout as user', async () => {
        const result = await supertest(web)
            .delete('/api/users')
            .set('Authorization', 'test')

        console.log(result.body)

        expect(result.status).toBe(200)
        expect(result.body.status).toBe('OK')
        expect(result.body.data.email).toBe('test@gmail.com')

        const user = await getUserTest()
        expect(user.token).toBeNull()
    })

})