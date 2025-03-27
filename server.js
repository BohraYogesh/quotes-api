const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());


const quotesData = [
  {
    category: "Motivation",
    quotes: [
      { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
      { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Colin Powell" },
      { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
    ]
  },
  {
    category: "Family",
    quotes: [
      { quote: "Family is not an important thing, it’s everything.", author: "Michael J. Fox" },
      { quote: "The love of family is life's greatest blessing.", author: "George Bernard Shaw" }
    ]
  },
  {
    category: "Success",
    quotes: [
      { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
      { quote: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr." }
    ]
  },
  {
    category: "Happiness",
    quotes: [
      { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
      { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" }
    ]
  }
];


app.get('/categories', (req, res) => {
  const categories = quotesData.map(item => item.category);
  res.json(categories);
});


app.get('/quotes/:category', (req, res) => {
  const category = req.params.category;
  const categoryData = quotesData.find(item => item.category.toLowerCase() === category.toLowerCase());

  if (categoryData) {
    res.json(categoryData.quotes);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
});


app.get('/quotes', (req, res) => {
  const allQuotes = quotesData.flatMap(item => item.quotes);
  res.json(allQuotes);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
