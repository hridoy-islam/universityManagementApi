"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
// import auth from '../../middlewares/auth';
const router = express_1.default.Router();
router.get("/", 
// auth("admin",  "user", "student","applicant"),
user_controller_1.UserControllers.getAllUser);
router.get("/:id", 
// auth("admin",  "user", "student","applicant"),
user_controller_1.UserControllers.getSingleUser);
router.patch("/:id", 
// auth("admin",  "user", "student","applicant"),
user_controller_1.UserControllers.updateUser);
exports.UserRoutes = router;
