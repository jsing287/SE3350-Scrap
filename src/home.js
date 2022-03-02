import React, { useState } from 'react';

import './Home.css';
import Level1 from './Level1/Level1';
import Level2 from './Level2/Level2'
import Level3 from './Level3/Level3'



const Home = ()=>
{

    const [levelOne, setOne] = useState(true);
    const [levelTwo, setTwo] = useState(false);
    const [levelThree, setThree] = useState(false);



    function nextLevel(level)
    {
        
        switch(level)
        {
            case 2:
                setOne(false)
                setTwo(true)
                setThree(false)
                break;
            case 3:
                setOne(false)
                setTwo(false)
                setThree(true)
                break;
            
            default:
                console.log('error  in level  selection.')

        }

    }





    return(

        <div className="sorting-tutor">
           <div className="title">Welcome To The Sorting Tutor</div>
           <div name="body">
               
                   
                         {/* {levelOne&&<Level1 goToNext={nextLevel}/>}  */}
                         {/* {true&&<Level2  goToNext={nextLevel}/>} */}
                         {/*true&&<Level3/>*/}

                         {levelOne&&<Level1 goToNext={nextLevel}/>} 
                         {levelTwo&&<Level2  goToNext={nextLevel}/>}
                         {levelThree&&<Level3/>}
                     
           </div>
           
        </div>

    );
}

export default Home;