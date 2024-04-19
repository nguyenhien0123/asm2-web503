import Joi from "joi";

export const userValid = Joi.object({
  email: Joi.string().required().email().empty(),
  password: Joi.string().required().min(6).empty(),
});
