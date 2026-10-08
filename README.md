# 🎯 AI Interview Preparation Platform

A web app that helps students and job seekers **prepare for interviews using AI**.
Paste a job description, upload your resume, and get a personalised interview plan in about 30 seconds.

**Tech:** React · Node.js · Express · MongoDB · Google Gemini AI

---

## 📸 Screenshots

| Create a plan | Technical questions |
| --- | --- |
| ![Home](screenshots/home.png) | ![Technical questions](screenshots/technical-questions.png) |

| Behavioural questions | Preparation road map |
| --- | --- |
| ![Behavioural questions](screenshots/behavioral-questions.png) | ![Road map](screenshots/roadmap.png) |

---

## 💡 What problem does it solve?

Most students don't know **what an interviewer will ask** or **what to study** for a specific job.
This project reads the job description and your resume, compares them, and tells you exactly what to prepare.

---

## ✨ Features

- 🔐 **Sign up / Login** with secure JWT authentication
- 📄 **Upload your resume** (PDF) and paste the job description
- 📊 **Match score** showing how well you fit the role
- 💻 **Technical questions** with the interviewer's intention and a model answer
- 🗣️ **Behavioural questions** with STAR-method tips
- ⚠️ **Skill gaps** marked low / medium / high
- 🗓️ **Day-by-day road map** to prepare
- 📥 **Download a job-tailored resume** as PDF
- 🕘 **Saved history** of all your reports

---

## 🛠️ Tech Stack

| Part | Technology |
| --- | --- |
| Frontend | React, Vite, React Router, Axios, SCSS |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose) |
| AI | Google Gemini API |
| Other | JWT, bcrypt, Multer (file upload), pdf-parse, Puppeteer |

---

## ⚙️ How It Works

1. User logs in and enters a job description + resume.
2. Backend reads the text from the resume PDF.
3. Gemini AI creates the report in a fixed JSON format (validated with Zod).
4. Report is saved in MongoDB and shown on the screen.

---

## 🚀 Run It on Your Computer

**You need:** Node.js, a MongoDB Atlas connection string, and a Gemini API key.

### 1. Backend

```bash
cd Backend
npm install
```

Create a file named `.env` inside the `Backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=any_long_random_text
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

Start it:

```bash
npm run dev
```

You should see: `Server is running on port 3000` and `Connected to Database`.

### 2. Frontend (in a new terminal)

```bash
cd Frontend
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 🔗 Main API Endpoints

| Method | Endpoint | What it does |
| --- | --- | --- |
| POST | `/api/auth/register` | Create account |
| POST | `/api/auth/login` | Login |
| GET | `/api/auth/logout` | Logout |
| POST | `/api/interview` | Generate interview report |
| GET | `/api/interview` | Get all my reports |
| GET | `/api/interview/report/:id` | Get one report |
| POST | `/api/interview/resume/pdf/:id` | Download tailored resume |

---

## 📚 What I Learned

- Building a full-stack **MERN** app with login and protected routes
- Using **JWT + cookies** and blacklisting tokens on logout
- Calling an **AI API** and forcing a structured JSON reply with a schema
- Uploading and reading **PDF files** on the server
- Generating **PDFs from HTML** with Puppeteer
- Debugging real problems like MongoDB connection errors and CORS

---

## 🔮 Future Improvements

- Support DOCX resumes
- Allow reports using only a self-description
- Mock interview mode with feedback on answers
- Deploy the app online

---

## 👤 Author

**Your Name**
B.Tech CSE, VIT Bhopal University
GitHub: [your-username](https://github.com/your-username) · LinkedIn: [your-profile](https://linkedin.com/in/your-profile)
