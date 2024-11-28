import Header from "@/components/header/header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ItemPage({itemId}){
    const [item,setItem] = useState(null)
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/store/items/${itemId}`);
                if (!response.ok) {
                  throw new Error(`Ошибка: ${response.statusText}`);
                }
                const data = await response.json();
                console.log(data);
                setItem(data);
            } 
            catch (err) {
                setError(err.message);
            }
        };
        fetchUser()
    },[itemId]);

    if (error) return <div>{error}</div>;
    if (!item) return <div>Загрузка...</div>;

    return ( 
        <>
        <Header/>
        <div className="my-5 grid grid-cols-3 gap-5 items-start">
            <div className=" bg-white rounded-2xl p-5">
                <Image
                    src = {item.image}
                    alt = "?"
                    className="h-auto w-full shadow-lg rounded-2xl text-center hover:opacity-80"
                    width={1} 
                    height={1} 
                    layout="responsive"
                />
            </div>
            <div className="bg-white rounded-2xl p-5 flex flex-col gap-3 h-full">
                <div className="text-3xl font-semibold px-3 text-center">{item.name === null ? "Товар не имеет названия" : item.name}</div>
                <div>
                    <div className="text-xl px-3 font-semibold">Описание:</div>
                    <div className="text-xl px-3 text-slate-500">{item.description === null ? "Товар не имеет описания" : item.description}</div>
                </div>
            </div>
            <div className="bg-white rounded-2xl p-5 flex flex-col gap-5">
                <div className=" text-white h-[150px] rounded-2xl shadow-2xl px-3 py-5
                                flex flex-col gap-5"
                >
                    <div className="bg-green-600 py-2 rounded-lg text-center text-xl">
                        {item.price === null ? "Цена не указана" : `${item.price}₽`}
                    </div>
                    <div className="flex flex-row items-center gap-3 text-center">
                        <div className="bg-slate-500 hover:bg-slate-500/70 
                                        py-2 px-5 transition-all
                                        rounded-lg flex-1"
                        >
                            Добавить в корзину
                        </div>
                        <div className="bg-orange-400 hover:bg-orange-400/70 
                                        p-2 rounded-lg transition-all"
                        >
                            Лайк
                        </div>
                    </div>
                </div>
                <div className="w-full bg-slate-300 hover:bg-slate-300/50 text-slate-600
                                p-1 text-center transition-all rounded-lg font-medium"
                >
                    Купить в один клик
                </div>
            </div>
            <div className="flex flex-row gap-3"
            >
                {item.categories && item.categories.map((category)=>(
                    <Link 
                        className="text-slate-600 hover:text-slate-600/70 transition-all"
                        key={category.id}
                        href={`/categories/${category.id}`}
                    >
                    {`#${category.name}`}
                    </Link>
                ))}
            </div>
        </div>
        </>
    );
}


export async function getServerSideProps(context) {
    const { id } = context.params;
    return { props: { itemId: id } };
}