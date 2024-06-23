import React from 'react'
import Swiper from '../../container/Swiper/SwiperCards'
import Product from '../../container/Product/Product'


const Home = () => {

  return (
    <section className='home'>
        <div className="container">
       <Swiper/>
       <Product/>
        </div>
    </section>
  )
}

export default Home