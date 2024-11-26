import Profile from "./profile/profile";

export default function Login({isAuth}){
    return (
        <>
        { isAuth ? 
        <Profile/>
        :
        <>
            <div>Login</div>
            <div>Registration</div>
        </>
        }
        </>
    );
}