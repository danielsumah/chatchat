const accountService = require("./account.service");
class AccountController {
  constructor(accountService) {
    this.accountService = accountService;
  }
  async create(req, res) {
    try {
      const user = await this.accountService.create(req.body);
      res.status(201).json({
        message: "new user created",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error.message || error,
      });
    }
  }
  async login(req, res) {
    try {
      const userDetails = await this.accountService.login(req.body);
      res.status(200).json({
        message: "Login successful",
        data: userDetails,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error.message || error,
      });
    }
  }
}

module.exports = new AccountController(accountService);
