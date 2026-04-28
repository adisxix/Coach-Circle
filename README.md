# Coach Circle

A modern mentorship platform connecting professionals with industry experts across 10+ fields. Find guidance, book sessions, and accelerate your career growth.

![Built with React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-8-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan)

## Features

- **Find Mentors** - Browse curated mentor profiles across Software, Finance, Design, Marketing, Healthcare, Legal, Education, Entrepreneurship, HR, and Management
- **Book Sessions** - Schedule one-on-one mentoring sessions at your convenience
- **Join Communities** - Connect with industry-specific communities to network and learn
- **User Dashboard** - Track sessions, manage mentors, and update your profile
- **CC+ Premium** - Enhanced mentoring experience with exclusive features
- **Responsive Design** - Beautiful UI that works on all devices

## Tech Stack

- **Frontend:** React 19 + React Router DOM
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4
- **Authentication:** Custom local storage-based auth system
- **Icons:** Lucide React (optional)

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

```bash
# Clone the repository
git clone https://github.com/adisxix/Coach-Circle.git

# Navigate to project directory
cd Coach-Circle

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/      # Reusable UI components (Navbar, Footer, MentorCard, etc.)
├── pages/          # Route pages
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── JoinPage.jsx
│   ├── DashboardPage.jsx
│   ├── CCPlusPage.jsx
│   └── community/  # Industry community pages
├── hooks/          # Custom React hooks
├── utils/          # Utility functions (auth storage)
├── assets/         # Static assets
├── App.jsx         # Main app component with routes
└── main.jsx        # Entry point
```

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with mentor showcase |
| `/login` | User authentication |
| `/join` | Sign up as mentee or mentor |
| `/home2` | Authenticated home (protected) |
| `/dashboard` | User dashboard with sessions & settings (protected) |
| `/cc-plus` | Premium subscription page |
| `/community/:industry` | Industry-specific community pages |

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
