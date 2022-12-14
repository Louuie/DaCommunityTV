import axios from "axios";
import { useEffect, useState } from "react";
import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";
import { Streams } from "../Components/Streams";
import { Spinner } from "../Components/Spinner";




export function Home() {

    const [streams, setStreams] = useState([]);
    const [loading, setLoadingStatus] = useState(true);

    useEffect(() => {
      const fetchStreams = async () => axios.get('http://localhost:8080/streams').then((res) => setStreams(res.data));
      fetchStreams();
      setTimeout(() => setLoadingStatus(false), 1000);
    }, []);


    return (
        <>
            <NavBar/>
            {loading ? <Spinner/>
            :
            <div>
                <Streams data={streams}/>
                <Footer/>
            </div>
            }
        </>
    );
}