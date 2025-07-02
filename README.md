#  NeighborFit

NeighborFit is a full-stack web application that helps users discover neighborhoods that best match their lifestyle preferences — based on safety, nightlife, and affordability.


---

##  Features

-  Match neighborhoods using weighted preference algorithm
- Real-time results based on safety, nightlife & affordability
- Beautiful, mobile-responsive UI with Tailwind CSS
- Express backend with simple scoring algorithm
- Ready for deployment (Render + Vercel)


##  How It Works

1. User selects values (0–10) for:
   - Safety
   - Nightlife
   - Affordability
2. App sends preferences to the backend
3. Backend scores each neighborhood using a weighted sum
4. Top-matching results are shown to the user

---

##  Tech Stack

| Frontend | Backend | Styling | Hosting |
|----------|---------|---------|---------|
| React    | Express | Tailwind CSS | Render (API), Vercel (UI) |

---

##  Folder Structure

NeighborFit/
├── client/ # React frontend
└── server/ # Express backend

---

##  How to Run Locally

###  Prerequisites
- Node.js installed
- npm installed

###  Start Backend

cd server
npm install
node index.js

### Start Frontend

cd client
npm install
npm start
Open http://localhost:3000 in your browser.

 Environment Notes
No sensitive data is stored.

Uses open and mock neighborhood data.

 Future Improvements
 User accounts & saved preferences

 Real-world location API integration

 Advanced scoring logic with weighting options

 Google Maps for visualization

 Developed By
Vasu Tripathi
Galgotias University
Email: tripathivasu7@gmail.com
