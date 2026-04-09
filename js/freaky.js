const defaultFreakyResponses = [
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

function getFreakyResponse(text) {
    const lower = text.toLowerCase();
    for (const [key, responses] of Object.entries(keywordTriggers)) {
        if (lower.includes(key)) {
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    return defaultFreakyResponses[Math.floor(Math.random() * defaultFreakyResponses.length)];
}