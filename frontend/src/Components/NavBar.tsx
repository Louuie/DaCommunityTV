import { useEffect, useState } from "react";
import camiloNodders from '../camiloczNodders.gif';
import camiloPillar from '../camiloczPillar.gif';
import markyJam from '../markynJam.gif';

const gifEmotes = [
  {
    src: camiloNodders
  },
  {
    src: camiloPillar
  },
  {
    src: markyJam
  }
];


export function NavBar() {
    const [randomGif, setRandomGif] = useState('');
    useEffect(() => {
        const randomGif = gifEmotes[Math.floor( Math.random() * gifEmotes.length )];
        setRandomGif(randomGif.src);
      }, [gifEmotes]);
    return (
        <div className='w-screen h-auto bg-[#141b26] sticky'>
        <div className='flex mx-auto justify-center md:mr-24 mr-10'>
          <img src={randomGif} className='flex w-20 h-20'/>
          <a className='flex text-gray-200 text-4xl font-bold italic ml-2 mt-[1.9rem] hover:underline hover:underline-offset-8 cursor-pointer' href={'/'}>Da Community</a>
        </div>
      </div>
    );
}