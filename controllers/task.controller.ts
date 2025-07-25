// task.controller.ts

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new task
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        status: status || 'PENDING',
      },
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task', error });
  }
};

// Get all tasks with optional filtering and pagination
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const { status, title, page = '1', limit = '10' } = req.query;

    const where: any = {};
    if (status) where.status = status;
    if (title) where.title = { contains: String(title), mode: 'insensitive' };

    const tasks = await prisma.task.findMany({
      where,
      skip: (parseInt(page as string) - 1) * parseInt(limit as string),
      take: parseInt(limit as string),
      orderBy: { createdAt: 'desc' },
    });

    const total = await prisma.task.count({ where });

    res.json({ total, tasks });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tasks', error });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;  // Extracting the task ID from the route parameters

    const task = await prisma.task.findUnique({  // find the task by id 
      where: {
        id,
      },
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' }); // if task not found
    }

    res.status(200).json(task);  // return task
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' }); //else return error
  }
};

// Update a task
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;   // Extracting the task ID from the route parameters
    const { title, description, status } = req.body;  // Extracting the content from the body 

    const existingTask = await prisma.task.findUnique({
      where: { id },   // find the task by id
    });

    if (!existingTask) {
      return res.status(404).json({ message: 'Task not found' }); // if task is not found
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data: {        //updating the task
        ...(title && { title }),
        ...(description && { description }),
        ...(status && { status }),
      },
    });

    res.json(updatedTask); //return the task
  } catch (error) {
    console.error('Update Task Error:', error);  //else return the error
    res.status(500).json({ message: 'Failed to update task', error });
  }
};

// Delete a task by using id of task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    await prisma.task.delete({
      where: { id: req.params.id },   // Extracting the task ID from the route parameters
    });

    res.status(204).send(); //it sends a 204 No Content response, which basically means the request was successful but there’s nothing to send back.
  } catch (error) {
    res.status(404).json({ message: 'Task not found or failed to delete', error });
  }
};
