import React, { useEffect, useState } from 'react'
import './Box.css';
import Button from '@mui/material/Button';
import axios from 'axios';



const Box = ({setHouses}) => {

    const [types, setTypes] = useState([]);
    const [amentities, setAmentities] = useState([]);
    const [filters, setFilters] = useState([])

    useEffect(() => {
        axios.get('https://assignment.prosperty-mgmt.dev/v1/types')
            .then((response) => {
                setTypes(response.data.data);
            });

        axios.get('https://assignment.prosperty-mgmt.dev/v1/amenities')
        .then((response) => {
            setAmentities(response.data.data);
        });
    }, [])


    const onFilteredSearch = (filter) => {
        axios.get(`https://assignment.prosperty-mgmt.dev/v1/listings?${filter}`)
            .then((response) => {
                setHouses(response.data.data);
            })
    }

    const onFiltering = (filterValue) => {
        const exists = filters.find((el) => el === filterValue);

        if (!exists) {
            setFilters((prev) => ([...prev, filterValue]))
        }

        if (exists) {
            const filtered = filters.filter(am => am !== filterValue)
            setFilters(filtered);
        }
    }


    return (
        <>
            <h2 >Find your new home</h2>
            <section className='box'>
                <div className='container'>

                    <h3>Choose amentities:</h3>
                    <form className='flex' >
                        {amentities.map((amentity, index) =>
                        (<article className="feature1" key={index}>
                            <input type="checkbox" onClick={() => onFiltering(amentity)} />
                            <div>
                                <span>
                                    <label>{amentity}</label>
                                </span>
                            </div>
                        </article>))}
                    </form>

                    <h3>Choose property type:</h3>
                    <form className='flex' >
                        {types.map((type, index) =>
                        (<article className="feature1" key={index}>
                            <input type="checkbox" onClick={() => onFiltering(type.name)} />
                            <div>
                                <span>
                                    <label>{type.name}</label>
                                </span>
                            </div>
                        </article>))}
                    </form>

                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => onFilteredSearch()}>
                        reset
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => onFilteredSearch()}>
                        search
                    </Button>

                </div>
            </section>
        </>
    )
}

export default Box