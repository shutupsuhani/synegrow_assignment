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

### Set up the environment

Create a .env file in the root directory:

DATABASE_URL="prisma+postgres://localhost:51213/?api_key=eyJkYXRhYmFzZVVybCI6InBvc3RncmVzOi8vcG9zdGdyZXM6cG9zdGdyZXNAbG9jYWxob3N0OjUxMjE0L3RlbXBsYXRlMT9zc2xtb2RlPWRpc2FibGUmY29ubmVjdGlvbl9saW1pdD0xJmNvbm5lY3RfdGltZW91dD0wJm1heF9pZGxlX2Nvbm5lY3Rpb25fbGlmZXRpbWU9MCZwb29sX3RpbWVvdXQ9MCZzaW5nbGVfdXNlX2Nvbm5lY3Rpb25zPXRydWUmc29ja2V0X3RpbWVvdXQ9MCIsIm5hbWUiOiJkZWZhdWx0Iiwic2hhZG93RGF0YWJhc2VVcmwiOiJwb3N0Z3JlczovL3Bvc3RncmVzOnBvc3RncmVzQGxvY2FsaG9zdDo1MTIxNS90ZW1wbGF0ZTE_c3NsbW9kZT1kaXNhYmxlJmNvbm5lY3Rpb25fbGltaXQ9MSZjb25uZWN0X3RpbWVvdXQ9MCZtYXhfaWRsZV9jb25uZWN0aW9uX2xpZmV0aW1lPTAmcG9vbF90aW1lb3V0PTAmc2luZ2xlX3VzZV9jb25uZWN0aW9ucz10cnVlJnNvY2tldF90aW1lb3V0PTAifQ"

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







