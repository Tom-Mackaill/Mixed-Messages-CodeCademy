
const quoteSentence = [
    'Success is not final; failure is not fatal: It is the courage to continue that counts.', 
    'It is better to fail in originality than to succeed in imitation.',
    'The road to success and the road to failure are almost exactly the same.',
    'Success usually comes to those who are too busy looking for it.',
    'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.',
    'Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent.',
    'There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.',
    'Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.',
    'I never dreamed about success. I worked for it.',
    'Success is getting what you want, happiness is wanting what you get.'
];


const randomMessage = () => {
let randomNumber = Math.floor(Math.random() * 10);
if (randomNumber === 0){
    return quoteSentence[0]
} else if (randomNumber === 1){
    return  quoteSentence[1]
} else if (randomNumber === 2){
    return  quoteSentence[2]
} else if (randomNumber === 3){
    return  quoteSentence [3]
} else if (randomNumber === 4){
    return  quoteSentence[4]
} else if (randomNumber === 5){
    return  quoteSentence[5]
} else if (randomNumber === 6){
    return  quoteSentence[6]
} else if (randomNumber === 7){
    return  quoteSentence[7]
} else if (randomNumber === 8){
    return  quoteSentence[8]
} else if (randomNumber === 9){
    return  quoteSentence[9]
}
};
console.log(randomMessage())




