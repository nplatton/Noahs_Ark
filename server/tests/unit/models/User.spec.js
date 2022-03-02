const User = require("../../../models/User");

const pg = require("pg");
jest.mock("pg");

const db = require("../../../dbConfig/init");

describe("User model", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("findByUsername", () => {
    test("it resolves with user on successful db query", async () => {
      const testUser = {
        id: 1,
        username: "tester",
        email: "test@test.com",
      };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [testUser] });
      const result = await User.findByUsername("tester");
      expect(result).toBeInstanceOf(User);
      expect({ ...result }).toStrictEqual({
        ...testUser,
        passwordDigest: undefined,
      });
    });

    test("it throws an error if no user is found", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] });
      await expect(User.findByUsername("tester")).rejects.toThrow();
    });
  });

  describe("findByEmail", () => {
    test("it resolves with user on successful db query", async () => {
      const testUser = {
        id: 1,
        username: "tester",
        email: "test@test.com",
      };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [testUser] });
      const result = await User.findByEmail("test@test.com");
      expect(result).toBeInstanceOf(User);
      expect({ ...result }).toStrictEqual({
        ...testUser,
        passwordDigest: undefined,
      });
    });

    test("it throws an error if no user is found", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] });
      await expect(User.findByEmail("test@test.com")).rejects.toThrow();
    });
  });

  describe("create", () => {
    test("it resolves with message on successful db query", async () => {
      const testUser = {
        id: 1,
        username: "tester",
        email: "test@test.com",
        password: "testword",
      };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [testUser] });
      const result = await User.create(testUser);
      expect(result).toMatch(/user created/i);
    });
  });

  describe("getPassword", () => {
    test("it returns user's password on successful db query", async () => {
      const testPswrd = "testword";
      const testUser = new User({
        id: 1,
        username: "tester",
        email: "test@test.com",
      });
      jest
        .spyOn(db, "query")
        .mockResolvedValueOnce({ rows: [{ password_digest: testPswrd }] });
      const result = await testUser.getPassword();
      expect(result).toStrictEqual(testPswrd);
    });
  });

  describe("addPassword", () => {
    test("it returns message on successful db query", async () => {
      const testPswrd = "testword";
      const testUser = new User({
        id: 1,
        username: "tester",
        email: "test@test.com",
      });
      const result = await testUser.addPassword(testPswrd);
      expect(result).toMatch(/password added/i);
    });
  });
});
