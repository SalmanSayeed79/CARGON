import React , {createContext, useState, useContext} from 'react'
import useLocalStorage from './useLocalStorage'

const PrevOrder=createContext()
const PrevOrderUpdateContext=createContext()


export function usePrevOrderUpdate(){
    return useContext(PrevOrderUpdateContext)
}
export function usePrevOrder(){
    return useContext(PrevOrder)
}

export default function PrevOrderContextProvider({children}){
    const [prevOrder,setPrevOrder]=useLocalStorage("apothecary_prev_order",[])

    const prevOrderUpdate=(data)=>{
        setPrevOrder(prev=>[...prev,data])
    }
   
    return(
        <PrevOrder.Provider value={prevOrder}>
            <PrevOrderUpdateContext.Provider value={prevOrderUpdate}>
                {children}
            </PrevOrderUpdateContext.Provider>
        </PrevOrder.Provider>
    )
}