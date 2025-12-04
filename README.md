# 🍽️ Food Reservation App (MERN)

A full-stack reservation system built using **React (Vite)**, **Node.js**, **Express**, and **MongoDB Atlas**.  
Users can submit reservation details which are stored securely in the database, and they see a success page with automatic redirection.

---

## 🚀 Features

- 📝 Reservation form (FirstName, LastName, Email, Phone, Date, Time)
- 🌐 MongoDB Atlas database integration
- 🔗 Axios API communication between frontend & backend
- 🔄 Success page with countdown + redirect
- 🎨 Fully responsive UI
- ⚠️ Proper error handling + backend validation
- 🔐 CORS configured for secure cross-origin requests

---

## 🛠️ Tech Stack

### **Frontend**
- React (Vite)
- React Router DOM
- Axios
- CSS3

### **Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

---

## 📁 Folder Structure

project/
│── client/ # React frontend
│ ├── src/
│ ├── public/
│ └── vite.config.js
│
│── server/ # Node.js backend
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── config/
│ ├── server.js
│ └── .env
│── README.md


---

## 🔧 Environment Setup (MongoDB Atlas)

Create a `.env` file inside your **server** folder:

PORT = 4000 

FRONTEND_URL = http://localhost:5173

MONGO_URI = mongodb+srv://23amtics003_db_user:fi6Dn5hEn6jcD9rC@mycluster.bwchkk3.mongodb.net/?retryWrites=true



---

## 📦 Install Dependencies

### **Backend**
```bash
cd server
npm install
```
## **Frontend**
```
cd client
npm install
```

## ▶️ Run the Project

Start backend
```bash
cd server
npm start
```

Start frontend
```bash
cd client
npm run dev
```

##🌍 API Endpoint

POST /api/v1/reservation/send

Saves the reservation data to MongoDB Atlas.

Example body:

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "date": "2024-02-01",
  "time": "18:30",
  "phone": "9876543210"
}

🤝 Contributing
Feel free to fork, contribute, or suggest improvements!


📜 License
MIT License EOF

---


