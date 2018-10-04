import React from "react";
import phone from "../../static/zwave-smartphone.png";

const ZwavePhone = () => {
    return (
     <div className = "zwave-phone-wrapper" style = { styles.phoneWrapper }>
         <img
                  src = { phone }
                  className = "zwave-phone"
                  style = { styles.phoneImg}
                  alt = "zwave-phone"
         />
         <p style = { styles.zwavePhone }>
                 Z-Wave スマートフォン
         </p>
         <div style = { styles.zwavePhoneText }>
                <p>
                    Z-Waveデバイスの状態の確認やコントロールを遠隔で行うスマートフォン
                </p>
                <p>
                    用ソフトウェアです。
                </p>
         </div>
           <div className = "phone-explain" style = { styles.explain }>
             <div style = { styles.explain1Wrapper }>
                 <p　style = {styles.explain1Title}>
                     SDK型
                 </p>
                 <div style = { styles.explain1Text }>
                     <p>
                         お客様独自のUIデザインや
                     </p>
                     <p>
                         すでにおもちのアプリケー
                     </p>
                     <p>
                         ションで実現したいケース
                     </p>
                     <p>
                         において、SDKの提供が可
                     </p>
                     <p>
                         能です。
                     </p>
                 </div>
             </div>
             <div style = { styles.explain2Wrapper }>
                 <p style = {styles.explain2Title}>
                     ソリューション型
                 </p>
                 <div style = { styles.explain2Text }>
                     <p>
                         お客様のご要望に応じ、当
                     </p>
                     <p>
                         社でアプリケーションの開
                     </p>
                     <p>
                         発を承ります
                     </p>
                 </div>
             </div>
           </div>
     </div>
    )
}


const styles = {
    phoneWrapper: {
        position: "absolute",
        width: "653.177px",
        height: "548.856px",
        top: "892.996px",
        left: "50%",
        transform: "translateX(-50%)"
    },
    phoneImg : {
        position: "absolute",
        width: "130.804px",
        left: "250.77px",
    },
    zwavePhone: {
        position: "absolute",
        display: "inline",
        left: "189.737px",
        top: "186.097px",
        fontSize : "24px",
        lineHeight: "30px",
        fontWeight:"lighter",
        letterSpacing : "0.176rem",
        color : "#ffffff",
    },
    zwavePhoneText: {
        position: "absolute",
        left: "69.768px",
        top: "232.247px",
        fontSize : "13px",
        fontWeight:"lighter",
        letterSpacing : "2.55px",
        lineHeight: "28px",
        color :"#85A2BD",
    },
    explain: {
        position: "absolute",
        display:"flex",
        width: "489.477px",
        height: "177.92px",
        top: "358.565px",
        left: "81.85px",
        borderLeft: "1px solid #698198",
        borderRight: "1px solid #698198",
    },
    explain1Wrapper : {
        position: "relative",
        width:"50%",
        borderRight: "1px solid #698198",
    },
    explain2Wrapper : {
        position: "relative",
        width:"50%",
    },
    explain1Title: {
        position: "absolute",
        width: "76.983px",
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
        left: "43.697px",
        opacity: 1,
        zIndex: 1,
        fontSize : "17px",
        fontWeight:"lighter",
        letterSpacing : "4.25px",
        lineHeight: "26px",
    },
    explain1Text:{
        position: "absolute",
        color: "#85A2BD",
        width: "490.477px",
        left: "41.47px",
        top: "42.311px",
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
        top: "42.311px",
        opacity: 1,
        zIndex: 1,
        fontSize : "11px",
        fontWeight:"lighter",
        letterSpacing : "2.75pt",
        lineHeight: "22px",
        textAlign:"justify"
    },
}
export default ZwavePhone;