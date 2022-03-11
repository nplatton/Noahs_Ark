require("dotenv").config();

const authController = require("../../../controllers/auth");
const User = require("../../../models/User");

// Need to mock out bcrypt
const bcryptjs = require("bcryptjs");
jest.mock("bcryptjs");

// Need to mock out JWT
const jwt = require("jsonwebtoken");
jest.mock("jsonwebtoken");

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn((code) => ({
  send: mockSend,
  json: mockJson,
}));
const mockRes = { status: mockStatus };

describe("auth controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("login", () => {
    test("it to resolve with token and status code 200", async () => {
      const testPswrd = "testword";
      const testUser = {
        username: "tester",
        password: "testword",
      };
      jest.spyOn(User, "findByUsername").mockResolvedValue(new User(testUser));
      jest.spyOn(User.prototype, "getPassword").mockResolvedValue(testPswrd);
      jest.spyOn(bcryptjs, "compare").mockResolvedValueOnce(true);
      jest.spyOn(jwt, "sign").mockResolvedValue("testtoken");
      const mockReq = { body: testUser };
      await authController.login(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalled();
    });

    test("it responds with code 401 in case of unsuccessful token generation", async () => {
      const testPswrd = "testword";
      const testUser = {
        username: "tester",
        password: "testword",
      };
      jest.spyOn(User, "findByUsername").mockResolvedValue(new User(testUser));
      jest.spyOn(User.prototype, "getPassword").mockResolvedValue(testPswrd);
      jest.spyOn(bcryptjs, "compare").mockResolvedValueOnce(true);
      jest.spyOn(jwt, "sign").mockResolvedValue(null);
      const mockReq = { body: testUser };
      await authController.login(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(401);
    });

    test("it responds with code 401 in case of invalid token", async () => {
      const testUser = {
        username: "tester",
        password: "testword",
      };
      jest.spyOn(User, "findByUsername").mockResolvedValue(new User(testUser));
      jest.spyOn(bcryptjs, "compare").mockResolvedValueOnce(false);
      const mockReq = { body: testUser };
      await authController.login(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(401);
    });

    test("it responds with code 401 in case of no user", async () => {
      const testUser = {
        username: "tester",
        password: "testword",
      };
      jest.spyOn(User, "findByUsername").mockResolvedValue(null);
      const mockReq = { body: testUser };
      await authController.login(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(401);
    });
  });

  describe("register", () => {
    test("it returns success message with 201 status code", async () => {
      const testUser = {
        username: "tester",
        email: "test@test.com",
        password: "testword",
      };
      jest.spyOn(User, "create").mockResolvedValue("User created!");
      const mockReq = { body: testUser };
      await authController.register(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(201);
    });

    test("it responds with code 500 in case of error", async () => {
      const testUser = {
        username: "tester",
        email: "test@test.com",
        password: "testword",
      };
      jest.spyOn(User, "create").mockImplementation(() => {
        throw new Error();
      });
      const mockReq = { body: testUser };
      await authController.register(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(500);
    });
  });
});
