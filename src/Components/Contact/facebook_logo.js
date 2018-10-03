import React from "react";
import logo from "../../static/facebook.png";
import Fade from "react-reveal/Fade";

const FacebookLogo = () => {
    return (
        <Fade bottom>
            <a target = "_blank" href = "https://www.facebook.com/routez.jlabs/?__tn__=kC-R&eid=ARBehnOi1Thg3XXJshuLwgSJ2N6FUlbzLoGKoL65U1rwRJBOfLq81amT5dUHzpabH3obMy_6Aub8cIPj&hc_ref=ART4XurRm64Y7my_pnsGWbrU8HSSwmcRGCf2UbShN3skeJcRxcnSUuNBCiFFmN-jf3U&fref=nf&__xts__[0]=68.ARCI8IdVeua6LqRg_Ql4O0d_9VLoAo1MKNwVquVPpaepNU5NJ4mSOdCiWiiAy8vho-0C7wHsq2yKDIobVfHwAY4GxpLewdZpngW_RWJSoELYJBLLXzI809BV70Wn5WXHJSpOqgjwrrMfSO8qfsHB729LPRpKHFqMen0IcaypJBEMSC6MPNbYvQ">
            <img
                className = "facebook-logo"
                src = { logo }
                alt = "facebook"
                style = {{
                    position:"absolute",
                    width: "61.002px",
                    height: "61.002px",
                    left: "511.541px",
                    top: "906.841px"
                }}
            />
            </a>
        </Fade>
    )
}

export default FacebookLogo;