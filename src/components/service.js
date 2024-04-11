import flight from './assets/flight.svg';
import street from './assets/street.svg';
import edu from './assets/edu.svg';
import marine from './assets/marine.svg';
import shore from './assets/shore.svg';
import port from './assets/port.svg';
import nestle from './assets/nestle.svg';


const Service = () => {

    const serv =[
        {name:'Aviation In-Flight Catering', img:flight},
        {name:'Street Food and Beverage Mobile Nescafe Vans', img:street},
        {name:'Educational Institution Catering', img:edu},
        {name:'Marine Catering', img:marine},
    ]

    const serv1 =[
        {name:'Offshore Catering', img:shore},
        {name:'Cafe Operation at the Airport', img:port},
        // {name:'Our Strategic Partnership Nestle Nigeria plc in the operation of Mobile Cafe Vans has a huge variety of local street foods and snacks in a planned initial 25 Vans for Lagos we will increase these with time.', img:nestle},
    ]
    return ( 
        <>
        <div className=" py-16 px-24 w-full">
            <p className=" text-6xl font-BlackMango text-[#741414] font-medium text-center">Our Services</p>
            <p className=" text-xl font-medium font-DarkerGrotesque text-[#741414] mt-5 px-[15%] text-center">At Angelos, we're passionate about bringing high-quality, delicious convenience foods directly to you. Here are the variety of services we offer.</p>
            <div className=' w-full flex flex-row justify-between items-start mt-16'>
                {serv.map((item, index) =>(
                    <div key={index} className=' w-[23%]'>
                        <div style={{backgroundImage:`url(${item.img})`, backgroundPosition:'center', backgroundSize:'cover'}} className=' w-full h-[250px] bg-[#ffffff87]'></div>
                        <p className=' font-DarkerGrotesque mt-6 text-xl text-[#741414] font-medium'>{ item.name }</p>
                    </div>
                ))}
            </div>
            <div className=' w-full flex flex-row justify-between items-start mt-8'>
                {serv1.map((item, index) =>(
                    <div key={index} className=' w-[23%]'>
                        <div style={{backgroundImage:`url(${item.img})`, backgroundPosition:'center', backgroundSize:'cover'}} className=' w-full h-[250px] bg-[#ffffff87]'></div>
                        <p className=' font-DarkerGrotesque mt-6 text-xl text-[#741414] font-medium'>{ item.name }</p>
                    </div>
                ))}
                <div className=' w-[48%]'>
                    <div style={{backgroundImage:`url(${nestle})`, backgroundPosition:'center', backgroundSize:'cover'}} className=' w-full h-[250px] bg-[#ffffff87]'></div>
                    <p className=' font-DarkerGrotesque mt-6 text-xl text-[#741414] font-medium'>Our Strategic Partnership Nestle Nigeria plc in the operation of Mobile Cafe Vans has a huge variety of local street foods and snacks in a planned initial 25 Vans for Lagos we will increase these with time.</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Service;