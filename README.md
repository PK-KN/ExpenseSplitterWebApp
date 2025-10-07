- **Project Title:** Expense Splitter for Roommates
  
- **Description:** A web app to track and split shared expenses among roommates with real-time balance updates.
  
- **Features:** Auth, group creation, expense logging, split logic, settlements.
  
- **Tech Stack:** React, Express, MongoDB, JWT.
  
- **Setup Instructions:** Clone, install dependencies, set up .env, run client and server.

  ________________________________________

**Local Setup Guide — Expense Splitter for Roommates**

Follow these steps to run the project locally and access the full-stack web app.
________________________________________

1. Clone the Repository
   
git clone (https://github.com/PK-KN/ExpenseSplitterWebApp)

cd expense-splitter

•	This downloads the project to your local machine.
________________________________________
2. Start the Backend (Express + MongoDB)

cd server

npm install

•	Create a .env file inside the server/ folder with the following:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/expense-splitter

JWT_SECRET=yourSecretKey123

•	If you're using MongoDB Atlas, replace MONGO_URI with your cluster connection string.

•	Start the backend server:

npm run dev

•	You should see:

MongoDB connected: 127.0.0.1

Server running on port 5000

•	Backend is now running at: http://localhost:5000
________________________________________
3. Start the Frontend (React)

Open a new terminal tab or window:

cd client

npm install

npm start

•	Your app should open automatically at: http://localhost:3000
________________________________________
4. Test the App

•	Login Page: / → Login or Register a user

•	Dashboard: /dashboard → View your groups

•	Group Page: /group/:id → View and add expenses

•	Add a group via dashboard or manually via API

•	Add expenses to see the split logic in action
________________________________________
5. Notes
   
•	Ensure MongoDB is running before starting the backend

•	Backend must run on PORT=5000 to match frontend API calls (update src/utils/api.js if needed)

•	JWT token is stored in localStorage after login for authenticated API requests

•	If ports conflict, update .env (backend) and package.json (frontend)

•	Use VS Code terminal split or tools like concurrently to run both servers easily

