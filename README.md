
# 🚀 MERN To-Do App  

A simple **To-Do application** built with the **MERN (MongoDB, Express, React, Node.js) stack**.  
The app supports **user authentication with sessions** and allows users to **create, edit, and delete** their to-dos. 

---

## ⚡ Installation Guide  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/orenlan1/todo-app.git
cd todo-app
```

### 2️⃣ Install Dependencies  
Navigate to both the **server** and **client** folders and install dependencies.

#### 📌 Install Server Dependencies  
```sh
cd server
npm install
```

#### 📌 Install Client Dependencies  
```sh
cd ../client
npm install
```

---

## ⚙️ Configuration  

### 3️⃣ Set Up MongoDB  
This project uses **MongoDB** as the database. You can either:  
- Use a **local MongoDB** instance.  
- Use **MongoDB Atlas (cloud-based)** *(recommended)*.  

#### 👉 If Using MongoDB Atlas  
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas/database) and **create a free cluster**.  
2. Navigate to **Database > Connect > Connect Your Application**.  
3. Copy the **MongoDB connection string**.  

---

### 4️⃣ Create a `.env` File  
Inside the `server` folder, create a `.env` file:  

Add the following variables:  
```ini
MONGO_CONNECTION_STRING=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```
> **🔹 Note:** Replace `your_mongodb_connection_string` and `your_secret_key` with actual values.  

---

## 🚀 Running the App  

### 5️⃣ Start the Backend (Server)  
```sh
cd server
npm start
```
Your **server** should now be running at: `http://localhost:3000`.  

### 6️⃣ Start the Frontend (React App)  
```sh
cd client
npm run dev
```
Your **React app** should now be running at: `http://localhost:5173`.  

---
