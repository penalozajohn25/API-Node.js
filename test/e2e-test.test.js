const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

const url = 'http://localhost:3000';

describe('Insertar nombre y el precio', () => {
    it('esperamos un name y un price', (done) => {
        chai.request(url)
            .post('/api/v1/products')
            .send({ name: 'Monitor', price: 2000 })
            .end((err, res) => {
                console.log(res.body);
                expect(res).to.status(200);
                done();
            });
    });
})

// const app = require('../index').app;

// describe('Suit de prueba para el curso', () => {
//     it('esperamos un hola mundo', (done) => {
//         chai.request('http://localhost:3000/')
//             .get('/')
//             .end((err, res) => {
//                 console.log('A');
//                 chai.assert.equal(res.text, 'hola mundo!');
//                 done();
//             })
//         console.log('B');
//     });
// });