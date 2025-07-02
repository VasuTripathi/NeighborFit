import React, { useState } from "react";
import axios from "axios";

function App() {
  const [preferences, setPreferences] = useState({
    safety: 5,
    nightlife: 5,
    affordability: 5,
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/match", preferences);
      setResults(res.data);
    } catch (err) {
      console.error(err);
      setError("⚠️ Could not fetch matches. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-purple-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-4">
           NeighborFit
        </h1>
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
          Find the perfect neighborhood tailored to your lifestyle preferences.
        </p>

        {/* Input Sliders */}
        {["safety", "nightlife", "affordability"].map((factor) => (
          <div key={factor} className="mb-6">
            <label className="block mb-2 text-sm font-medium capitalize text-gray-700">
              {factor}
            </label>
            <input
              type="range"
              min="0"
              max="10"
              value={preferences[factor]}
              onChange={(e) =>
                setPreferences({ ...preferences, [factor]: +e.target.value })
              }
              className="w-full accent-indigo-500"
            />
            <div className="text-right text-sm text-gray-500">{preferences[factor]}</div>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full mt-4 py-2 px-4 font-semibold rounded-lg shadow-sm text-white transition 
            ${loading ? "bg-indigo-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
        >
          {loading ? "Finding..." : "🔍 Find My Neighborhood"}
        </button>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

        {results.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">🎯 Your Top Matches</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {results.map((n, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transform hover:scale-[1.02] transition"
                >
                  <h3 className="text-lg font-semibold text-indigo-800">{n.name}</h3>
                  <p className="text-gray-600 mt-1">Score: <span className="font-bold">{n.score.toFixed(2)}</span></p>
                </div>
              ))}
            </div>
          </div>
        )}
      
      </div>
    </div>
  );
}

export default App;
