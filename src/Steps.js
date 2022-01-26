import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';




const Numbers = (props) => {



    console.log(props.data)

    return (
        // <div>{props.data.join(', ')}</div>
        <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', margin: '15px', width: '50%' }}>
            {
                props.data.map((element, index) => {

                    if (Array.isArray(element[0])) {
                        return (
                            <div key={index} style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', margin: '15px' }}>
                                {
                                    element.map((element2, index) => {
                                        return <div key={index}>{element2.join(', ')}</div>
                                    })
                                }
                            </div>

                        )

                    }
                    else {
                        return (

                            <div key={Math.random()} style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-evenly', margin: '15px' }}>{element.join(', ')}</div>
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
    console.log("Branch  length " + props.contents.length);
    console.log("index3: " + index3);
    console.log('index1: ' + index1);
    console.log(props.contents.length)

    console.log(step);




    function changeStep(newValue) {
        setIndex1(newValue)


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

                setStep(props.contents[index3 - 1][index2][props.contents[index3][index2].length - 1]);
                setData(data => [...props.contents[index3 - 1][1]])
                return;


            }

            if (index3 === props.contents.length - 1 && index1 === props.contents[index3][index2].length - 1) {
                console.log('in reset')
                setIndex1(0);
                setIndex3(0);
                setStep(props.contents[0][index2][0]);
                setData(data => [...props.contents[0][1]])


            }
            else if (index1 === props.contents[index3][index2].length - 1) {
                setIndex1(0);
                setIndex3(index3 + 1);
                setStep(props.contents[index3 + 1][index2][0]);
                setData(data => [...props.contents[index3 + 1][1]])
            }
            else {

                setStep(props.contents[index3][index2][newValue]);
                setData(data => [...props.contents[index3][1]])

            }





        }
        else {
            setStep("byebye")
        }

    }


    return (

        <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', margin: '15px' }}>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-evenly', margin: '15px' }} >

                <button onClick={() => { changeStep(index1 - 1) }} disabled={index1 <= 0 && index3 === 0 && index2 === 0 ? true : false}>Previous Step</button>
                <button onClick={() => { changeStep(index1 + 1) }}>Next Step</button>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-evenly', margin: '15px' }} >
                <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-evenly', margin: '15px' }} >
                    <div>{step}</div>
                    <Numbers data={data}></Numbers>



                </div>

            </div>



        </div>

    )








}

export default Steps;