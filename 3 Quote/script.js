

const quotes =[
    "In the middle of every difficulty lies opportunity. — Albert Einstein"
    ,
"Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson"
,
"Happiness depends upon ourselves. — Aristotle"
,
"Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill"
,
"The best way to predict the future is to invent it. — Alan Kay"
,
"You miss 100% of the shots you don’t take. — Wayne Gretzky"
,
"It always seems impossible until it’s done. — Nelson Mandela"
,
"Don’t count the days, make the days count. — Muhammad Ali"
,
"Simplicity is the ultimate sophistication. — Leonardo da Vinci"
,
"Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs"
,
"The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt"
,
"Do what you can, with what you have, where you are. — Theodore Roosevelt"
,
"Act as if what you do makes a difference. It does. — William James"
,
"What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar"
,
"Believe you can and you’re halfway there. — Theodore Roosevelt"
,
"Everything you’ve ever wanted is on the other side of fear. — George Addair"
,
"Opportunities don’t happen, you create them. — Chris Grosser"
,
"Don’t watch the clock; do what it does. Keep going. — Sam Levenson"
,
"Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman"
,
"The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt"
,
"It does not matter how slowly you go as long as you do not stop. — Confucius"
,
"Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis"
,
"Quality is not an act, it is a habit. — Aristotle"
,
"Don’t let yesterday take up too much of today. — Will Rogers"
,
"Failure is simply the opportunity to begin again, this time more intelligently. — Henry Ford"
,
"Dream big and dare to fail. — Norman Vaughan"
,
"The secret of getting ahead is getting started. — Mark Twain"
,
"Limit your ‘always’ and your ‘nevers.’ — Amy Poehler"
,
"Turn your wounds into wisdom. — Oprah Winfrey",
"Do not wait to strike till the iron is hot, but make it hot by striking. — William Butler Yeats"
]


const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    if (usedIndexes.size>=quotes.length){
        usedIndexes.clear()
    }
    while(true){
  const randomIdx = Math.floor(Math.random() * quotes.length);

  if (usedIndexes.has(randomIdx)) continue

  const quote = quotes[randomIdx]

    quoteElement.innerHTML = quote;
    usedIndex.add(randomIdx)
    break
}}