import "../styles/global.css";
import {Inter} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps}){
    console.log("app");
    return (
        <div className="bg-slate-500">
            <Component {...pageProps}/>
        </div>
    )
}