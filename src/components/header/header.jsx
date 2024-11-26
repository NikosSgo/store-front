import Login from "./login";
import Navigation from "./navigation/navigation";

export default function Header({}){
    return (
        <div className="text-slate-400 h-[50px] w-full px-5 
                flex flex-row justify-between items-center gap-5"
        >
            <div>Marketplace</div>
            <Navigation/>
            <Login/>
        </div>
    )
}