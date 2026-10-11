# AI Interview Preparation Platform

An AI-powered full-stack web application designed to help students and job seekers prepare for technical and behavioral interviews. The platform analyzes resumes against job descriptions, evaluates job-role alignment, identifies skill gaps, generates interview questions, and creates a personalized preparation roadmap using the Google Gemini API.

## 🚀 Key Features

- **AI-Powered Resume Analysis:** Analyze an uploaded resume against a target job description.
- **Job Match Score:** Get an indication of how closely a resume aligns with a target role.
- **Technical Interview Preparation:** Generate role-relevant technical questions and model answers.
- **Behavioral Interview Preparation:** Practice HR and behavioral questions using the STAR method.
- **Skill Gap Analysis:** Identify missing or underdeveloped skills and prioritize areas for improvement.
- **Personalized Preparation Roadmap:** Follow a structured, day-by-day plan based on identified skill gaps.
- **Resume PDF Generation:** Generate and download a tailored resume report.
- **Secure User Authentication:** Support registration and login using JWT-based authentication.
- **Protected Routes:** Restrict access to authorized users.
- **AI Integration:** Use the Google Gemini API to generate personalized interview preparation insights.

## 📸 Application Screenshots

### 🏠 Home Page

![Home Page](./screenshots/home.png)

### 💻 Technical Interview Questions

![Technical Interview Questions](./screenshots/technical-questions.png)

### 🗣️ Behavioral Interview Questions

![Behavioral Interview Questions](./screenshots/behavioral-questions.png)

### 🗺️ Personalized Preparation Roadmap

![Preparation Roadmap](./screenshots/roadmap.png)

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite, JavaScript, HTML5, CSS3, Sass |
| Backend | Node.js, Express.js |
| API Development | REST APIs |
| Database | MongoDB, Mongoose |
| Authentication | JSON Web Tokens (JWT) |
| AI Integration | Google Gemini API |
| Development Tools | Git, GitHub, VS Code, Postman |

## 🏗️ System Architecture

The application follows a client-server architecture:

1. **Frontend:** React.js provides the user interface for authentication, resume submission, interview preparation, and viewing reports.
2. **Backend:** Node.js and Express.js handle API requests, authentication, resume processing, and interview preparation workflows.
3. **Database:** MongoDB stores application data, user information, and interview reports.
4. **AI Service:** The Google Gemini API supports the generation of interview questions and personalized preparation insights.

## 📂 Project Structure

```text
interview-ai-yt/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   ├── package.json
│   └── server.js
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── index.html
├── screenshots/
│   ├── home.png
│   ├── technical-questions.png
│   ├── behavioral-questions.png
│   └── roadmap.png
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js and npm
- MongoDB or a MongoDB Atlas account
- Google Gemini API key
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/VaishnaviUbarhande/ai-interview-preparation-platform.git
cd ai-interview-preparation-platform
```

### 2. Configure the Backend

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_secret
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

Start the backend server:

```bash
npm run dev
```

The backend is configured to run at:

`http://localhost:3000`

### 3. Configure the Frontend

Open a second terminal at the project root and run:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL printed in the terminal. With the default Vite configuration, this is usually:

`http://localhost:5173`

**Note:** Keep the backend running while using the frontend. Ensure that the backend CORS configuration allows the frontend's actual local URL.

## 🔐 Security Considerations

- Store database credentials and API keys in environment variables.
- Do not commit `.env` files or other secrets to GitHub.
- Use JWT authentication for protected application routes.
- Configure CORS for trusted frontend origins.
- Validate uploaded files and incoming API requests.

## 🎯 Learning Outcomes

This project provides practical experience with:

- Full-stack web application development.
- Building and integrating REST APIs.
- Database modeling and MongoDB integration.
- JWT-based authentication and route protection.
- Integrating a generative AI API into a web application.
- Handling resume uploads and generating interview preparation reports.
- Using Git and GitHub for version control and project documentation.

## 🔮 Future Enhancements

- Interactive mock interview sessions.
- Speech-based interview practice.
- Interview performance tracking and analytics.
- Improved resume and job-description matching.
- More adaptive preparation recommendations.

## 👩‍💻 Author

**Vaishnavi Ashok Ubarhande**

Final-Year Computer Science and Engineering Student

GitHub: [VaishnaviUbarhande](https://github.com/VaishnaviUbarhande)

## 📄 License

This project was developed for educational and learning purposes. Unless a license is added to the repository, all rights remain with the copyright holder.
