import express from "express"
import isAuth from "../middleware/isAuth.js";
import { getCurrentuser } from "../controller/user.controller.js";

const userRouter=express.Router();
userRouter.get("/current-user",isAuth,getCurrentuser)

export default userRouter;