'use client'
import { ArrowDown } from "lucide-react";
import { BuildingCard } from "./BuildingCard";
import { useState } from "react";

export function BuildingCardView() {
    const [showMore, setShowMore] = useState(false);

    const cardClass = "flex flex-col sm:flex-col xl:flex-row mt-5"; // Убираем повторение

    return (
        <div className="mt-4">
            {/* Блоки карточек */}
            <div className={cardClass}>
                <BuildingCard
                    imgUrl="https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1aWxkaW5nfGVufDB8fDB8fHww"
                    title="Hose bro" 
                    description="Lorem ipsum is susyfgddfgdfg dfgdfgfdgdf gdfgdfg dfgdfgdfsg sdfgdsfg3" 
                    price={9.999}
                />
                <BuildingCard
                    imgUrl="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Hose bro2" 
                    description="2Lorem ipsum is susyfgddfgdfg dfgdfgfdgdf gdfgdfg dfgdfgdfsg sdfgdsfg3" 
                    price={182.958}
                />
                <BuildingCard
                    imgUrl=""
                    title="Hose bro3" 
                    description="3Lorem ipsum is susyfgddfgdfg dfgdfgfdgdf gdfgdfg dfgdfgdfsg sdfgdsfg3" 
                    price={50.859}
                />
                <BuildingCard
                    imgUrl="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1610&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Hose bro4" 
                    description="4Lorem ipsum is susyfgddfgdfg dfgdfgfdgdf gdfgdfg dfgdfgdfsg sdfgdsfg3"  
                    price={790.999}
                />
            </div>

            {/* Добавляем еще карточки, используя тот же класс */}
            {showMore && (
                <>
                    <div className={cardClass}>
                        <BuildingCard
                            imgUrl="https://images.unsplash.com/photo-1551766472-62096056b476?q=80&w=1618&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="Hose bro" 
                            description="Lorem ipsum is susyfgddfgdfg dfgdfgfdgdf gdfgdfg dfgdfgdfsg sdfgdsfg3" 
                            price={9.999}
                        />
                        <BuildingCard
                            imgUrl="https://images.unsplash.com/photo-1617452228483-43e60badbe25?q=80&w=1867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="Hose bro2" 
                            description="2Lorem ipsum is susyfgddfgdfg dfgdfgfdgdf gdfgdfg dfgdfgdfsg sdfgdsfg3" 
                            price={182.958}
                        />
                        <BuildingCard
                            imgUrl="https://images.unsplash.com/photo-1613061538705-01190bb0e3b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="Hose bro3" 
                            description="3Lorem ipsum is susyfgddfgdfg dfgdfgfdgdf gdfgdfg dfgdfgdfsg sdfgdsfg3" 
                            price={50.859}
                        />
                        <BuildingCard
                            imgUrl="https://images.unsplash.com/photo-1534239697798-120952b76f2b?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="Hose bro4" 
                            description="4Lorem ipsum is susyfgddfgdfg dfgdfgfdgdf gdfgdfg dfgdfgdfsg sdfgdsfg3"  
                            price={790.999}
                        />
                    </div>

                    <div className={cardClass}>
                        <BuildingCard
                            imgUrl="https://images.unsplash.com/photo-1509828787-2c5222ed78ed?q=80&w=1604&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="Hose bro" 
                            description="Lorem ipsum is susyfgddfgdfg dfgdfgfdgdf gdfgdfg dfgdfgdfsg sdfgdsfg3" 
                            price={9.999}
                        />
                        <BuildingCard
                            imgUrl="https://images.unsplash.com/photo-1509828787-2c5222ed78ed?q=80&w=1604&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="Hose bro2" 
                            description="2Lorem ipsum is susyfgddfgdfg dfgdfgfdgdf gdfgdfg dfgdfgdfsg sdfgdsfg3" 
                            price={182.958}
                        />
                        <BuildingCard
                            imgUrl="https://images.unsplash.com/photo-1525438160292-a4a860951216?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="Hose bro3" 
                            description="3Lorem ipsum is susyfgddfgdfg dfgdfgfdgdf gdfgdfg dfgdfgdfsg sdfgdsfg3" 
                            price={50.859}
                        />
                        <BuildingCard
                            imgUrl="https://images.unsplash.com/photo-1559422042-f1ae22e982f2?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="Hose bro4" 
                            description="4Lorem ipsum is susyfgddfgdfg dfgdfgfdgdf gdfgdfg dfgdfgdfsg sdfgdsfg3"  
                            price={790.999}
                        />
                    </div>
                </>
            )}

            {/* Кнопка загрузки дополнительных карточек */}
            <div className="mx-auto mt-5">
                {!showMore && (
                    <button 
                        onClick={() => setShowMore(!showMore)}
                        className="text-white font-roboto flex bg-zinc-800 px-4 py-1 rounded-full mx-auto justify-items-center items-center text-lg"
                    >
                        More <ArrowDown className="stroke-white" />
                    </button>
                )}
            </div>
        </div>
    )
}
