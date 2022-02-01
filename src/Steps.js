import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';


import { motion } from "framer-motion"
import nextId from "react-id-generator";



/////// GABOR AND JAS START ////////////////////////////////////////////////////////////////////////////////////////////////////

const Numbers = (props) => {
    return (
 
        <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', margin: '15px', }}>
  
            {
                props.data.map((element, index) => {
                    if (Array.isArray(element[0])) {
                     
                        return (
                            <div key={nextId()} style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', }}>
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

                            <div key={nextId()} style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-evenly', margin: '15px' }}>
                                
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

/////// GABOR AND JAS END ////////////////////////////////////////////////////////////////////////////////////////////////////




/////// EVAN AND COLIN START ////////////////////////////////////////////////////////////////////////////////////////////////////
const Steps = (props) => {

    const [index1, setIndex1] = useState(-1);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);
    const [step, setStep] = useState('');
    const [data, setData] = useState([]);
    const[toggle, setToggle] = useState(true);
   
  




    function changeStep(newValue) {
        setIndex1(newValue)


        if (props.contents.length > 0) {


            if (newValue < index1 && newValue >= 0) {

                setIndex1(newValue);
                setStep(props.contents[index3][index2][newValue]);
                setData(data => [...props.contents[index3][1]])
                setToggle(false);
                return;


            }
            else if (newValue < index1 && newValue < 0) {
                console.log('in negative ')
                setIndex3(index3 - 1)
                setIndex1(props.contents[index3 - 1][index2].length - 1)
                setToggle(false);

                setStep(props.contents[index3 - 1][index2][props.contents[index3-1][index2].length - 1]);
                setData(data => [...props.contents[index3 - 1][1]])
                return;


            }

            if (index3 === props.contents.length - 1 && index1 === props.contents[index3][index2].length - 1) {
                console.log('in reset')
                setIndex1(0);
                setIndex3(0);
                setStep(props.contents[0][index2][0]);
                setData(data => [...props.contents[0][1]])
                setToggle(true);


            }
            else if (index1 === props.contents[index3][index2].length - 1) {
                setIndex1(0);
                setIndex3(index3 + 1);
                setStep(props.contents[index3 + 1][index2][0]);
                setData(data => [...props.contents[index3 + 1][1]]);
                setToggle(true);
                
            }
            else {

                setStep(props.contents[index3][index2][newValue]);
                setToggle(false);

                if(newValue===0)
                {
                        setData(data => [...props.contents[index3][1]])
                        setToggle(true);

                }
             

            }





        }
        else {
            setStep("byebye")
        }

    }
/////// EVAN AND COLIN END////////////////////////////////////////////////////////////////////////////////////////////////////


/////// JASON START ////////////////////////////////////////////////////////////////////////////////////////////////////
    return (

        <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', margin: '15px' }}>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-evenly', margin: '15px' }} >

                <button onClick={() => { changeStep(index1 - 1) }} disabled={index1 <= 0 && index3 === 0 && index2 === 0 ? true : false}>Previous Step</button>
                <button onClick={() => { changeStep(index1 + 1) }}>Next Step</button>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-evenly', margin: '15px' }} >
                <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-evenly', margin: '15px' }} >
                    <div style={{width:'500px'}}>{step}</div>
                    <div>
                         <Numbers data={data}  toggle={toggle} ></Numbers>

                    </div>
               


                </div>

            </div>



        </div>

    )








}

/////// JASON END ////////////////////////////////////////////////////////////////////////////////////////////////////

export default Steps;