import React from "react";
import home from "../../static/zwave_home.svg";

const ZwaveHome = () => {
    return (
        <div className = "zwave-home-wrapper" style = { styles.homeWrapper }>
            <img
                src = { home }
                className = "zwave-home"
                style = { styles.homeImg}
                alt = "zwave-phone"
            />
            <p style = { styles.zwaveHome }>
                Z-Wave Home ゲートウェイ
            </p>
            <div style = { styles.zwaveHomeText }>
                <p>
                    ゲートウェイデバイス上で動作するクライアントソフトウェアです。Z-Wave
                </p>
                <p>
                    対応のゲートウェイデバイスに組み込んで使用することが可能です。
                </p>
            </div>
            <div className = "phone-explain" style = { styles.explain }>
                <div style = { styles.explain1Wrapper }>
                    <p　style = {styles.explain1Title}>
                        Z-WaveクラウドGW連携
                    </p>
                    <div style = { styles.explain1Text }>
                        <p>
                            Z-WaveクラウドGWと連携
                        </p>
                        <p>
                            するための各種機能を提供
                        </p>
                        <p>
                           いたします。
                        </p>
                    </div>
                </div>
                <div style = { styles.explain2Wrapper }>
                    <p style = {styles.explain2Title}>
                        ソリューション提供
                    </p>
                    <div style = { styles.explain2Text }>
                        <p style = {{letterSpacing: "2.55px"}}>
                            お客様独自のZ-Waveゲー
                        </p>
                        <p>
                            トウェイのソフトウェア開発
                        </p>
                        <p>
                            を承ります
                        </p>
                    </div>
                </div>
            </div>
            <button　style = { styles.gatewayButton }>
                Z-Wave HOME ゲートウェイ Arena Box 詳細ページへ
            </button>
        </div>
    )
}

const styles = {
    homeWrapper: {
        position: "absolute",
        width: "653.177px",
        height: "548.856px",
        top: "1625.021px",
        left: "50%",
        transform: "translateX(-50%)"
    },
    homeImg : {
        position: "absolute",
        width: "152.529px",
        left: "239.894px",
    },
    zwaveHome: {
        position: "absolute",
        display: "inline",
        left: "156.786px",
        top: "158.083px",
        fontSize : "24px",
        lineHeight: "30px",
        fontWeight:"lighter",
        letterSpacing : "0.176rem",
        color : "#ffffff",
    },
    zwaveHomeText: {
        position: "absolute",
        left: "69.768px",
        top: "232.247px",
        fontSize : "13px",
        fontWeight:"lighter",
        letterSpacing : "0.176em",
        lineHeight: "28px",
        color :"#85A2BD",
    },
    explain: {
        position: "absolute",
        display:"flex",
        width: "489.477px",
        height: "130.428px",
        top: "324.515px",
        left: "81.85px",
        borderLeft: "1px solid #698198",
        borderRight: "1px solid #698198",
        opacity: "0.5"
    },
    explain1Wrapper : {
        position: "relative",
        width:"50%",
        borderRight: "1px solid #698198",
    },
    explain2Wrapper : {
        position: "relative",
        width:"50%",
        opacity: "0.5"
    },
    explain1Title: {
        position: "absolute",
        color: "#ffffff",
        left: "41.47px",
        opacity: 1,
        zIndex: 1,
        fontSize : "17px",
        fontWeight:"lighter",
        letterSpacing : "4.25pt",
        lineHeight: "26px",
    },
    explain2Title: {
        position: "absolute",
        color: "#ffffff",
        width: "140.571px",
        left: "43.697px",
        opacity: 1,
        zIndex: 1,
        fontSize : "17px",
        fontWeight:"lighter",
        letterSpacing : "2.25px",
        lineHeight: "26px",
    },
    explain1Text:{
        position: "absolute",
        color: "#85A2BD",
        width: "490.477px",
        left: "41.47px",
        top: "67.66px",
        opacity: 1,
        zIndex: 1,
        fontSize : "11px",
        fontWeight:"lighter",
        letterSpacing : "0.25rem",
        lineHeight: "22px",
    },
    explain2Text:{
        position: "absolute",
        color: "#85A2BD",
        left: "43.697px",
        top: "67.66px",
        opacity: 1,
        zIndex: 1,
        fontSize : "11px",
        fontWeight:"lighter",
        lineHeight: "22px",
        letterSpacing: "1.25px",
        textAlign:"justify"
    },
    gatewayButton: {
        position: "absolute",
        width:"523.476px",
        height: "34px",
        top: "501.618px",
        left:  "64.85px",
        backgroundColor:"rgba(116,206,226, 0.2)",
        color: "#74CEE2",
        border: "none",
        fontFamily: "Helvetica Neue, Arial",
        fontSize:"16px",
        letterSpacing:"2.24px",
        fontWeight: "lighter",
        borderRadius : "17pt",
        zIndex:1,
    }
}

export default  ZwaveHome;