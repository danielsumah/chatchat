const accountService = require("./account.service");
class AccountController {
  constructor(accountService) {
    this.accountService = accountService;
  }
  create(req, res) {
    try {
      return this.accountService.create(req.body);
    } catch (error) {
      res.status(400).json({
        code: "",
        message: error.message || error,
      });
    }
  }
}

module.exports = new AccountController(accountService);
