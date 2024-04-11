import greenlogo from './assets/greenlogo.svg';

const Footer = () => {
    return ( 
        <>
        <div className="  w-full flex justify-center items-center flex-col px-24">
            <div className=" w-full py-12 border-y border-[#741414] flex items-start justify-between">
                <span className=''>
                    <img src={ greenlogo } className='' alt="" />
                    <p className=' mt-4 text-[#BDA08D] font-semibold font-DarkerGrotesque text-lg'>We are Africa’s Bread Company: We are everything about Bread.</p>
                </span>
                <span className=''>
                    <p className=' font-DarkerGrotesque text-[#741414] text-2xl font-semibold'>Need Help?</p>
                    <p className=' mt-6 font-DarkerGrotesque text-lg font-semibold text-[#BDA08D]'>Customer Care</p>
                </span>
                <span className=''>
                    <p className=' font-DarkerGrotesque text-[#741414] text-2xl font-semibold'>Navigation</p>
                    <p className=' mt-6 font-DarkerGrotesque text-lg font-semibold text-[#BDA08D]'>About Us</p>
                    <p className=' mt-3 font-DarkerGrotesque text-lg font-semibold text-[#BDA08D]'>Our Products</p>
                    <p className=' mt-3 font-DarkerGrotesque text-lg font-semibold text-[#BDA08D]'>Our Services</p>
                    <p className=' mt-3 font-DarkerGrotesque text-lg font-semibold text-[#BDA08D]'>Contact Us</p>
                </span>
                <span className=''>
                    <p className=' font-DarkerGrotesque text-[#741414] text-2xl font-semibold'>Social</p>
                    <p className=' mt-6 font-DarkerGrotesque text-lg font-semibold text-[#BDA08D]'>Instagram</p>
                    <p className=' mt-3 font-DarkerGrotesque text-lg font-semibold text-[#BDA08D]'>Twitter</p>
                    <p className=' mt-3 font-DarkerGrotesque text-lg font-semibold text-[#BDA08D]'>Facebook</p>
                </span>
            </div>
            <div className=' w-full pb-16 pt-6 text-center'>
                <p className=' mt-3 font-DarkerGrotesque text-lg font-semibold text-[#BDA08D]'>© 2023 Angelos</p>
            </div>
        </div>
        </>
     );
}
 
export default Footer;