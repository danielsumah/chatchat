const request = require("supertest");
// Load Chance
const Chance = require("chance");

// Instantiate Chance so it can be used
const chance = new Chance();
// const app = express();
const server = require("../server");

const app = server.app;

describe("create an account", function () {
  it("respond with id and status of 201", async function () {
    const response = await request(app)
      .post("/accounts")
      .set("Accept", "application/json")
      .send({
        firstName: chance.first(),
        lastName: chance.last(),
        email: chance.email(),
        password: chance.string({ length: 10 }),
      });
    expect(response.status).toEqual(201);
    expect(response.body.data.id).toBeDefined();
  });

  it("respond return a 400 and a message if email exists", async function () {
    const email = chance.email();
    const response1 = await request(app)
      .post("/accounts")
      .set("Accept", "application/json")
      .send({
        firstName: chance.first(),
        lastName: chance.last(),
        email,
        password: chance.string({ length: 10 }),
      });
    const response2 = await request(app)
      .post("/accounts")
      .set("Accept", "application/json")
      .send({
        firstName: chance.first(),
        lastName: chance.last(),
        email,
        password: chance.string({ length: 10 }),
      });
    expect(response2.status).toEqual(400);
    expect(response2.body.message).toBeDefined();
  });
});

describe("Login a created user", function () {
  it("respond with a 200 and a token when a created user is logged in", async function () {
    const email = chance.email();
    const password = chance.string({ length: 10 });

    //first create the user
    await request(app)
      .post("/accounts")
      .set("Accept", "application/json")
      .send({
        firstName: chance.first(),
        lastName: chance.last(),
        email,
        password,
      });

    //then login the user
    const loginAttempt = await request(app)
      .post("/accounts/login")
      .set("Accept", "application/json")
      .send({
        email,
        password,
      });
    expect(loginAttempt.status).toEqual(200);
    expect(loginAttempt.body.data.id).toBeDefined();
  });
});
