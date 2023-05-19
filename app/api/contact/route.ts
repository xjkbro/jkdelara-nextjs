import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import { Redis } from "@upstash/redis";

export async function GET(request: NextRequest) {
    // console.log(request.ip);
    return NextResponse.json({
        message: "This endpoint only supports a POST request",
    });
}
export async function POST(request: NextRequest) {
    // Create a new ratelimiter, that allows 10 requests per 10 seconds
    const ratelimit = new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(2, "1h"),
        analytics: true,
        prefix: "@upstash/ratelimit",
    });
    const obj = await request.json();

    // Use a constant string to limit all requests with a single ratelimit
    // Or use a userID, apiKey or ip address for individual limits.

    const identifier = request.ip ?? obj.email;
    const { success } = await ratelimit.limit(identifier);

    if (!success) {
        return NextResponse.json(
            { message: "Too many requests. Try again in an hour." },
            { status: 429 }
        );
    }

    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.GMAIL_LOGIN,
            pass: process.env.GMAIL_PASSWORD,
        },
        secure: true,
    });

    const mailData = {
        from: process.env.GMAIL_LOGIN,
        to: process.env.GMAIL_SEND_TO,
        subject: `Message From ${obj.name}`,
        text: obj.message + " | Sent from: " + obj.email,
        html: `<div>${obj.message}</div><p>Sent from:
        ${obj.email}</p>`,
    };
    transporter.sendMail(mailData, function (err, info) {
        console.log(err);
    });

    return NextResponse.json(
        { message: "Thank you for your submission!" },
        { status: 200 }
    );
}
