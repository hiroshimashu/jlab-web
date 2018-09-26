import React from 'react';


// Need to change this into class component 
const Menu = () => {
    return (
        <ul className = "menu-wrapper" style = {styles.menuWrapper}>
            <li style = { styles.menu }>
                Company
            </li>
            <li style = { styles.menu }>
                Product
            </li>
            <li style = { styles.menu }>
                Solution
            </li>
            <li style = { styles.menu }>
                Contact
            </li>
        </ul>
    )
}

const styles = {
    menuWrapper: {
        position: "absolute",
        zIndex: 1,
        left: "50%",
        transform: "translateX(-50%)",
        top: "71.32px",
        color: "#85A2BD",
        width: "380.62px",
        display: "flex",
        justifyContent: "space-between",
        listStyle:"none",
        fontSize: '14.63px',
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        margin: "0px"
    },
    menu: {
        fontSize: '14.63px',
        letterSpacing: "2.55px"
    }
    
}
export default Menu;