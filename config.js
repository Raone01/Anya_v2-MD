const { readFileSync, watchFile, unwatchFile } = require('fs')
const { redBright } = require('chalk')
require('./lib/config')
require("dotenv").config();

global.zApiKey = {// if this API key get expired then please go to https://www.fxacb-api.my.id and get a new api key.
       one: "zenzkey_998568986d"
}


global.botname = process.env.BotName || "∆~•Ꮎɱι-Ᏸσт•~∆" 
global.author = process.env.Author || "@∆~•Ꮎɱι-Ᏸσт•~∆" 
global.packname = process.env.PackName || "∆~•Ꮎᴍɪ•~∆" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© ∆~•Ꮎɱι-Ᏸσт•~∆" 
global.prefa = process.env.Prefix || ['.'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "∆~•Sᴀɴᴀᴛᴀɴɪ Aᴅɪᴛʏᴀ•~∆" 
global.ownernumber = process.env.Owner_Number || "919634945456" 
global.adress = process.env.Continent || "Asia, India, Uttar Pradesh" 
global.timezone = process.env.TimeZone || "Asia/Kolkata" 
global.instagramId = process.env.Insta || "silent.xarmony" 
global.email = process.env.Email_Id || "Not Available" 

global.mongoUrl = process.env.MongoDB || "mongodb+srv://debopi8523:aaaa1111aaaa@cluster0.9s0bfxq.mongodb.net/?retryWrites=true&w=majority"; 

global.warns = process.env.Warns_Limits || 3; 

global.badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.imgur.com/uk228O6.jpeg";

global.message = {
    success: 'Done ✅',
    admin: 'You must be an admin to use this command.',
    botAdmin: 'The bot needs to be an admin to process this command.',
    owner: 'You are not the owner of this bot so you cannot use this command.',
    group: 'This command is only made for group chats.',
    private: 'This command is only for private chats.',
    wait: '```「▰▰▰▱▱▱▱▱▱▱」Loading...```',
    link: 'I need a link to process this command.',
    error: '```404 Error```',
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "∆~•Ꮎɱι-Ᏸσт•~∆", 
  author: process.env.Author || "@∆~•Ꮎɱι-Ᏸσт•~∆",
  packname: process.env.PackName || "∆~•Ꮎᴍɪ•~∆",
  myweb: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© ∆~•Ꮎɱι-Ᏸσт•~∆",
  prefa: process.env.Prefix || ['.'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "∆~•Sᴀɴᴀᴛᴀɴɪ Aᴅɪᴛʏᴀ•~∆",
  ownernumber: process.env.Owner_Number || "919634945456",
  adress: process.env.Continent || "Asia, India, Uttar Pradesh",
  timezone: process.env.TimeZone || "Asia/Kolkata", 
  instagramId: process.env.Insta || "silent.xarmony",
  email: process.env.Email_Id || "Not Available",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://debopi8523:aaaa1111aaaa@cluster0.9s0bfxq.mongodb.net/?retryWrites=true&w=majority",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_Der Hui Aane Me Lekin Shukra Hai Fir Bhi Aaye To🌚🌝_',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_Khatam Tata Bye Bye Goodbye Gya 🗿🚬_',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_MUBARAK HO AAP ADMIN BAN CHUKE HAI🥳_',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_HONI KO KOUN TAAL SAKTA HAI YAAR🥲_',
  sessionId: process.env.SESSION_ID || "_AN_YA_HoledEarplugs", 
  auto_read_status : process.env.AUTO_READ_STATUS || "false",
  alwaysonline: process.env.ALWAYS_ONLINE || "false", 
  readmessage: process.env.READ_MESSAGE || "false", 
  auto_status_saver: process.env.AUTO_STATUS_SAVER || "false",
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  menu_pic: "https://i.imgur.com/uk228O6.jpeg",
  message: {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
  },
       }
