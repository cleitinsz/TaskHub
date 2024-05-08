import app from "../../src/app";
import { initServer } from "../../src/server";

describe("Server Integration Test", () => {
  test.skip("should call console.error", () => {
    const mockError = new Error("Failed to start server");
    const listenSpy = jest.spyOn(app, "listen").mockImplementation(() => {
      throw mockError;
    });

    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    initServer();

    expect(listenSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
  });
  test.skip("should init server", async () => {
    const listenSpy = jest.spyOn(app, "listen");

    initServer(3001);

    expect(listenSpy).toHaveBeenCalled();
  });
});
