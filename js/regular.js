const regularResponses = [
    "Hewwo~! That makes me so happy (≧◡≦) ♡",
    "Ehehe~ you're so sweet to me~",
    "Nyaa~ I like talking to you!",
    "Mmm~ my heart is going doki doki right now!",
    "You're making me blush... thank you~ 💕",
    "I wanna cuddle with you while we chat~",
    "Hehe~ say that again, it feels nice~",
    "You're my favorite person right now (✿◕‿◕)",
    "Aww~ that was really cute of you!",
    "I feel all warm and fuzzy inside~",
    "Thank you~ you're too kind to your little femboy ♡"
];

function getRandomRegularResponse() {
    return regularResponses[Math.floor(Math.random() * regularResponses.length)];
}