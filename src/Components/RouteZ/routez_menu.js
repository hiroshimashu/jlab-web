import React from "react";
import ZwaveCloud from "./zwaveCloud";
import ZwavePhone from "./zwaveSmartphone";

const RoutezMenu = () => {
    return (
        <section style = { styles.routezMenu} className = "routez-menu">
            <p className="route-z-title" style = { styles.routezMenuTitle }>
                RouteZ Menu
            </p>
            <ZwaveCloud />
            <ZwavePhone />
        </section>
    )
}

const styles = {
    routezMenu: {
        position: "relative",
        marginTop: "175.559px",
        height: "2967.997px",
        width: "100%"
    },
    routezMenuTitle: {
        position: "absolute",
        fontFamily : "Helvetica Neue, arial",
        fontSize : "31px",
        fontWeight:"lighter",
        letterSpacing : "4.19px",
        color : "#74CEE2",
        left: "50%",
        transform: "translateX(-50%)"
    },
    zwaveCloud: {
        position: "absolute",
        width: "173.424px",

    }
}

export default RoutezMenu;