import "../styles/global.css";
import {Inter} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps}){
    console.log("app");
    return (
        <div className="bg-slate-500 min-h-screen text-slate-400 p-10">
            <div className=" bg-white/40 rounded-2xl text-black p-5">
            <Component {...pageProps}/>
            </div>
        </div>
    )
}