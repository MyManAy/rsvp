"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resend_1 = require("resend");
require("dotenv/config");
var resend = new resend_1.Resend(process.env.RESEND_API_KEY);
console.log(resend.contacts.list({
    audienceId: process.env.RESEND_AUDIENCE,
}));
