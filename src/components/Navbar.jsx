
import { useState,useRef,useEffect } from "react";
import {RxHamburgerMenu} from "react-icons/rx";
import logo from "../assets/logo.png"
import { TbShoppingBag } from "react-icons/tb"

const Navdetail = [
{
  id:1,
  nav:"صفحه اصلی ",
  navdir:"#home",
  
},{
  id:2,
  nav: "درباره ما",
  navdir:"#about",

},
{
  id:3,
  nav: "جواهرات",
  navdir:"#jwell",

}
,
{
    id:4,
    nav: "تماس با ما",
    navdir:"#contact",
  
  },

]


function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
  const [displaymenu,setDisplaymenu] = useState(false)

  const [navLink,setNavLink] = useState( Navdetail[0])

  useEffect(()=>{
    const handleResize = ()=>{
      if (window.innerWidth < 768){
        setIsOpen(false)
              }
    }
    window.addEventListener('resize',handleResize)

    return()=>{
      window.removeEventListener('resize',handleResize)
    }
   },[])


  const onScroll = () => {
    if (window.scrollY > 150) {
      setDisplaymenu(true);
    } else {
      setDisplaymenu(false);
    }

    // بررسی موقعیت اسکرول برای فعال کردن لینک مناسب
    Navdetail.forEach((route) => {
      const section = document.querySelector(route.navdir);
      if (section) {
        const { offsetTop, clientHeight } = section;
        if (window.scrollY >= offsetTop - 100 && window.scrollY < offsetTop + clientHeight) {
          setNavLink(route);
        }
      }
    });
    
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  const handleClick = e =>{
    e.preventDefault()
    const targetAttr = e.target.getAttribute('href')
    const location =document.querySelector(targetAttr).offsetTop
    window.scrollTo({
        left:0,
        top: location - 75,
        behavior: 'smooth',
    })
}


  return (
<nav  className={`flex flex-wrap items-center justify-between `}  >
  

  <a href="#"> <img src={logo} className="w-16  h-16 rounded-full shadow "/> {/* <NikeLogo className="h-20 w-20" /> import NikeLogo from "../assets/nike-logo.svg'?react";*/}  </a> 
  <button onClick={()=>setIsOpen(!isOpen)} className=" lg:hidden rounded-lg p-2 transform transition ease-in-out delay-250 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300 "> <RxHamburgerMenu size={25}/> </button>

  <div className={`${isOpen ===false && "hidden"} ${displaymenu ? "lg:fixed top-5 w-full z-50 ": "null"}  w-full lg:w-auto lg:block `} onScroll={onScroll}>
<ul className="lg:space-x-8 flex flex-col lg:flex-row rounded-lg border border-gray-200 lg:border-none bg-gray-50 p-4 text-md lg:bg-white shadow ">
  {Navdetail.map((route,index) =>{
    return <li key={route.id} 
    className="px-3 py-2 cursor-pointer  rounded hover:bg-gray-100" onClick={()=>setIsOpen(false)}
    
    ><a href={route.navdir} className={` ${navLink === route ? "text-gray-400" : "" }`} onClick={handleClick}>{route.nav}</a></li>;
    
  })}
  </ul>
  </div>


  <div className="fixed bottom-4 left-4 lg:static">
<div className="animate-float flex-center h-12 w-12 rounded-full bg-white shadow-md">

<TbShoppingBag  className="animate-click " />
</div>
</div>

  </nav>  )
}

export default Navbar