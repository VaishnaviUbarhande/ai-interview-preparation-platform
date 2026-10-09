# AI Interview Preparation Platform

An AI-powered web application designed to help candidates prepare for technical and behavioral interviews through resume analysis, job matching, skill-gap identification, and a personalized preparation roadmap.

## 🚀 Features

* **AI Resume Analysis:** Analyze a resume against a job description.
* **Job Match Score:** Understand how well a resume matches a target role.
* **Technical Interview Questions:** Practice AI-generated technical questions.
* **Behavioral Interview Questions:** Prepare for HR and behavioral interviews.
* **Skill Gap Analysis:** Identify skills that need improvement.
* **Preparation Roadmap:** Follow a structured interview preparation plan.
* **User Authentication:** Register and log in securely.
* **Resume Upload:** Upload a resume for analysis.
* **AI Integration:** Generate interview preparation insights using the Gemini API.
* **Protected Routes:** Restrict access to authenticated users.

## 🛠️ Tech Stack

**Frontend:** React.js, Vite, JavaScript, HTML5, CSS3, Sass

**Backend:** Node.js, Express.js, REST APIs, JWT Authentication

**Database:** MongoDB, Mongoose

**AI Integration:** Google Gemini API

**Tools:** Git, GitHub, VS Code, Postman

## 📸 Screenshots

Screenshots of the application, including the home page, technical questions, behavioral questions, and preparation roadmap.

|                  **🏠 Home Page**                 |                         **💻 Technical Questions**                         |
| :-----------------------------------------------: | :------------------------------------------------------------------------: |
| ![Home Page](<Frontend/ia screen short/home.png>) | ![Technical Questions](<Frontend/ia screen short/technical-questions.png>) |

|                         **🗣️ Behavioral Questions**                         |                   **🗓️ Preparation Roadmap**                  |
| :--------------------------------------------------------------------------: | :------------------------------------------------------------: |
| ![Behavioral Questions](<Frontend/ia screen short/behavioral-questions.png>) | ![Preparation Roadmap](<Frontend/ia screen short/roadmap.png>) |

> 💡 Keep the `ia screen short/` folder inside `Frontend` and upload it to GitHub along with this README so the screenshots display correctly.

## 📁 Project Structure

```text
interview-ai-yt/
├── Backend/
│   ├── package.json
│   └── server.js
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── ia screen short/
│   │   ├── home.png
│   │   ├── technical-questions.png
│   │   ├── behavioral-questions.png
│   │   └── roadmap.png
│   ├── package.json
│   └── index.html
├── .gitignore
└── README.md
```

*Note: This is an illustrative structure. Keep your actual project files and folder names if they differ.*

## ⚙️ Installation and Setup

### Prerequisites

* Node.js and npm
* MongoDB or a MongoDB Atlas database
* Google Gemini API key

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

Create a `.env` file inside the `Backend` folder with the environment variables required by your code. For example:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
GOOGLE_GENAI_API_KEY=your_gemini_api_key
JWT_SECRET=your_secure_random_secret
```

Use the exact variable names expected by your backend code. Replace the example values with your own credentials.

Start the backend using the command defined in `Backend/package.json`, such as:

```bash
npm run dev
```

### 3. Set Up the Frontend

Open a second terminal in VS Code:

```bash
cd Frontend
npm install
```

If your frontend uses `VITE_BACKEND_URL`, configure it in `Frontend/.env`:

```env
VITE_BACKEND_URL=http://localhost:3000
```

Use the environment variable name expected by your frontend code.

### 4. Run the Frontend

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

## 🔐 Security

* Store API keys and database credentials in environment variables.
* Never upload `.env` files or secrets to GitHub.
* Configure CORS for your frontend URL.
* Protect API endpoints that require authentication.
* Keep database credentials private.

## 🔮 Future Improvements

* Add interactive mock interview sessions.
* Improve resume-to-job-description matching.
* Track interview preparation progress.
* Provide more personalized skill recommendations.
* Enhance the dashboard and interview reports.

## 👩‍💻 Author

**Vaishnavi Ashok Ubarhande**

Computer Science and Engineering Student

## 📄 License

This project is intended for educational and learning purposes. Add a `LICENSE` file if you choose a specific open-source license.
