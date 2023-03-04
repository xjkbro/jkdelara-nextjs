"use client";

import Link from 'next/link'
import { Fragment } from 'react';
import { usePathname } from 'next/navigation'
export default function Pages({ meta, page }) {
    const path = usePathname()
    let pages: any[] = [];
    for (let i = 1; i < meta.pagination.pageCount + 1; i++) {
        if (page == i)
            pages.push(<Link className="p-2 w-fit h-fit border-fourth border rounded-sm bg-eighth" href={path + "?page=" + i}>{i}</Link>)
        else
            pages.push(<Link className="p-2 w-fit h-fit border-fourth border rounded-sm" href={path + "?page=" + i}>{i}</Link>)
    }
    return (
        <div className="flex justify-center items-center mt-8 gap-2">
            {pages.map((x, i) => <Fragment key={i}>{x}</Fragment>)}
        </div>
    )
}