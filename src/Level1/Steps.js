import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import nextId from "react-id-generator";
import './Steps.css'
import {Howl, Howler} from 'howler';
import click from '../AudioClips/click.mp3'

var sfx = {
    fake: new Howl({
    src:[click]
})
}

const Numbers = (props) => {
    
    return (
 
        <div className='steps-nums-header'>
  
            {
                props.data.map((element, index) => {
                    if (Array.isArray(element[0])) {
                     
                        return (
                            <div key={nextId()} className='nums-body'>
                                {
                                    
                                     element.map((element2, index1) => {
                                                return <div key={nextId()} style={{}}>
                                                 
                                                  <motion.div
                                                        initial={{opacity:props.toggle?0.0:1.0, backgroundColor:index1===0&&props.data.length===2?'yellow':''}}
                                                        animate={{ opacity: 1.0 }}
                                                        transition={{ ease: "easeIn", duration:1.0, delay:index/3 }}>{element2.join(', ')}</motion.div>
                                           
                                                </div>
                                            })

                                  
                                 
                                }
                            </div>

                        )

                    }
                    else {
                     
                       
                        return (

                            <div key={nextId()} className='nums-top'>
                                
                                <motion.div
                                    initial={{opacity:props.toggle?0.0:1.0}}
                                    animate={{ opacity: 1.0 }}  
                                    transition={{ ease: "easeIn", duration: 1.0, delay:index/3 }}>{element.join(', ')}</motion.div></div>
                        )

                    }

                   


                })
            }
        </div>
    )


}


const Steps = (props) => {

    const [index1, setIndex1] = useState(-1);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);
    const [step, setStep] = useState('');
    const [data, setData] = useState([]);
<<<<<<< HEAD:src/Steps.js
    const[toggle, setToggle] = useState(true);
=======
    const[toggleNum, setToggleNum] = useState(true);
   
  



>>>>>>> 25b6af71a07b217d4399f2d2c571796317b2bbec:src/Level1/Steps.js

    function changeStep(newValue) {
        setIndex1(newValue)

        if (props.contents.length > 0){

            if (newValue < index1 && newValue >= 0) {

                setIndex1(newValue);
                setStep(props.contents[index3][index2][newValue]);
                setData(data => [...props.contents[index3][1]])
                setToggleNum(false);
                return;
            }

            else if (newValue < index1 && newValue < 0) {
                console.log('in negative ')
                setIndex3(index3 - 1)
                setIndex1(props.contents[index3 - 1][index2].length - 1)
                setToggleNum(false);

                setStep(props.contents[index3 - 1][index2][props.contents[index3-1][index2].length - 1]);
                setData(data => [...props.contents[index3 - 1][1]])
                return;
            }

            if (index3 === props.contents.length-1 && index1 === props.contents[index3][index2].length - 1) {
                console.log('in reset')
                console.log(sfx.fake.state())
                sfx.fake.play();
                console.log(sfx.fake.state())
                console.log(sfx.fake)
                setIndex1(-1);
                setIndex3(0);
                setStep('');
                setData([])
                setToggleNum(true);
                props.resetGen();

            }
            else if (index1 === props.contents[index3][index2].length - 1) {
                setIndex1(0);
                setIndex3(index3 + 1);
                setStep(props.contents[index3 + 1][index2][0]);
                setData(data => [...props.contents[index3 + 1][1]]);
                setToggleNum(true);
                
            }
            else {

                setStep(props.contents[index3][index2][newValue]);
                setToggleNum(false);

                if(newValue===0)
                {
                        setData(data => [...props.contents[index3][1]])
                        setToggleNum(true);

                }
            }
        }
        else {
            setStep("error")
        }

    }

    return (

        <div className='steps-header'>
            <div className='steps-body' >

                <button onClick={() => { changeStep(index1 - 1) }} disabled={index1 <= 0 && index3 === 0 && index2 === 0 ? true : false}>Previous Step</button>
                <button onClick={() => { changeStep(index1 + 1) }} disabled={props.toggle}>Next Step</button>
            </div>

            <div className='steps-display' >
                <div className='steps-body'>
                    <div style={{width:'500px', marginRight:'15px'}}>{step}</div>
                    <div>
                         <Numbers data={data}  toggle={toggleNum} ></Numbers>

                    </div>
               


                </div>

            </div>



        </div>

    )








}



export default Steps;