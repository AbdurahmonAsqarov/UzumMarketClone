import React, { useState, useContext } from 'react';
import './Like.css'; // Stil berish uchun CSS faylini import qilamiz
import Login from '../../container/Login/index'; // Login komponentini import qilamiz
import { UserContext } from '../../context/Context';
import { popular_product } from '../../../data/popular_product';
import { See } from '../../../data/saw';
//icons
import { FaRegHeart } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";
const Like = () => {
  const [loginVisible, setLoginVisible] = useState(false); // Login oynasi ko'rsatilishi haqida holatni saqlash uchun useState

  // Login tugmasi bosilganda loginVisible holatini almashtirish funktsiyasi
  const toggleLogin = () => {
    setLoginVisible(!loginVisible);
  };
 const {popular_product} = useContext(UserContext)
 const {See} = useContext(UserContext)
  return (
    <div className='like_space'>
      <div className="notFound">
      <img src="https://uzum.uz/static/img/hearts.cf414be.png" alt="" />
      <h1>Добавьте то, что понравилось</h1>
      <p>Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится</p>
      {/* Login komponentini chiqarish */}
      {loginVisible && <Login />}
      {/* Login tugmasi */}
      <div className="login-2" onClick={toggleLogin}>
        <button>Войти в аккаунт</button>
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

export default Like;
