import request from "supertest";

import app from "../src/app";

describe("GET /v1/api/errors", () => {
  test("should return status code 500 for generic error", async () => {
    const response = await request(app).get("/v1/api/errors").send();
    expect(response.statusCode).toBe(500);
  });
});
