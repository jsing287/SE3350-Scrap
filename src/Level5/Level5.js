import React, { useState } from 'react';

import {mergeSortingAlgo} from  '../MergeSort';
import './Level5.css';
import  Steps3 from './Steps5';

const Level5 = (props)=>{


    const[sort, setSort]=useState([]);
    const [unsort, setUnSort] = useState([]);
    const[branch, setBranch]  = useState([]);
    const [generate, setGenerate] = useState(false);
    const [toggleStep, setStep] = useState(true);


    function startSort()
    {
        
        let nums=[]
   

        for(let i=0;i<50;i++)
        {
            nums.push(Math.floor(Math.random()*100)+1);
        }

        setUnSort([...nums]);

        let info = mergeSortingAlgo(nums);
        setBranch(info[1])

        setSort(info[0]);
       
    }


    function  resetGenerate()
    {
        setGenerate(false);
        setSort([]);
        setUnSort([]);
        setStep(true);
        props.goToNext(1);
    }


    function intitiate()
    {
        startSort();
        setGenerate(true);
        setStep(false);

    }

    return(
        <div className="level-container">

            <div className="header">
                <div >Level 5</div>
                <button onClick={()=>{intitiate()}} disabled={generate}>Generate  Numbers</button>
            </div>

      
                
            <div className = "array-container">

                <div className="array-layout">
                   
                   <div className='array-nums'>
                    {unsort.map((element, index)=>{
                        return(
                            <div key={index} style={{marginLeft: '.25rem' ,marginRight: '.25rem' }}  > {element} </div>
                        )
                    })}
                    </div>
                 

                </div>


                <div className = "array-layout">
                    <div className='array-nums'>
                    {sort.map((element, index)=>{
                        return(
                            <div key={index} style={{marginLeft: '.25rem' ,marginRight: '.25rem' }}  > {element} </div>
                        )
                    })}
                    </div>

                </div>
      
            </div>
             <Steps3 contents={branch} toggle={toggleStep} resetGen={resetGenerate}></Steps3> 
        </div>
    )
}

export default Level5;