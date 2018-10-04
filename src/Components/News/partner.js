import React from 'react';
import cwip from "../../static/cwip.png";
import zwave from "../../static/zwave_alliance.svg";
import Fade from "react-reveal/Fade";

const Partner = () => {
    return (
        <Fade bottom>
        <div className = "partner-wrapper" style = {styles.partnerWrapper}>
                <div className="partner1" style = { styles.partner1 }>
                    <img src =  {cwip} alt = "partner-img1" style = {styles.partner1Img} />
                    <div style = {styles.partner1Text}>
                        <p>
                            ※株式会社JLabsは、CWIP認定パートナーです。
                        </p>
                        <p style = {styles.partner1TextMain}>
                            WidevineDRMを使用したクライアントにも対応しています。
                        </p>
                    </div>
                </div>
                <div className="partner2" style = { styles.partner2 }>
                    <img src =  {zwave} alt = "partner-img2" style = {styles.partner2Img} />
                    <p style = { styles.partner2Text } className="partner2-text">
                        ※株式会社JLabsは、Z-waveアライアンスメンバーです。
                    </p>
                </div>
        </div>
        </Fade>
    )
}


const styles = {
    partnerWrapper: {
        position: "absolute",
        top: "712.623px",
        left: "133.817px",
        width: "500px"
    },
    partner1: {
        display: "flex",
        fontSize: "11px",
        color:"#ABE1FA",
        fontWeight: "lighter",
    },
    partner1Img: {
        width: "77.585px",
        height: "63.148px",
    },
    partner1Text: {
        position: "absolute",
        width: "380.1px",
        left: "100.466px",
        top: "16.52px",
        textAlign:"justify",
        letterSpacing : "1.75pt",
    },
    partner1TextMain: {
        position: "absolute",
        top: "22.057px",
    },
    partner2: {
        display: "flex",
        fontSize: "11px",
        color:"#ABE1FA",
        fontWeight: "lighter",
    },
    partner2Img: {
        width: "121.563px",
    },
    partner2Text: {
        position: "absolute",
        width: "380.1px",
        left: "147.648px",
        textAlign:"justify",
        lineHeight : "19px",
        letterSpacing : "1.75pt",

    }
}
export default Partner;