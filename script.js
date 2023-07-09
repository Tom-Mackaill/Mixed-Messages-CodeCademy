const randomQuote = () => {

const quotes = [
    "We cannot solve problems with the kind of thinking we employed when we came up with them",
    "Learn as if you will live forever, live like you will die tomorrow",
    "Stay away from those people who try to disparage your ambitions",
    "When you give joy to other people, you get more joy in return",
    "When you change your thoughts, remember to also change your world",
    "It is only when we take chances. when our lives improve"
];

return quotes[Math.floor(Math.random() * quotes.length)];

};

console.log(randomQuote());

