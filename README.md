<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# LibraryMate

LibraryMate is a comprehensive Library Management System built for a well-renowned school. It enables efficient management of the school's book collection with secure user authentication, role-based access, and robust CRUD operations. Users can add, update, borrow, and return books with real-time updates and a responsive design that works seamlessly across all devices.

## Live Site URL

[LibraryMate Live Site](https://librarymate-549da.web.app/)

## Features

1. **User Authentication & Role Management**

   - Secure email/password and Google login.
   - Role-specific access, such as a "librarian" role for advanced book management.

2. **Book Borrowing System**

   - Real-time updates on book quantities.
   - Modal form for borrowing with user details and return date.
   - Restriction on borrowing more than 3 books at a time.

3. **Dynamic Book Management**
   - Comprehensive CRUD operations with toast notifications.
   - Category-based book views with detailed pages.
   - Switch between card view and table view, and filter available books.

## Technologies Used

- **Frontend**: React.js, TailwindCSS, React Rating, Swiper JS, React Hook Form
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase, JWT
- **Deployment**: Firebase (Client-side), Vercel (Server-side)
- **Other**: Axios, React Router, SweetAlert, Environment Variables
