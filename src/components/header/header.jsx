import Login from "./login";
import Navigation from "./navigation/navigation";

export default function Header({}){
    return (
        <div className="h-[50px] w-full
                flex flex-row justify-between items-center gap-5"
        >
            <div>Marketplace</div>
            <Navigation/>
            <Login/>
        </div>
    )
}