import React from 'react';
//props.tittle ->  <Header tittle="Algo"
//props.children -> <Header> Coisas aqui <Header/>
function Header({children}) {
    return (
      <header>
          <h1>{children}</h1>
      </header>
    );
  }

  export default Header;
  