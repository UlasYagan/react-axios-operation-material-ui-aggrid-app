/**
 * Object null, empty and undefined control
 * @param obj 
 * @returns boolean
 */
export const isNil = (obj: any): boolean => {
    if (obj === undefined || obj === null || obj === "") {
        return true;
    }
    return false;
}

