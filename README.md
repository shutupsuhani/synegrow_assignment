# 📌 Synegrow Task Management API

A simple task management API built with **Node.js**, **Express**, **TypeScript**, **PostgreSQL**, and **Prisma ORM**. This API supports task creation, retrieval (with optional filtering), updating, and deletion.

---

## 🚀 Features

- ✅ Create a new task
- 📋 Fetch all tasks
- 🔍 Filter tasks by `title` or `status`
- 📋 Fetch a task by Id
- ✏️ Update an existing task
- ❌ Delete a task

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Language:** TypeScript
- **Database:** SQLite
- **ORM:** Prisma
- **Runtime:** ts-node-dev
- **Testing Tool:** Postman

---

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/shutupsuhani/synegrow_assignment.git

cd synegrow_assignment 

### 2. Install dependencies

npm install

### 3. Set up Prisma

npx prisma generate

npx prisma migrate dev --name init

### 4. Start the Development Server
npx ts-node index.ts

Server will run at:
📍 http://localhost:5000

### API End Points

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| GET    | `/tasks/getall`      |   Get all tasks       |
| GET    | `/tasks/get/:id`     | Get task by task id   |
| POST   | `/tasks/create`      | Create a new task     |
| PUT    | `/tasks/update/:id`  | Update a task by ID   |
| DELETE | `/tasks/delete/:id`  | Delete a task by ID   |


🔹 GET
Fetch all tasks.

Request:

GET     /tasks/getall

Response:

[

    {
            
            "id": "95206e9d-fedf-4483-84f3-7dae2f2bbf48",
            "title": "revise dsa",
            "description": "dsa is must",
            "status": "COMPLETED",
            "createdAt": "2025-07-25T15:33:16.640Z",
            "updatedAt": "2025-07-25T15:33:16.640Z"
     },
        
    {
           
            "id": "a105ef2a-0717-442d-9ac1-fd66f02c9e20",
            "title": "Be prepared For Interview",
            "description": "Interview Prep for Goldman Sach for ASE",
            "status": "PENDING",
            "createdAt": "2025-07-23T17:51:59.216Z",
            "updatedAt": "2025-07-23T17:51:59.216Z"
     },
       
      {
           
            "id": "d0186ac2-40b5-4613-840c-54f97c0e8ad3",
            "title": "Synegrow Assignment",
            "description": "Complete all tasks and validate in Postman",
            "status": "IN_PROGRESS",
            "createdAt": "2025-07-23T17:51:08.739Z",
            "updatedAt": "2025-07-25T09:41:01.664Z"
      }
  
]


🔹 GET /tasks
Fetch a task by id.

Request:

GET     /tasks/get/a105ef2a-0717-442d-9ac1-fd66f02c9e20 

Response:

{
    
    "id": "a105ef2a-0717-442d-9ac1-fd66f02c9e20",
    "title": "Be prepared For Interview",
    "description": "Interview Prep for Goldman Sach for ASE",
    "status": "PENDING",
    "createdAt": "2025-07-23T17:51:59.216Z",
    "updatedAt": "2025-07-23T17:51:59.216Z"
}



🔹 POST /tasks
Create a new task.

Request:

POST   /tasks/create

Content-Type: application/json

{
  
   "title": "revise dsa",
   
  "description": "dsa is must",
  
  "status": "COMPLETED"

}

Response:

{
   
    "id": "95206e9d-fedf-4483-84f3-7dae2f2bbf48",
    "title": "revise dsa",
    "description": "dsa is must",
    "status": "COMPLETED",
    "createdAt": "2025-07-25T15:33:16.640Z",
    "updatedAt": "2025-07-25T15:33:16.640Z"
}


🔹 PUT /tasks/update/:id

Update a task's title or completion status.

Request:

PUT /tasks/update/d0186ac2-40b5-4613-840c-54f97c0e8ad3

Content-Type: application/json

{
   
    "title": "Synegrow Assignment"
}

Response:

{
    
    "id": "d0186ac2-40b5-4613-840c-54f97c0e8ad3",
    "title": "Synegrow Assignment",
    "description": "Complete all tasks and validate in Postman",
    "status": "IN_PROGRESS",
    "createdAt": "2025-07-23T17:51:08.739Z",
    "updatedAt": "2025-07-25T15:51:10.653Z"
}

🔹 DELETE /tasks/delete/:id

Delete a task.

Request:


DELETE /tasks/delete/d0186ac2-40b5-4613-840c-54f97c0e8ad3

Response:


{

  "message": "Task deleted successfully"

}



