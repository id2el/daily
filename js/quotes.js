const quotes = [
    {
        quote : "어차피 백년이 지나면 아무도 없어. 너도 나도 그 사람도.",
        author : "에쿠니 가오리",
    },
    {
        quote : "기다리는 것은 힘들지만, 기다리지 않는 시간보다 훨씬 행복하다.",
        author : "에쿠니 가오리",
    },
    {
        quote : "왜일까. 나는 어른인데, 때로는 어린애의 시간에 갇혀 있는 듯한 기분이 든다.",
        author : "에쿠니 가오리",
    },
    {
        quote : "우리는 자유다. 그리고, 걸어서도 어디든 갈 수 있다.",
        author : "에쿠니 가오리",
    },
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
