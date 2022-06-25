import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Box from './pages/Box'
import './Home.css';
import Header from './Header'


const Home = () => {
  const [houses, setHouses] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios.get('https://assignment.prosperty-mgmt.dev/v1/listings')
      .then((response) => {
        setHouses(response.data.data);
        setLinks(response.data.meta.links);
      });
    }, [])

  const turnPage = (url) => {
    url && axios.get(url).then((response) => {
      setHouses(response.data.data);
      setLinks(response.data.meta.links);
    })
  }
  

  return (
    <>
    <Header/>
    <Box setHouses={setHouses} />
      <div className='Home'>
        <table >
          <thead>
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
          </thead>
          <tbody>
            {houses?.map((house, index) =>(
                
                <tr key={index}>
                <td>
                <Link to={`/house/${house.uuid}`} state={{house}}>
                  {house?.title}
                </Link>
                </td>
                <td>{house.type.name}</td>
                <td>{house.street}</td>
                <td>{house.street_number}</td>
                <td>{house.postal_code}</td>
                <td>{house.description}</td>
                <td> {house.created_at}</td>
                <td> {house.updated_at}</td>

              </tr>
               
              ))}
            </tbody>
        </table>
        { links?.map((link, index) => 
           (<button className="btn" key={index} onClick={() => turnPage(link.url)} disabled={link.active}>{link.label}</button>)
           )}
      </div>
    </>
  )
}



export default Home;