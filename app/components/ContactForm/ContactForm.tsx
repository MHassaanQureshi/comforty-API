
export default function ContactForm(){
    return(
        <form action="" className="flex flex-col w-[80%] gap-2 pb-10">
            <label htmlFor="name" className="font-bold">Your name</label>
            <input type="text" id="name" className="p-2 border-black border-[1px] border-opacity-25"/>
            <label htmlFor="name" className="font-bold">Email Address</label>
            <input type="text" id="name" className="p-2 border-black border-[1px] border-opacity-25"/>
            <label htmlFor="name" className="font-bold">Subject</label>
            <input type="text" id="name" className="p-2 border-black border-[1px] border-opacity-25"/>
            <label htmlFor="name" className="font-bold">Message</label>
            <input type="text" id="name" className="p-2 border-black border-[1px] border-opacity-25"/>
            <button className="bg-[#029FAE] px-8 py-2 text-white text-center md:w-[237px] md:h-[55px]">Submit</button>
        </form>
    )
}