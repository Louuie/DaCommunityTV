
export function Footer() {
    return (
        <div className='align-bottom w-full h-12 bg-[#141b26] fixed justify-center bottom-0'>
            <div className='flex justify-center mt-[1rem]'>
            <a className='text-gray-200 text-sm mr-4 hover:underline hover:underline-offset-2' href="/emote-suggestions">Emote Suggestions</a>
            <a className='text-gray-200 text-sm hover:underline hover:underline-offset-2 cursor-pointer' href="/privacy">Privacy Policy</a>
            <a className='text-gray-200 text-sm ml-4 hover:underline hover:underline-offset-2 cursor-pointer' href="/tos">Terms of Service</a>
            </div>
        </div>
    );
}