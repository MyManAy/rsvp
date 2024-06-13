"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const resend_1 = require("resend");
require("dotenv/config");
const adminSupabase_1 = require("./supabase/adminSupabase");
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { data: supabaseEmails } = yield adminSupabase_1.supabase
        .from("attendants")
        .select("email");
    const audienceEmails = (_a = (yield resend.contacts.list({
        audienceId: process.env.RESEND_AUDIENCE,
    })).data) === null || _a === void 0 ? void 0 : _a.data;
    for (const contact of audienceEmails !== null && audienceEmails !== void 0 ? audienceEmails : []) {
        // if there is an email in the audience which is NOT part of the database, remove it
        if (!supabaseEmails.some((item) => contact.email == item.email)) {
            yield resend.contacts.remove({
                id: contact.id,
                audienceId: process.env.RESEND_AUDIENCE,
            });
        }
    }
    for (const row of supabaseEmails !== null && supabaseEmails !== void 0 ? supabaseEmails : []) {
        // if there is an email in the database which is NOT part of the audience, add it
        if (!audienceEmails.some((item) => row.email == item.email)) {
            yield resend.contacts.create({
                email: row.email,
                unsubscribed: false,
                audienceId: process.env.RESEND_AUDIENCE,
            });
        }
    }
});
run();
