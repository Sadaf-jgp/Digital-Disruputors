# Unified Campus Portal

A comprehensive web platform integrating academic and administrative services for students and faculty.

## Features

- **Student & Faculty Dashboards**: Role-based access to personalized dashboards.
- **Attendance Tracking**: Faculty can mark attendance, students can view their records.
- **Assignment Submission**: Students submit assignments, faculty create and grade them.
- **Notices & Announcements**: Faculty post notices targeted to specific groups.
- **Result Management**: Faculty enter results, students view their grades.

## Tech Stack

- **Backend**: Node.js, Express, MongoDB, Socket.io
- **Frontend**: React, React Router, Axios
- **ML Service**: Python (Flask, for future analytics)

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud instance)
- Python 3.7+ (for ML service)

**Note**: If npm commands fail due to PowerShell execution policy, run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` in PowerShell as admin.

### 1. Backend Setup
```bash
cd backend
npm install
# Create .env file with:
# MONGO_URI=mongodb://localhost:27017/campus-portal
# JWT_SECRET=your_super_secret_jwt_key_here
npm start
```
Server runs on http://localhost:5000

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```
App runs on http://localhost:3000

### 3. ML Service Setup (Optional)
```bash
cd ml-service
pip install -r requirements.txt
python app.py
```
Service runs on http://localhost:5001

### 4. Database
- Start MongoDB locally or use a cloud service like MongoDB Atlas
- Update MONGO_URI in backend/.env accordingly

## API Endpoints

- **Auth**: POST /api/auth/register, POST /api/auth/login
- **Users**: GET /api/users (faculty only)
- **Attendance**: POST /api/attendance (faculty), GET /api/attendance/student/:id
- **Assignments**: POST /api/assignments (faculty), GET /api/assignments, POST /:id/submit (student), PUT /:id/grade/:studentId (faculty)
- **Notices**: POST /api/notices (faculty), GET /api/notices
- **Results**: POST /api/results (faculty), GET /api/results/student/:id

## Usage

1. Open http://localhost:3000
2. Register as student or faculty
3. Login to access the portal
4. Navigate through Attendance, Assignments, Notices, Results based on role

## Future Enhancements

- File upload for assignments
- Real-time notifications via Socket.io
- ML analytics for attendance prediction