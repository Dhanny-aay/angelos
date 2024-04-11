import logo from './assets/logo.svg';

const Navbar = () => {
    return ( 
        <>
        <div className=" w-full bg-[#053C2B] py-5 px-24 border-b border-[#FFFFFF33] flex items-center justify-between">
            <span className=' flex items-center space-x-'>
                <img src={ logo } alt="" />
                <p className=' font-BlackMango text-white font-medium text-xl'> Holdings Limited</p>
            </span>
            <span className=' flex items-center space-x-6'>
                <p className=' font-DarkerGrotesque text-white font-medium text-xl'>Home</p>
                <p className=' font-DarkerGrotesque text-white font-medium text-xl'>Our Products</p>
                <p className=' font-DarkerGrotesque text-white font-medium text-xl'>About Us</p>
                <p className=' font-DarkerGrotesque text-white font-medium text-xl'>Contact Us</p>
            </span>
        </div>
        </>
     );
}
 
export default Navbar;