import Joi from "joi";

export const bookValid = Joi.object({
  name: Joi.string().required().min(6).max(255).empty(),
  price: Joi.number().required().min(0).empty(),
  description: Joi.string().required().empty(),
  image: Joi.string().required().empty(),
});
