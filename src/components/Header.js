import React from 'react';
import './Header.css';
import { ButtonGroup} from '@mui/material';
import Button from '@mui/material/Button';



const Header = () => {
  return (

    <header >
      <div className='container flex'  >

        <div className='nav'>

        </div>
        <div className='button flex'>
          <h1 >
            Welcome!
          </h1>

          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>Sign In</Button>
            <Button>Sign Up</Button>
            
          </ButtonGroup>





          
        </div>

        <div className='toggle'>
        </div>
      </div>
    </header>

  )
}
export default Header;