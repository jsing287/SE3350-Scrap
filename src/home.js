import React, { useState } from 'react';

import './Home.css';
import Level1 from './Level1/Level1';
import Level2 from './Level2/Level2';
import Level3 from './Level3/Level3';
import Level4 from './Level4/Level4';
import Level5 from './Level5/Level5';



const Home = ()=>
{

    const [levelOne, setOne] = useState(true);
    const [levelTwo, setTwo] = useState(false);
    const [levelThree, setThree] = useState(false);
    const [levelFour, setFour] = useState(false);
    const [levelFive, setFive] = useState(false);



    function nextLevel(level)
    {
        
        switch(level)
        {
            case 2:
                setOne(false)
                setTwo(true)
                setThree(false)
                setFour(false);
                setFive(false);
                break;
            case 3:
                setOne(false)
                setTwo(false)
                setThree(true)
                setFour(false);
                setFive(false);
                break;
            case 4:
                setOne(false)
                setTwo(false)
                setThree(false)
                setFour(true);
                setFive(false);
                break;
            case 5:
                setOne(false)
                setTwo(false)
                setThree(false)
                setFour(false);
                setFive(true);
             
                break;
            
            default:
                console.log('error  in level  selection.')

        }

    }





    return(

        <div className="sorting-tutor">
           <div className="title">Welcome To The Sorting Tutor</div>
           <div name="body">
               
                   
                         {/* {levelOne&&<Level1 goToNext={nextLevel}/>} 
                         {levelTwo&&<Level2  goToNext={nextLevel}/>}
                         {levelThree&&<Level3 goToNext={nextLevel}/>} */}
                         {/* {true&&<Level4 goToNext={nextLevel}/>} */}
                         {true&&<Level5 goToNext={nextLevel}/>}
                         
                     
           </div>
           
        </div>

    );
}

export default Home;