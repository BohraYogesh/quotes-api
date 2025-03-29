const express = require('express');
const cors = require('cors');
const quotesData = require('./quotesData.json'); 
const app = express();
const PORT = 5000;
app.use(cors());

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
  const allQuotes = quotesData.flatMap(item =>
    item.quotes.map(quote => ({
      category: item.category, 
      quote: quote.quote,
      author: quote.author
    }))
  );
  res.json(allQuotes);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
