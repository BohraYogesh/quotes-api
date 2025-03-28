const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());


const quotesData =[
  {
    "category": "Motivation",
    "quotes": [
      {"quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
      {"quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.", "author": "Winston Churchill"},
      {"quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
      {"quote": "The harder you work for something, the greater you'll feel when you achieve it.", "author": "Colin Powell"},
      {"quote": "Don’t watch the clock; do what it does. Keep going.", "author": "Sam Levenson"},
      {"quote": "Opportunities don't happen. You create them.", "author": "Chris Grosser"},
      {"quote": "It always seems impossible until it’s done.", "author": "Nelson Mandela"},
      {"quote": "Everything you can imagine is real.", "author": "Pablo Picasso"},
      {"quote": "Work hard in silence, let success make the noise.", "author": "Frank Ocean"},
      {"quote": "Your limitation—it's only your imagination.", "author": "Tony Robbins"},
      {"quote": "Act as if what you do makes a difference. It does.", "author": "William James"},
      {"quote": "The future depends on what you do today.", "author": "Mahatma Gandhi"},
      {"quote": "Dream big and dare to fail.", "author": "Norman Vaughan"},
      {"quote": "If opportunity doesn’t knock, build a door.", "author": "Milton Berle"},
      {"quote": "Quality means doing it right when no one is looking.", "author": "Henry Ford"},
      {"quote": "Do what you can, with what you have, where you are.", "author": "Theodore Roosevelt"},
      {"quote": "Stay hungry, stay foolish.", "author": "Steve Jobs"},
      {"quote": "Nothing will work unless you do.", "author": "Maya Angelou"},
      {"quote": "Do one thing every day that scares you.", "author": "Eleanor Roosevelt"},
      {"quote": "Hustle in silence and let your success make the noise.", "author": "Unknown"}
    ]
  },
  {
    "category": "Family",
    "quotes": [
      {"quote": "Family is not an important thing, it’s everything.", "author": "Michael J. Fox"},
      {"quote": "The love of family is life's greatest blessing.", "author": "George Bernard Shaw"},
      {"quote": "Family means no one gets left behind or forgotten.", "author": "David Ogden Stiers"},
      {"quote": "What can you do to promote world peace? Go home and love your family.", "author": "Mother Teresa"},
      {"quote": "A happy family is but an earlier heaven.", "author": "George Bernard Shaw"},
      {"quote": "To us, family means putting your arms around each other and being there.", "author": "Barbara Bush"},
      {"quote": "Other things may change us, but we start and end with the family.", "author": "Anthony Brandt"},
      {"quote": "Rejoice with your family in the beautiful land of life!", "author": "Albert Einstein"},
      {"quote": "The bond that links your true family is not one of blood, but of respect and joy in each other's life.", "author": "Richard Bach"},
      {"quote": "Nothing is better than going home to family and eating good food and relaxing.", "author": "Irina Shayk"},
      {"quote": "Family gives you the roots to stand tall and strong.", "author": "Unknown"},
      {"quote": "The memories we make with our family are everything.", "author": "Candace Cameron Bure"},
      {"quote": "A family is a little world created by love.", "author": "Unknown"},
      {"quote": "Home is where your story begins.", "author": "Unknown"},
      {"quote": "A man travels the world over in search of what he needs, and returns home to find it.", "author": "George A. Moore"},
      {"quote": "The strength of a family, like the strength of an army, is in its loyalty to each other.", "author": "Mario Puzo"},
      {"quote": "The family is the first essential cell of human society.", "author": "Pope John XXIII"},
      {"quote": "Call it a clan, call it a network, call it a tribe, call it a family. Whatever you call it, whoever you are, you need one.", "author": "Jane Howard"},
      {"quote": "The greatest gift of life is family.", "author": "Unknown"}
    ]
  },
  {
    "category": "Success",
    "quotes": [
      {"quote": "Success is not how high you have climbed, but how you make a positive difference to the world.", "author": "Roy T. Bennett"},
      {"quote": "The secret of success is to do the common thing uncommonly well.", "author": "John D. Rockefeller Jr."},
      {"quote": "Success usually comes to those who are too busy to be looking for it.", "author": "Henry David Thoreau"},
      {"quote": "Don’t be afraid to give up the good to go for the great.", "author": "John D. Rockefeller"},
      {"quote": "I find that the harder I work, the more luck I seem to have.", "author": "Thomas Jefferson"},
      {"quote": "Success is not in what you have, but who you are.", "author": "Bo Bennett"},
      {"quote": "It is better to fail in originality than to succeed in imitation.", "author": "Herman Melville"},
      {"quote": "The road to success and the road to failure are almost exactly the same.", "author": "Colin R. Davis"},
      {"quote": "Success is getting what you want. Happiness is wanting what you get.", "author": "Dale Carnegie"},
      {"quote": "Success is a journey, not a destination.", "author": "Arthur Ashe"},
      {"quote": "Do not be embarrassed by your failures, learn from them and start again.", "author": "Richard Branson"},
      {"quote": "Success is not the key to happiness. Happiness is the key to success.", "author": "Albert Schweitzer"},
      {"quote": "The way to get started is to quit talking and begin doing.", "author": "Walt Disney"},
      {"quote": "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", "author": "Colin Powell"},
      {"quote": "Fall seven times and stand up eight.", "author": "Japanese Proverb"},
      {"quote": "Success is stumbling from failure to failure with no loss of enthusiasm.", "author": "Winston Churchill"}
    ]
  },
  {
    "category": "Happiness",
    "quotes": [
      {"quote": "Happiness depends upon ourselves.", "author": "Aristotle"},
      {"quote": "Happiness is not something ready-made. It comes from your own actions.", "author": "Dalai Lama"},
      {"quote": "The purpose of our lives is to be happy.", "author": "Dalai Lama"},
      {"quote": "The only joy in the world is to begin.", "author": "Cesare Pavese"},
      {"quote": "Happiness is not by chance, but by choice.", "author": "Jim Rohn"},
      {"quote": "Happiness is when what you think, what you say, and what you do are in harmony.", "author": "Mahatma Gandhi"},
      {"quote": "Happiness is a warm puppy.", "author": "Charles M. Schulz"},
      {"quote": "For every minute you are angry you lose sixty seconds of happiness.", "author": "Ralph Waldo Emerson"},
      {"quote": "The secret of happiness is not in doing what one likes, but in liking what one does.", "author": "James M. Barrie"},
      {"quote": "True happiness is not attained through self-gratification, but through fidelity to a worthy purpose.", "author": "Helen Keller"},
      {"quote": "The happiest people don’t have the best of everything, they just make the best of everything.", "author": "Unknown"},
      {"quote": "Happiness grows at our own firesides, and is not to be picked in strangers’ gardens.", "author": "Douglas Jerrold"},
      {"quote": "Most folks are as happy as they make up their minds to be.", "author": "Abraham Lincoln"},
      {"quote": "Count your age by friends, not years. Count your life by smiles, not tears.", "author": "John Lennon"},
      {"quote": "Happiness is not a goal; it is a by-product.", "author": "Eleanor Roosevelt"},
      {"quote": "The greatest happiness you can have is knowing that you do not necessarily require happiness.", "author": "William Saroyan"},
      {"quote": "There is only one happiness in this life, to love and be loved.", "author": "George Sand"},
      {"quote": "Happiness is like a butterfly; the more you chase it, the more it will elude you.", "author": "Henry David Thoreau"},
      {"quote": "A smile is a curve that sets everything straight.", "author": "Phyllis Diller"},
      {"quote": "Happiness radiates like a fragrance from a flower and draws all good things towards you.", "author": "Maharishi Mahesh Yogi"}
    ]
  },
  {
    "category": "Love",
    "quotes": [
      {
        "quote": "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
        "author": "Maya Angelou"
      },
      {
        "quote": "I love you, not only for what you are but for what I am when I am with you.",
        "author": "Roy Croft"
      },
      {
        "quote": "If I had a flower for every time I thought of you, I could walk in my garden forever.",
        "author": "Alfred Tennyson"
      },
      {
        "quote": "I love you, and that's the beginning and end of everything.",
        "author": "F. Scott Fitzgerald"
      },
      {
        "quote": "We love because it's the only true adventure.",
        "author": "Nikki Giovanni"
      },
      {
        "quote": "You are my sun, my moon, and all my stars.",
        "author": "E.E. Cummings"
      },
      {
        "quote": "The best thing to hold onto in life is each other.",
        "author": "Audrey Hepburn"
      },
      {
        "quote": "A successful marriage requires falling in love many times, always with the same person.",
        "author": "Mignon McLaughlin"
      },
      {
        "quote": "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
        "author": "Unknown"
      },
      {
        "quote": "Love is when the other person's happiness is more important than your own.",
        "author": "H. Jackson Brown, Jr."
      },
      {
        "quote": "There is no remedy for love but to love more.",
        "author": "Henry David Thoreau"
      },
      {
        "quote": "You are my today and all of my tomorrows.",
        "author": "Leo Christopher"
      },
      {
        "quote": "To love and be loved is to feel the sun from both sides.",
        "author": "David Viscott"
      },
      {
        "quote": "I have found the one whom my soul loves.",
        "author": "Song of Solomon 3:4"
      },
      {
        "quote": "Love does not consist of gazing at each other, but in looking outward together in the same direction.",
        "author": "Antoine de Saint-Exupéry"
      },
      {
        "quote": "Love is composed of a single soul inhabiting two bodies.",
        "author": "Aristotle"
      },
      {
        "quote": "In the whole world, there is no heart for me like yours.",
        "author": "Maya Angelou"
      },
      {
        "quote": "My heart is, and always will be, yours.",
        "author": "Jane Austen"
      },
      {
        "quote": "You are my paradise, and I would happily get lost in you forever.",
        "author": "Unknown"
      },
      {
        "quote": "I would rather spend one lifetime with you than face all the ages of this world alone.",
        "author": "J.R.R. Tolkien"
      }
    ]
  },
  {
    "category": "Funny",
    "quotes": [
      { "quote": "I'm not arguing, I'm just explaining why I'm right.", "author": "Unknown" },
      { "quote": "Life is short. Smile while you still have teeth.", "author": "Unknown" },
      { "quote": "A day without laughter is a day wasted.", "author": "Charlie Chaplin" },
      { "quote": "My bed is a magical place where I suddenly remember everything I forgot to do.", "author": "Unknown" },
      { "quote": "I am on a seafood diet. I see food, and I eat it.", "author": "Unknown" },
      { "quote": "Common sense is like deodorant. The people who need it most never use it.", "author": "Unknown" },
      { "quote": "I used to think I was indecisive, but now I'm not too sure.", "author": "Unknown" },
      { "quote": "I’m not lazy, I’m just on energy-saving mode.", "author": "Unknown" },
      { "quote": "I love my six-pack so much, I protect it with a layer of fat.", "author": "Unknown" },
      { "quote": "If at first, you don’t succeed, then skydiving definitely isn’t for you.", "author": "Steven Wright" },
      { "quote": "My wallet is like an onion. Opening it makes me cry.", "author": "Unknown" },
      { "quote": "I told my wife she should embrace her mistakes. She gave me a hug.", "author": "Unknown" },
      { "quote": "I’m not great at the advice. Can I interest you in a sarcastic comment?", "author": "Chandler Bing" },
      { "quote": "Some people graduate with honors, I am just honored to graduate.", "author": "Unknown" },
      { "quote": "Behind every great man is a woman rolling her eyes.", "author": "Jim Carrey" },
      { "quote": "I don’t need a hair stylist, my pillow gives me a new hairstyle every morning.", "author": "Unknown" },
      { "quote": "I drink coffee because without it, I’m basically a two-year-old who missed a nap.", "author": "Unknown" },
      { "quote": "Why don’t skeletons fight each other? They don’t have the guts.", "author": "Unknown" },
      { "quote": "My boss told me to have a good day... so I went home.", "author": "Unknown" },
      { "quote": "I have enough money to live comfortably for the rest of my life… if I die next week.", "author": "Unknown" }
    ]
  },
  {
    "category": "Friendship",
    "quotes": [
      { "quote": "A real friend is one who walks in when the rest of the world walks out.", "author": "Walter Winchell" },
      { "quote": "Friendship is born at that moment when one person says to another, ‘What! You too? I thought I was the only one.’", "author": "C.S. Lewis" },
      { "quote": "A friend is someone who knows all about you and still loves you.", "author": "Elbert Hubbard" },
      { "quote": "True friends are never apart, maybe in distance but never in heart.", "author": "Unknown" },
      { "quote": "Friends are the family we choose for ourselves.", "author": "Edna Buchanan" },
      { "quote": "Friendship is not about who you have known the longest, it's about who walked into your life and said, ‘I’m here for you,’ and proved it.", "author": "Unknown" },
      { "quote": "A friend is someone who makes it easy to believe in yourself.", "author": "Heidi Wills" },
      { "quote": "Good friends help you to find important things when you have lost them... your smile, your hope, and your courage.", "author": "Doe Zantamata" },
      { "quote": "A single rose can be my garden… a single friend, my world.", "author": "Leo Buscaglia" },
      { "quote": "Friendship is like a four-leaf clover: hard to find and lucky to have.", "author": "Irish Proverb" },
      { "quote": "A true friend is somebody who can make us feel better no matter how bad things may be.", "author": "Ralph Waldo Emerson" },
      { "quote": "There is nothing on this earth more to be prized than true friendship.", "author": "Thomas Aquinas" },
      { "quote": "Friends are those rare people who ask how we are and then wait to hear the answer.", "author": "Ed Cunningham" },
      { "quote": "A friend is what the heart needs all the time.", "author": "Henry Van Dyke" },
      { "quote": "True friends are like stars; you don’t always see them, but you know they’re always there.", "author": "Unknown" },
      { "quote": "Friendship is the only cement that will ever hold the world together.", "author": "Woodrow Wilson" },
      { "quote": "The only way to have a friend is to be one.", "author": "Ralph Waldo Emerson" },
      { "quote": "Friends are the siblings God never gave us.", "author": "Mencius" },
      { "quote": "A real friend is one who overlooks your broken fence and admires the flowers in your garden.", "author": "Unknown" },
      { "quote": "True friends don’t judge each other, they judge other people together.", "author": "Unknown" }
    ]
  }
  
  
]
;


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
