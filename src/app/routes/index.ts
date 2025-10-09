import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.router";

import { NotificationsRoutes } from "../modules/notification/notification.route";
import { UploadDocumentRoutes } from "../modules/documents/documents.route";
import { CampusRoutes } from "../modules/campus/campus.route";
import { CourseRoutes } from "../modules/course/course.route";
import { CourseUnitRoutes } from "../modules/courseUnit/courseUnit.route";
import { CourseUnitMaterialRoutes } from "../modules/courseUnitMaterial/courseUnitMaterial.route";
import { EmailConfigRoutes } from "../modules/email-configs/email-configs.route";
import { SignatureRoutes } from "../modules/signature/signature.route";
import { EmailDraftRoutes } from "../modules/email-drafts/email-drafts.route";


const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },

  {
    path: "/notifications",
    route: NotificationsRoutes,
  },
  {
    path: "/documents",
    route: UploadDocumentRoutes,
  }, 
  {
    path: "/campuses",
    route: CampusRoutes,
  },
  {
    path: "/course",
    route: CourseRoutes,
  },
 {
    path: "/course-unit",
    route: CourseUnitRoutes,
  },
  {
    path: "/unit-material",
    route: CourseUnitMaterialRoutes,
  },
   {
    path: "/email-configs",
    route: EmailConfigRoutes,
  },
 
 {
    path: "/signature",
    route: SignatureRoutes,
  },
  {
    path: "/email-drafts",
    route: EmailDraftRoutes,
  },



];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
