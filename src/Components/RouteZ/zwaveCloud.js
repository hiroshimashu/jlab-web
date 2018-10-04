import React from "react";
import zwaveCloud from "../../static/zwave_cloud.svg";

const ZwaveCloud = () => {
    return (
        <div className = "zwave-cloud-wrapper" style = { styles.cloudWrapper }>
            <img
                    src = { zwaveCloud }
                    className = "zwave-cloud"
                    style = { styles.zwaveCloud}
                    alt = "zwave-cloud"
            />
            <p style = { styles.zwaveCloudGw}>
                    Z-WaveクラウドGW
            </p>
            <p style = { styles.zwaveCloudGwText }>
                    Z-Waveデバイスからの様々な状態や値をリアルタイムに収集するための
                    サーバー用ソフトウェアです。
            </p>
            <div className="zwave-gw-explain" style = { styles.explain }>
                <div style = { styles.explain1Wrapper }>
                    <p style = {styles.explain1Title}>
                        シナリオ自動制御
                    </p>
                    <p style = { styles.explain1Text }>
                        予め登録したシナリオに従い、自動的にセンサーを制御する機能が提供出来ます。
                    </p>
                </div>
                <div style = { styles.explain2Wrapper }>
                    <p style = {styles.explain2Title}>
                        スマートフォン連携
                    </p>
                    <div style = { styles.explain2Text }>
                        <p style = {{ letterSpacing:"1px"}}>
                            スマートフォンとデータ
                        </p>
                        <p style = {{ letterSpacing:"1px"}}>
                            連携し、スマートフォン
                        </p>
                        <p style = {{ letterSpacing:"2.5px"}}>
                            か隠しZ-Waveデバイ
                        </p>
                        <p style = {{ letterSpacing:"2.3px"}}>
                            スの状態の確認やコン
                        </p>
                        <p style = {{ letterSpacing:"2.3px"}}>
                            トロールを行う機能を
                        </p>
                        <p>
                            提供出来ます。
                        </p>

                    </div>
                </div>
                <div style = { styles.explain3Wrapper }>
                    <p style = {styles.explain3Title}>
                        外部サーバー間連携機能
                    </p>
                    <p style = { styles.explain3Text }>
                        他のサーバーとの連携を行うことが出来ます。
                    </p>
                </div>
              </div>
        </div>
    )
}

const styles = {
    cloudWrapper: {
        position: "absolute",
        width: "653.177px",
        height: "548.856px",
        top: "171.811px",
        left: "50%",
        transform: "translateX(-50%)"
    },
    zwaveCloud: {
        position: "absolute",
        width: "173.424px",
        left: "237.403px"
    },
    zwaveCloudGw: {
        position: "absolute",
        left: "203.846px",
        top: "188.132px",
        width: "247.966px",
        height: "235.893px",
        fontSize : "24px",
        fontWeight:"lighter",
        letterSpacing : "2.2px",
        textAlign: "center",
        color : "#ffffff",
    },
    zwaveCloudGwText: {
        position: "absolute",
        width: "513.489px",
        left: "69.871px",
        top: "241.565px",
        fontSize : "13px",
        fontWeight:"lighter",
        letterSpacing : "2.25px",
        lineHeight: "28px",
        color :"#85A2BD",
    },
    explain: {
        position: "absolute",
        display:"flex",
        width: "653.177px",
        height: "177.92px",
        top: "358.565px",
        borderLeft: "1px solid #698198",
        borderRight: "1px solid #698198",
    },
    explain1Wrapper : {
        position: "relative",
        width:"33.333%",
    },
    explain2Wrapper : {
        position: "relative",
        width:"33.333%",
        borderLeft: "1px solid #698198",
        borderRight: "1px solid #698198",
    },
    explain3Wrapper : {
        position: "relative",
        width:"33.333%"
    },
    explain1Title: {
        position: "absolute",
        width: "76.983px",
        color: "#ffffff",
        left: "35px",
        opacity: 1,
        zIndex: 1,
        fontSize : "17px",
        fontWeight:"lighter",
        letterSpacing : "2px",
        lineHeight: "26px",
    },
    explain2Title: {
        position: "absolute",
        width: "133.923px",
        color: "#ffffff",
        left: "28.5px",
        opacity: 1,
        zIndex: 1,
        fontSize : "17px",
        fontWeight:"lighter",
        letterSpacing : "1.7px",
        lineHeight: "26px",
    },
    explain3Title: {
        position: "absolute",
        width: "140.768px",
        color: "#ffffff",
        left: "28.5px",
        opacity: 1,
        zIndex: 1,
        fontSize : "17px",
        fontWeight:"lighter",
        letterSpacing : "1.5px",
        lineHeight: "26px",
    },
    explain1Text:{
        position: "absolute",
        width: "136.114px",
        color: "#85A2BD",
        left: "35px",
        top: "68.141px",
        opacity: 1,
        zIndex: 1,
        fontSize : "11px",
        fontWeight:"lighter",
        letterSpacing : "1.5px",
        lineHeight: "22px",
    },
    explain2Text:{
        position: "absolute",
        width: "133.794px",
        color: "#85A2BD",
        left: "28.5px",
        top: "68.141px",
        opacity: 1,
        zIndex: 1,
        fontSize : "11px",
        fontWeight:"lighter",
        letterSpacing : "1.55px",
        lineHeight: "22px",
        textAlign:"justify"
    },
    explain3Text:{
        position: "absolute",
        width: "140.794px",
        color: "#85A2BD",
        left: "28.5px",
        top: "68.141px",
        opacity: 1,
        zIndex: 1,
        fontSize : "11px",
        fontWeight:"lighter",
        letterSpacing : "1.7px",
        lineHeight: "22px",
        textAlign:"justify"
    }



}

export default ZwaveCloud;