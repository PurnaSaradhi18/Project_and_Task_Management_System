import { Router } from "express";

import { getUser, getUsers, postUser } from "../controllers/userController";
import { signup } from "../controllers/authController";

const router = Router();

router.get("/", getUsers);
router.post("/", postUser);
router.get("/:cognitoId", getUser);

router.post("/signup", signup);

export default router;
