import React, { useState } from 'react';

import Level1 from './Level1';







function Home()
{

    

    return(

        <div style={{flexDirection:'column', justifyContent:'center', padding:'10px', width:'100%', height:'100%',position: 'absolute', top: 0, left: 0 }}>
           <div style={{fontSize:'50px'}}>Welcome To The Sorting Tutor</div>
           <div name="body">

            {/* <button onClick={startSort}>Generate  Numbers</button>
            <div style={{display:"flex", flexDirection:'row', justifyContent:'center'}}>

            {sort.map((element)=>{
                return(
                    <div key={Math.random()} >{element}    </div>
                )
            })}
               
            </div> */}


            <Level1/>
           
          
           

           </div>
           

        </div>

    );
}

export default Home;