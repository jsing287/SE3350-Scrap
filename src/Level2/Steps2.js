import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import nextId from "react-id-generator";
import './Steps2.css'
import SelectionHighlighter from "react-highlight-selection";
import {Howl, Howler} from 'howler';
import wrong from "../AudioClips/wrongSound.mp3"
import right from "../AudioClips/rightSound.mp3"

var sfx = {
    wrong: new Howl({
        src: [
            wrong
        ],
        onend: function (){
            console.log("the wrong sound played")
        }
    }),
    right: new Howl({
        src: [
            right
        ],
        onend: function (){
            console.log("the right sound played")
        }
    }),

    fake: new Howl({
        src:[
            'src/AudioClips/click.mp3'

        ]
    })
}

const Numbers = (props) => {
    

    const [mergedArray, setMerge] = useState([]);
    const [indexHolder, setIndex]  = useState([]);
    const [selectDis, setDis] = useState(false);


    useEffect(()=>{
        setMerge([])
    },[props.data])


    const onSelect=(text)=>{

    

        let select = text.selection.replace(/\s+/g, '')
      
        props.checkSelect(select)

    }

    const addNum=(num)=>{
        console.log(sfx.fake.state())
        sfx.fake.play();
        console.log(sfx.fake.state())

        let holder = [...mergedArray, num]
       
        if(props.sendMerge(holder))
        {
            setMerge(data=> [...data, num])

        }

     

      
     

    }





    return (
 
        <div className='steps-nums-header'>
  
            {
                props.data.map((element, index) => {
                    if (Array.isArray(element[0])&&index===0) {
                     
                        return (
                            <div key={nextId()} className='nums-outer'>
                                <div className='nums-body'>
                                {
                                    
                                     element.map((element2, index1) => {
                                                return <div key={nextId()} >
                                                 
                                                 {element2.map((element3, index3)=>{
                                                     return(
                                                         <button key={nextId()} disabled={props.toggle} onClick={()=>{addNum(element3)}}>{element3}</button>
                                                     )
                                                 })}
                                           
                                                </div>
                                            })

                                  
                                 
                                }
                                </div>
                                <div className='picked-nums'>{mergedArray.map((num, index4)=>{
                                    return(<div key={index4} style={{marginLeft:'15px'}}>{num}</div>)
                                })}</div>
                            </div>

                        )

                    }
                    else if(index===0) {
                     
                       
                        return (

                            <div key={nextId()} className='nums-top'>
                                   <SelectionHighlighter
                                        text={element.join(" ")}
                                        selectionHandler={onSelect}
                                        customClass='custom-class'
                                    />
                                   
                            </div>
                        )

                    }

                   


                })
            }
        </div>
    )


}


const Steps2 = (props) => {

    const [index1, setIndex1] = useState(-1);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);
    const [step, setStep] = useState('');
    const [data, setData] = useState([]);
    const[toggleNum, setToggleNum] = useState(false);
    const [toggleColor, setColor] = useState(false);
    const [result,  setResult] = useState('');
    const [counter, setCounter] = useState(0);
    const [doneMerge, setDone] = useState(false)
    const [inMerge, setIn] = useState(false);
  

    function checkMerge(merge)
    {
     
        setIn(true);
        

        let compareData=[];

        data.forEach((element)=>{
            if(!Array.isArray(element[0]))
            {
                compareData.push(element);
            }
        })

        console.log(counter)

      


        if(JSON.stringify(merge)===JSON.stringify(compareData[compareData.length-1]))
        {
            sfx.right.play()
            setColor(true);
            setResult('CORRECT')
           
           
            setToggleNum(true);
            setDone(true);
            return true;

        }





        if(JSON.stringify(merge)===JSON.stringify(compareData[counter]))
        {
            sfx.right.play()
            setColor(true);
            setResult('CORRECT')
           
           
            if(counter+1<compareData.length)
            {
                setCounter(counter+1);

            }
            return true;

        }
        else if(compareData[counter].join('').includes(merge.join('')))
        {
            sfx.right.play()
            setColor(true);
            setResult('CORRECT')
            if(counter+1<compareData.length)
            {
                setCounter(counter+1);

            }
          
            return true;

        }
        else
        {
            sfx.wrong.play()
            setColor(false);
            setResult('WRONG')
            return false;


        }
       



    }


    function checkSelection(nums)
    {
        

        if(data[1][0].length>1)
        {
            if(nums===data[1][0].join(''))
            {
                sfx.right.play()
                console.log('correct');
                setColor(true);
                setResult('CORRECT')
                
            }
            else if(nums.length>0)
            {
                sfx.wrong.play()
                console.log('incorrect');
                setColor(false);
                setResult('WRONG')
                
            }

        }
        else
        {
            console.log(data[1][0])
            console.log(nums);
            if(nums===data[1][0].toString())
            {
                sfx.right.play()
                console.log('correct');
                setColor(true);
                setResult('CORRECT');
                
            }
            else if(nums.length>0)
            {
                sfx.wrong.play()
                console.log('incorrect');
                setColor(false);
                setResult('WRONG');
                
            }

        }
       
        

    }


    function changeStep(newValue) {
       


        if (props.contents.length > 0) {

           


            if (newValue < index1 && newValue >= 0) {

                setIndex1(newValue);
                setStep(props.contents[index3][index2][newValue]);
                setData(data => [...props.contents[index3][1]])
                
                return;


            }
            else if (newValue < index1 && newValue < 0) {
                console.log('in negative ')
                setIndex3(index3 - 1)
                setIndex1(props.contents[index3 - 1][index2].length - 1)
              

                setStep(props.contents[index3 - 1][index2][props.contents[index3-1][index2].length - 1]);
                setData(data => [...props.contents[index3 - 1][1]])
                return;


            }

            if (index3 === props.contents.length-1 && index1 === props.contents[index3][index2].length - 1) {
                console.log('in reset')
                setIndex1(-1);
                setIndex3(0);
                setStep('');
                setData([])
              
                props.resetGen();


            }
            else if (index1 === props.contents[index3][index2].length - 1) {

                if(toggleColor&&(inMerge?doneMerge:true))
                {
                    setIndex1(0);
                    setIndex3(index3 + 1);
                    setStep(props.contents[index3 + 1][index2][0]);
                    setData(data => [...props.contents[index3 + 1][1]]);
                   
                    setColor(false);
                    setResult('');
                    setCounter(0);
                    setToggleNum(false);
                    setDone(false);
                    setIn(false)

                }
                else
                {
                    alert('Please complete this step  to continue.')
                }
               
                
            }
            else {
               

                
                setIndex1(newValue)
                setStep(props.contents[index3][index2][newValue]);
               

                if(newValue===0)
                {
                        setData(data => [...props.contents[index3][1]])

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

            <div style={{color:toggleColor?'green':'red'}} id="RW">{result}</div>

            <div className='steps-display' >
                <div className='steps-body'>
                    <div style={{width:'500px', marginRight:'15px'}}>{step}</div>
                    <div>
                         <Numbers data={data}  toggle={toggleNum} checkSelect={checkSelection} selectColor={toggleColor} sendMerge={checkMerge} ></Numbers>

                    </div>
               


                </div>

            </div>



        </div>

    )








}



export default Steps2;