
export default function Cities() {
    return <div>
        <div className="flex flex-col md:flex-row mx-3 my-2 md:mx-0 gap-y-3">
            <div className="bg-[url('/lahore.jpg')] bg-cover bg-center h-[400px] w-[100%]">
                <h1 className="text-white text-3xl ml-4 border-l-8 border-red-700 px-2 font-bold mt-2">Lahore</h1>
                <p className="text-white mt-[280px] mx-1 px-1 opacity-60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis non voluptates, repellat aliquam laboriosam expedita.</p>
            </div>

            <div className="bg-[url('/karachi.jpg')] bg-cover bg-center h-[400px] w-[100%]">
                <h1 className="text-white text-3xl ml-4 border-l-8 border-red-700 px-2 font-bold mt-2">Karachi</h1>
                <p className="text-white mt-[280px] mx-1 px-1 opacity-60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis non voluptates, repellat aliquam laboriosam expedita.</p>
            </div>

            <div className="bg-[url('/islamabad.jpg')] bg-cover bg-center h-[400px] w-[100%]">
                <h1 className="text-white text-3xl ml-4 border-l-8 border-red-700 px-2 font-bold mt-2">Islamabad</h1>
                <p className="text-white mt-[280px] mx-1 px-1 opacity-60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis non voluptates, repellat aliquam laboriosam expedita.</p>
            </div>

            <div className="bg-[url('/peshwar.jpg')] bg-cover bg-center h-[400px] w-[100%]">
                <h1 className="text-white text-3xl ml-4 border-l-8 border-red-700 px-2 font-bold mt-2">Peshwar</h1>
                <p className="text-white mt-[280px] mx-1 px-1 opacity-60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis non voluptates, repellat aliquam laboriosam expedita.</p>
            </div>
        </div>
    </div>;
}
