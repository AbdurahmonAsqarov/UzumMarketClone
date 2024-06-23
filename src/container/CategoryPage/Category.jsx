import React,{useContext} from 'react'
// css 
import "./Category.css"
// data 
import { UserContext } from '../../context/Context';
import { NavLink } from 'react-router-dom';
const Category = () => {
    const {navbar} = useContext(UserContext)
  return (
    <section className='category'>
       <div className="container">
       <ul>
        {
          navbar.map((item)=>(
            <li key={item.id}>
              <NavLink to={item.to} >{item.name}</NavLink>
            </li>
          ))
        }
        </ul>
       </div>
      </section> 
  )
}

export default Category