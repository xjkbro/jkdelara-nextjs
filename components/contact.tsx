"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sending");
        let data = {
            name,
            email,
            message,
        };
        fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(async (res) => {
            const data = await res.json();
            console.log(res);
            console.log("Response received");
            if (res.status === 200 || res.status === 429) {
                setSubmitted(data.message);
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setSubmitted("Something went wrong.");
            }
        });
    };
    return (
        <motion.div
            initial={{
                opacity: 0,
                translateY: 50,
            }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 0.1,
            }}
            className="overflow-hidden  w-[90vw] md:w-2/3 mx-auto"
        >
            <div className="flex min-h-[80vh] items-center justify-start">
                <div className="mx-auto w-full max-w-lg">
                    <h1 className="text-4xl font-medium">Contact Me</h1>
                    <p className="mt-3">
                        Any inquiries must go through here. I will not respond
                        to any inquiries that are in my social media DMs.
                    </p>

                    <form className="mt-10">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="relative z-0">
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    className="peer block w-full appearance-none border-0 border-b border-fourth bg-transparent py-2.5 px-0 text-sm  focus:border-sixth focus:outline-none focus:ring-0"
                                    placeholder=" "
                                />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-eighth peer-focus:dark:text-seventh">
                                    Your name
                                </label>
                            </div>
                            <div className="relative z-0">
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    className="peer block w-full appearance-none border-0 border-b border-fourth bg-transparent py-2.5 px-0 text-sm  focus:border-sixth focus:outline-none focus:ring-0"
                                    placeholder=" "
                                />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-eighth peer-focus:dark:text-seventh">
                                    Your email
                                </label>
                            </div>
                            <div className="relative z-0 col-span-2">
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                    className="peer block w-full appearance-none border-0 border-b border-fourth bg-transparent py-2.5 px-0 text-sm  focus:border-sixth focus:outline-none focus:ring-0"
                                    placeholder=" "
                                ></textarea>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-eighth peer-focus:dark:text-seventh">
                                    Your message
                                </label>
                            </div>
                        </div>
                        <SubmitButton
                            submitted={submitted}
                            name={name}
                            email={email}
                            message={message}
                            handleSubmit={handleSubmit}
                        />
                    </form>
                </div>
            </div>
        </motion.div>
    );
}

const SubmitButton = ({ submitted, name, email, message, handleSubmit }) => {
    if (submitted == "") {
        if (name && email && message) {
            return (
                <input
                    type="submit"
                    value={"Send Message"}
                    onClick={handleSubmit}
                    className="mt-5 rounded-md transition-all cursor-pointer dark:bg-fifth hover:bg-second hover:dark:bg-sixth  bg-first px-10 py-2 text-white dark:text-first"
                />
            );
        } else {
            return <></>;
        }
    } else {
        return <div className="text-center text-sm mt-2">{submitted}</div>;
    }
};
