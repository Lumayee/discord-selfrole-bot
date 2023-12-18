const Eris = require("eris");
const config = require("./config.js");
const selfroleinit = require("./selfroleinit");
const rolesaddrem = require("./roleaddrem");

//load roles from roles.js
const RolesConstructor = require("./roles.js");
//const {Interaction} = require("eris");
const roles = new RolesConstructor();

const bot = new Eris(config.Token, {
    intents: [
        "all",
        "allNonPrivileged",
        "allPrivileged",
        "directMessages",
        "directMessageReactions",
        "directMessageTyping",
        "guilds",
        "guildMembers",
        "guildPresences",
        "guildBans",
        "guildEmojisAndStickers",
        "guildIntegrations",
        "guildInvites",
        "guildVoiceStates",
        "guildPresences",
        "guildMessages",
        "guildMessageReactions",
        "guildMessageTyping",
        "guildWebhooks"
    ]
});

//Ignore Error 1006 1001 and -3008
bot.on("error", function (err, shard){
    if(err.code == 1006) return;
    if(err.code == 1001) return;
    if(err.code == -3008) return;

    return console.log(err.code + "\n" + err);
});

bot.connect();

//Create the slash command on start and log
bot.on("ready", async()=>{
    /*############################*/
    /*##### Temporary Stuff ######*/
    /*############################*/
    await bot.createGuildCommand(config.guildID, {
        name: "Ping",
        type: Eris.Constants.ApplicationCommandTypes.CHAT_INPUT,
        description: "Ping Pong"
    }).catch((e)=>{return console.log(e)});

    await bot.createGuildCommand(config.guildID, {
        name: "Pong",
        type: Eris.Constants.ApplicationCommandTypes.CHAT_INPUT,
        description: "Pong Ping"
    }).catch((e)=>{return console.log(e)});

    await bot.createGuildCommand(config.guildID, {
        name: "Okay",
        type: Eris.Constants.ApplicationCommandTypes.CHAT_INPUT,
        description: "Cool"
    }).catch((e)=>{return console.log(e)});
    /*############################*/
    /*############################*/



    //register Command
    await bot.createGuildCommand(config.guildID, {
        name: "Selfroleinit",
        type: Eris.Constants.ApplicationCommandTypes.CHAT_INPUT,
        description: "Post the messages from the Selfrole Bot"
    }).catch((e)=>{return console.log(e)});

    console.log("Bot started");
})

//Check for interactions
bot.on("interactionCreate", async (interaction)=>{
    //Check if a User interacts with a command
    if (interaction instanceof Eris.CommandInteraction){

        /*############################*/
        /*##### Temporary Stuff ######*/
        /*############################*/
        if(interaction.data.name == "ping"){
            await interaction.createMessage("Pong").catch(e=>{});
        }
        if(interaction.data.name == "pong"){
            await interaction.createMessage("Ping").catch(e=>{});
        }
        if(interaction.data.name == "okay"){
            await interaction.createMessage("Cool").catch(e=>{});
        }
        /*############################*/
        /*############################*/

        //check command name
        if(interaction.data.name == "selfroleinit"){

            //selfroleinit(interaction.channel.id, bot, roles);
            await interaction.defer(64).then(async()=>{
                    await interaction.createMessage("Generating messages with reaction buttons").catch(e=>{});
                }
            ).catch((e)=>{return console.log(e)});

            selfroleinit(interaction.channel.id, bot, roles);
        }
    }

    if (interaction.data.custom_id){
        rolesaddrem(bot, interaction, roles, config);
    }
})