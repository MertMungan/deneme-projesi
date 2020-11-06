import React, { useState } from 'react';
import { Button } from './Common/Button';
import LoginWindow from './LoginWindow';
import CreateAccountWindow from './CreateAccountWindow';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [visible , setVisible] = useState(false)

;
const handleClickLogin = ()=> 
{
  setVisible(true);
  setClick(false);
}

const handleClickCreateAccount = ()=> 
{
  setClick(true);
  setVisible(false);
}

  //window.addEventListener('resize', showButton);

  
  return (
    <>
  
      {click ? <CreateAccountWindow></CreateAccountWindow> : null}
      <nav className='navbar'>
        <div className='navbar-container'>
            UnknownPros
          </div>
          <Button onClick={handleClickCreateAccount} buttonStyle='btn--outline'>Create Account</Button>
        {visible?<LoginWindow></LoginWindow>:null}
          <Button onClick={handleClickLogin} buttonStyle='btn--outline'>Login</Button>
      </nav>
    </>
  );
}


export default Navbar;