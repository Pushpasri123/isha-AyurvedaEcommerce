import React from "react";
import './Navigation1.css';
import SearchIcon from '@mui/icons-material/Search';
const Navigation = ()=>{
    return(
        <>
        <header>
            
             <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"/>
                        
                    
                    <div className="col-sm-5">
                     <div className='headerSearch d-flex align-items-center'>
                         <div className="selecrDrop cursor ">
                            
                         </div>
                          
                         <div class="search-bar">
                         <input type="text" placeholder="search here" />
                         <button type="submit"> <SearchIcon></SearchIcon></button>
                         
                         </div>
                            </div>
                        
                            </div>
                            </div>

                         </div>
                        
                      
                     
                </div>
            
        </header>
        </>
    )


}
export default Navigation;