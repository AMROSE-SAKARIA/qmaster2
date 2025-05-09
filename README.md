QMaster
Overview
QMaster is a web-based platform designed to automate the generation of educational questions (multiple-choice and descriptive) from user-uploaded content, such as PDFs, while providing seamless user management features. The application supports educators, students, and institutions by leveraging natural language processing (NLP) and machine learning technologies to create high-quality, contextually relevant questions. QMaster consists of a robust backend built with Flask and a modern frontend developed using Vite and React, working together to streamline content processing, question generation, and user interactions, enhancing the overall learning experience.

Features
Automated Question Generation: Generates multiple-choice and descriptive questions from uploaded PDF content using advanced NLP models.
User Management: Supports user registration, login, and role-based access (e.g., student, educator) with secure authentication.
Email Verification: Implements OTP-based email verification for secure user onboarding.
Content Processing: Extracts text from PDFs for seamless integration with question generation workflows.
Interactive Interface: Provides an intuitive frontend for users to upload content, manage profiles, and access generated questions.
Community-Driven: Encourages user engagement through features like rating generated questions, fostering accountability and quality.
Backend Implementation
The QMaster backend is developed using Flask, providing a scalable API to handle user management, content processing, and question generation. Key components include:

Framework and Database:
Built with flask==3.0.3 and flask-cors==4.0.1 for API development and cross-origin resource sharing.
Uses MongoDB (pymongo==4.11.2) for persistent data storage, managing user data, and generated questions.
Authentication and Security:
Implements JWT-based authentication with PyJWT==2.10.1.
Secures passwords using bcrypt==4.1.3.
Supports OTP-based email verification using smtplib for secure user registration.
Content Processing:
Extracts text from PDFs using pdfplumber==0.11.5 to prepare content for question generation.
Question Generation:
Leverages NLP libraries like transformers==4.44.2 (T5 models for question generation), sentence-transformers==2.7.0 for embeddings, and spacy==3.7.6 for text processing.
Uses pke (installed from GitHub’s master branch) for keyphrase extraction, enhanced by nltk==3.8.1, flashtext==2.7, and strsimpy==0.2.1 for additional NLP tasks.
Employs torch==2.0.1 (CPU-only) for model inference, optimized for resource-constrained environments.
Utilities:
Integrates scikit-learn==1.5.1, numpy==1.26.4, and pandas==2.1.4 for machine learning and data processing tasks.
Uses python-dotenv==1.0.1 for managing environment variables.
Frontend Implementation
The QMaster frontend is a responsive web application built with React and Vite, offering a fast and modern development experience with an intuitive user interface for seamless interaction with the backend API. Key aspects include:

Technology Stack:
Developed using React for building dynamic UI components.
Utilizes Vite as the build tool for faster development, hot module replacement (HMR), and optimized production builds.
Communicates with the backend API via HTTP requests to endpoints like /api/register, /api/login, /api/verify-otp, and /api/upload-content.
User Interface:
Features a user-friendly interface for uploading PDF content, managing user profiles, and viewing generated questions.
Includes role-based views (e.g., student dashboards, educator tools) with detailed user profiles.
Interactivity:
Implements secure communication with the backend, supporting CORS for cross-origin requests.
Displays transparent feedback, such as question generation results and user verification status.
Community Focus:
Encourages user engagement through features like rating generated questions, fostering accountability and quality.
Getting Started
Clone the Repository:
bash

Copy
git clone https://github.com/<your-username>/qmaster.git
cd qmaster
Set Up the Backend:
Navigate to the backend directory (e.g., qmaster-backend).
Create a virtual environment and install dependencies:
bash

Copy
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
Configure environment variables in a .env file:
text

Copy
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
EMAIL_USER=<your-email>
EMAIL_PASS=<your-email-password>
Run the backend:
bash

Copy
python app.py
Set Up the Frontend:
Navigate to the frontend directory (e.g., qmaster-frontend).
Install dependencies using npm (Vite uses npm by default):
bash

Copy
npm install
Update the API base URL in the frontend configuration (e.g., in a .env file in the frontend directory):
text

Copy
VITE_API_URL=http://localhost:5000
Note: Vite uses the VITE_ prefix for environment variables, which are accessible in your React code via import.meta.env.VITE_API_URL.
Run the frontend in development mode:
bash

Copy
npm run dev
Vite will start a development server, typically at http://localhost:5173 (the default port for Vite).
Access the Application:
Open your browser and navigate to http://localhost:5173 (or the port Vite uses) to interact with QMaster.
Contributing
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes. Areas for contribution include improving question generation algorithms, enhancing the frontend user experience with new React components, and adding support for additional content formats.
