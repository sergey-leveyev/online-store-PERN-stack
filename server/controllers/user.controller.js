const ApiError = require("../error/ApiError");

class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("no id u fucking fuck"));
      return res.json({ message: "no id" });
    }
    // res.json(id);
    res.json({ message: "tsetgs" });
  }
}

module.exports = new UserController();
