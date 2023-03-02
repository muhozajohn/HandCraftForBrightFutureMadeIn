import React from 'react'
import './SemNavBar.css'
import {AiOutlineHeart} from 'react-icons/ai'
import {GiInjustice} from 'react-icons/gi'
import {AiOutlineShoppingCart} from 'react-icons/ai'


const SemNavBar = () => {
  return (
    <section>
        <div className='semnav'>
            <div className='semnav-sect1'>
            <img src={"templogo.webp"} height='100px' alt='Temp Logo'/>
            </div>
            <div className='semnav-sect2'>
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            </select>
            <input type='text' placeholder='Search' className='semnav-search'/>
            </div>
            <div className='semnav-sect3'>
            <div>
              <span>Live chat or:<span>
               <span>0784535454</span>
              </div>
              <div>
                <div>
                <button><AiOutlineHeart/></button>
                <span>wishlist</span>
                </div>
                <div>
                <button><GiInjustice/></button>
                <span>compare</span>
                </div>
                <div>
                <button><AiOutlineShoppingCart/></button>
                <span>cart</span>
                </div>
              </div>
            </div>

        </div>
    </section>
  )
}

export default SemNavBar