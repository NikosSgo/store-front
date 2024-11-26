import Header from "@/components/header/header";
import { useEffect, useState } from "react";

export default function UserPage({userId}){
    const [user,setUser] = useState(null)
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/store/users/${userId}`);
                if (!response.ok) {
                  throw new Error(`Ошибка: ${response.statusText}`);
                }
                const data = await response.json();
                console.log(data);
                setUser(data);
            } 
            catch (err) {
                setError(err.message);
            }
        };
        fetchUser()
    },[userId])

    if (error) return <div>{error}</div>;
    if (!user) return <div>Загрузка...</div>;

    return ( 
        <>
        <Header/>
        <div className="my-10 grid grid-cols-2 gap-5 text-slate-500 text-lg"> 
            <div className="col-span-1 bg-white min-h-[500px] rounded-2xl p-5">
                {/*Корзина.*/}
                Корзина заказов:
            </div>
            <div className="col-span-1 grid grid-rows-3 gap-4">
                {/*Информация о пользоветеле*/}
                <div className="bg-white rounded-2xl p-5">
                    Информция о пользоветеле:
                    <p>Имя: {user.name}</p>
                    <p>Фамилия: {user.surname}</p>
                    <p>Почта: {user.mail}</p>
                    <p>Логин: {user.login}</p>
                    <p>Баланс: {user.balance === null ? 0 : user.balance}</p>
                </div>
                {/*Заказы */}
                <div className="bg-white rounded-2xl p-5">
                    Твои заказы:
                </div>
                {/*Отзывы */}
                <div className="bg-white rounded-2xl p-5">
                    Твои отзывы:
                </div>
            </div>
        </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    return { props: { userId: id } };
}