import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Box from './pages/Box'
import './Home.css';


const Home = () => {
  const [houses, setHouses] = useState([]);
  // const [query,setQuery]=useState("");
  // const filter = (data) => {
  //   return data.filter(house=>
  //     house.ta value tou select &&
  //     house.ta value tou allou select
  //     ).includes(query)
  // }



  useEffect(() => {
    axios.get('https://assignment.prosperty-mgmt.dev/v1/listings'

    )
      .then((response) => {
        setHouses(response.data.data);
        console.log('res', response);

      });
  }, [])


  // var currentPage = 1;
  // var maxPage = 34;
  // const nxtPage = (num) => {
  //   let pageNum = currentPage + num
  //   meta.links.active=true
  //   currentPage = pageNum < 1 ? 1 : pageNum > maxPage ? maxPage : pageNum;
  //   window.location = `https://assignment.prosperty-mgmt.dev/v1/listings=${currentPage}`;
  // }


  // const houseList = houses?.map((house, index) =>
  // (<div key={index} >
  //   {house?.title},
  //   {house.type.name},
  //   {house.street},
  //   {house.street_number},
  //   {house.postal_code} ,
  //   {house.description},
  //   {house.created_at}
  //   <button>Edit</button></div>))
 
// function editing(){
//   axios.put('https://assignment.prosperty-mgmt.dev/v1/listings',{
//     property1:"value1",
//     property2:"value2",
//     completed:false to true
//   }).then(res=>console.log(res))
//   .catch(err=>console.error(err));
// }

  

  return (
    <>
      <div className='Home'>
        <table >
          <tr>
            <th>title</th>
            <th>type</th>
            <th>street</th>
            <th>street number</th>
            <th>postal code</th>
            <th>description</th>
            <th>created at</th>
            <th>updated at</th>
          </tr>
          {houses?.map((house, index) =>(
            <tr>
            <td>{house?.title}</td>
            <td>{house.type.name}</td>
            <td>{house.street}</td>
            <td>{house.street_number}</td>
            <td>{house.postal_code}</td>
            <td>{house.description}</td>
            <td> {house.created_at}</td>
            <td> {house.updated_at}</td>
            </tr>
            ))}
        </table>
        <button >previous page</button>
        {/* <button onClick={nxtPage()}>next page</button> */}
      </div>

    </>
  )
}



export default Home;

