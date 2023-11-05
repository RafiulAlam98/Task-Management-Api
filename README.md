# Task Management App

### GitHub link: https://github.com/RafiulAlam98/Task-Management-Api

### All Routes for Task Management App

### Live Link: https://task-management-api-sigma.vercel.app

# Application Routes:

### Sample User Sign Up json type
```
{
    "name":"abc",
    "email":"abc@def.com",
    "password":"hello1234",
    "phoneNo":"0171045693",
    "photo":"photo"
}
```

### User
- https://task-management-api-sigma.vercel.app/api/v1/user/signup [user sign up] (POST)
- https://task-management-api-sigma.vercel.app/auth/login [login user] (POST)

### Task
- https://task-management-api-sigma.vercel.app/api/v1/task (post)[add task]
- https://task-management-api-sigma.vercel.app/api/v1/task (get)[get all task]
- https://task-management-api-sigma.vercel.app/api/v1/task/taskId (get)[get single task ]
- https://task-management-api-sigma.vercel.app/api/v1/task/taskId [patch]
- https://task-management-api-sigma.vercel.app/api/v1/task/taskId [delete]

### Sample task Data for create a task
```
{
  "title": "Complete Project Presentation",
  "duration": 120,
  "project": "Quarterly Review",
  "taskDate": "2023-11-10",
  "description": "Prepare and deliver a presentation for the quarterly review meeting.",
  "priority": "1st Priority",
  "status": false,
  "employee":"abc@def.com"
}
```
