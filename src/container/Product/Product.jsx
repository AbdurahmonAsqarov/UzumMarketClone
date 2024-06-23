import React, { useContext } from 'react'
import "./Product.css"
import { UserContext } from '../../context/Context'
import { FaRegHeart } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";
const Product = () => {
    const {product} = useContext(UserContext)
  return (
    <div className='ProductCards'>
           {
            product.map((card)=>(
                <div className='card' key={card.id}>
                    <img src={card.img} alt="" />
                    {card.active ? <span className='aksiya'>Aksiya</span>:""}
                    <span className='cardlike'><FaRegHeart /></span>
                   <div>
                   <h3>{card.title.slice(0, 50)}...</h3>
                    <del>{card.oldprice} sum</del>
                    <p className='newprice'>{card.newprice} sum</p>
                    <button className='card-btn'><TbShoppingBagPlus /></button>
                   </div>
                </div>
            ))
           }
    </div>
  )
}

export default Product