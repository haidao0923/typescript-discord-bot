import { Client } from "discord.js";
const config = require('./config.json');

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(config.token);

console.log(client);
