import React, { useEffect, useState } from 'react'
import './Carddetails.css'
import { Navigate, useParams , useNavigate  } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {add , decrement ,remove} from '../../redux/Actions/Actions'
import { useDispatch } from 'react-redux'




const Carddetails = () => {

    const [data,setdata] =useState([])
    // console.log(data)
    const {id} = useParams()
    // console.log(id)
    const getdata = useSelector((state) => state.Perfromtask.carts)
    // console.log(getdata)
    
    function compare(){
     let compareddata=    getdata.filter((e)=>{
            return e.id == id
        })
        setdata(compareddata)
       
    }
    console.log(data)

    useEffect(()=>{
        compare()
    },[id])

    const dispatch = useDispatch()


    function send(eb){
        dispatch(add(eb))

    }

    function desc(item){
        dispatch(decrement(item))

    }

    const navigate = useNavigate();


    function rmv(id){

        dispatch(remove(id))
        navigate("/")

       
    }




  return (
    // <div >
        <div className="carddetails1">


            {
                data.map((val)=>{

                    return(
                        <div className='carddetails' key={val.id}>

                        <div className="carddetailsleft" key={val.id}>

                        <div className="cardimg">
                            <img style={{mixBlendMode:"darken"}} src={val.pimg} alt="" />
                        </div>
            
                        </div>
                       
                        <div className="carddetailsright">
            
                        <div className="name">
                            <h3>{val.pname}</h3>
                        </div>
            
                        <div className="pdesc">
                            <p>{val.pdesc}</p>
                        </div>
            
                        <div className="ratings">
                          <p>Rating <span > {val.ratings} ★</span></p>
                        </div>
            
                        <div className="price">
                            <h3>Price : {val.price}₹ </h3>
                        </div>
            
                        <div className="review">
                            <p>{val.review}</p>
                        </div>
            
                        <div className="clr">
                           <p>color : {val.color}</p>
                        </div>
            
                        <div className="size">
                            <p>Size : {val.size}</p>
                        </div>

                        <div className="size">
                            <p>Quantity : {val.quantity}</p>
                        </div>

                        <div className="size">
                            <p>Total : {val.price * val.quantity}</p>
                        </div>


                        <div className="checkquantity">
                            <span onClick={val.quantity <= 1 ? ()=>rmv(val.id)   : ()=>desc(val)}>-</span>
                            <span>{val.quantity}</span>
                            <span onClick={()=>send(val)}>+</span>

                        </div>
                        </div>
                        </div>
                        
                    )

                })
            }
           
        </div>

    // </div>
  )
}

export default Carddetails