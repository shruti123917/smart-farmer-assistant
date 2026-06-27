export const weatherData = {
  current: {
    temperature: 29,
    condition: "Partly Cloudy",
    humidity: 76,
    wind: 14,
    uv: 6,
    rainProbability: 68,
    location: "Nashik, Maharashtra",
    advice: "Good moisture levels for soybean. Delay foliar spray until after evening due to humidity spike.",
  },
  forecast: [
    { day: "Mon", temp: 30, rain: 42 },
    { day: "Tue", temp: 29, rain: 68 },
    { day: "Wed", temp: 27, rain: 74 },
    { day: "Thu", temp: 28, rain: 36 },
    { day: "Fri", temp: 31, rain: 18 },
    { day: "Sat", temp: 30, rain: 24 },
    { day: "Sun", temp: 29, rain: 40 },
  ],
  recommendations: [
    "Irrigate drip lines tomorrow morning if rainfall stays below 20 mm.",
    "Inspect lower soybean leaves for rust spread after the next humid spell.",
    "Avoid urea top dressing during high rain probability windows.",
  ],
};

export const marketPrices = [
  { crop: "Soybean", today: 4680, yesterday: 4590, weeklyChange: 4.2, trend: [4300, 4420, 4550, 4470, 4590, 4680] },
  { crop: "Onion", today: 1980, yesterday: 2100, weeklyChange: -3.9, trend: [2440, 2320, 2200, 2140, 2100, 1980] },
  { crop: "Wheat", today: 2490, yesterday: 2460, weeklyChange: 1.1, trend: [2400, 2415, 2430, 2450, 2460, 2490] },
  { crop: "Tomato", today: 1640, yesterday: 1520, weeklyChange: 6.8, trend: [1310, 1380, 1450, 1490, 1520, 1640] },
];

export const expenseTrend = [
  { month: "Jan", expense: 36000, profit: 58000 },
  { month: "Feb", expense: 42000, profit: 62000 },
  { month: "Mar", expense: 38500, profit: 61000 },
  { month: "Apr", expense: 45000, profit: 70000 },
  { month: "May", expense: 52000, profit: 76000 },
  { month: "Jun", expense: 48000, profit: 82000 },
];

export const expenses = [
  { id: 1, category: "Seeds", amount: 12000, date: "2026-06-02", note: "Certified soybean seeds" },
  { id: 2, category: "Fertilizer", amount: 8500, date: "2026-06-08", note: "Balanced NPK mix" },
  { id: 3, category: "Labor", amount: 15000, date: "2026-06-12", note: "Field preparation" },
  { id: 4, category: "Irrigation", amount: 5400, date: "2026-06-18", note: "Pump maintenance" },
];

export const expenseBreakdown = [
  { name: "Seeds", value: 24 },
  { name: "Fertilizer", value: 18 },
  { name: "Labor", value: 31 },
  { name: "Irrigation", value: 11 },
  { name: "Logistics", value: 16 },
];

export const diseases = [
  {
    id: 1,
    crop: "Tomato",
    disease: "Early Blight",
    confidence: 94,
    treatment: "Remove infected foliage and improve airflow with pruning.",
    organic: "Apply neem oil with copper soap every 7 days.",
    chemical: "Use chlorothalonil-based fungicide as directed.",
    recoveryTime: "10-14 days",
    date: "2026-06-21",
  },
  {
    id: 2,
    crop: "Soybean",
    disease: "Soybean Rust",
    confidence: 88,
    treatment: "Scout surrounding rows and avoid overhead irrigation.",
    organic: "Seaweed biostimulant with sulfur dust buffer.",
    chemical: "Triazole + strobilurin mix per label recommendations.",
    recoveryTime: "12-16 days",
    date: "2026-06-11",
  },
];

export const chatMessages = [
  { id: 1, sender: "assistant", text: "Namaste! I can help with crop disease, irrigation planning, and mandi prices.", time: "09:30" },
  { id: 2, sender: "user", text: "Will rain this week affect soybean spraying?", time: "09:31" },
  { id: 3, sender: "assistant", text: "Yes. Rain chances peak on Wednesday, so spray before Tuesday evening or wait for Friday morning.", time: "09:31" },
];

export const suggestedQuestions = [
  "Best fungicide timing for soybean rust?",
  "What fertilizer should I use for cotton at 45 days?",
  "Show today's onion mandi price trend",
  "How to reduce drip irrigation clogging?",
];

export const schemes = [
  {
    id: 1,
    title: "PM-KISAN Support",
    eligibility: "Small and marginal landholding farmers",
    benefit: "Direct income support of INR 6,000 per year",
    documents: ["Aadhaar card", "Land records", "Bank account details"],
  },
  {
    id: 2,
    title: "Soil Health Card Scheme",
    eligibility: "All registered farmers",
    benefit: "Free soil testing and nutrient management report",
    documents: ["Farmer ID", "Land parcel details"],
  },
  {
    id: 3,
    title: "Pradhan Mantri Fasal Bima Yojana",
    eligibility: "Farmers enrolled before crop season cut-off",
    benefit: "Crop insurance support against weather loss",
    documents: ["Sowing proof", "Bank passbook", "Aadhaar card"],
  },
];

export const communityPosts = [
  {
    id: 1,
    author: "Rohit Jadhav",
    role: "Grape Grower",
    content: "Tried a new canopy ventilation setup this week. Disease pressure reduced a lot after the last humid patch.",
    likes: 84,
    comments: 16,
    topic: "Crop Health",
    time: "2h ago",
  },
  {
    id: 2,
    author: "Seema Patil",
    role: "Onion Farmer",
    content: "Lasalgaon onion prices look weak today. Anyone holding stock for next week?",
    likes: 46,
    comments: 22,
    topic: "Market Watch",
    time: "4h ago",
  },
];

export const notifications = [
  { id: 1, title: "Rain Alert", description: "68% chance of rain tomorrow. Reschedule nutrient spray.", time: "10 min ago" },
  { id: 2, title: "Price Jump", description: "Soybean mandi price increased by 4.2% this week.", time: "1 hr ago" },
  { id: 3, title: "Task Due", description: "Field scouting for rust should be completed by evening.", time: "3 hrs ago" },
];

export const tasks = [
  { id: 1, title: "Inspect lower leaf canopy", status: "High Priority" },
  { id: 2, title: "Review fertilizer plan for Block B", status: "Planned" },
  { id: 3, title: "Upload pest image for crop doctor", status: "Pending" },
];

export const journalEntries = [
  {
    id: 1,
    date: "2026-06-25",
    title: "Soybean field scouting",
    notes: "Observed early yellow spotting on two rows. Moisture adequate after light rain.",
    mediaCount: 2,
  },
  {
    id: 2,
    date: "2026-06-23",
    title: "Drip line maintenance",
    notes: "Cleared blocked emitters in the eastern patch. Water pressure stable again.",
    mediaCount: 1,
  },
];

export const cropHealth = [
  { name: "Healthy", value: 68 },
  { name: "Monitor", value: 21 },
  { name: "At Risk", value: 11 },
];
