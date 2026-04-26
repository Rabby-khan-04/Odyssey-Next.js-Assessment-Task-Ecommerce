# 🛍️ NextCart

NextCart is a modern ecommerce web application built with Next.js and Firebase Authentication. It provides a fast, responsive shopping experience with product browsing, authentication, and protected admin-style routes for managing items. Products are stored using localStorage for simplicity and fast development.

---

## 📌 Short Project Description

NextCart is a frontend ecommerce platform where users can browse products, view product details, and manage products through protected routes. It uses Firebase Authentication for user login/signup and localStorage for storing product data.

---

## ✨ Key Features

- 🛒 Product listing page
- 🔍 Individual product page (`/shop/[productId]`)
- ➕ Add product page (protected)
- 🗂️ Manage products page (protected)
- 🔐 Firebase authentication (sign in / sign up)
- 👤 Protected routes for authenticated users
- 💾 LocalStorage-based product storage
- 📱 Fully responsive design
- ⚡ Next.js App Router routing system
- 🎨 Tailwind CSS modern UI
- 🔔 Toast notifications for actions
- 🖼️ Optimized images using Next.js Image component

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/Rabby-khan-04/Odyssey-Next.js-Assessment-Task-Ecommerce
cd nextcart
```

### 2. Install dependencies

```bash
npm install
```

## 3. Setup Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_APIKEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTHDOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECTID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGEBUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APPID=your_app_id
```

## 4. Run the Development Server

```bash
npm run dev
```

App runs at:

```
http://localhost:3000
```

## 5. Build for Production

```bash
npm run build
npm start
```

## 🧭 Route Summary

| Route               | Description                      |
| ------------------- | -------------------------------- |
| `/`                 | Home page                        |
| `/about`            | About page                       |
| `/shop`             | Product listing page             |
| `/shop/[productId]` | Individual product page          |
| `/sale`             | Sale / promotional page          |
| `/sign-in`          | Login page                       |
| `/sign-up`          | Signup page                      |
| `/items/add`        | Add product page (protected)     |
| `/items/manage`     | Manage products page (protected) |
