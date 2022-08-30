import { navmenu } from "../site/site";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) {
        setShow(false); 
      } else {
        setShow(true);  
      }

      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function to avoid memory leak, executed before component unmounts
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav id="navbar" className={`${show ? 'nav-active' : 'nav-hidden'}`}>
      <ul>
        {navmenu.map((el) => {
          return (
            <li key={el.id}>
                <a className="nav-item" href={`#${el.id}`}> {el.title} </a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
