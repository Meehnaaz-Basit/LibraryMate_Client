<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# LibraryMate

The Library Management System is built to efficiently manage book collection. It features secure user authentication, role-based access, and robust CRUD operations for book management. Users can add, update, borrow, and return books, with real-time updates and responsive design across devices.

## Live Site URL

[LibraryMate Live Site](https://librarymate-549da.web.app/)

## Features

1. **User Authentication & Role Management**

   - Secure email/password and Google login.

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

## If you want to clone

1. **Clone the repository**:

** Download the repository **

-**OR**: Clone the repository

```sh
git clone https://github.com/Meehnaaz-Basit/LibraryMate_Client.git
cd LibraryMate
```

2. ** On terminal write **

- cd LibraryMate
- npm install

3. ** Create an `.env.local` file in the root directory and add the codes: **

```sh

VITE_APIKEY=####
VITE_AUTHDOMAIN=####
VITE_PROJECTID=####
VITE_STORAGEBUCKET=####
VITE_MESSAGINGSENDERID=####
VITE_APPID=####

```

- Note: replace the `#` with your firebase auth configuration

4. ** Clone the server side of this project **

- You will get it here : `https://github.com/Meehnaaz-Basit/LibraryMate_Server`

1.  - clone this
2.  - npm install
3.  - Make an `.env` file in the root directory
4.  - Replace the `#` below code with your MongoDB server User name and password

```sh
DB_USER=#
DB_PASS=#
```
