# Welcome to My TaskManager System.

# 📝 Task Management System – Frontend

This is the **frontend application** for the **Task Management System**, developed using **lovable.dev**.  
The application provides a clean, responsive, and user-friendly interface for managing daily tasks efficiently.

---

## 🚀 Features

- 📋 Create, update, and delete tasks
- ✅ Mark tasks as completed or pending
- 🗂️ Organize tasks by status
- 🔍 Simple and intuitive UI
- 📱 Fully responsive design (mobile & desktop)
- ⚡ Fast and lightweight frontend

---

## 🛠️ Tech Stack

- **Platform:** lovable.dev  
- **Frontend Framework:** React / Vite / TypeScript
- **Styling:** CSS / Tailwind CSS 
- **State Management:** React State / Hooks
- **API Communication:** REST API

---

## 📁 Project Structure


Here's your project structure:

```
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── dashboard/
│   │   │   └── SummaryCard.tsx
│   │   ├── layout/
│   │   │   └── AppLayout.tsx
│   │   ├── tasks/
│   │   │   ├── PriorityBadge.tsx
│   │   │   ├── StatusBadge.tsx
│   │   │   ├── TaskForm.tsx
│   │   │   └── TaskTable.tsx
│   │   ├── ui/                  # shadcn components
│   │   │   └── (button, card, dialog, etc.)
│   │   └── NavLink.tsx
│   ├── context/
│   │   └── TaskContext.tsx      # Global task state
│   ├── data/
│   │   └── mockTasks.ts         # Sample task data
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   ├── TaskFormPage.tsx
│   │   └── TaskList.tsx
│   ├── types/
│   │   └── task.ts              # Task type definitions
│   ├── App.tsx                  # Routes & providers
│   ├── index.css                # Global styles
│   └── main.tsx                 # Entry point
├── index.html
├── tailwind.config.ts
└── vite.config.ts
```

































Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
