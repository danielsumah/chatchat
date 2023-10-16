const User = require("../database/models");

const database = User;
class AccountRepository {
  async create(data) {
    return await database.create(data);
  }

  async findByID(id) {
    return await database.findByPk(id);
  }

  async findByEmail(email) {
    return await database.findOne({ where: { email: email } });
  }

  async update(id, data) {
    return await database.update({ where: { id }, data });
  }
}

module.exports = new AccountRepository();
