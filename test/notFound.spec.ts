import request from "supertest";

import app from "../src/app";

describe("GET not-found", () => {
  test("should return 404 not found", async () => {
    const response = await request(app).get("/something").send();
    expect(response.statusCode).toBe(404);
  });
});
