import Image from "next/image";
import Link from "next/link";
import ImageModal from "./imageModal";
import "../../../public/spinner.svg";
import { Suspense } from "react";
// import AnimateImg from "./AnimateImg";

export const metadata = {
    title: "Arts",
};

export default async function Art() {
    const arts = await getArt();
    // const regex = /(<([^>]+)>)/gi;
    return (
        <section className="w-[90vw] md:w-2/3 mx-auto">
            <div className="mb-4 ">
                <h1 className="font-bold text-[2rem]">Arts</h1>
                <p className="text-sm">
                    Featuring another passion of mine, Photography. While I
                    still am fairly new and don&apos;t have the best equipment,
                    you can{" "}
                    <Link
                        href="/contact"
                        className="hover:underline text-eighth"
                    >
                        contact
                    </Link>{" "}
                    me for any small inquiries.
                </p>
            </div>

            {/* <Suspense fallback={<>Loading</>}> */}

            {/* <div id="art-system" className="grid gap-4 md:grid-cols-4">
                {arts.data.map((art, i) => (
                    <AnimateImg key={art.id} art={art} i={i} />
                ))}
            </div> */}
            <div id="art-system" className="grid gap-4 md:grid-cols-4">
                {arts.data.map((art, i) => (
                    <article key={art.id} className="w-full h-full">
                        <ImageModal art={art} i={i} />
                    </article>
                ))}
            </div>
            {/* </Suspense>  */}
        </section>
    );
}

async function getArt() {
    const res = await fetch(
        "https://cms.jkdelara.com/api/photos?populate[photograph][fields][0]=url",
        { next: { revalidate: 120 } }
    );
    return res.json();
}
