import Profile from "./profile/profile";

export default function Login({isAuth}){
    return (
        <>
        { isAuth ? 
        <Profile/>
        :
        <>
            <div className="bg-white py-2 px-4 rounded-3xl
                flex flex-row items-center gap-5">
            <div className="">Login</div>
            <div className="bg-black text-white py-1 px-3 rounded-2xl">Registration</div>
            </div>
        </>
        }
        </>
    );
}