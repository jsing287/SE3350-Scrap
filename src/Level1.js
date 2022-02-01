import React, { useState } from 'react';

import Steps from './Steps'


function Level1()
{

    const[sort, setSort]=useState([]);
    
    const[branch, setBranch]  = useState([]);
  
   
   
    function merge(left, right)
    {
        let sorted=[];

        let holder=[];
        let data=[];

        let mergeStep1 = 'Merge ' + left + ' with ' + right 
      

        holder.push(mergeStep1);
        data.push([[...left], [...right]]);

        let mergeStep2 = 'Compare the first element of both arrays. '
    

        holder.push(mergeStep2)




        while(left.length&&right.length)
        {
           

            if(left[0]<right[0])
            {
                let mergeStep3 = left[0] + ' is less than ' + right[0] + ' push ' + left[0] + ' into sorted array first. Shift left array index one element to the left.'
                holder.push(mergeStep3)
                data.push([[left[0]],[right[0]]])
           
                sorted.push(left.shift());
                data.push([...sorted])
                
            
                
            }
            else
            {
                let mergeStep3 = right[0] + ' is less than ' + left[0] + ' push ' + right[0] + ' into sorted array first. Shift right array index one element to the left.'

                holder.push(mergeStep3);
                data.push([[left[0]],[right[0]]])

                sorted.push(right.shift());
                data.push([...sorted])

              
              
            }

           
        }

        if(!left.length)
        {
            let mergeStep4="Left array has no more element to compare. Return sorted array with remaining right elements appended.";
          
            holder.push(mergeStep4);
            data.push([...sorted,...left,...right])
          
        }
        else if(!right.length)
        {
            let mergeStep4="Right array has no more elements to compare. Return sorted array with remaining elements in left array appended.";
      
            holder.push(mergeStep4);
            data.push([...sorted,...left,...right])
          
        }

     
    
       setBranch((branch)=>[...branch,[[...holder],[...data]]])

       
       

        return [...sorted,...left,...right];
    }

    function mergeSort(unsorted)
    {
        const halfLength = unsorted.length/2;

        let holder=[];
        let data=[];

        let step = 'Split ' + unsorted + ' as evenly as possible.'


        holder.push(step);
        data.push([...unsorted]);
   

     
        

        if(unsorted.length<=1)
        {
            let step2 = 'Cannot split ' + unsorted + ' return value.'
     

            holder.push(step2);
            data.push([...unsorted]);
            setBranch(branch=>[...branch,[[...holder],[...data]]])
            return unsorted;
        }



        const leftArray = unsorted.splice(0,halfLength);
        const  rightArray=unsorted;

        let step3 = 'Select the left subarray.'
   

        holder.push(step3);

        data.push([[...leftArray],[...rightArray]])
    
        setBranch(branch=>[...branch,[[...holder],[...data]]])

    

        return merge(mergeSort(leftArray), mergeSort(rightArray));

    }

    function startSort()
    {
        // let nums = [3,1,7,2,5,4];
        let nums=[]
   

        for(let i=0;i<10;i++)
        {
            nums.push(Math.floor(Math.random()*20));
        }

        let sorted = mergeSort(nums)

        setSort(sorted);
       
     

    }

   

 

    return(

        <div style={{ display:'flex', flexDirection:'column', height:'100%', justifyContent:'center', margin:'20px'}}>

            <div style={{display: 'flex', flexDirection:'row', margin:'15px', justifyContent:'space-between'}}>
                <div style={{fontSize:'20px', fontWeight:'bold'}}>Level 1</div>
                <button onClick={startSort}>Generate  Numbers</button>
            </div>

            <div style={{display:"flex", flexDirection:'row', justifyContent:'center', margin:'15px'}}>

                <div style={{display:"flex", flexDirection:'row', justifyContent:'center', border: '1px solid green'}}>
                    {sort.map((element)=>{
                        return(
                            <div key={Math.random()} style={{marginLeft: '.5rem' ,marginRight: '.5rem' ,}}  > {element} </div>
                        )
                    })}

                </div>
              

            </div>

         

             <Steps contents={branch}></Steps>
                



              
        
          
           

        </div>

    );
}

export default Level1;