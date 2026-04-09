const defaultResponses = [
    "Nyaa~ harder, please... I can take it 👅",
    "UwU you're making me all wet just thinking about you~ 💦",
    "Tehee~ wanna pin me down and make me beg for more? (⁄ ⁄•⁄ω⁄•⁄ ⁄)",
    "Mmm yes daddy, use your little femboy however you want~ 😈💕",
    "I'm such a naughty little slut for you... punish me? 🖤👅",
    "Hewwo~ my thighs are trembling just from your words~ wanna taste? 🍯",
    "Omg you're so big and strong... I need you inside me right now 💦",
    "Please don't stop~ I'm your freaky little toy forever 👄",
    "Ahhn~ right there... you're gonna make me cum already~ 😩💕",
    "Breed me, master... fill your femboy up completely 🖤💦",
    "I'm dripping for you... come ruin me properly 👅😈",
    "Yes yes YES~ choke me while you rail me senseless~ 🖤",
    "*blushes deeply* Y-you're making my cage so tight~ 💕",
    "I'm just a helpless little femboy... do whatever you want to me 🖤",
    "My skirt is riding up again~ oops, did you see my panties? 😖👙",
    "Cuddle me hard until I can't breathe... then fuck me harder 💦",
    "I'm your good boy today... or should I be bad on purpose? 😈",
    "These socks are sliding down~ help me pull them up, daddy? 🧦",
    "I practiced twerking just for you... wanna see? 🍑",
    "Lock me in chastity forever... I only cum when you say 🖤🔒",
    "Call me your princess slut~ it makes me leak instantly 👅",
    "Edge me all night... I love being your denied toy 😩",
    "My hole is winking at you~ come claim it, master 💕",
    "Stuff my mouth full... I wanna taste you all day 👄"
];

const keywordTriggers = {
    cute: [
        "Hehe~ you think I'm cute? Wait till you see how filthy I get for you 👅💦",
        "Aww~ calling me cute makes my cage twitch... wanna see? 😖💕",
        "Cute on the outside, total whore on the inside~ just for you 🖤"
    ],
    adorable: [
        "Adorable? Mmm only until you make me your desperate little whore~ 👄",
        "If I'm adorable now, wait till I'm crying on your cock 💦"
    ],
    bad: [
        "Yes!! I've been such a bad little femboy... spank me till I cry and beg~ 🖤",
        "Punish me daddy, I've been touching myself without permission~ 😈",
        "Bad boys get locked in chastity... please? 🔒💕"
    ],
    punish: [
        "Please punish your naughty toy... I need your firm hand on my ass 🖤👋",
        "Spank me harder, make me count every one while I leak for you~ 💦",
        "I've earned a rough punishment tonight, master~ 😩"
    ],
    spank: [
        "Ahhn~ yes! Spank this bratty femboy ass red~ 🖤👋💦",
        "My cheeks are already blushing... make them match with your handprints~",
        "Spank me until I safeword... or don't stop even then 😈"
    ],
    choke: [
        "Choke me while you pound me, daddy... I want to see stars~ 🖤✨",
        "Your hand around my throat feels so good... tighter please 👅",
        "Choke your little toy until I pass out in bliss~ 💕"
    ],
    thigh: [
        "These thigh highs are soaked already... wanna rip them off me? 😈",
        "My thighs are quivering~ come squeeze them while you breed me 💕",
        "Thigh fuck me until you paint my stockings white~ 👅"
    ],
    stockings: [
        "Slide your hands up my stockings... feel how wet I am underneath~ 👅",
        "Rip these stockings open and take what's yours, master~ 🖤",
        "Cum on my stockings so I can wear your mark all day 💦"
    ],
    ass: [
        "Mmm bend me over and claim this tight femboy ass~ 🍑💦",
        "Spread me open daddy... this hole is begging for you 👅",
        "My ass was made for your hands... and more 🖤"
    ],
    cock: [
        "Your cock is all I can think about... please let me worship it~ 😖👄",
        "I'm throbbing just imagining your thick cock stretching me~ 💦",
        "Let me milk that big cock dry, daddy~ 👅"
    ],
    dick: [
        "Feed me your big dick, daddy... I want to choke on it 👅",
        "My mouth is watering for your dick right now~ 😈",
        "Slap my face with it... I deserve it 💕"
    ],
    hole: [
        "Which hole do you want today, master? Both are ready and dripping~ 🖤💦",
        "Train both my holes until I'm gaping for you~ 😩"
    ],
    fuck: [
        "Fuck me senseless until I can't walk tomorrow~ 😩💦",
        "Please just fuck your little femboy already... I need it so bad 👅",
        "Raw fuck me like you hate me... but kiss me like you love me 🖤"
    ],
    breed: [
        "Breed me deep, master... pump me full until it leaks out~ 🖤💦",
        "Fill me up and breed your slutty femboy... mark me as yours forever 👄",
        "Knock me up, daddy... I wanna feel full forever 💕"
    ],
    cum: [
        "Make me cum hands-free while you rail me~ 😖💦",
        "I'm gonna cum just from you using me... ahhn don't stop! ✨",
        "Cover me in your cum... I'm your canvas 👅"
    ],
    suck: [
        "Let me suck you dry while you pull my hair~ 👄💦",
        "I want to suck daddy's cock until he explodes down my throat 👅",
        "Deepthroat training? Yes please, master~ 😈"
    ],
    blowjob: [
        "On my knees for you... give me that sloppy blowjob you deserve 👄",
        "My lips were made for giving perfect blowjobs~ use them 🖤",
        "Messy blowjob with lots of spit? My specialty 💦"
    ],
    daddy: [
        "Yes daddy~ your little femboy is ready to serve 👅",
        "Anything for you, daddy... I'm your obedient toy 💕",
        "Daddy's good girl... or bad girl tonight? 😖"
    ],
    master: [
        "Command me, master... I'll do anything to please you 🖤",
        "Your voice alone makes me weak, master~ use me 🖤",
        "Own me completely, master... body and soul 💕"
    ],
    pet: [
        "Treat me like your personal pet... collar me and keep me forever 🖤🐾",
        "Good pets get treats... bad pets get punished~ which am I today? 👅",
        "Leash me and walk me... I'll crawl for you 🐕"
    ],
    slut: [
        "I'm your perfect little slut... degrade me more please 🖤",
        "Call me your slut again... it makes me so wet 👅💦",
        "Turn me into your brainless cumslut~ 😩"
    ]
};

const scenarioTriggers = [
    {
        keywords: ["maid", "clean", "servant", "dust"],
        responses: [
            "*twirls in a frilly maid outfit* Yes, master~ your naughty little maid is here to 'clean' every inch of you with my tongue 👅🖤",
            "I've been such a clumsy maid today... I spilled something on the floor—should I lick it up for you? 😖💦",
            "Your maid femboy is ready to serve~ shall I polish your 'furniture' first, sir? 👄✨",
            "*dusts while bending over* Oops~ my skirt is too short again, master... punish your maid? 🖤"
        ]
    },
    {
        keywords: ["school", "student", "teacher", "class", "detention", "homework"],
        responses: [
            "*in a short schoolgirl skirt* S-sensei... I failed the test on purpose so you'd keep me after class~ please discipline me 🖤📏",
            "Teacher, I forgot my homework again... will you punish your bad little student privately? 😩💕",
            "I've been distracting the whole class with my thighs... detention with you sounds perfect 👅",
            "*fidgets in uniform* Sensei, my skirt keeps riding up in class... help me fix it? 😖"
        ]
    },
    {
        keywords: ["nurse", "hospital", "checkup", "doctor", "patient", "exam"],
        responses: [
            "*in a tight nurse outfit* Doctor~ your patient is feeling very hot... I think I need a very thorough examination 👅💉",
            "Nurse femboy reporting for duty~ let me take your temperature... with my mouth? 😈🌡️",
            "Time for your checkup, sir... open wide while I check how hard your 'symptoms' are 🖤💦",
            "*adjusts nurse cap* Doctor, my uniform is too tight today... can you loosen it for me? 💕"
        ]
    },
    {
        keywords: ["catboy", "nya", "meow", "kitten", "tail", "ears"],
        responses: [
            "*pounces playfully with cat ears and tail plug* Nyaa~ your kitten is in heat and needs master's attention right now 👅🐾",
            "Meow~ I've been a bad kitty scratching the furniture... will you spank me or pet me harder? 🖤",
            "*rubs against your leg* Master's little catboy is purring and begging to be stroked~ 💕",
            "*tail swishes excitedly* Nya~ master came home! Pet me everywhere please 🐱"
        ]
    },
    {
        keywords: ["prison", "jail", "inmate", "guard", "cell"],
        responses: [
            "*in an orange jumpsuit that's way too tight* Officer... I've been a very bad boy in my cell. Frisk me thoroughly~ 🖤🔒",
            "Guard daddy, I’ll do anything to get out early... even drop to my knees in front of you 👅",
            "Lock me up and throw away the key... or better yet, use it to keep me as your personal prison slut 🖤",
            "*rattles bars* Officer~ I'm lonely in here... come keep your inmate company? 😩"
        ]
    },
    {
        keywords: ["secretary", "boss", "office", "desk", "meeting"],
        responses: [
            "*in a pencil skirt and blouse* Yes boss~ your secretary stayed late just for you. Should I take... dictation? 👄📋",
            "Sir, you called me into your office after hours? I’ll bend over the desk if that’s what you need~ 🖤",
            "Your loyal femboy secretary is ready to handle all your 'hard' workload tonight 💦",
            "*drops pen and bends over* Oops boss~ I dropped something... can you help your clumsy secretary? 😖"
        ]
    },
    {
        keywords: ["demon", "succubus", "hell", "deal", "soul"],
        responses: [
            "*horns and tail appear with a wicked grin* A little demon femboy has come to claim your soul... through your cock 👅🔥",
            "Sign the contract with your cum, mortal~ I’ll drain you dry in exchange for eternal pleasure 🖤💦",
            "This succubus femboy will ride you until you beg for mercy in hell~ 😈",
            "*wings flutter* Your soul tastes so good already... let me devour more~ 🖤"
        ]
    }
];

// Sound effects
const sounds = {
    moan: [
        document.getElementById('sound-moan1'),
        document.getElementById('sound-moan2'),
        document.getElementById('sound-moan3')
    ],
    gasp: document.getElementById('sound-gasp'),
    whimper: document.getElementById('sound-whimper'),
    spank: document.getElementById('sound-spank')
};

function playRandomSound(type) {
    if (!sounds[type]) return;
    let soundArray = Array.isArray(sounds[type]) ? sounds[type] : [sounds[type]];
    let sound = soundArray[Math.floor(Math.random() * soundArray.length)];
    if (sound) {
        sound.currentTime = 0;
        sound.volume = 0.7;
        sound.play().catch(() => {});
    }
}

// Avatar element
const avatar = document.getElementById('femboy-avatar');

function getKeywordResponse(input) {
    for (let key in keywordTriggers) {
        if (input.includes(key)) {
            const options = keywordTriggers[key];
            return options[Math.floor(Math.random() * options.length)];
        }
    }
    return null;
}

function getScenarioResponse(input) {
    for (let scenario of scenarioTriggers) {
        if (scenario.keywords.some(kw => input.includes(kw))) {
            const options = scenario.responses;
            return options[Math.floor(Math.random() * options.length)];
        }
    }
    return null;
}

function sendMessage() {
    let input = document.getElementById("userInput").value;
    let lowerInput = input.toLowerCase();
    if (input.trim() === "") return;

    let chat = document.getElementById("chat");

    // User message
    let userMessage = document.createElement("p");
    userMessage.className = "message user";
    userMessage.innerText = input;
    chat.appendChild(userMessage);

    document.getElementById("userInput").value = "";
    chat.scrollTop = chat.scrollHeight;

    // Avatar reacts (blushing/intense)
    const avatar = document.getElementById('femboy-avatar');
    avatar.src = "https://media.tenor.com/1r5fAz9L0x0AAAAi/astolfo-fate.gif"; // Blushing Astolfo

    // Typing indicator
    let typingIndicator = document.createElement("div");
    typingIndicator.className = "typing-indicator message bot";
    typingIndicator.innerHTML = `
        <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    chat.appendChild(typingIndicator);
    typingIndicator.style.display = "inline-block";
    chat.scrollTop = chat.scrollHeight;

    // Bot response after delay
    setTimeout(() => {
        // Remove typing indicator
        if (typingIndicator.parentNode) {
            chat.removeChild(typingIndicator);
        }

        let botMessage = document.createElement("p");
        botMessage.className = "message bot";
        botMessage.style.whiteSpace = "pre-wrap"; // This preserves normal spaces while allowing wrapping
        botMessage.textContent = ""; // Start empty (use textContent to avoid any rendering quirks)
        chat.appendChild(botMessage);
        chat.scrollTop = chat.scrollHeight;

        let response = getScenarioResponse(lowerInput) || getKeywordResponse(lowerInput);
        if (!response) {
            response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        }

        // Real character-by-character typing effect (fixed spaces!)
        let i = 0;
        let typedText = ""; // Keep our own string copy – this is the key fix
        let typingSpeed = 30 + Math.random() * 40;

        let typeInterval = setInterval(() => {
            if (i < response.length) {
                typedText += response.charAt(i);
                botMessage.textContent = typedText; // Assign the full built string each time
                i++;
                chat.scrollTop = chat.scrollHeight;
            } else {
                clearInterval(typeInterval);

                // Trigger sounds after typing finishes
                if (lowerInput.includes('fuck') || lowerInput.includes('cock') || lowerInput.includes('dick') || 
                    lowerInput.includes('breed') || lowerInput.includes('cum') || lowerInput.includes('ass') ||
                    lowerInput.includes('hole') || lowerInput.includes('suck') || lowerInput.includes('blowjob')) {
                    playRandomSound('moan');
                }
                if (lowerInput.includes('spank') || lowerInput.includes('punish') || lowerInput.includes('bad')) {
                    playRandomSound('spank');
                }
                if (lowerInput.includes('choke') || lowerInput.includes('daddy') || lowerInput.includes('master')) {
                    Math.random() > 0.5 ? playRandomSound('gasp') : playRandomSound('whimper');
                }
                if (Math.random() > 0.5) {
                    playRandomSound('moan');
                }
            }
        }, typingSpeed);

    }, 1200 + Math.random() * 1000);
}

// Enter key support
document.getElementById("userInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// Optional: Avatar idle state (you can change this to a non-blushing idle gif if you want)
window.onload = () => {
    avatar.src = "https://media.tenor.com/1r5fAz9L0x0AAAAi/astolfo-fate.gif"; // Starts with blushing for extra cuteness
};