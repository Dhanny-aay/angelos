import { useState } from 'react';
import bread1 from './assets/bread1.svg';
import bread2 from './assets/bread2.svg';
import { motion } from 'framer-motion';

const Products = () => {

    const prod = [
        {name:'Bread', number:'01', img1:bread1, img2:bread2},
        {name:'Rolls', number:'02', img1:bread2, img2:bread1},
        {name:'Cookies', number:'03', img1:bread1, img2:bread2},
        {name:'English Muffs', number:'04', img1:bread2, img2:bread1},
    ]

    const [hoveredImage1, setHoveredImage1] = useState(null);
    const [hoveredImage2, setHoveredImage2] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredImage1(prod[index].img1);
        setHoveredImage2(prod[index].img2);
    };

    const handleMouseLeave = () => {
        setHoveredImage1(null);
        setHoveredImage2(null);
    };

    return ( 
        <>
        <div className=" w-full flex justify-center items-center flex-col p-16">
            <p className=" text-6xl font-BlackMango text-[#741414] font-medium text-center">Our Products</p>
            <p className=" text-xl font-medium font-DarkerGrotesque text-[#741414] mt-5 px-[15%] text-center">Dive into a symphony of flavors as we present our Angelos's signature delights, meticulously crafted to ignite your senses and leave you craving for more.</p>
            <div className=" w-full items-start space-x-8 justify-center flex flex-row mt-16">
                <div className=" w-[200px] h-[250px] bg-white -rotate-[8deg]">
                    <motion.div 
                    style={{backgroundImage:`url(${hoveredImage1 || bread1})`, backgroundPosition:'center', backgroundSize:'cover'}} className=' w-full h-full'></motion.div>
                </div>
                <div className=" flex flex-col items-center">
                    <div className=" flex flex-col space-y-6">
                    {prod.map((item, index) =>(
                            <p 
                                key={index} 
                                className={`text-center text-6xl font-BlackMango transition-all font-medium ${hoveredImage1 === null && index === 0 ? 'text-[#741414]' : 'text-[#E2CBBC] hover:text-[#741414]'}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className=" text-lg font-DarkerGrotesque">{item.number}</span>{ item.name }
                            </p>
                        ))}
                    </div>
                    <button className=" py-4 px-5 text-white font-DarkerGrotesque text-lg font-semibold bg-[#094935] shadow-sm mt-[64px]">View all Products</button>
                </div>
                <div className=" w-[200px] h-[250px] bg-white rotate-[8deg]">
                    <motion.div 
                    style={{backgroundImage:`url(${hoveredImage2 || bread2})`, backgroundPosition:'center', backgroundSize:'cover'}}  className=' w-full h-full'></motion.div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Products;