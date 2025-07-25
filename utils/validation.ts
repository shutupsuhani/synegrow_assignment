//validation.ts

import Joi from 'joi';

export const taskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().valid('PENDING', 'IN_PROGRESS', 'COMPLETED').default('PENDING')
});

export const updateTaskSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  status: Joi.string().valid('PENDING', 'IN_PROGRESS', 'COMPLETED').optional()
});