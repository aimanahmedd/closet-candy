# Closet Candy - Virtual Closet Buddy

A full-stack web application for managing your personal clothing inventory. Built with the MERN stack (MongoDB, Express, React, Node.js).

## Project Status: In Progress

This project is actively being developed. Current features are functional, with additional features and improvements planned.

## Current Features

- **Clothing Item Management**: Add, view, update, and delete clothing items
- **Image Upload**: Upload and preview clothing images with base64 encoding
- **Database Storage**: Persistent data storage with MongoDB
- **RESTful API**: Complete backend API with proper error handling
- **Responsive Design**: Clean, user-friendly interface

## Planned Features

- [ ] Outfit combinations
- [ ] Advanced styling and animations
- [ ] User authentication and profiles

## Tech Stack

- Frontend: React.js, React Router
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose ODM
- Image Handling: FileReader API, Base64 encoding

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/aimanahmedd/closet-candy.git
   cd fun-closet-app
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   Create a `.env` file in the backend directory:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=4000
   ```

5. **Start the development servers**

   ```bash
   # Start backend (from backend directory)
   npm run dev

   # Start frontend (from frontend directory, in new terminal)
   npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000

## API Endpoints

- `GET /api/outfits` - Get all clothing items
- `POST /api/outfits` - Create new clothing item
- `GET /api/outfits/:id` - Get single clothing item
- `PATCH /api/outfits/:id` - Update clothing item
- `DELETE /api/outfits/:id` - Delete clothing item

## Inspiration

Made by Aiman Ahmed and inspired by my overfilling closet and constant thinking for planning different outfits to wear!

**Note**: This project is actively being developed. New features and improvements are being added regularly.
