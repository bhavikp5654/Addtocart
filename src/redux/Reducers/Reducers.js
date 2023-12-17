const initialstate ={
    carts:[]

}

const Perfromtask =(state = initialstate , action) =>{

    switch (action.type) {
        case "Add_to_cart":
     let qtyindex=  state.carts.findIndex((item)=> item.id === action.payload.id)

     if(qtyindex >= 0 ){
         state.carts[qtyindex].quantity += 1
     }
     else{
        let qtcap = {...action.payload, quantity :1 }
        return{
                ...state,
                carts:[...state.carts,qtcap]
            }
     }





        case "Remove_cart":

        let rmvdata =  state.carts.filter((val)=>val.id !== action.payload )


                return{
                    ...state,
                    carts:rmvdata
                }



        case "Remove_Quantity":


        let removeindex=  state.carts.findIndex((item)=> item.id === action.payload.id);

        if(state.carts[removeindex].quantity >=1 ){

         state.carts[removeindex].quantity -= 1

         return{
            ...state,
            carts:[...state.carts]

         }


        }
        else if(state.carts[removeindex].quantity ===1){


        let qtydata =  state.carts.filter((val)=>val.id !== action.payload )


                return{
                    ...state,qtydata
                }


        }





            
    
        default:
            return state;
    }

}

export default Perfromtask