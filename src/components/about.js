import map from './assets/map.svg';
import cafe from './assets/cafe.svg';
import right from './assets/right.svg';

const About = () => {
    return ( 
        <>
        <div className=" w-full px-24 flex flex-row items-start justify-between pb-16">
            <div style={{backgroundImage:`url(${map})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-[49%] h-[470px] bg-[#ffffff74] relative">
                <span style={{backgroundImage:`url(${cafe})`, backgroundPosition:'center', backgroundSize:'cover'}} className=' w-[200px] h-[200px] rounded-[50%] bg-[#ffffff96] absolute top-16 right-4'></span>
            </div>
            <div className=' w-[49%] h-[470px] flex flex-col relative'>
                <p className=' font-BlackMango text-6xl text-[#741414] font-medium leading-[80px]'>African Taste since 2010</p>
                <p className=' text-xl text-[#741414] font-DarkerGrotesque font-medium mt-6'>Since 2010, we've been baking bread and treats using time-honored recipes passed down through generations. Each bite is a testament to our commitment to quality and tradition. We use only the finest ingredients to create a taste of home that warms your heart and satisfies your soul</p>
                <span className=' w-full flex flex-row justify-between items-center absolute bottom-0'>
                    <p className=' text-[#741414] font-DarkerGrotesque font-semibold text-xl'>Learn More About Us</p>
                    <img src={ right } alt="" />
                </span>
            </div>
        </div>
        </>
     );
}
 
export default About;