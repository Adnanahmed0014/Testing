const request = require('supertest');
const app = require('./main');

describe('Medical Bill Upload Service', () => {
  it('GET /items should return a list of medical bills', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('POST /items should create a new medical bill', async () => {
    const res = await request(app)
      .post('/items')
      .send({
        patientName: 'Bill Smith',
        patientAddress: '37 Park Rd',
        hospitalName: 'NY Medical Center',
        dateOfService: '2021-07-12',
        billAmount: 1700,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({ message: 'Bill added successfully' });
  });
});