# 🚀 TestX — Real-Time Video, Code Editor, Scheduling & Recordings

A full-stack, real-time coding interview platform designed for **technical interviews**, featuring:

- 🧑‍💼 Multi-role access (Candidate, Interviewer, Admin)
- 🎥 Real-time video/audio calls
- 🖥️ Screen sharing
- 📝 Multi-language live code editor (VS Code–like)
- 🎞️ Call recording and playback
- 📅 Interview scheduling & management
- ⚡ Real-time database sync
- 🌙 Beautiful responsive UI with light/dark modes

Built with **Next.js, Convex, Stream Video SDK, Clerk, Monaco Editor, and ShadCN UI**.

---

## ✨ Features

### ✅ Authentication (Clerk)
- GitHub, Google, Email/Password sign-in
- User roles stored and synced with Convex via Clerk Webhooks
- Protected routes with role-based UI

### 🎥 Real-Time Video & Collaboration
Powered by **Stream Video SDK**:
- Video/audio calls with ultra-low latency
- Screen sharing
- Reactions & participant management
- Screen & session recording
- Recording playback & link sharing

### 💻 Multi-language Code Editor
VS Code–style editor using **Monaco Editor**:
- Supports **JavaScript, Python, Java**
- Syntax highlighting
- Autocomplete
- Starter code loading
- Resizable split panels (Participants ↔ Editor)

### 🗂️ Interview Scheduling & Management
- Interviewer can schedule interviews
- One candidate + multiple interviewers
- Stores interview details in Convex
- Notifications & real-time updates
- Admin dashboard for updating interview status

### 📝 Admin / Interviewer Tools
- Update interview status (Failed / Succeeded)
- Add post-interview evaluations + comments
- View all interviews by status
- Access recordings

### 🎞️ Recording Management
- Automatically recorded via Stream Video SDK
- Recording playback in custom UI
- Copy recording link
- Duration + timestamp formatting

### 🎨 Modern UI/UX
- Full ShadCN UI integration
- Dark/light mode
- Responsive design
- Split panels with drag-to-resize
- Smooth transitions and icons via Lucide

---

## 🛠️ Tech Stack

### **Frontend**
- Next.js 14 (App Router)
- React
- Tailwind CSS
- ShadCN UI
- Monaco Editor
- react-hot-toast

### **Authentication**
- Clerk

### **Backend / DB**
- Convex (real-time queries & mutations)

### **Video Calls**
- Stream Video React SDK
- Stream Node SDK

### **Deployment**
- Vercel
- GitHub

---

## 🧱 High-Level Architecture

```
Next.js (UI + Client Logic)
│
├── Clerk (Authentication)
│
├── Convex (DB + Backend Logic)
│     ├── users
│     ├── interviews
│     ├── comments
│     └── webhooks
│
├── Stream Video SDK (Real-time video + recordings)
│
└── Monaco Editor (Live code editing)
```

---

## 📦 Database Schema (Convex)

### `users`
| Field      | Type                               | Notes            |
|------------|------------------------------------|------------------|
| name       | string                             |                  |
| email      | string                             |                  |
| image      | string?                            | Optional         |
| role       | "candidate" \| "interviewer"       |                  |
| clerkID    | string                             | Linked to Clerk  |

### `interviews`
| Field          | Type                                   | Notes            |
|----------------|----------------------------------------|------------------|
| title          | string                                 |                  |
| description    | string?                                | Optional         |
| startTime      | number                                 | UNIX timestamp   |
| endTime        | number?                                | Optional         |
| status         | "upcoming" \| "live" \| "completed" \| "failed" \| "succeeded" | |
| streamCallID   | string                                 | Stream call ID   |
| candidateID    | string                                 |                  |
| interviewerIDs | string[]                               | Multiple         |

### `comments`
| Field         | Type    | Notes                         |
|---------------|----------|-------------------------------|
| content       | string  |                               |
| rating        | number  | 1–5 stars                      |
| interviewerID | string  | Added by interviewer           |
| interviewID   | string  | Linked interview               |

---

## 📚 Key Hooks & Functions

| Hook / Function        | Purpose                                          |
|------------------------|--------------------------------------------------|
| useUserRole            | Fetches and returns user role                    |
| useMeetingActions      | Create/join meetings via Stream SDK              |
| useGetCallByID         | Fetch Stream call object                         |
| useGetCalls            | Fetch all Stream calls                           |
| handleScheduleMeeting  | Create scheduled interview in Convex             |
| handleStatusUpdate     | Update interview outcome                         |
| handleSubmitComment    | Add comments & ratings                           |

---

## 🚦 User Roles & Permissions

### 👤 Candidate
- Join interviews
- Write code in editor
- Screen share
- View upcoming & past interviews
- Cannot create meetings
- Cannot edit statuses
- Cannot add comments

### 👨‍🏫 Interviewer
- Schedule interviews
- Start & join calls
- Add comments after interview
- Update statuses (pass/fail)
- End meetings

### 🛡️ Admin
- Full access to all interviews
- All permissions of interviewers

---

## 🎬 Recording Features

- All sessions auto-recorded
- Playback interface with controls
- Copy/share recording link
- Duration & timestamps via date-fns

---

## 🌗 UI/UX Features

- Beautiful navbar with role-based UI
- Resizable editing panels
- Dark/light theme toggle
- Animated gradients & clean layout
- Fully responsive

---

## 🧪 Development Setup

### 1️⃣ Clone repository
```bash
git clone <repo-url>
cd project-folder
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Environment Variables (`.env.local`)
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_STREAM=
STREAM_SECRET_KEY=
```

### 4️⃣ Run Convex dev server
```bash
npx convex dev
```

### 5️⃣ Run Next.js app
```bash
npm run dev
```

---

## 🚀 Deployment (Vercel)

1. Push project to GitHub
2. Import into Vercel
3. Add environment variables
4. Deploy
5. Configure Clerk webhook
6. Add Stream production keys

---

## 📌 Keywords

Coding Interview Platform · Real-time Video · Screen Sharing · Stream SDK · Monaco Editor · Clerk Auth · Convex Backend · Interview Scheduling · Recording · ShadCN UI · Next.js

---

## ❤️ Contributing

You may extend this platform by adding:

- AI code assistant  
- Collaborative editing  
- Real-time scoring  
- Automated test runner  

---

## 📄 License

MIT License — free to use & modify.
