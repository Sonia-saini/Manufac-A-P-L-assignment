import React from 'react'
import data from "../Wine-Data.json"
import { Table } from '@mantine/core';
function Gamma() {
    let Alcohol_class = [
        ...new Set(data.map((element) => element.Alcohol)),
    ];
    function calculateMean(x) {
      const arr=data.filter((el)=>el.Alcohol===x)
      const gamma=arr.map((el)=>(el.Ash*el.Hue)/el.Magnesium)
      const sum = gamma.reduce((acc, val) => acc + val, 0);
      console.log(sum,arr)
      return sum / gamma.length;
    }
    function calculateMedian(x) {
      const arr=data.filter((el)=>el.Alcohol===x)
      const gamma=arr.map((el)=>(el.Ash*el.Hue)/el.Magnesium)
      const sortedArr = gamma.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortedArr.length / 2);
      return sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    }
    function calculateMode(x) {
      const arr=data.filter((el)=>el.Alcohol===x)
      const gamma=arr.map((el)=>(el.Ash*el.Hue)/el.Magnesium)
      const frequencyMap = {};
      let maxFrequency = 0;
      let mode = null;
    
      // Count the frequency of each element in the array
      gamma.forEach((num) => {
          frequencyMap[num] = (frequencyMap[num] || 0) + 1;
          if (frequencyMap[num] > maxFrequency) {
              maxFrequency = frequencyMap[num];
              mode = num;
          }
      });
    
      return mode;
    }
    
  return (
    <div>  <Table.ScrollContainer minWidth={500} type='native' >
    <Table>
         <Table.Thead>
           <Table.Tr>
             <Table.Th>Measure</Table.Th>
             {Alcohol_class&&Alcohol_class.map((el)=><><Table.Th>Class {el}</Table.Th>
             </>
           )}
             
   
           </Table.Tr>
         </Table.Thead>
         <Table.Tbody>
     <Table.Tr >
       <Table.Th>Gamma Mean</Table.Th>
       {Alcohol_class&&Alcohol_class.map((el)=> <><Table.Td>{calculateMean(el)>0?calculateMean(el).toFixed(3):0}</Table.Td>
   
       </>)}
      
     </Table.Tr>
     <Table.Tr >
       <Table.Th>Gamma Median</Table.Th>
       {Alcohol_class&&Alcohol_class.map((el)=> <>
       <Table.Td>{calculateMedian(el)>0?calculateMedian(el).toFixed(3):0}</Table.Td>
      
       </>)}
      
     </Table.Tr>
     <Table.Tr >
       <Table.Th>Gamma Mode</Table.Th>
       {Alcohol_class&&Alcohol_class.map((el)=> <>
       <Table.Td>{calculateMode(el)>0 ?calculateMode(el).toFixed(3):0}</Table.Td>
       </>)}
      
     </Table.Tr>
     </Table.Tbody>
       </Table></Table.ScrollContainer></div>
  )
}

export default Gamma