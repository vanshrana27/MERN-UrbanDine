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

MONGO_URI=your_mongodb_atlas_connection_string PORT=4000


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

MIT License

Copyright (c) 2024 Vansh Rana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---




