import Introduction from '../components/introduction'

export default async function Home() {
  return (
    <>
        <div className="w-2/3 mx-auto bg-first">
            <Introduction />
            <a className="" href="/notes">Notes</a>
            <h2 className="text-3xl font-bold underline"> Hello World!</h2>
        </div>
    </>
  )
}
