import React, { useState, useContext } from 'react';
import './Cart.css'; // Stil berish uchun CSS faylini import qilamiz
import { UserContext } from '../../context/Context';
import { popular_product } from '../../../data/popular_product';
import { See } from '../../../data/saw';
//icons
import { FaRegHeart } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";
const Cart = () => {

 const {popular_product} = useContext(UserContext)
 const {See} = useContext(UserContext)
  return (
    <div className='like_space'>
      <div className="notFound">
      <img src="https://uzum.uz/static/img/shopocat.490a4a1.png" alt="" />
      <h1>В корзине пока нет товаров</h1>
      <p>Начните с подборок на главной странице или найдите нужный товар через поиск</p>
 
      <div className="login-2" >
      <button>На главную</button>
      </div>
      </div>

      <div className="popular">
      <h1>Популярные товары</h1>
      </div>


      <div className="Products">
        {
          popular_product.map((card)=>(
            <div className="card"key={card.id} >
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

      <h1>Просмотренные товары</h1>

      
      <div className="Products">
        {
          See.map((card)=>(
            <div className="card"key={card.id} >
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
    </div>
  );
};

export default Cart;
