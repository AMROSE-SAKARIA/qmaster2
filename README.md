# QMaster

**QMaster** is a web-based platform designed to automate the generation of educational questions (multiple-choice and descriptive) from user-uploaded content, such as PDFs, while providing seamless user management features. It supports educators, students, and institutions by leveraging Natural Language Processing (NLP) and Machine Learning (ML) technologies to create high-quality, contextually relevant questions.

QMaster consists of a robust backend built with **Flask** and a modern frontend developed using **Vite** and **React**, working together to streamline content processing, question generation, and user interactions — enhancing the overall learning experience.

---

## 🔑 Features

- **Automated Question Generation**  
  Generates multiple-choice and descriptive questions from uploaded PDF content using advanced NLP models.

- **User Management**  
  Supports user registration, login, and role-based access (e.g., student, educator) with secure authentication.

- **Email Verification**  
  OTP-based email verification for secure user onboarding.

- **Content Processing**  
  Extracts text from PDFs for seamless integration with the question generation pipeline.

- **Interactive Interface**  
  Intuitive frontend for uploading content, managing profiles, and accessing generated questions.

- **Community-Driven**  
  Users can rate questions, encouraging accountability and improving quality.

---

## 🛠️ Backend Implementation

The backend is developed using **Flask** and serves as the core API handler for authentication, content processing, and question generation.

### 🔧 Key Technologies:

- **Framework & API**: `flask==3.0.3`, `flask-cors==4.0.1`
- **Database**: MongoDB using `pymongo==4.11.2`
- **Authentication**:
  - JWT: `PyJWT==2.10.1`
  - Password hashing: `bcrypt==4.1.3`
  - Email OTP: `smtplib`
- **PDF & Content Extraction**: `pdfplumber==0.11.5`
- **NLP & Question Generation**:
  - Transformers (`transformers==4.44.2`, T5 model)
  - Embeddings: `sentence-transformers==2.7.0`
  - Text processing: `spacy==3.7.6`
  - Keyphrase extraction: `pke` (from GitHub)
  - Support libraries: `nltk==3.8.1`, `flashtext==2.7`, `strsimpy==0.2.1`
  - Model inference: `torch==2.0.1` (CPU-only)
- **Data Handling**: `scikit-learn==1.5.1`, `numpy==1.26.4`, `pandas==2.1.4`
- **Env Management**: `python-dotenv==1.0.1`

---

## 🎨 Frontend Implementation

The frontend is a modern, responsive application built with **React** and **Vite**.

### ⚙️ Tech Stack:

- **UI Library**: React (`react`, `react-dom`)
- **Routing**: `react-router-dom`
- **Icons**: `react-icons`
- **HTTP Requests**: `axios`
- **Styling**: `tailwindcss`, integrated via `@tailwindcss/vite`
- **Build Tool**: Vite (`vite`, `@vitejs/plugin-react`)

### 🔗 API Endpoints:

- `/api/register`
- `/api/login`
- `/api/verify-otp`
- `/api/upload-content`

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/qmaster.git
cd qmaster
```

---

### 2. Backend Setup

```bash
cd qmaster-backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
pip install -r requirements.txt
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
```

Start the Flask server:

```bash
python app.py
```

---

### 3. Frontend Setup

```bash
cd qmaster-frontend
npm install
```

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000
```

Start the Vite dev server:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to use QMaster.

---

## 🤝 Contributing

We welcome contributions from the community! You can help us by:

- Improving the question generation algorithms
- Enhancing the frontend with new components
- Adding support for more content formats (e.g., DOCX, HTML)
