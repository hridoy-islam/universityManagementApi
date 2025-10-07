import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";

import AppError from "../../errors/AppError";

import { CampusSearchableFields } from "./campus.constant";
import { TCampus } from "./campus.interface";
import Campus from "./campus.model";



const createCampusIntoDB = async (payload: TCampus) => {
  try {
    console.log(payload)
    const result = await Campus.create(payload);
    return result;
  } catch (error: any) {
    console.error("Error in createCampusIntoDB:", error);

    // Throw the original error or wrap it with additional context
    if (error instanceof AppError) {
      throw error;
    }

    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, error.message || "Failed to create Category");
  }
};

const getAllCampusFromDB = async (query: Record<string, unknown>) => {
  const CampusQuery = new QueryBuilder(Campus.find(), query)
    .search(CampusSearchableFields)
    .filter(query)
    .sort()
    .paginate()
    .fields();

  const meta = await CampusQuery.countTotal();
  const result = await CampusQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleCampusFromDB = async (id: string) => {
  const result = await Campus.findById(id);
  return result;
};

const updateCampusIntoDB = async (id: string, payload: Partial<TCampus>) => {
  const campus = await Campus.findById(id);

  if (!campus) {
    throw new AppError(httpStatus.NOT_FOUND, "Campus not found");
  }

  // Toggle `isDeleted` status for the selected user only
  // const newStatus = !user.isDeleted;

  // // Check if the user is a company, but only update the selected user
  // if (user.role === "company") {
  //   payload.isDeleted = newStatus;
  // }

  // Update only the selected user
  const result = await Campus.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};






export const CampusServices = {
  getAllCampusFromDB,
  getSingleCampusFromDB,
  updateCampusIntoDB,
  createCampusIntoDB
  

};
