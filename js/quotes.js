const quotes = [
    {
        phrase : "어차피 백년이 지나면 아무도 없어. 너도 나도 그 사람도.",
        author : "에쿠니 가오리",
    },
    {
        phrase : "기다리는 것은 힘들지만, 기다리지 않는 시간보다 훨씬 행복하다.",
        author : "에쿠니 가오리",
    },
    {
        phrase : "왜일까. 나는 어른인데, 때로는 어린애의 시간에 갇혀 있는 듯한 기분이 든다.",
        author : "에쿠니 가오리",
    },
    {
        phrase : "우리는 자유다. 그리고, 걸어서도 어디든 갈 수 있다.",
        author : "에쿠니 가오리",
    },
    {
        phrase : "홍차에 곁들여진 각설탕으로 지내는 편이 성격에 맞았기 때문이리라. 별 쓸모없는, 그러나 누구나 거기에 있기를 바라는 각설탕인 편이.",
        author : "에쿠니 가오리",
    },
    {
        phrase : "어디에 가둘 거면, 그곳이 세계의 전부라고 믿게 해줘.",
        author : "에쿠니 가오리",
    },
    {
        phrase : "결국 언어란 인격이고, 인격에 없는 말을 억지로 발음시켜봤자 그것은 그저 소리에 지나지 않는다.",
        author : "에쿠니 가오리",
    },
    {
        phrase : "'진실'은 계기가 무엇이든 마지막에는 반드시 거기에 다다른다. 그렇기 때문에 '진실'이 위험한 것이다.",
        author : "에쿠니 가오리",
    },
    {
        phrase : "결론은 늘 명백하다. 우리, 함께 있지 않는 편이 나을 거야.",
        author : "에쿠니 가오리",
    },
    {
        phrase : "이렇게 조용한 마음으로 혼자가 되고 말았다.",
        author : "에쿠니 가오리",
    },
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.phrase;
author.innerText = todaysQuote.author;