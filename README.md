# AI Interview Preparation Platform

An AI-powered platform designed to help users prepare for job interviews with personalized questions, skill-gap analysis, and a preparation roadmap.

## Features

<<<<<<< HEAD
- Personalized interview preparation
- Technical interview questions
- Behavioral interview questions
- Skill-gap analysis
- Preparation roadmap
- JWT-based authentication
- Google Gemini AI integration
## 📸 Screenshots

### 🏠 Home Page
![Home Page](./screenshots/home.png)

### 💻 Technical Interview Questions
![Technical Questions](./screenshots/technical-questions.png)

### 🗣️ Behavioral Interview Questions
![Behavioral Questions](./screenshots/behavioral-questions.png)

### 🗺️ Preparation Roadmap
![Preparation Roadmap](./screenshots/roadmap.png)

## Tech Stack

- React.js
- Node.js
- Express.js
- MongoDB
- JavaScript, HTML, and CSS
- JWT Authentication
- Google Gemini API
- Git and GitHub
=======
## 📁 Project Structure

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
>>>>>>> d1c2e3af784baaf05682068800d458f927035429

## Security

<<<<<<< HEAD
Keep API keys, database credentials, and `.env` files private. Never commit secrets to GitHub.
=======
### Prerequisites

- Node.js 20.16+ or 22+
- npm
- MongoDB or a MongoDB Atlas database
- Google Gemini API key

### 1. Clone the Repository

```bash
git clone https://github.com/VaishnaviUbarhande/ai-interview-preparation-platform.git
cd ai-interview-preparation-platform
```

### 2. Set Up the Backend

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` folder with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_secret
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

Start the backend server:

```bash
npm run dev
```

The backend server runs at `http://localhost:3000`.

### 3. Set Up and Run the Frontend

Open a **second terminal** in VS Code and run:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`.

## 🔐 Security

- Store API keys and database credentials in environment variables.
- Never upload `.env` files or secrets to GitHub.
- Configure CORS to allow your frontend URL.
- Protect API endpoints that require authentication.

## 🔮 Future Improvements

- Interactive mock interview sessions.
- Improved resume-to-job-description matching.
- Progress tracking for interview preparation.
- More personalized skill recommendations.
- Enhanced dashboard and interview reports.

## 👩‍💻 Author

**Vaishnavi Ashok Ubarhande**

Computer Science and Engineering Student

## 📄 License

This project is intended for educational and learning purposes. Add a `LICENSE` file if you choose a specific open-source license.
>>>>>>> d1c2e3af784baaf05682068800d458f927035429
