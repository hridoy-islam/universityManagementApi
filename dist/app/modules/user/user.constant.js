"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSearchableFields = exports.UserStatus = exports.USER_ROLE = void 0;
exports.USER_ROLE = {
    user: "user",
    admin: "admin",
    staff: "staff",
    verifier: "verifier",
    signatory: "signatory",
    collegeAdmin: "collegeAdmin",
    campusAdmin: "campusAdmin"
};
exports.UserStatus = ["block", "active"];
exports.UserSearchableFields = ["email", "name", "role"];
