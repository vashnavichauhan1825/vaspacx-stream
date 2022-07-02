import { useEffect } from "react";


const VaspacxStreamTitle = (title) => {
    useEffect(()=>{
        document.title=`Vaspacx Stream | ${title}`
    },[title])
}

export { VaspacxStreamTitle };