import React, { useEffect, useState } from 'react'
import Badge from '@mui/material/Badge';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Header.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Carddetails from '../Carddetails/Carddetails';
import { useDispatch } from 'react-redux'
import { remove } from '../../redux/Actions/Actions';


const Header = () => {

    const[price ,setprice]=useState(0)

    // console.log(price)


    const dispatch = useDispatch()

    function rmv(id){

        dispatch(remove(id))

    }



    const getdata = useSelector((state) => state.Perfromtask.carts)
    console.log(getdata)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    function total(){
        let price = 0
        getdata.map((val)=>{
            price = val.price * val.quantity + price;
            setprice(price)


        })

    }

    useEffect(()=>{

        total()

    },[total])






    return (

        <>
        <div className="nav">
            <div className='logo' >
                <h1>Ecomm</h1>
            </div>
            <div className="menu">
                <ul>
                    <li ><Link to={"/"} className='act'>Home</Link></li>
                    <li><Link to={"/mens"}>Mens</Link></li>
                    <li><Link href="">Womens</Link></li>
                </ul>
            </div>
            <div className="cart">

                <Badge badgeContent={getdata.length} color="primary">
                    <i className="fa-solid fa-cart-shopping"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}></i>
                </Badge>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >




                    {
                        getdata.length ?
                            <div className="viewcart">
                                <div className="condata">
                                    <h4>Your cart:</h4>

                                </div>

                                {
                                    getdata.map((val, id) => {
                                        return (


                                            <div key={val.id}>


                                                <div className="flexcont">
                                                    <Link to={`/cart/${val.id}`}>
                                                    <div className="imgdata" onClick={handleClose}>
                                                        <img src={val.pimg} alt="" />
                                                    </div>
                                                    </Link>
                                                    <div className="detaildata">
                                                        <div className="textcont">

                                                            <div className="textdata">
                                                                <p> <b>Title :</b> {val.pname}</p>
                                                            </div>

                                                            <p>
                                                                {val.pdesc}
                                                            </p>
                                                            <p>
                                                                rating {val.ratings}
                                                            </p>
                                                            <p>
                                                             price ₹ {val.price} 
                                                            </p>
                                                            {/* <p style={{ width: "150px" }}>
                                                                review {val.review}
                                                            </p> */}

                                                            <p style={{ width: "150px" }}>
                                                                Quantity : {val.quantity}
                                                            </p>
                                                        </div>

                                                    </div>
                                                    <div className="icon">
                                                    <i onClick={()=>rmv(val.id)} className="fa-solid fa-trash"></i>
                                                    </div>
                                                    
                                                 

                                                </div>

                                            </div>
                                        )



                                    })
                                }

                                <div className="total">
                                    <h4>Toatal Rs ₹ {price}</h4>
                                </div>



                            </div>
                            :
                            <div className="viewcart">
                                <i className="fa-solid fa-xmark" onClick={handleClose}></i>
                                <div className='viewcartcenter'>
                                    <div className="center">
                                        <p>Cart is empty</p>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcQubkUETojFbm9aoDxCTLJUr0nfU13szOg&usqp=CAU" alt="" />

                                    </div>

                                </div>

                            </div>


                    }



                </Menu>
                <div className="btn">
                    <button >Login</button>

                </div>

            </div>



        </div>
           


            </>
    )
}

export default Header