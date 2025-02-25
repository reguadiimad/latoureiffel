import { useEffect,useState } from "react";
import ServicesFirstInterface from "../Models/Services/ServicesFirstInterface";
import { setIsHome } from "../redux(toolKit)/slices/isHomeSlice";
import { useDispatch } from "react-redux";
import SerrvicesShorts from "../Models/Services/ServicesShorts";
import ServicesDetails from "../Models/Services/ServicesDetails";


const Services = () => {
    const dispatch = useDispatch();
     useEffect(() => {
    dispatch(setIsHome(false));
  }, [dispatch]);
  const [selectedService,setSelectedService]=useState(0);
  const [theY, setTheY] = useState(1);

  const handelSelect = x => { setTheY(x > selectedService ? -1 : 1);
    setSelectedService(x);}

    return(
        <>
            <div className='w-screen py-20 mb-40 flex flex-col items-center justify-center  z-0 overflow-hidden relative '>
                <ServicesFirstInterface/>
                <SerrvicesShorts selectedService={selectedService} theY={theY} onSelect={handelSelect}/>
                <ServicesDetails selectedCyc={selectedService} onSelect={handelSelect}/>
            </div>
        </>
    );
}

export default Services;