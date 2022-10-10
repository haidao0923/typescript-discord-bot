import { Client } from "discord.js";

console.log("Bot is starting...");

token = "MTAyOTEyNTUxMjA2MjMxNjU5NA.GfWPS3.lkv_OXDs3Dv-H9ayQYQnOfm-0HnN9ok8_tvT8E";

const client = new Client({
    intents: []
});

client.login(token);

console.log(client);
