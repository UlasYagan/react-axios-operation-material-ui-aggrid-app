import { dtoUser } from "../common/dto";
import {
  add,
  edit,
  get,
  getById,
  remove
} from "./api";

/**
 * Get user detail
 * @param id 
 * @returns dtoUser
 */
export const getUser = async (id: number): Promise<dtoUser> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result: dtoUser = await getById<dtoUser>(id);
      return resolve(result);
    } catch (err) {
      return reject(err);
    }
  });
}

/**
 * Get all users
 * @returns dtoUser[]
 */
export const getUsers = async (): Promise<dtoUser[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result: dtoUser[] = await get<dtoUser>();
      return resolve(result);
    } catch (err) {
      return reject(err);
    }
  });
}

/**
 * Add new user
 * @param entity: dtoUser
 * @returns dtoUser
 */
export const addUser = async (entity: dtoUser): Promise<dtoUser> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result: dtoUser = await add<dtoUser>(entity);
      return resolve(result);
    } catch (err) {
      return reject(err);
    }
  });
}

/**
 * Edit User
 * @param id 
 * @param entity 
 * @returns dtoUser
 */
export const editUser = async (id: number, entity: dtoUser): Promise<dtoUser> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result: dtoUser = await edit<dtoUser>(id, entity);
      return resolve(result);
    } catch (err) {
      return reject(err);
    }
  });
}

/**
 * Delete User
 * @param id 
 * @returns dtoUser
 */
export const removeUser = async (id: number): Promise<dtoUser> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result: dtoUser = await remove<dtoUser>(id);
      return resolve(result);
    } catch (err) {
      return reject(err);
    }
  });
}


