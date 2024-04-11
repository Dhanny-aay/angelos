import rect from './assets/rect.svg';
import grid from './assets/grid.svg';
import bread from './assets/bread.webp';
import round from './assets/round.svg';
import { motion } from 'framer-motion';

const Hero = () => {
    return ( 
        <>
        <div className=" bg-[#094935] w-full flex flex-col items-center relative justify-center py-16 ">
            <div className=' flex items-center justify-center relative'>
                <img src={ rect }className=' w-[65%] 2xl:w-[55%]' alt="" />
            </div>
            <img src={ grid }className=' w-[60%] 2xl:w-[50%] top-[88px] absolute' alt="" />
            <div className=' absolute top-28 w-[82%] flex flex-col justify-center items-center'>
                <p className=' text-[#fff] w-[75%] font-BlackMango text-7xl 2xl:text-8xl font-medium text-left pl-[5%]'>The World of</p>
                <div className=' 2xl:w-[75%] w-[90%] flex flex-row items-start -mt-[16px]'>
                    <span className=' flex flex-col text-left mt-8'>
                        <p className='text-[#fff] w-[70%] font-BlackMango text-7xl 2xl:text-8xl font-medium'>Freshly </p>
                        <p className='text-[#fff] w-[70%] font-BlackMango text-7xl 2xl:text-8xl font-medium ml-[10%]'>Baked </p>
                    </span>
                    <div className= '-ml-[20%] 2xl:w-[60%] w-[60%]'>
                        <img src={ bread } className=' w-full ' alt="" />
                        <span className=' space-x-[20%] flex flex-row items-center w-full -mt-[80px] ml-[50%] '>
                            <p className='text-[#fff] w-[70%] font-BlackMango text-7xl 2xl:text-8xl font-medium'>Goodness</p>
                            <motion.img
                            animate={{ rotate: 360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            src={ round } alt="" />
                        </span>

                    </div>
                    <p className=' w-[250px] mt-12 ml-[3%] text-[#FFFFFF] font-medium font-DarkerGrotesque text-lg'>A delightful treat that combines the comforting charm of freshly baked cookied with rich, luxurious and mouthwatering fillings.</p>
                </div>
            </div>
            <div className=' w-full h-[64 2xl:h-[196px]'></div>
        </div>
        </>
     );
}
 
export default Hero;