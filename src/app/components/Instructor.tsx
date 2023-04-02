import Image from "next/image";
import { Instr } from "./database";

export default function Instructor() {
    return <div>
        <div >
            <h1 className="text-center font-bold text-4xl mt-5">Our Instructors</h1>
            <div className="grid md:grid-cols-3 place-items-center py-9 md:px-56 gap-y-6 md:gap-x-36">
                {Instr.map((elem) => (
                    <div key={elem.id} className="flex w-72 py-7 px-4 md:gap-8 rounded-xl shadow-2xl md:flex-row flex-col items-center hover:scale-105 duration-200">
                        <div>
                            <Image src="/Ziakhan.webp" alt="logo" height={100} width={100} className="rounded-full" />
                        </div>
                        <div className="mt-2  text-center">
                            <h1 className="font-bold text-xl">{elem.heading}</h1>
                            <p className="pt-2 text-gray-700">{elem.text}</p>
                            <button className="text-blue-700 border hover:bg-blue-600 hover:text-white font-semibold rounded-3xl px-4 py-[3px] mt-2 border-blue-700">View Profile</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}
