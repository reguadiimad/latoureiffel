import { useState } from "react";

const Navigation = () => {
    const menuList=["Mot de fondateur","Equpe Pedagogique","Ensenigment","Parants Eleve"]
    const [linked, setlinked] = useState(0);

    return(
        <>
            <div className="w-[45%]  rounded-full p-2  mt-20 flex items-center navi justify-center">
                <div className="w-[100%] flex items-center justify-between relative sm:hidden md:flex">
                    <span
                    style={{ width: 100 / menuList.length + "%", left: linked * (100 / menuList.length) + "%" }}
                    className="absolute bottom-1 h-2 flex justify-center items-center flash"
                    >
                        <div className="w-[50%] bg-blue-500 h-full rounded-full shadow-xl"></div>
                    </span>
                    {
                        menuList.map((text,index)=>
                            
                        <a 
                        style={{ width: 100 / menuList.length + "%" }}
                         key={index}
                         className={` text-center cursor-pointer z-40 xl:py-5 md:py-4  ${linked===index?'text-blue-500 text-lg':'text-neutral-500 text-base'}`}
                         onClick={() => setlinked(index)}

                         >{text}</a>
                    ) 
                    }
                </div>
            </div>
        </>
    )
}
export default Navigation;