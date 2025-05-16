# Pup Spots (Vue.js) 🐾

A curated map of dog-friendly hangouts across Los Angeles, built with **Vue.js**, **Vite**, and **Mapbox GL**.

**[Live Demo](https://pup-spots-vuejs.vercel.app/)**

---

## 🧩 Background

This project is a personal rebuild and extension of the original [Pup Spots](https://github.com/DDVVPP/pup-spots) take-home assignment from **Spherical Studio**.  
That version was built with Next.js and Mapbox GL and used during their hiring process. This version explores a similar concept with a Vue-based stack and new features.

---

## ☀️ Features

- Interactive Mapbox map centered on LA
- Click on a preloaded pin to open a modal with location details
- Mobile responsiveness

---

## 🎯 Stretch Goals

- Category filtering
- Visual badges ("Unvisited", "Loved", "Not Keen")
- Visual badges filtering
- Ability to add personal notes to locations
- Auth and persistent backend (e.g. Supabase, Clerk, and MongoDB)
- Onboarding experience for first-time users
- Public pin submission with optional approval workflow:
  - New pins added by users are marked as “Pending” until reviewed
  - Admin dashboard to review, approve, or reject submissions
  - Form validation with Zod and toast notifications
  - Location search
  - Edit and delete pins

---

## ⚙️ Tech Stack

- **Framework:** Vue.js with TypeScript
- **UI:** Tailwind CSS
- **Maps:** Mapbox GL JS
- **Icons:** Phosphor React
- **Deployment:** Vercel

---

## 🧑‍💻 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/pup-spots.git
cd pup-spots-vuejs

# Install dependencies
npm install

# Create a .env.local file with your Mapbox token
VITE_MAPBOX_TOKEN=your_mapbox_token

# Run the development server
npm run dev
```

Visit http://localhost:5173 to view the app.
