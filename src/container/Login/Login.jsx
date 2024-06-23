import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import "./Login.css"
import {motion} from "framer-motion"
const Login = ({setState}) => {
    const [value, setValue] = useState()
  return (
    <motion.div initial={{top:1000}} animate={{top:0}} transition={{duration:0.4}}
    
    
    className='loginPage'>
        <form action="#">
            <button className='btn-close' onClick={()=>setState(false)}><IoCloseCircleOutline /></button>
            <h1>Введите номер телефона</h1>
            <p>Отправим смс с кодом подтверждения</p>
            <PhoneInput
            placeholder="+998 90-123-45-67"
            value={value}
            onChange={setValue}/>
            <button className='btn_submit' type='submit'> Получить код </button>
            <span>Авторизуясь, вы соглашаетесь<a href=""> c политикой обработки персональных данных</a></span>
        </form>
    </motion.div>
  )
}

export default Login