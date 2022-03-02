import React, { useState } from 'react';

import {mergeSortingAlgo} from  '../MergeSort';
import './Level3.css';
import  Steps3 from './Steps3';
import ToolTip from 'react-tooltip';
import infoLogo from '../Images/index.png';

const Level3 = (props)=>{


    const[sort, setSort]=useState([]);
    const [unsort, setUnSort] = useState([]);
    const[branch, setBranch]  = useState([]);
    const [generate, setGenerate] = useState(false);
    const [toggleStep, setStep] = useState(true);


    function startSort()
    {
        
        let nums=[]
   

        for(let i=0;i<10;i++)
        {
            nums.push(Math.floor(Math.random()*20));
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
            <div className="level-info">
                    <div>Level 3</div>
                    <img src={infoLogo} className='info-icon' data-tip="Level 3: Complete each step correctly to move on" data-place="right"></img>
                    <ToolTip/>
                </div>

                <button onClick={()=>{intitiate()}} disabled={generate}>Generate  Numbers</button>
            </div>

      
                
            <div className = "array-container">

                <div className="array-layout">
                   
                   <div className='array-nums'>
                    {unsort.map((element, index)=>{
                        return(
                            <div key={index} style={{marginLeft: '.5rem' ,marginRight: '.5rem' }}  > {element} </div>
                        )
                    })}
                    </div>
                 

                </div>


                <div className = "array-layout">
                    <div className='array-nums'>
                    {sort.map((element, index)=>{
                        return(
                            <div key={index} style={{marginLeft: '.5rem' ,marginRight: '.5rem' }}  > {element} </div>
                        )
                    })}
                    </div>

                </div>
      
            </div>
             <Steps3 contents={branch} toggle={toggleStep} resetGen={resetGenerate}></Steps3> 
        </div>
    )
}

export default Level3;