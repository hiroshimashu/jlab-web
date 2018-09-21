import React from 'react';
import Logo from "./logo";
import Menu from "./menu";

const header = () => {
    return (
       <section className="header" style ={{ height: "107.363px"}}>
           <Logo />
           <Menu />
       </section>
    )
}

export default header;