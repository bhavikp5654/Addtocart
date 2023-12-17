import React, { useState } from 'react'
import './Card.css'
import Cardsdata from '../Cardsdata/Cardsdata'
import { useDispatch } from 'react-redux'

import {add} from '../../redux/Actions/Actions'

const Cards = () => {

    const [data, setData] = useState(Cardsdata)
    // console.log(data)


    const dispatch = useDispatch()

    function send(eb){
        dispatch(add(eb))

    }
    return (
        <div className="cardmian">
            <h2>Tshirt Scetion</h2>
            <div className="grid">

            {
                data.map((val,id) => {
                    return (
                        <div className='card' key={val.id}>

                            <div className="title">
                                <h5>{val.pname}</h5>
                            </div>
                            <div className="title1">
                                <p>{val.pdesc}</p>
                            </div>
                            <div className="img">
                                <img src={val.pimg} alt="" />
                            </div>
                            <div className="price">
                                <h6><del>₹{val.price+200}</del>₹{val.price}</h6>
                            </div>
                            <div className="addbtn">
                                <button onClick={()=>send(val)}>AddTocart</button>
                            </div>

                        </div>

                    )
                })
            }
            </div>



        </div>
    )
}

export default Cards