const quotes=[
    "The human being is single, unique, and unrepeatable.- John Paul II" ,
     "Being different was good, I liked it and I wouldn't change myself for anyone. - Amanda James ",
     "Being different isn't a bad thing. It means you're brave enough to be yourself. -Luna Lovegood ",
     "Only recently have I realized that being different is not something you want to hide or squelch or suppress. -Amy Gerstler", 
     "The beauty of life is to be different. Set yourself apart from the crowd, and flourish into the person you were meant to be. -Julian Aguilar ",
     "What sets you apart can sometimes feel like a burden and it's not. And a lot of the time, it's what makes you great. -Emma Stone ",
     "I'm different than everyone else because everyone else is not me. -Julian Aguilar", 
     "When someone becomes successful or rich and famous, people perceive that person as being different. But I'm the same guy I've always been. - Barry Zito", 
     "Sometimes, being different feels a lot like being alone. But with that said, being true to that and being true to my standards and my way of doing things in my art and my music, everything that has made me feel very different, in the end, it has made me the happiest.- Lindsey Stirling", 
     "Normal is not something to aspire to, it's something to get away from.  - Jodie Foster", 
     "I find that the very things that I get criticized for, which is usually being different and just doing my own thing and just being original, is the very thing that's making me successful. - Shania Twain", 
     "In order to be irreplaceable, one must always be different.  -Coco Chanel", 
     "Cherish forever what makes you unique, 'cuz you're really a yawn if it goes. - Bette Midler", 
     "I thought not fitting in was something I had to fix. Now I see it as my superpower.  - Maxime Lagacé", 
     "If you are always trying to be normal, you will never know how amazing you can be. - Maya Angelou", 
     "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind. - Dr. Seuss", 
     "Be daring, be different, be impractical, be anything that will assert integrity of purpose and imaginative vision against the play-it-safers, the creatures of the commonplace, the slaves of the ordinary. -Cecil Beaton", 
      "Fitting in allows you to blend in with everyone else, but being different allows you to be yourself, to be unique, and to be more creative. - Sonya Parker", 
     "The most incredible beauty and the most satisfying way of life come from affirming your own uniqueness. - Jane Fonda", 
     "When you are content to be simply yourself and don't compare or compete, everybody will respect you. -Lao Tzu",
];

const button=document.querySelector('button');
const quote=document.querySelector('h1');

button.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*20);
    quote.textContent=quotes[index];
})