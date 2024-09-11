import RedberryLogo from '../../assets/redberry-logo.png'
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="w-screen h-100 border-b-1 border-borderColor px-40">
            <div className='w-full h-full flex items-center'>
                <Link to="/">
                    <img src={RedberryLogo} alt='redberry logo'/>
                </Link>
            </div>
        </div>
    );
};