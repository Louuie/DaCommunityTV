import { NavBar } from "../Components/NavBar";

export function TOS() {
    return (
        <div className="">
            <NavBar/>
            <div className="flex justify-center">
                <div className="mt-5 h-60 bg-[#252930] w-[40rem] text-left px-4 rounded-sm">
                    <a className="flex mt-8 ml-4 font-semibold text-2xl">Terms of Service</a>
                </div>
            </div>
        </div>
    );
}