const request = require('supertest');

const server = require('./server.js');

const db = require('../database/dbConfig.js');

// THIS ENTIRE SUITE IS TO TEST THE POST OF MY AUTH ROUTES AND THE GET/POST OF MY TOTAL CALCULATOR TO SHOW I CAN DO IT

// THIS ENTIRE TEST SUITE WILL WORK 15% OF THE TIME BECAUSE I AM RUNNING 15 TESTS ASYCHRONOUSLY

describe('This is to make sure everything is in testing', () => {
    beforeEach(async () => {
        await db('users').truncate();
        await db('total').truncate();
        await request(server).post('/api/auth/register').send({username: 'Test', password: 'pass', email: 'test@test.net'})
        // const response = await request(server).post('/api/auth/login').send({username: 'Test', password: 'pass'})
        // const myHeaders = new Headers();
        // myHeaders.append('Authorization', response.body.token)

        // global.Headers = () => {
        //     append('Authorization', response.body.token)
        // }
        // window.Headers.set('Authorization', response.body.token)
    })
    
    it('makes sure Im in a test env', () => {
        expect(process.env.DB_TEST).toBe('test')
    })
})

describe('server.js root get', () => {
    describe('the route that gets the server message of the day', () => {
        it('should return an OK status code of 200', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
        })
        it('should return an object', async () => {
            const response = await request(server).get('/')
            expect(response.body).toEqual({})
        })
        it('should return a message of the day variable', async () => {
            const response = await request(server).get('/')
            if (process.env.MOTD) {
                expect(response.text).toEqual(`<h1>Thank you for using the server!</h1>`)
            } else {
                expect(response.text).toEqual(`<h1>Welcome to the server!</h1>`)
            }
            })
    })
})

describe('auth router', () => {
    describe('register route', () => {
        it('should return a CREATED status code of 201', async () => {
            const response = await request(server).post('/api/auth/register').send({username: 'Test1', password: 'pass', email: 'test@test.net'})
            expect(response.status).toBe(201)
        })
        it('should return a piece of json', async () => {
            const response = await request(server).post('/api/auth/register').send({username: 'Test2', password: 'pass', email: 'test@test.net'})
            expect(response.type).toMatch(/json/i)
        })
        it('should return the object we just created', async () => {
            // 
            const response = await request(server).post('/api/auth/register').send({username: 'Test3', password: 'pass', email: 'test@test.net'})
            expect(response.body).toEqual({username: 'Test3', email: 'test@test.net'})
        })
    })
    describe('login route', () => {
        it('should return an OK status code of 200', async () => {
            const response = await request(server).post('/api/auth/login').send({username: 'Test', password: 'pass'})
            expect(response.status).toBe(200)
        })
        it('should return a piece of json', async () => {
            const response = await request(server).post('/api/auth/login').send({username: 'Test', password: 'pass'})
            expect(response.type).toMatch(/json/i)
        })
        it('should return an object', async () => {
            const response = await request(server).post('/api/auth/login').send({username: 'Test', password: 'pass'})
            // console.log(Object.keys(response.body))
            // const expectedObject = Object.keys(response.body)
            expect(response.body).toHaveProperty('message')
            expect(response.body).toHaveProperty('token')
            expect(response.body).toHaveProperty('id')
        })
    })
})

describe('total router', () => {
    describe('total route at first get', () => {
        it('should return an OK status code of 200', async () => {
            const response = await request(server).post('/api/auth/login').send({username: 'Test', password: 'pass'})
            // const fetchquest = await fetch('http:localhost:8000/api/total', {
            //     method: 'GET',
            //     headers: {
            //         'Authorization': response.body.token
            //     },
            //     body: JSON.stringify
            // })
            // console.log(fetchquest)
            // const myHeaders = new Headers()
            // myHeaders.append('Authorization', response.body.token)
            // console.log(myHeaders)
            const totalResponse = await request(server).get('/api/total/').set('Authorization', response.body.token)
            expect(totalResponse.status).toBe(200)
        })
        it('should return an empty array since we have not added anything to that', async () => {
            const response = await request(server).post('/api/auth/login').send({username: 'Test', password: 'pass'})
            const totalResponse = await request(server).get('/api/total/').set('Authorization', response.body.token)
            expect(totalResponse.body).toEqual([])
        })
    })
    describe('total route at the post request', () => {
        it('should return a created status of 201', async () => {
            const response = await request(server).post('/api/auth/login').send({username: 'Test', password: 'pass'})
            const totalResponse = await request(server).post('/api/total/').set('Authorization', response.body.token).send({userId: 1, runningTotal: 700, calc1Total: 350, calc2Total: 350})
            expect(totalResponse.status).toBe(201)
        })
        it('should return some JSON object', async () => {
            const response = await request(server).post('/api/auth/login').send({username: 'Test', password: 'pass'})
            const totalResponse = await request(server).post('/api/total/').set('Authorization', response.body.token).send({userId: 1, runningTotal: 300, calc1Total: 150, calc2Total: 150})
            expect(totalResponse.type).toMatch(/json/i)
        })
        it('should be able to grab the data from total repsonse that we just added', async () => {
            const response = await request(server).post('/api/auth/login').send({username: 'Test', password: 'pass'})
            const totalResponsePosting = await request(server).post('/api/total/').set('Authorization', response.body.token).send({userId: 1, runningTotal: 500, calc1Total: 250, calc2Total: 250})
            const totalResponseGetting = await request(server).get('/api/total/').set('Authorization', response.body.token)
            
            expect(totalResponseGetting.body).toEqual([{id: 1, userId: 1, runningTotal: 700, calc1Total: 350, calc2Total: 350}, {id: 2, userId: 1, runningTotal: 300, calc1Total: 150, calc2Total: 150}, {id: 3, userId: 1, runningTotal: 500, calc1Total: 250, calc2Total: 250}])
        })
    })
})
