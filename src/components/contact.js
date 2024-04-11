import map from './assets/map.svg';
import cafe from './assets/cafe.svg';

const Contact = () => {
    return ( 
        <>
        <div className=" w-full flex justify-center items-center flex-col pb-16 px-24">
            <p className=" text-6xl font-BlackMango text-[#741414] font-medium text-center">Contact Us</p>
            <div className=" w-full flex mt-16 flex-row items-start justify-between">
                <div style={{backgroundImage:`url(${map})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-[49%] h-[470px] bg-[#ffffff74] relative">
                    <span style={{backgroundImage:`url(${cafe})`, backgroundPosition:'center', backgroundSize:'cover'}} className=' w-[200px] h-[200px] rounded-[50%] bg-[#ffffff96] absolute top-16 right-4'></span>
                </div>
                <div className=' w-[49%] h-[470px] flex flex-col relative space-y-8'>
                    <span className=' w-full'>
                        <p className=' font-BlackMango text-2xl text-[#741414] font-medium'>Address</p>
                        <p className=' text-lg text-[#741414] font-DarkerGrotesque font-medium mt-2'>Km5 Lekki-Epe Express Way Near Nicon Town Estate Gate Igbokosu Village, Ikate Elegushi Lekki Phase One.</p>
                    </span>
                    <span className=' w-full'>
                        <p className=' font-BlackMango text-2xl text-[#741414] font-medium'>Email</p>
                        <p className=' text-lg text-[#741414] font-DarkerGrotesque font-medium mt-2'>Km5 Lekki-Epe Express Way Near Nicon Town Estate Gate Igbokosu Village, Ikate Elegushi Lekki Phase One.</p>
                    </span>
                    <span className=' w-full'>
                        <p className=' font-BlackMango text-2xl text-[#741414] font-medium'>Contact</p>
                        <p className=' text-lg text-[#741414] font-DarkerGrotesque font-medium mt-2'>Km5 Lekki-Epe Express Way Near Nicon Town Estate Gate Igbokosu Village, Ikate Elegushi Lekki Phase One.</p>
                    </span>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Contact;