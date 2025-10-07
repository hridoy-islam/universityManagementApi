/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import auth from "../../middlewares/auth";
import { upload } from "../../utils/multer";
import { CampusControllers } from "./campus.controller";
// import auth from '../../middlewares/auth';

const router = express.Router();
router.get(
  "/",
  // auth("admin", "agent", "staff"),
  CampusControllers.getAllCampus
);
router.post(
  "/",
  // auth("admin", "agent", "staff"),
  CampusControllers.CampusCreate
);
router.get(
  "/:id",
  // auth("admin", "agent", "staff"),
  CampusControllers.getSingleCampus
);

router.patch(
  "/:id",
  // auth("admin", "agent", "staff"),
  CampusControllers.updateCampus
);


export const CampusRoutes = router;
