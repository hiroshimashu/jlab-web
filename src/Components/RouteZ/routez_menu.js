import React from "react";
import ZwaveCloud from "./zwaveCloud";
import ZwavePhone from "./zwaveSmartphone";
import ZwaveHome from "./zwaveHome";
import ZwaveDevice from "./zwaveDevice";
import Fade from "react-reveal/Fade";

const RoutezMenu = () => {
    return (
        <section style = { styles.routezMenu} className = "routez-menu">
            <Fade bottom>
                <p className="route-z-title" style = { styles.routezMenuTitle }>
                    RouteZ Menu
                </p>
            </Fade>
            <ZwaveCloud />
            <ZwavePhone />
            <ZwaveHome />
            <ZwaveDevice />
        </section>
    )
}

const styles = {
    routezMenu: {
        position: "relative",
        marginTop: "175.559px",
        height: "2967.997px",
        width: "653.177px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    routezMenuTitle: {
        position: "absolute",
        fontFamily : "Helvetica Neue, arial",
        fontSize : "31px",
        fontWeight:"lighter",
        letterSpacing : "4.19px",
        color : "#74CEE2",
        left: "215.269px"
    },
    zwaveCloud: {
        position: "absolute",
        width: "173.424px",
    }
}

export default RoutezMenu;