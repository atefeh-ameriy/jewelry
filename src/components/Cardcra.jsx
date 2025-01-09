import React from 'react'
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
/*import { MdShoppingCart } from "react-icons/md";*/


function Cardcra({img}) {

  return (
    <div className='relative w-full bg-none pl-2  '>
       
       <img className="w-96 h-full shadow bg-none " src={img} alt='product' />
       <div className="animate-float icons flex gap-5 absolute bottom-1 md:bottom-5 left-8 text-white text-3xl cursor-pointer">
   <FaHeart className='size-3 md:size-6 hover:text-red-600'/>
<MdOutlineShoppingCartCheckout className='size-3 md:size-6'/>
       </div>
    
    
    </div>
  )
}

export default Cardcra