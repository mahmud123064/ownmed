import { FiMail } from "react-icons/fi";
import { MdAddLocation } from "react-icons/md";



const TopNavbar = () => {

    return (
        <div>
            <div className='flex justify-between items-center px-4 py-2 bg-primary text-white'>
                <div className='flex gap-2 items-center'><FiMail className='text-xl' /> mail@ownmed.com</div>
                <div className='flex gap-2 items-center'><MdAddLocation className='text-xl'/>Dhaka, Bangladesh</div>
            </div>
        </div>
    );
};

export default TopNavbar;