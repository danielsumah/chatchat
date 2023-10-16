const accountRepo = require("./account.repository.js");
class AccountService {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }
  async create({ firstName, lastName, email, password }) {
    const account = await this.findByEmail(email);
    if (account) {
      throw new Error("Account already exist");
    }
    return await this.accountRepository.create({
      firstName,
      lastName,
      email,
      password,
    });
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

modules.exports = new AccountService(accountRepo);
