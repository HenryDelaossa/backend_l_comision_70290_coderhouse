const { body, validationResult } = require("express-validator");
const { httpResponseError } = require("../helpers/http");

exports.validateResults = () => {
  return (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (error) {
      console.log(error.array());
      const errorMessage =
        `${error.array().at(0)?.msg}` || "error en validacion de campos";
      httpResponseError(res, error?.code, errorMessage);
    }
  };
};

/**
 *
 * @param {string} key
 * @param {string[]} bodyValues
 * @param {[[string, any]]} defaults
 * @example
 * pushBodyToRequest("producto",["title", "price", etc...], [["status", true],["thumbnails", ["path1", path2]]])
 * @returns
 */
exports.pushToRequest = (mainKey, bodyValues, defaults = []) => [
  body().custom((body, { req }) => {
    if (!mainKey) return false;

    try {
      let data = {};

      bodyValues.forEach((item) => {
        data[item] = body[item];
      });

      if (defaults && defaults.length) {
        defaults.forEach(([key, value]) => {
          data[key] = value;
        });
      }

      Object.assign(req, {
        [`_${mainKey}`]: data,
      });

      return true;
    } catch (error) {
      console.log({ errorrr: error.array() });
      const errorMessage =
        `${error.array().at(-1)?.msg}` || "pushBodyTorequest Error";
      throw new Error(errorMessage);
    }
  }),
];
