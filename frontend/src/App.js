
import './App.css';
import { Table } from '@mantine/core';
import data from "../src/Wine-Data.json"
import Gamma from './Component/gamma';
function App() {
  let Alcohol_class = [
    ...new Set(data.map((element) => element.Alcohol)),
];
function calculateMean(x) {
  const arr=data.filter((el)=>el.Alcohol===x)
  const sum = arr.reduce((acc, val) => acc + val.Flavanoids, 0);
  console.log(sum,arr)
  return sum / arr.length;
}
function calculateMedian(x) {
  const arr=data.filter((el)=>el.Alcohol===x)
  const sortedArr = arr.slice().sort((a, b) => a.Flavanoids - b.Flavanoids);
  const mid = Math.floor(sortedArr.length / 2);
  return sortedArr.length % 2 !== 0 ? sortedArr[mid].Flavanoids : (sortedArr[mid - 1].Flavanoids + sortedArr[mid].Flavanoids) / 2;
}
function calculateMode(x) {
  const arr=data.filter((el)=>el.Alcohol===x)
  const frequencyMap = {};
  let maxFrequency = 0;
  let mode = null;
  arr.forEach((num) => {
      frequencyMap[num.Flavanoids] = (frequencyMap[num.Flavanoids] || 0) + 1;
      if (frequencyMap[num.Flavanoids] > maxFrequency) {
          maxFrequency = frequencyMap[num.Flavanoids];
          mode = num.Flavanoids;
      }
  });

  return mode;
}
  return (
    <div className="App">
      <h3>Flavonoids Details</h3>
       <Table.ScrollContainer minWidth={500} type='native' position="center" >
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
    <Table.Th>Flavonoids Mean</Table.Th>
    {Alcohol_class&&Alcohol_class.map((el)=> <><Table.Td>{calculateMean(el)>0?calculateMean(el).toFixed(3):0}</Table.Td>

    </>)}
   
  </Table.Tr>
  <Table.Tr >
    <Table.Th>Flavonoids Median</Table.Th>
    {Alcohol_class&&Alcohol_class.map((el)=> <>
    <Table.Td>{calculateMedian(el)>0?calculateMedian(el).toFixed(3):0}</Table.Td>
   
    </>)}
   
  </Table.Tr>
  <Table.Tr >
    <Table.Th>Flavonoids Mode</Table.Th>
    {Alcohol_class&&Alcohol_class.map((el)=> <>
    <Table.Td>{calculateMode(el)>0 ?calculateMode(el).toFixed(3):0}</Table.Td>
    </>)}
   
  </Table.Tr>
  </Table.Tbody>
    </Table></Table.ScrollContainer>
    <h3>Gamma Details</h3>

    <Gamma/>
    </div>
  );
}

export default App;
