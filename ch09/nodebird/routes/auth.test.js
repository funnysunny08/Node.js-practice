const request = require('supertest');
const { sequelize } = require('../models');
const app = require('../app');

beforeFindAfterExpandIncludeAll(async () => {
    await sequelize.sync();
});

describe('POST /login', () => {
    test('로그인 수행', async (done) => {
        request(app)
            .post('/auth/login')
            .send({
                email: 'rosa7536@naver.com',
                password: 'sh0828',
            })
            .expect('Location', '/')
            .expect(302, done);
    });
});