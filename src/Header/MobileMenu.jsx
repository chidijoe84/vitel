import {AiOutlineMenuFold} from 'react-icons/ai';
import {GrClose} from 'react-icons/gr'
import { useState } from 'react';
import {motion} from 'framer-motion';

const MobileMenu = (props) => {
    const [open, setOpen] = useState(false);

    const hamburger = <AiOutlineMenuFold color='blue' size='40px' className='Hamburger'
    onClick={()=> setOpen(!open)}
    />

    const closeIcon = <GrClose color='whte' size='40px' className='Hamburger'
    onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => setOpen(false);

    const animateFrom = {opacity: 0, y: -40};
    const animateTo = {opacity: 1, y: 0};

    return (
        <div className='menu2'>
            {open ? closeIcon : hamburger}
            { open &&  <div className='disp'
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.05}}
            >
             <motion.a 
             initial={animateFrom}
             animate={animateTo}
             transition={{delay: 0.10}}
             href='/#product' onClick={() => props.isMobile && closeMobileMenu()}>  PRODUCTS </motion.a>
             <motion.a
             initial={animateFrom}
             animate={animateTo}
             transition={{delay: 0.25}}
             href='/#hero' onClick={() => props.isMobile && closeMobileMenu()}>  SOLUTIONS  </motion.a>
             <motion.a 
             initial={animateFrom}
             animate={animateTo}
             transition={{delay: 0.35}}
             href='/#partners' onClick={() => props.isMobile && closeMobileMenu()}>  PARTNERS  </motion.a>
             <motion.a 
             initial={animateFrom}
             animate={animateTo}
             transition={{delay: 0.45}}
             href='/#company' onClick={() => props.isMobile && closeMobileMenu()}>  COMPANY</motion.a>
              <motion.a 
             initial={animateFrom}
             animate={animateTo}
             transition={{delay: 0.55}}
             href='/#management' onClick={() => props.isMobile && closeMobileMenu()}>  MANAGEMENT TEAM</motion.a>
            </div>
        }
          </div>
    )
}

export default MobileMenu