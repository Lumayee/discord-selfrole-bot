module.exports = function (){
    this.color = [{
        title: "Color",
        description: "Change the appearance of your name on this server (you can only pick one color",
        color: 0xbd93f9,
        ShowRoles: true,
        ShowEmotes: false,
        FieldName: "An overview, what all the colors look like:",
        AllowMultiple: false
    },
        {name: "Black",         RoleID: "1128059812903665795"},    //Black
        {name: "White",         RoleID: "1128059885477695549"},    //White
        {name: "Grey",          RoleID: "1128059921263497216"},    //Grey
        {name: "Ice Blue",      RoleID: "1128059954897629314"},    //Ice Blue
        {name: "Pastel Blue",   RoleID: "1128059995502686338"},    //Pastel Blue
        {name: "Blue",          RoleID: "1128060043598757899"},    //Blue
        {name: "Turquoise",     RoleID: "1128060108656619550"},    //Turquoise
        {name: "Pastel Green",  RoleID: "1128060208741109830"},    //Pastel Green
        {name: "Green",         RoleID: "1128060261706780775"},    //Green
        {name: "Pastel Yellow", RoleID: "1128060308951408701"},    //Pastel Yellow
        {name: "Yellow",        RoleID: "1128060361006907526"},    //Yellow
        {name: "Pastel Orange", RoleID: "1128060403868500038"},    //Pastel Orange
        {name: "Orange",        RoleID: "1128060500073255064"},    //Orange
        {name: "Pastel Red",    RoleID: "1128060442670014594"},    //Pastel Red
        {name: "Red",           RoleID: "1128060548169351209"},    //Red
        {name: "Pastel Purple", RoleID: "1128060677152591995"},    //Pastel Purple
        {name: "Purple",        RoleID: "1128060766608707725"},    //Purple
        {name: "Pastel Rosé",   RoleID: "1128060809914892288"},    //Pastel Rosé
        {name: "Rosé",          RoleID: "1128060913027649688"},    //Rosé
        {name: "Pink",          RoleID: "1128060971064234076"}     //Pink
    ];

    this.gender = [{
        title: "Gender",
        description: "Pick one two or even more genders you are most comfortable with and show people how to refer to you",
        color: 0xbd93f9,
        ShowRoles: true,
        RoleID: "1128057431847612508",
        ShowEmotes: true,
        FieldName: "An overview, what all the roles look like:",
        AllowMultiple: true
    },     //Gender (Category Role)
        {CustomEmote: false, name: "Trans*",        EmoteName: "⚧",   RoleID: "1128054519717187764"},     //Transgender
        {CustomEmote: false, name: "Demi*",         EmoteName: "❇️",   RoleID: "1128066872173154444"},      //Demi Gender
        {CustomEmote: false, name: "Male",           EmoteName: "🚹",   RoleID: "1128054364754419995"},     //Men
        {CustomEmote: false, name: "Female",         EmoteName: "🚺",   RoleID: "1128054492806529064"},     //Woman
        {CustomEmote: false, name: "Other Gender",  EmoteName: "✳️",    RoleID: "1128054564122267668"}     //Other Gender
    ];

    this.sexuality = [{
        title: "Sexuality",
        description: "If you want to show your sexuality these roles are great for you. If you are not sure what to pick or just curious, [here](https://lgbtqia.fandom.com/wiki/Category:Sexual_orientation) is a wiki site for you.",
        color: 0xbd93f9,
        ShowRoles: false,
        RoleID: "1128056898210513016",
        ShowEmotes: true,
        AllowMultiple: true
    }, //Sexuality (Category Role)
        {CustomEmote: true,     name: "Heterosexual",   EmoteName: "hetrosexual",   EmoteID: "634165219488170034",  RoleID: "1128054641448456302"},     //Heterosexual
        {CustomEmote: true,     name: "Lesbian",        EmoteName: "lesbian",       EmoteID: "634165218976727050",  RoleID: "1128054699854139405"},     //Lesbian
        {CustomEmote: false,    name: "Gay",            EmoteName: "🏳️‍🌈",                                          RoleID: "1128054738592743586"},     //Gay
        {CustomEmote: true,     name: "Pansexual",      EmoteName: "pansexual",     EmoteID: "634165218716418059",  RoleID: "1128054762143764540"},     //Pansexual
        {CustomEmote: true,     name: "Bisexual",       EmoteName: "bisexual",      EmoteID: "634165217298743297",  RoleID: "1128054799443701954"},     //Bisexual
        {CustomEmote: true,     name: "Asexual",        EmoteName: "asexual",       EmoteID: "634165216866992158",  RoleID: "1128054829063868456"},     //Asexual
        {CustomEmote: true,     name: "Polysexual",     EmoteName: "Polysexual",    EmoteID: "717874788428939285",  RoleID: "1128054857715154944"},     //Polysexual
        {CustomEmote: false,    name: "Other Sexuality",EmoteName: "❓",                                            RoleID: "1128054896046911640"}      //Other Sexuality
    ];

    this.romantic_attraction = [{
        title: "Romantic Attraction",
        description: "If you want to show people your Romantic Attraction you can use these roles. If you are not sure what to pick or just curious, [here](https://lgbtqia.fandom.com/wiki/Romantic_orientation) is a wiki site for you.",
        color: 0xbd93f9,
        ShowRoles: false,
        RoleID: "1128056737128255588",
        ShowEmotes: false,
        AllowMultiple: true
    },    //Romantic Attraction (Category Role)
        {CustomEmote: false, name: "Heteroromantic",            EmoteName: "", RoleID: "1128055230093869096"},    //Heteroromantic
        {CustomEmote: false, name: "Homoromantic",              EmoteName: "", RoleID: "1128054888010629130"},    //Homoromantic
        {CustomEmote: false, name: "Panromantic",               EmoteName: "", RoleID: "1128055333458296853"},    //Panromantic
        {CustomEmote: false, name: "Biromantic",                EmoteName: "", RoleID: "1128055379859873983"},    //Biromantic
        {CustomEmote: false, name: "Aromantic",                 EmoteName: "", RoleID: "1128055429272973393"},    //Aromantic
        {CustomEmote: false, name: "Polyamore",                 EmoteName: "", RoleID: "1128055471002099793"},    //Polyamore
        {CustomEmote: false, name: "Other Romantic Attraction", EmoteName: "", RoleID: "1128055507731632169"}     //Other Romantic Attraction
    ];

    this.age = [{
        title: "Age",
        description: "Pick a fitting age group",
        color: 0xbd93f9,
        ShowRoles: false,
        RoleID: "1128056654097829898",
        ShowEmotes: true,
        AllowMultiple: false
    },     //Age (Category Role)
        {CustomEmote: false, name: "Under 16",      EmoteName: "👶", RoleID: "1128055692931109014"},     //Under 16
        {CustomEmote: false, name: "Up to 18",      EmoteName: "👦", RoleID: "1128055755380105239"},     //Up to 18
        {CustomEmote: false, name: "18 or above",   EmoteName: "👨", RoleID: "1128055763370266745"}     //18 or above
    ];

    this.hobbies = [{
        title: "Hobbies",
        description: "What do you like?\nThese selfroles are a great way to show that and to find other people that have common interest",
        color: 0xbd93f9,
        ShowRoles: false,
        RoleID: "1128056562934620162",
        ShowEmotes: true,
        AllowMultiple: true
    },     //Hobbies (Category Role)
        {CustomEmote: false, name: "Creative",      EmoteName: "🖌",    RoleID: "1128055764771155999"},     //Creative
        {CustomEmote: false, name: "Singing",       EmoteName: "🎤",    RoleID: "1128055940810297354"},     //Singing
        {CustomEmote: false, name: "Dancing",       EmoteName: "🕺",    RoleID: "1128055973655871619"},     //Dancing
        {CustomEmote: false, name: "Sport",         EmoteName: "🎽",    RoleID: "1128056004463034460"},     //Sport
        {CustomEmote: false, name: "Music",         EmoteName: "🎵",    RoleID: "1128056037602246787"},     //Music
        {CustomEmote: false, name: "Programming",   EmoteName: "⌨️",    RoleID: "1128056069705453629"},     //Programming
        {CustomEmote: false, name: "Gaming",        EmoteName: "🎮",    RoleID: "1128056102668476610"},     //Gaming
        {CustomEmote: false, name: "Anime / Manga", EmoteName: "🍡",    RoleID: "1128056137032417302"},     //Anime / Manga
        {CustomEmote: false, name: "Traveling",     EmoteName: "✈️",    RoleID: "1128056180103716874"}      //Traveling
    ];

    this.dm_status = [{
        title: "DM",
        description: "Are you comfortable with people sending you DMs?",
        color: 0xbd93f9,
        ShowRoles: false,
        RoleID: "1128056355555659818",
        ShowEmotes: true,
        AllowMultiple: false
    },     //DM (Category Role)
        {CustomEmote: false, name: "Accepted",  EmoteName: "👌", RoleID: "1128056222034178058"},     //DM Accepted
        {CustomEmote: false, name: "Ask",       EmoteName: "🖐️", RoleID: "1128056256591048724"},     //Ask before DM
        {CustomEmote: false, name: "No",        EmoteName: "❌", RoleID: "1128056281886892102"}      //Don't DM me
    ];

    this.ping = [{
        title: "Ping",
        description: "Does some of the following sound interesting to you?\nIf you want to get notified when something is happening for these topics these roles are great for you",
        color: 0xbd93f9,
        ShowRoles: false,
        RoleID: "1128056422014394528",
        ShowEmotes: true,
        AllowMultiple: true
    },     //Pings (Category Role)
        {CustomEmote: false, name: "News",      EmoteName: "📰", RoleID: "1128056478436179988"},     //[Ping} News
        {CustomEmote: false, name: "Gaming",    EmoteName: "🖱️", RoleID: "1128056506454114374"}      //[Ping} Gaming
    ];
}