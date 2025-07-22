# 🛒 ShopEZ – One-Stop Shop for Online Purchases

A full-stack e-commerce web application that allows users to browse, search, and purchase products online. Includes user authentication, admin dashboard, flash sales, and more. Built for scalability and smooth user experience.

---

## 🚀 Features

* 👤 User Registration & Login
* 🛍️ Product Browsing & Search
* 🛒 Shopping Cart & Secure Checkout
* 🧑‍💼 Admin Dashboard for Managing Products, Users & Orders
* 🔥 Flash Sales & Promotional Banners
* 📱 Fully Responsive Design

---

## 🛠️ Tech Stack

* **Frontend**: React, HTML, CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Authentication**: JWT
* **Deployment**: Vercel / Netlify (frontend), Heroku / Render (backend)

---

## 📁 Project Structure

```
ShopEZ/
├── client/    # React frontend
└── server/    # Node.js/Express backend
```

---

## ⚙️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Hari-1718/ShopEZ-One-Stop-Shop-for-Online-Purchases.git
   cd ShopEZ-One-Stop-Shop-for-Online-Purchases
   ```

2. **Install dependencies:**

   * For the frontend:

     ```bash
     cd client
     npm install
     ```

   * For the backend:

     ```bash
     cd ../server
     npm install
     ```

3. **Set up environment variables:**

   Create a `.env` file in the `server/` directory and add required values:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Run development servers:**

   * Backend server:

     ```bash
     cd server
     npm start
     ```

   * Frontend React app:

     ```bash
     cd ../client
     npm start
     ```

   * Frontend: [http://localhost:3000](http://localhost:3000)

   * Backend: [http://localhost:5000](http://localhost:5000)

---

## 🧪 Testing

> Testing features can be added using tools like Jest or Postman for API testing. *(Optional section – add details if applicable)*

---

## 🌐 Deployment

* Deploy frontend using **Vercel**, **Netlify**, etc.
* Deploy backend using **Render**, **Heroku**, etc.
* ⚠️ Make sure to update production API URLs in the frontend code.

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repository and submit a pull request. For major changes, open an issue first.

---

## 📄 License

This project is licensed under the **MIT License**.

---

