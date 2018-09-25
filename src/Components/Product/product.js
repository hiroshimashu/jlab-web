import React from "react";
import SectionTitle from "../Common/sectionTitle";
import BackgroundCircle from "./backgroundCircle";
import ExplainModule from "../Common/explainModule";
import routeZ from "../../static/route_z.svg";
import arenaBox from "../../static/arena_box.png";
import LightBolb from "../../static/light_bolb.png";
import engineImage from "../../static/engine-image.svg";
import reverseMirror from "../../static/reverse_mirror.svg";

const Product = () => {
    return (
        <section className = "product" style = {{position: "relative", width: "100%", height: "2299.873px"}}>
            <SectionTitle
                title = "Product"
                top = "48px"
            />
            <BackgroundCircle />
            <ExplainModule
                top = "214.517px"
                left = "calc((100% - 535.197px) / 2)"
                imgStyle = { imgStyle.routeZ }
                imgSrc = { routeZ }
                titleStyle = { titleStyle.routeZ }
                explainStyle = { explainStyle.routeZ }
                buttonStyle = { buttonStyle.routeZ }
                title = "RouteZ"
                explain = "「RouteZ」は世界で最も普及しているスマートホーム向けIOT無線技術であるZ-Waveのデバイスを制御・管理するためのソフトウエア開発キット です。"
            />
            <ExplainModule
                top = "540.722px"
                left = "calc((100% - 535.197px) / 2)"
                imgStyle = { imgStyle.gateway }
                imgSrc = { arenaBox }
                titleStyle = { titleStyle.gateway }
                explainStyle = { explainStyle.gateway }
                buttonStyle = { buttonStyle.routeZ }
                title = "Z-Wave HOMEゲートウェイ Arena Box"
                explain = "「Arena Box」はZ-Waveに対応したHOMEゲートウェイです。"
            />
            <ExplainModule
                top = "942.039px"
                left = "calc((100% - 535.197px) / 2)"
                imgStyle = { imgStyle.bulb }
                imgSrc = { LightBolb }
                titleStyle = { titleStyle.bulb}
                explainStyle = { explainStyle.bulb }
                buttonStyle = { buttonStyle.bulb }
                title = "Z-Wave LED電球 Rocket Bulb"
                explain =  "「Rocket Bulb」は弊社開発による、Z-Wave対応のスマートLED電球です。"
            />
            <ExplainModule
                top = "1291.228px"
                left = "calc((100% - 535.197px) / 2)"
                imgStyle = { imgStyle.engine }
                imgSrc = { engineImage }
                titleStyle = { titleStyle.engine}
                explainStyle = { explainStyle.engine }
                buttonStyle = { buttonStyle.engine }
                title = "DRAM対応AVプレイヤーエンジン"
                explain =  "スマートフォン端末やSTB等のプラットフォーム上で映像・音声の再生を行う為の基本コンポーネントを搭載したソフトウェアです。"
            />
            <ExplainModule
                top = "1671.228px"
                left = "calc((100% - 535.197px) / 2)"
                imgStyle = { imgStyle.reverseMirror }
                imgSrc = { reverseMirror }
                titleStyle = { titleStyle.reverseMirror}
                explainStyle = { explainStyle.reverseMirror }
                buttonStyle = { buttonStyle.reverseMirror }
                title = "逆ミラーリング"
                explain =  "お客様の情報機器が、簡単にスマートフォンで操作できるようになる仕組みをご提供します。"
            />
        </section>
    )
}

const imgStyle = {
    routeZ: {
       position: "absolute",
       top:"48.103px",
       width: "128.262px",
       height: "235.958px"
    },
    gateway: {
        position: "absolute",
        top: "0px",
        width: "168.841px",
        height: "225.122px"
    },
    bulb: {
        position: "absolute",
        top: "0px",
        width: "156.163px",
        height: "158.719px"
    },
    engine: {
        position: "absolute",
        top: "0px",
        width: "165.934px",
        height: "349.348px"
    },
    reverseMirror: {
        position: "absolute",
        top: "18.577px",
        width: "155.407px",
        height: "259.545px"
    }
}

const titleStyle = {
    routeZ: {
        position: "absolute",
        left:  "221.191px",
        color:"#FFFFFF",
        fontSize: "20px",
        fontWeight: "lighter",
        letterSpacing :"1.75px",
    },
    gateway: {
        position: "absolute",
        left:  "221.191px",
        top: "48.404px",
        width: "407.161px",
        color:"#FFFFFF",
        fontSize: "20px",
        fontWeight: "lighter",
        letterSpacing :"1.15px",
    },
    bulb: {
        position: "absolute",
        left:  "221.191px",
        top: "0px",
        width: "407.161px",
        color:"#FFFFFF",
        fontSize: "20px",
        fontWeight: "lighter",
        letterSpacing :"1.15px",
    },
    engine : {
        position: "absolute",
        left:  "221.191px",
        top: "0px",
        width: "407.161px",
        color:"#FFFFFF",
        fontSize: "20px",
        fontWeight: "lighter",
        letterSpacing :"1.15px",
    },
    reverseMirror: {
        position: "absolute",
        left:  "221.191px",
        top: "0px",
        width: "407.161px",
        color:"#FFFFFF",
        fontSize: "20px",
        fontWeight: "lighter",
        letterSpacing :"1.15px",
    }

}

const explainStyle = {
    routeZ: {
        position: "absolute",
        top: "47.823px",
        left: "221.191px",
        fontSize : "13px",
        lineHeight : "28px",
        letterSpacing :"1.75px",
        width: "330.69px",
        textAlign: "justify",
        fontWeight: "lighter",
        color :"#ABE1FA",
    },
    gateway: {
        position: "absolute",
        width: "300.69px",
        left: "221.191px",
        top: "103.148px",
        fontSize : "13px",
        lineHeight : "28px",
        letterSpacing :"1.75px",
        textAlign: "justify",
        fontWeight: "lighter",
        color :"#ABE1FA",
    },
    bulb: {
        position: "absolute",
        width: "300.69px",
        left: "221.191px",
        top: "50.81px",
        fontSize : "13px",
        lineHeight : "28px",
        letterSpacing :"1.15px",
        textAlign: "justify",
        fontWeight: "lighter",
        color :"#ABE1FA",
    },
    engine: {
        position: "absolute",
        width: "330.69px",
        left: "221.191px",
        top: "49.844px",
        fontSize : "13px",
        lineHeight : "28px",
        letterSpacing :"1.75px",
        textAlign: "justify",
        fontWeight: "lighter",
        color :"#ABE1FA",
    },
    reverseMirror: {
        position: "absolute",
        width: "330.69px",
        left: "221.191px",
        top: "50.025px",
        fontSize : "13px",
        lineHeight : "28px",
        letterSpacing :"1.75px",
        textAlign: "justify",
        fontWeight: "lighter",
        color :"#ABE1FA",
    }

}

const buttonStyle = {
    routeZ: {
        position: "absolute",
        width:"240.667px",
        height: "34px",
        top: "178.054px",
        left:  "221.191px",
        backgroundColor:"rgba(255, 255, 255)",
        color: "#74CEE2",
        fontFamily: "Helvetica Neue, Arial",
        fontSize:"16.41px",
        fontWeight: "lighter",
        opacity : "0.6",
        borderRadius : "17pt",
        zIndex:1,
    },
    bulb: {
        position: "absolute",
        width:"240.667px",
        height: "34px",
        top: "124.719px",
        left: "221.191px",
        backgroundColor:"rgba(255, 255, 255)",
        color: "#74CEE2",
        fontFamily: "Helvetica Neue, Arial",
        fontSize:"16.41px",
        fontWeight: "lighter",
        opacity : "0.6",
        borderRadius : "17pt",
        zIndex:1,
    },
    engine: {
        position: "absolute",
        width:"240.667px",
        height: "34px",
        top: "152.011px",
        left: "221.191px",
        backgroundColor:"rgba(255, 255, 255)",
        color: "#74CEE2",
        fontFamily: "Helvetica Neue, Arial",
        fontSize:"16.41px",
        fontWeight: "lighter",
        opacity : "0.6",
        borderRadius : "17pt",
        zIndex:1,
    },
    reverseMirror: {
        position: "absolute",
        width:"240.667px",
        height: "34px",
        top: "124.879px",
        left: "221.191px",
        backgroundColor:"rgba(255, 255, 255)",
        color: "#74CEE2",
        fontFamily: "Helvetica Neue, Arial",
        fontSize:"16.41px",
        fontWeight: "lighter",
        opacity : "0.6",
        borderRadius : "17pt",
        zIndex:1,
    }
}


export default Product;