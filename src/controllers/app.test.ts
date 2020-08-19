import supertest from 'supertest'

import app from './app'

describe("Converter controller",() => {
  const request = supertest(app)

  it("Successful flow: 200 status", async () => {
    const res = await request.get('/?roman=MM')
    // console.log(res)
    expect(res.text).toEqual("2000")
  })

  it("Exception flow: 400 status if query parameter “roman” is missing", async () => {
    const res = await request.get('/')
    expect(res.status).toEqual(400)
  })

  it("Exception flow: 400 status if invalid “roman” ", async () => {
    const res = await request.get('/?roman=A')
    expect(res.status).toEqual(400)
  })

})
