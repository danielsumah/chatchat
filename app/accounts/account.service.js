const accountRepo = require("./account.repository.js");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const privateKey = fs.readFileSync("private-key.pem");

class AccountService {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }
  async create({ firstName, lastName, email, password }) {
    const account = await this.findByEmail(email);
    if (account) {
      throw new Error("Account already exist");
    }
    //TODO:hash password before saving in db
    return await this.accountRepository.create({
      firstName,
      lastName,
      email,
      password,
    });
  }

  async login({ email, password }) {
    const account = await this.findByEmail(email);
    if (!account) {
      throw new Error("Account does not exist");
    }

    // compare password and sign token late
    // const token = jwt.sign({ email, password }, privateKey, {
    //   algorithm: "RS256",
    // });
    if (password !== account.password) {
      throw new Error("Your password is incorrect ");
    }
    return account;
  }

  async findByEmail(email) {
    if (!email) {
      throw new Error("Email must be provided");
    }
    return await this.accountRepository.findByEmail(email);
  }

  async findByID(id) {
    if (!id) {
      throw new Error("Email must be provided");
    }
    return await this.accountRepository.findByID(email);
  }

  async update(id, data) {
    const account = await this.findByID(id);
    if (!account) {
      throw new Error("Account does not exist");
    }
    return await this.accountRepository.update(id, data);
  }

  async delete(id, data) {
    const account = await this.findByID(id);
    if (!account) {
      throw new Error("Account does not exist");
    }
    return await this.accountRepository.update(id, data);
  }
}

module.exports = new AccountService(accountRepo);
