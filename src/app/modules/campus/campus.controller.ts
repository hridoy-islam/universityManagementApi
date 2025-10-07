import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { CampusServices } from "./campus.service";



const CampusCreate = catchAsync(async (req, res) => {
  const result = await CampusServices.createCampusIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Campus created successfully",
    data: result,
  });
});

const getAllCampus: RequestHandler = catchAsync(async (req, res) => {
  const result = await CampusServices.getAllCampusFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Campus retrived succesfully",
    data: result,
  });
});
const getSingleCampus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CampusServices.getSingleCampusFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Campus is retrieved succesfully",
    data: result,
  });
});

const updateCampus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CampusServices.updateCampusIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Campus is updated succesfully",
    data: result,
  });
});




export const CampusControllers = {
  getAllCampus,
  getSingleCampus,
  updateCampus,
  CampusCreate
};
