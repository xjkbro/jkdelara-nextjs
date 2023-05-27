import React from "react";
import NoteHeading from "./NoteHeading";
import NoteNav from "./NoteNav";

export default function PostsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-[90vw] md:w-2/3 mx-auto">
            <NoteHeading />
            <NoteNav />
            {children}
        </div>
    );
}
