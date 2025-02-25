const ServicesFirstInterface = () => {
    return(
        <>
            <div className="w-[90%] flex justify-center mt-24 text-neutral-900">

                <div className="w-[60%]">
                    <p className="text-neutral-500">Nos Services</p>
                    <h1 className="text-8xl">
                        <b>Découvrez les services exclusifs de l'École La Tour Eiffel</b>
                    </h1>
                    <p className="text-neutral-500 w-[80%]">À l'École La Tour Eiffel, nous offrons des services conçus pour le bien-être et la réussite de nos élèves.</p>
                    <div className="flex items-center py-16 text-neutral-500">
                        <p className=" pr-6  ">Application mobile</p> <div className=" w-2 h-2 bg-red-500 rounded-full"></div> 
                        <p className=" px-6 ">Transports</p><div className=" w-2 h-2 bg-blue-500 rounded-full"></div> 
                        <p className=" px-6">Cantine</p> <div className=" w-2 h-2 bg-red-500 rounded-full"></div> 
                        <p className=" px-6  ">Inférmirie</p> <div className=" w-2 h-2 bg-blue-500 rounded-full"></div> 
                        <p className=" px-6">Clubs</p> <div className=" w-2 h-2 bg-red-500 rounded-full"></div> 
                        <p className=" pl-6 ">Autre</p>

                    </div>
                    <button className="px-5 py-3 bg-blue-500 text-xl rounded-3xl text-white"> <b>Découvrez plus</b></button>
                </div>
                <div className="w-[40%] flex items-center justify-end   rounded-[25%] h-auto relative">
                    <img className="w-full scale-125" src={process.env.PUBLIC_URL+'/images/serviceMockupe.png'}></img>           
                </div>

            </div>
        </>
    )
}
export default ServicesFirstInterface;