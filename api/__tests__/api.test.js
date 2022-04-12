import request from 'supertest';
import app from '../src/utils/app';
import * as dbHandler from './dbHandler';
import postModel from '../src/models/postModel';

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clear());
afterAll(async () => await dbHandler.close());

describe('Get All Posts', () => {
    it('should retrieve all posts', async () => {
        const postData = [
            {
                title: 'First Post',
                desc: 'First Post Description',
            },
            {
                title: 'Second Post',
                desc: 'Second Post Description',
            },
        ];

        await postModel.insertMany(postData);

        let response = await request(app).get('/');
        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'OK',
                message: 'All Posts Retrieved Successfully',
                status: 200,
                data: expect.arrayContaining([
                    expect.any(Object),
                    expect.any(Object),
                ]),
            })
        );
    });
});

describe('Create new Post', () => {
    it('should create a new post', async () => {
        let newPost = {
            title: 'Fake Post Title',
            desc: 'Fake Post Description',
        };
        let response = await request(app).post('/').send(newPost);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'CREATED',
                message: 'Post Created Successfully',
                status: 201,
                data: expect.objectContaining({
                    title: expect.stringContaining(newPost.title),
                    desc: expect.stringContaining(newPost.desc),
                }),
            })
        );
    });

    it('should not create because title is missing', async () => {
        let newPost = {
            desc: 'Fake Post Description',
        };
        let response = await request(app).post('/').send(newPost);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'BAD REQUEST',
                message: 'Title is missing or is invalid',
                status: 400,
                data: null,
            })
        );
    });

    it('should not create because title is invalid', async () => {
        let newPost = {
            title: '',
            desc: 'Fake Post Description',
        };
        let response = await request(app).post('/').send(newPost);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'BAD REQUEST',
                message: 'Title is missing or is invalid',
                status: 400,
                data: null,
            })
        );
    });

    it('should not create because desc is missing', async () => {
        let newPost = {
            title: 'Fake Post Title',
        };
        let response = await request(app).post('/').send(newPost);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'BAD REQUEST',
                message: 'Description is missing or is invalid',
                status: 400,
                data: null,
            })
        );
    });

    it('should not create because desc is invalid', async () => {
        let newPost = {
            title: 'Fake Post Title',
            desc: '',
        };
        let response = await request(app).post('/').send(newPost);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'BAD REQUEST',
                message: 'Description is missing or is invalid',
                status: 400,
                data: null,
            })
        );
    });
});

describe('Update Post', () => {
    it('Should update a existing post', async () => {
        let newPost = await postModel.create({
            title: 'Título Teste',
            desc: 'Desc Teste',
        });

        let newData = {
            title: 'Título Teste 2',
        };

        let response = await request(app).put(`/${newPost._id}`).send(newData);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'OK',
                message: 'Post Updated Successfully',
                status: 200,
                data: expect.objectContaining({
                    _id: expect.any(String),
                    __v: expect.any(Number),
                    title: newData.title,
                    desc: newPost.desc,
                }),
            })
        );
    });

    it('should not updated bescause new data is missing or is invalid', async () => {
        let newPost = await postModel.create({
            title: 'Título Teste',
            desc: 'Desc Teste',
        });

        let newData = {
            title: '',
            desc: '',
        };

        let response = await request(app).put(`/${newPost._id}`).send(newData);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'BAD REQUEST',
                message: 'New Post Data is Missing',
                status: 400,
                data: null,
            })
        );
    });

    it('should not updated because post not exists', async () => {
        let newPost = await postModel.create({
            title: 'Título Teste',
            desc: 'Desc Teste',
        });

        let newData = {
            title: 'Bla bal ablablala',
            desc: 'Blablalbalblablaba',
        };

        let response = await request(app).put(`/31231231231`).send(newData);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'NOT FOUND',
                message: 'Post Not Found',
                status: 404,
                data: null,
            })
        );
    });

    it('should not updated because id is missing', async () => {
        let newPost = await postModel.create({
            title: 'Título Teste',
            desc: 'Desc Teste',
        });

        let newData = {
            title: 'Bla bal ablablala',
            desc: 'Blablalbalblablaba',
        };

        let response = await request(app).put('/').send(newData);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'NOT FOUND',
                message: 'Post Not Found',
                status: 404,
                data: null,
            })
        );
    });
});

describe('Delete Post', () => {
    it('should delete a existing post', async () => {
        let newPost = await postModel.create({
            title: 'Título Teste',
            desc: 'Desc Teste',
        });

        let response = await request(app).delete(`/${newPost._id}`);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'OK',
                message: 'Post Deleted Successfully',
                status: 200,
                data: null,
            })
        );
    });

    it('should not delete because post does not exists', async () => {
        let newPost = await postModel.create({
            title: 'Título Teste',
            desc: 'Desc Teste',
        });

        let response = await request(app).delete(`/313123131`);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'NOT FOUND',
                message: 'Post Not Found',
                status: 404,
                data: null,
            })
        );
    });

    it('should not delete because id is missing', async () => {
        let newPost = await postModel.create({
            title: 'Título Teste',
            desc: 'Desc Teste',
        });

        let response = await request(app).delete('/');

        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'NOT FOUND',
                message: 'Post Not Found',
                status: 404,
                data: null,
            })
        );
    });
});
