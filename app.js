const quotes_list = {
    "Albert Einstein": "Imagination is more important than knowledge.",
    "Maya Angelou": "Try to be a rainbow in someone's cloud.",
    "Mark Twain": "The secret of getting ahead is getting started.",
    "Oscar Wilde": "Be yourself; everyone else is already taken.",
    "Confucius": "It does not matter how slowly you go as long as you do not stop.",
    "Ralph Waldo Emerson": "The only way to have a friend is to be one.",
    "Eleanor Roosevelt": "The future belongs to those who believe in the beauty of their dreams.",
    "Walt Disney": "All our dreams can come true, if we have the courage to pursue them.",
    "Helen Keller": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "Aristotle": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "Maya Angelou": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "Martin Luther King Jr.": "The time is always right to do what is right.",
    "Winston Churchill": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Mahatma Gandhi": "Be the change that you wish to see in the world.",
    "Stephen Covey": "I am not a product of my circumstances. I am a product of my decisions.",
    "Anne Frank": "No one has ever become poor by giving.",
    "C.S. Lewis": "You are never too old to set another goal or to dream a new dream.",
    "Nelson Mandela": "Education is the most powerful weapon which you can use to change the world.",
    "Mother Teresa": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "Maya Angelou": "If you don't like something, change it. If you can",
}
  
  

const buttonElement =document.querySelector('.btn');
const authorElement =document.querySelector('.author');
const quoteElement =document.querySelector('.quote');

authorElement.textContent='Mark Twain';
quoteElement.textContent=quotes_list['Mark Twain'];

const keys = Object.keys(quotes_list);

 function generator(){
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    authorElement.textContent=randomKey;
    quoteElement.textContent=quotes_list[randomKey];
 }
 



buttonElement.addEventListener('click',generator);
