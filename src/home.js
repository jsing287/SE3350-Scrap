import React, { useState } from 'react';

import Level1 from './Level1';







const Home = ()=>
{
    return(

        <div style={{flexDirection:'column', justifyContent:'center', padding:'10px', width:'100%', height:'100%',position: 'absolute', top: 0, left: 0 }}>
           <div style={{fontSize:'50px'}}>Welcome To The Sorting Tutor</div>
           <div name="body">
                     <Level1/>
           </div>
           

        </div>

    );
}

export default Home;