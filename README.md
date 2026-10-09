# AI Interview Preparation Platform

An AI-powered interview preparation platform that helps users prepare for technical and behavioral interviews through resume analysis, job matching, AI-generated questions, skill-gap identification, and a personalized preparation roadmap.

## 🚀 Features

* **AI Resume Analysis:** Analyze a resume against a job description.
* **Job Match Score:** Evaluate how closely a resume matches the target role.
* **Technical Interview Questions:** Generate technical questions based on the candidate's skills and experience.
* **Behavioral Interview Questions:** Practice common HR and behavioral interview questions.
* **Skill Gap Analysis:** Identify skills that need improvement.
* **Preparation Roadmap:** Get a structured plan to improve interview readiness.
* **User Authentication:** Register and log in securely.
* **Protected Routes:** Restrict interview features to authenticated users.
* **AI Integration:** Use the Gemini API to generate interview-related insights.
* **Resume Upload:** Upload a resume for analysis.

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3 / Sass
* Axios
* React Router

### Backend

* Node.js
* Express.js
* REST APIs
* JWT Authentication
* Multer

### Database and AI

* MongoDB
* Mongoose
* Google Gemini API

### Development Tools

* Git
* GitHub
* Visual Studio Code
* Postman

## 📸 Screenshots

|               🏠 Home Page               |                       💻 Technical Questions                      |
| :--------------------------------------: | :---------------------------------------------------------------: |
| ![Home Page](<ia screen short/home.png>) | ![Technical Questions](<ia screen short/technical-questions.png>) |

|                       🗣️ Behavioral Questions                      |                🗓️ Preparation Roadmap                |
| :-----------------------------------------------------------------: | :---------------------------------------------------: |
| ![Behavioral Questions](<ia screen short/behavioral-questions.png>) | ![Preparation Roadmap](<ia screen short/roadmap.png>) |

## 📁 Project Structure

```text
interview-ai-yt/
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   ├── package.json
│   └── server.js
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── index.html
├── ia screen short/
│   ├── home.png
│   ├── technical-questions.png
│   ├── behavioral-questions.png
│   └── roadmap.png
├── .gitignore
└── README.md
```

*Note: The folder and file names shown above are examples of the expected structure. Keep your actual project structure if it differs.*

## ⚙️ Prerequisites

Install the following before running the project:

* Node.js and npm
* MongoDB database or a MongoDB Atlas connection
* Google Gemini API key

## 💻 Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd interview-ai-yt
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Set Up the Backend

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` folder and configure the environment variables required by your backend:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
GOOGLE_GENAI_API_KEY=your_gemini_api_key
JWT_SECRET=your_secure_random_secret
```

Replace the example values with your own credentials. Use the exact environment variable names expected by your code. **Never commit your `.env` file or publish API keys, database credentials, or JWT secrets.**

Start the backend using the script defined in `Backend/package.json`. If the project uses the `start` script, run:

```bash
npm start
```

For a project with a `dev` script, use:

```bash
npm run dev
```

### 3. Set Up the Frontend

Open a second terminal in VS Code and run:

```bash
cd Frontend
npm install
```

If your frontend requires a backend URL environment variable, create `Frontend/.env` with:

```env
VITE_BACKEND_URL=http://localhost:3000
```

Use the variable name expected by your frontend code.

Start the frontend:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`.

## 🔐 Security

* Keep API keys and database credentials in environment variables.
* Do not upload `.env` files to GitHub.
* Use secure authentication and protected routes.
* Configure CORS for the frontend origin used by your application.
* Keep `.gitignore` configured to exclude secrets and dependency folders.

## 🔮 Future Improvements

* Add mock interview sessions with answer evaluation.
* Improve resume-to-job-description matching.
* Provide progress tracking for interview preparation.
* Add more detailed skill recommendations.
* Enhance the user dashboard and reporting features.

## 👩‍💻 Author

**Vaishnavi Ashok Ubarhande**

Computer Science and Engineering Student

## 📄 License

This project is available for educational and learning purposes. Add a license file if you intend to distribute it under a specific open-source license.
