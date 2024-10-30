import './nav.css'
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
      const [navs, setNavs] = useState([])
      useEffect(() => {
            fetch('nav.json')
                  .then(res => res.json())
                  .then(data => setNavs(data))
      }, [])
      console.log(navs);
      return (
            <div>
                  <nav className=" bg-orange-700 py-3 text-white ">
                        <div className=" container mx-auto flex items-center justify-between ">
                              <Link to='/' className=" text-2xl font-bold ">Food hub</Link>
                              <div>
                                    <ul className=" flex gap-8" id="nav">
                                          {navs.map((nav, idx) => <NavLink to={nav.path} key={idx}>{nav.name}</NavLink>)}
                                    </ul>
                              </div>
                        </div>
                  </nav>
            </div>
      );
};

export default Nav;