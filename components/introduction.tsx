import Image from "next/image"
export default function Introduction() {
  return (
    <>
        <div className="flex flex-col items-center justify-between h-screen lg:flex-row">
            <div className="w-full mx-auto my-12 md:w-2/3" id="title">
                <h1 className="text-[3rem] font-black">Jason-Kyle De Lara</h1>
                <h3 className="text-[2rem] font-bold">Full Stack Web Developer at ICP DAS USA.</h3>
            </div>
            <div id="home-avatar" className="w-full mx-auto my-12 md:w-1/3 h-1/3 " >
                <Image className="bg-transparent rounded-full" src="/me.JPG" priority width={300} height={300} alt="Photo of Jason Kyle De Lara" />
            </div>
        </div>
        
    </>
  )
}

