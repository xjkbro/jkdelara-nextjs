"use client";
import React from "react";
import useSWR from "swr";

async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(input, init);
    return res.json();
}
export default function NoteViews({ slug }) {
    const { data, isLoading } = useSWR<{ views: number }>(
        `/api/views/notes/${slug}`,
        fetcher
    );

    const regex = /(<([^>]+)>)/gi;
    if (isLoading) return <>Loading...</>;
    return <>{data?.views} views</>;
}
