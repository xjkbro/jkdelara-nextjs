"use client";

import Link from "next/link";
import { Fragment } from "react";
import { usePathname } from "next/navigation";

export default function Pages({ meta, page }) {
    const path = usePathname();
    let pages: any[] = [];
    if (page > 1)
        pages.push(
            <Link
                className="w-8 h-8 flex justify-center items-center rounded-sm dark:bg-third bg-sixth"
                href={path + "?page=" + (parseInt(page) - 1)}
            >
                &lt;
            </Link>
        );
    else
        pages.push(
            <div className="w-8 h-8 flex justify-center items-center rounded-sm dark:bg-third bg-sixth">
                &lt;
            </div>
        );
    for (let i = 1; i < meta.pagination.pageCount + 1; i++) {
        if (page == i)
            pages.push(
                <Link
                    className="w-8 h-8 flex justify-center items-center rounded-sm dark:bg-third bg-sixth"
                    href={path + "?page=" + i}
                >
                    {i}
                </Link>
            );
        else
            pages.push(
                <Link
                    className="w-8 h-8 flex justify-center items-center rounded-sm"
                    href={path + "?page=" + i}
                >
                    {i}
                </Link>
            );
    }
    if (page < meta.pagination.pageCount)
        pages.push(
            <Link
                className="w-8 h-8 flex justify-center items-center rounded-sm dark:bg-third bg-sixth"
                href={path + "?page=" + (parseInt(page) + 1)}
            >
                &gt;
            </Link>
        );
    else
        pages.push(
            <div className="w-8 h-8 flex justify-center items-center rounded-sm dark:bg-third bg-sixth">
                &gt;
            </div>
        );

    return (
        <div className="flex justify-center items-center mt-8 gap-2">
            {pages.map((x, i) => (
                <Fragment key={i}>{x}</Fragment>
            ))}
        </div>
    );
}
