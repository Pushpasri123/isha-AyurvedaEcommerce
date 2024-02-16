import './HomeMainNavigation.css';
import {Link} from'react-router-dom'
import React, { useState } from 'react';
import './Dropdown.css';

import { MenuItem } from './MenuItem';

function Dropdown(){
    const[click,setClick] =useState(false)
    const handdleClick=()=>setClick(!click)
    return(
        <>
        <ul onClick={handdleClick}
        className={click ? 'dropdown-menu clicked':'dropdown-menu'}>
            {MenuItem.map((item,index) =>{
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={()=> setClick(false)}>
                            {item.title}

                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}
export default Dropdown;