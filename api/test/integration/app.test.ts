import supertest from "supertest";
import app from "../../src/app";

describe("App Integration Test", () => {
  let server: any;

  beforeAll(() => {
    server = supertest(app);
  });

  test("should return 200 when call GET", async () => {
    const response = await server.get("/");
  
    expect(response.status).toBe(200);
  });
});
