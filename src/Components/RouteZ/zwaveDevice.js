import React from "react";
import device from "../../static/zwave_device.svg";
import deviceSmall from "../../static/zwave_device_small.svg";
import { Link } from "react-router-dom";

const ZwaveDevice = () => {
    return (
    <div>
        <div className = "zwave-device-wrapper" style = { styles.deviceWrapper }>
            <img
                src = { device }
                className = "zwave-device"
                style = { styles.deviceImg}
                alt = "zwave-device"
            />
            <p style = { styles.device }>
                    Z-Wave デバイス
            </p>
            <div style = { styles.zwaveDeviceText }>
                    <p>
                        ゲートウェイデバイス上で動作するクライアントソフトウェアです。Z-Wave
                    </p>
                    <p>
                        対応のゲートウェイデバイスに組み込んで使用することが可能です。
                    </p>
            </div>
            <div className = "phone-explain" style = { styles.explain }>
                    <p　style = {styles.explain1Title}>
                        ソリューション提供
                    </p>
                    <div style = { styles.explain1Text }>
                      <p>
                        お客様独自のZ-Waveデバイス
                      </p>
                      <p>
                        のソフトウェア開発を承ります
                      </p>
                    </div>
            </div>
            <Link to = "/led">
                    <button　style = { styles.gatewayButton }>
                        Z-Wave LED 電球 Rocket Bulb 詳細ページへ
                    </button>
            </Link>
        </div>
        <div className="zwave-device-wrapper-small">
            <div
                className = "zwave-device-img-wrapper"
            >
                <img
                    src = { deviceSmall }
                    className = "zwave-device-img"
                    alt = "zwave-device-img"
                />
            </div>
            <div className="zwave-device-main-wrapper">
                <p className="zwave-device-main-title">
                    Z-Wave デバイス
                </p>
                <p className="zwave-device-main-explain">
                    ゲートウェイデバイス上で動作するクライアントソフトウェアです。Z-Wave対応のゲートウェイデバイスに組み込んで使用することが可能です。
                </p>
            </div>
            <div className="zwave-device-detail1-wrapper">
                <p className="zwave-device-detail1-title">
                    ソリューション提供
                </p>
                <p className="zwave-device-detail1-main">
                    お客様独自のZ-Waveデバイスのソフトウェア開発を承ります
                </p>
            </div>
            <Link to = "/led">
                <button className="led-link">
                    Z-Wave LED 電球<br/>
                    Rocket Bulb 詳細ページへ
                </button>
            </Link>
        </div>
    </div>
    )
}

const styles = {
    deviceWrapper: {
        position: "absolute",
        width: "653.177px",
        height: "591.371px",
        top: "2376.693px",
        left: "50%",
        transform: "translateX(-50%)"
    },
    deviceImg : {
        position: "absolute",
        width: "331.115px",
        height: "186.537px",
        left: "160.201px",
    },
    device: {
        position: "absolute",
        display: "inline",
        left: "232.171px",
        top: "242.484px",
        fontSize : "24px",
        lineHeight: "30px",
        fontWeight:"lighter",
        letterSpacing : "0.176rem",
        color : "#ffffff",
    },
    zwaveDeviceText: {
        position: "absolute",
        left: "80.276px",
        top: "291.846px",
        fontSize : "13px",
        fontWeight:"lighter",
        letterSpacing : "0.176em",
        lineHeight: "28px",
        color :"#85A2BD",
    },
    explain: {
        position: "absolute",
        display:"flex",
        width: "248.738px",
        height: "103.051px",
        top: "409.237px",
        left: "202.219px",
        borderLeft: "1px solid #698198",
        borderRight: "1px solid #698198",
    },
    explain1Title: {
        position: "absolute",
        color: "#ffffff",
        left: "38.502px",
        zIndex: 1,
        fontSize : "17px",
        fontWeight:"lighter",
        letterSpacing : "2pt",
        lineHeight: "26px",
    },
    explain1Text:{
        position: "absolute",
        color: "#85A2BD",
        left: "29.045px",
        top: "41.327px",
        zIndex: 1,
        fontSize : "11px",
        fontWeight:"lighter",
        letterSpacing : "0.18rem",
        lineHeight: "22px",
    },
    gatewayButton: {
        position: "absolute",
        width:"440.947px",
        height: "34px",
        top: "552.871px",
        left:  "106.115px",
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

export default ZwaveDevice;