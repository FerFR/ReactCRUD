import request from 'supertest';
import app from '../src/app';
import * as dbHandler from './dbHandler';

beforeAll(async () => await dbHandler.connect());
beforeEach(async () => await dbHandler.seed());
afterEach(async () => await dbHandler.clear());
afterAll(async () => await dbHandler.close());

describe('GET', () => {
    it('should respond with a object of all posts', async () => {
        let response = await request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /json/);

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    _id: expect.any(String),
                    title: expect.any(String),
                    desc: expect.any(String),
                }),
            ])
        );
    });
});

describe('POST', () => {
    it('should create a new post', async () => {
        let response = await request(app)
            .post('/')
            .send({
                title: 'Fake Post Title',
                desc: 'Fake Post Description',
            })
            .expect(201);

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    _id: expect.any(String),
                    title: expect.any(String),
                    desc: expect.any(String),
                }),
            ])
        );
    });

    it('should throw a error for missing title on create', async () => {
        let response = await request(app)
            .post('/')
            .send({
                desc: 'Fake Post Description',
            })
            .expect(400);

        expect(response.body.statusCode).toBe(400);
        expect(response.body.message).toBe('Title is missing or invalid');
    });

    it('should throw a error for invalid title on create', async () => {
        let response = await request(app)
            .post('/')
            .send({
                title: '',
                desc: 'Fake Post Description',
            })
            .expect(400);

        expect(response.body.statusCode).toBe(400);
        expect(response.body.message).toBe('Title is missing or invalid');
    });
    it('should throw a error for missing desc on create', async () => {
        let response = await request(app)
            .post('/')
            .send({
                title: 'Fake Post Title',
            })
            .expect(400);

        expect(response.body.statusCode).toBe(400);
        expect(response.body.message).toBe('Description is missing or invalid');
    });

    it('should throw a error for invalid desc on create', async () => {
        let response = await request(app)
            .post('/')
            .send({
                desc: '',
                title: 'Fake Post Title',
            })
            .expect(400);

        expect(response.body.statusCode).toBe(400);
        expect(response.body.message).toBe('Description is missing or invalid');
    });
});

describe('PUT', () => {});

describe('DELETE', () => {});
