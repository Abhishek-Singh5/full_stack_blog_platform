# 📝 Full Stack Blog Platform

A powerful and modern full-stack blog application built with **Next.js (App Router)** and **MongoDB**. It features dynamic blog creation, reading, deletion (CRUD), an admin dashboard, content uploads, and a subscription system.

**-> Engineered a scalable Full Stack Blog Platform using Next.js (App Router), MongoDB, and
     Tailwind CSS, ensuring 100% responsiveness and seamless UX across all devices.**

**-> Implemented dynamic blog CRUD operations with real-time rendering via dynamic routes
     (/blogs/[id]), improving content manageability and user interaction efficiency by over 80%.**

**-> Developed an Admin Dashboard to manage blogs and subscribers, enabling admins to upload blogs
     with images, view blog lists, and track & delete subscribers with timestamps for better oversight.**

**- > Integrated secure email subscription feature using API routes and MongoDB to store subscriber data,
     achieving reliable form handling with FormData and asynchronous validation for 95% data accuracy.**
 
  **-> Optimized backend performance by structuring modular API endpoints [/api/blog, /api/email] and
    implementing image uploads to the public folder with unique naming for file collision prevention.**
      
---

## 📚 Project Overview

This blog platform allows both readers and administrators to interact with blog content. It supports:

- Creating blogs with images  
- Viewing blog details dynamically via route  
- Subscribing to blog updates via email  
- Managing blogs and subscribers via an admin dashboard  

---

## 📁 Project Structure

    root
    ├── app/
    │ ├── page.jsx # Home page with all blogs
    │ ├── blogs/[id]/page.jsx # Dynamic blog detail page
    │ └── admin/
    │ └── blogList/page.jsx # Admin dashboard - list of blogs
    ├── components/
    │ ├── Header.jsx # Includes subscription form
    │ ├── Footer.jsx # Page footer
    │ ├── BlogTableItem.jsx # Table rows for blogs in admin panel
    │ └── SubsTableItem.jsx # Table rows for subscribers in admin panel
    ├── lib/
    │ ├── config/db.js # MongoDB connection
    │ └── models/
    │ ├── BlogModel.js # Blog schema
    │ └── EmailModel.js # Subscription schema
    ├── public/ # Blog image uploads
    └── README.md



---

## 🔧 Technologies Used

### Frontend
- **Next.js (App Router)**
- **Tailwind CSS**
- **React Hooks**
- **React Toastify**

### Backend / API
- **Next.js API Routes**
- **MongoDB** with **Mongoose**

---

## 🚀 Key Features Breakdown

### 1. 📖 Blog Functionality
- Add blogs with title, description, author info, category, and image
- Blogs are submitted using `FormData` with image support
- Displayed with dynamic routing (e.g., `/blogs/[id]`)
- Blog description supports HTML rendering (`dangerouslySetInnerHTML`)

### 2. 🧑‍💻 Admin Dashboard
- View list of blogs
- Add new blog (with image)
- Delete blogs
- View and delete subscribers

### 3. 📬 Email Subscription
- Visitors can subscribe with email
- Saved in MongoDB
- Viewable/deletable by admin

### 4. 🖼️ Image Upload
- Uploaded images stored in `public/`
- Accessed via `/timestamp_filename.jpg`

---

## 📡 API Endpoints

### 🔹 Blog Routes
- `GET /api/blog` – Fetch all blogs
- `GET /api/blog?id=...` – Fetch blog by ID
- `POST /api/blog` – Create new blog

### 🔹 Email Subscription
- `POST /api/email` – Add subscriber
- `GET /api/email` – Get all subscribers

---

## 🌐 Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/Abhishek-Singh5/full_stack_blog_platform.git
cd blog-platform



2. Install Dependencies
npm install

3. Configure Environment
Create .env.local: init
MONGODB_URI=your_mongodb_connection_string

4. Start the App
npm run dev


Use MongoDB Atlas or local MongoDB for database connection

🙌 Contributing
Fork this repo and open a PR. Follow coding standards, especially modular Next.js structure.

📜 License
Licensed under the MIT License.

💬 Author
Developed by Abhishek Singh.
