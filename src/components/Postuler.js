import React, { useEffect, useState,useRef} from "react";
import { setIsHome } from "../redux(toolKit)/slices/isHomeSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setPageIndex } from "../redux(toolKit)/slices/pageIndexSlice";
import { TheInput,TheSelect,ValidateModal,ConfirmationModal } from "../Models/Inscription/inscrptionCards/InsCard";






const Postuler = () => {
  const dispatch = useDispatch();
  const {pageIndex}=useSelector((state)=>state.pageIndex);
  useEffect(() => {
    dispatch(setIsHome(false));
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(setPageIndex(8));
  }, [pageIndex]);




  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center text-apple-dark bg-gradient-to-b text-center  pt-20">
        <img className="h-48" src={process.env.PUBLIC_URL+"/logos/hh.png"}/>
        <p className="-mt-5">Se connecter aux offres d'emploi chez Écoles La Tour Eiffel</p>
        <div className="w-[60%] flex flex-col items-center">
          <div className="w-full flex items-center justify-start gap-2">
            <div className="flex-1 "></div>
            <div className="flex-1 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postuler;
