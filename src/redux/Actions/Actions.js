export const add =(item)=>{
    return{
        type:"Add_to_cart",
        payload:item

    }

}



export const remove =(id)=>{
    return{
        type:"Remove_cart",
        payload:id

    }

}

export const decrement =(item)=>{
    return{
        type:"Remove_Quantity",
        payload:item

    }

}