import Introduction from '../components/introduction'

export default async function Home() {
    // const router = useRouter();
    return (
        <>
            <div className="h-fit md:h-[100vh]">
                <Introduction />
                {/* <a className="" href="/notes">Notes</a>
                <h2 className="text-3xl font-bold underline"> Hello World!</h2> */}
            </div>
        </>

    )
}
