# PopX — Authentication Flow App

A step-by-step authentication UI built with React, featuring account creation, login, and account settings — with an optional session timer via localStorage.

---

## 🚀 Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **React Context API** | Global state management |
| **CSS (custom)** | Styling — no UI library |
| **localStorage** *(optional)* | Session persistence |

---

## 📁 Project Structure

```
popx/
├── public/
├── src/
│   ├── context/
│   │   └── PopContext.jsx       # Global state (accounts, auth, navigation)
│   ├── pages/
│   │   ├── WelcomePage.jsx      # Landing screen
│   │   ├── SignUpPage.jsx       # Registration form
│   │   ├── SignInPage.jsx       # Login form
│   │   ├── AccountSettingsPage.jsx  # User profile view
│   │   └── PopXApp.jsx          # Page router
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js **v18+**
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/your-username/popx.git
cd popx
```

### Install Dependencies

```bash
npm install
# or
yarn
```

### Start the Dev Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔐 How to Use (Without localStorage)

The app ships with one pre-seeded account in memory so you can test the full flow instantly — no sign-up required.

### Step 1 — Welcome Screen
You land on the welcome page with two options:
- **Create Account** → takes you to the sign-up form
- **Already Registered? Login** → takes you straight to sign-in

### Step 2 — Sign In with the Demo Account

Click **Already Registered? Login** and enter:

```
Email:    Marry@Gmail.Com
Password: password123
```

Click **Login** — you'll be taken directly to the Account Settings page.

### Step 3 — Account Settings

Your profile name, email, and avatar are displayed. This page is only reachable after a successful login.

### Step 4 — Create a New Account (Optional)

Go back to the Welcome screen and click **Create Account**. Fill in:
- Full Name *(required)*
- Phone Number *(required)*
- Email Address *(required)*
- Password *(required)*
- Company Name *(optional)*
- Agency status — Yes / No

After submitting, you'll be redirected to the sign-in page. Log in with your new credentials.

---

## 🧠 How State Works

All state lives in `PopContext.jsx` and is passed via React Context — no Redux, no external libraries.

```jsx
// Wrap your app with the provider
<PopXProvider>
  <PopXApp />
</PopXProvider>
```

| State | Description |
|-------|-------------|
| `accounts` | Array of registered users (starts with demo account) |
| `currentUser` | The logged-in user object, or `null` |
| `currentPage` | Controls which page renders (`welcome`, `signup`, `signin`, `settings`) |

Navigation between pages is handled by calling `setCurrentPage('pageName')` from any component via the context hook:

```jsx
const { setCurrentPage } = usePopX();
setCurrentPage('signin');
```

---

## ⚙️ Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
```

---

## 🗒️ Notes

- The app uses **in-memory state by default** — all data resets on page refresh. This is intentional for the base version.
- A localStorage-backed session variant is also available (see the comment code in context), which adds a **2-minute auto-logout timer** on the settings page.
- All pages are rendered conditionally in `PopXApp.jsx` — there is no React Router dependency.

---

## 📸 Pages Overview

| Page | Route Key | Description |
|------|-----------|-------------|
| Welcome | `welcome` | Entry point with two CTAs |
| Sign Up | `signup` | Registration form with validation |
| Sign In | `signin` | Login with email + password |
| Account Settings | `settings` | Protected profile view |

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.