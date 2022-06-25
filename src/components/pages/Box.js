import React, { useEffect, useState } from 'react'
import './Box.css';
import Button from '@mui/material/Button';
import axios from 'axios';
// import { pink } from '@mui/material/colors';
// import Checkbox from '@mui/material/Checkbox';


const Box = () => {

    const [types, setTypes] = useState([]);
    const [amentities, setAmentities] = useState([]);

    useEffect(() => {
        axios.get('https://assignment.prosperty-mgmt.dev/v1/types'

        )
            .then((response) => {
                setTypes(response.data.data);
                console.log('res', response);

            });
    }, [])

    useEffect(() => {
        axios.get('https://assignment.prosperty-mgmt.dev/v1/amenities'

        )
            .then((response) => {
                setAmentities(response.data.data);
                console.log('res', response);

            });
    }, [])

    return (
        <>
            <h2 >Find your new home</h2>
            <section className='box'>
                <div className='container'>

                    <h3>Choose amentities:</h3>
                    <form className='flex' >
                        {amentities.map((amentity, index) =>
                        (<article class="feature1">
                            <input type="checkbox" />
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
                        (<article class="feature1">
                            <input type="checkbox" />
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
                    // onClick={() => setSearchFilters((prevFilters)=>)}>
                    >
                        reset
                    </Button>
                    <Button

                        variant="contained"
                        color="success"
                    // onClick={() => setSearchFilters((prevFilters)=>)}>
                    >
                        search
                    </Button>

                </div>
            </section>
        </>
    )
}

export default Box