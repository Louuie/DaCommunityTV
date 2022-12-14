import { User } from 'phosphor-react';
interface Streams {
  data: any[]
}

interface Streamer {
  id: string;
  user_name: string;
  title: string;
  thumbnail_url: string;
  viewer_count: number;
}


export function Streams({ data }: Streams) {
  return (
    <div className='container flex md:mx-auto mr-48 px-82 justify-center align-middle items-center py-24 -mt-20'>
      <section className='flex px-6'>
        <div className='flex flex-wrap -mb-8 mx-[14.25rem]'>
          {data.map((streamer: Streamer, index) =>
            <div key={streamer.id}>
              <div className='group' onClick={() => window.open(`https://twitch.tv/${streamer.user_name}`)}>
                <div className='px-4 truncate card-zoom cursor-pointer'>
                  <img className='card-zoom-image' src={streamer.thumbnail_url.replace('{width}', '320').replace('{height}', '184')} key={Date.now() + index} />
                  <div className='absolute w-auto h-auto bg-gray-900/50 px-2 align-bottom mt-[8.5rem] ml-44 rounded-md'>
                    <a className='text-gray-200 opacity-100'>{streamer.viewer_count.toLocaleString("en-US")} viewers</a>
                  </div>
                </div>
                <div className='flex-1 w-60 h-auto'>
                  <div className='text-left overflow-hidden truncate w-80 ml-3 hover:cursor-pointer group-hover:text-purple-600 group-hover:transition group-hover:duration-[450ms] group-hover:ease-in-out'>{streamer.title}</div><br></br>
                  <div className='-mt-5'>
                    <User size={26} className='-mt-4 ml-2' color='red' />
                    <div className='text-left -mt-[1.5rem] ml-9 text-md'>{streamer.user_name}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}