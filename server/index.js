const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/match", (req, res) => {
  const preferences = req.body;

  const neighborhoods = [
    { name: "Green Park", safety: 8, nightlife: 3, affordability: 6 },
    { name: "Tech City", safety: 6, nightlife: 9, affordability: 5 },
    { name: "Budget Ville", safety: 5, nightlife: 4, affordability: 9 },
    { name: "Lake View", safety: 9, nightlife: 6, affordability: 4 },
    { name: "Student Area", safety: 5, nightlife: 8, affordability: 8 },
  ];

  const ranked = neighborhoods.map((n) => {
    const score =
      preferences.safety * n.safety +
      preferences.nightlife * n.nightlife +
      preferences.affordability * n.affordability;

    return { ...n, score };
  });

  ranked.sort((a, b) => b.score - a.score);
  res.json(ranked);
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
