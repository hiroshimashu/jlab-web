import React from 'react';
import scrollToComponent from 'react-scroll-to-component';


// Need to change this into class component 
const Menu = (props) => {
    return (
        <ul className = "menu-wrapper" style = {styles.menuWrapper}>
            <li style = { styles.menu }
                onClick = {() => {
                    console.log(props.company);
                    scrollToComponent(props.company, {offset: 70, align: "top", duration: 100})}}
             >
                Company
            </li>
            <li style = { styles.menu }
                onClick = {() => {
                    console.log(props.company);
                    scrollToComponent(props.product, {offset: 0, align: "top", duration: 100})}}
            >
                Product
            </li>
            <li style = { styles.menu }
                onClick = {() => {
                    console.log(props.company);
                    scrollToComponent(props.solution, {offset: 0, align: "top", duration: 100})}}
            >
                Solution
            </li>
            <li style = { styles.menu }
                onClick = {() => {
                    console.log(props.company);
                    scrollToComponent(props.contact, {offset: 0, align: "top", duration: 100})}}
            >
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