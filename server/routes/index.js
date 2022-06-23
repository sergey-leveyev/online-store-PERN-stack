const Router = require("express");
const router = new Router();

const deviceRouter = require("./deviceRouter");
const userRouter = require("./userRouter");
const brandRouter = require("./brandRouter");
const typeRouter = require("./typeRouter");

router.use("/user", userRouter);
router.use("/device", deviceRouter);
router.use("/brand", brandRouter);
router.use("/type", typeRouter);

module.exports = router;
