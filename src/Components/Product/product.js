import React, { Component }  from "react";
import SectionTitle from "../Common/sectionTitle";
import SectionTitleSmall from "../Common/sectionTitleSmall";
import BackgroundCircle from "./backgroundCircle";
import ExplainModule from "../Common/explainModule";
import ExplainModuleSmall from "../Common/explainModuleSmall";
import routeZ from "../../static/route_z.svg";
import arenaBox from "../../static/arena_box.png";
import LightBolb from "../../static/light_bolb.png";
import engineImage from "../../static/engine-image.svg";
import reverseMirror from "../../static/reverse_mirror.svg";

class Product extends Component {
    render() {
        return (
            <section className="product" style={{position: "relative", marginLeft: "auto",marginRight: "auto"}}>
                <SectionTitle
                    title="Product"
                    top="48px"
                    left="calc(50% - 63.4px)"
                    Ref={this.props.productRef}
                />
                <SectionTitleSmall
                    title = "Product"
                    id = "product"
                    Ref={this.props.productRef}
                />
                <BackgroundCircle />
                <ExplainModule
                    top="214.517px"
                    left="calc((100% - 535.197px) / 2)"
                    imgStyle={ imgStyle.routeZ }
                    imgSrc={ routeZ }
                    titleStyle={ titleStyle.routeZ }
                    explainStyle={ explainStyle.routeZ }
                    buttonStyle={ buttonStyle.routeZ }
                    title="RouteZ"
                    explain="「RouteZ」は世界で最も普及しているスマートホーム向けIOT無線技術であるZ-Waveのデバイスを制御・管理するためのソフトウエア開発キット です。"
                    to = "/routez"
                />
                <ExplainModule
                    top="540.722px"
                    left="calc((100% - 535.197px) / 2)"
                    imgStyle={ imgStyle.gateway }
                    imgSrc={ arenaBox }
                    titleStyle={ titleStyle.gateway }
                    explainStyle={ explainStyle.gateway }
                    buttonStyle={ buttonStyle.gateway }
                    title="Z-Wave HOMEゲートウェイ Arena Box"
                    explain="「Arena Box」はZ-Waveに対応したHOMEゲートウェイです。"
                    to="/gateway"
                />
                <ExplainModule
                    top="942.039px"
                    left="calc((100% - 535.197px) / 2)"
                    imgStyle={ imgStyle.bulb }
                    imgSrc={ LightBolb }
                    titleStyle={ titleStyle.bulb}
                    explainStyle={ explainStyle.bulb }
                    buttonStyle={ buttonStyle.bulb }
                    title="Z-Wave LED電球 Rocket Bulb"
                    explain="「Rocket Bulb」は弊社開発による、Z-Wave対応のスマートLED電球です。"
                    to="/led"
                />
                <ExplainModule
                    top="1291.228px"
                    left="calc((100% - 535.197px) / 2)"
                    imgStyle={ imgStyle.engine }
                    imgSrc={ engineImage }
                    titleStyle={ titleStyle.engine}
                    explainStyle={ explainStyle.engine }
                    buttonStyle={ buttonStyle.engine }
                    title="DRAM対応AVプレイヤーエンジン"
                    explain="スマートフォン端末やSTB等のプラットフォーム上で映像・音声の再生を行う為の基本コンポーネントを搭載したソフトウェアです。"
                    to="/daw"
                />
                <ExplainModule
                    top="1671.228px"
                    left="calc((100% - 535.197px) / 2)"
                    imgStyle={ imgStyle.reverseMirror }
                    imgSrc={ reverseMirror }
                    titleStyle={ titleStyle.reverseMirror}
                    explainStyle={ explainStyle.reverseMirror }
                    buttonStyle={ buttonStyle.reverseMirror }
                    title="逆ミラーリング"
                    explain="お客様の情報機器が、簡単にスマートフォンで操作できるようになる仕組みをご提供します。"
                    to="/mirror"
                />
                <ExplainModuleSmall
                    id = "routez"
                    moduleTitle = "RouteZ"
                    imgWrapperClassName = "routez-img"
                    src = { routeZ }
                    explainTitle = "routez-explain-title"
                    explainMain = "routez-explain"
                    explain ="「RouteZ」は世界で最も普及しているスマートホーム向けIOT無線技術であるZ-Waveのデバイスを制御・管理するためのソフトウエア開発キットです。"
                    to = "/routez"
                />
                <ExplainModuleSmall
                    id = "gateway"
                    moduleTitle = "Z-Wave HOMEゲートウェイ Arena Box"
                    imgWrapperClassName = "gateway-img-wrapper"
                    imgClassName = "gateway-img"
                    src = { arenaBox }
                    explainTitle = "gateway-explain-title"
                    explainMain = "gateway-explain"
                    explain ="「Arena Box」はZ-Waveに対応したHOMEゲートウェイです。"
                    to="/gateway"
                />
                <ExplainModuleSmall
                    id = "led-bulb"
                    moduleTitle = "Z-Wave LED電球 Rocket Bulb"
                    imgWrapperClassName = "bulb-img-wrapper"
                    imgClassName = "bulb-img"
                    src = { LightBolb }
                    explainTitle = "bulb-explain-title"
                    explainMain = "bulb-explain"
                    explain ="「Rocket Bulb」は弊社開発による、Z-Wave対応のスマートLED電球です。"
                    to="/led"
                />
                <ExplainModuleSmall
                    id = "av-player"
                    moduleTitle = "DRAM対応AVプレイヤーエンジン"
                    imgWrapperClassName = "engine-img-wrapper"
                    imgClassName = "engine-img"
                    src = { engineImage }
                    explainTitle = "engine-explain-title"
                    explainMain = "engine-explain"
                    explain ="スマートフォン端末やSTB等のプラットフォーム上で映像・音声の再生を行う為の基本コンポーネントを搭載したソフトウェアです。"
                    to="/daw"
                />
                <ExplainModuleSmall
                    id = "mirror"
                    moduleTitle = "逆ミラーリング"
                    imgWrapperClassName = "mirror-img-wrapper"
                    imgClassName = "mirror-img"
                    src = { reverseMirror }
                    explainTitle = "mirror-explain-title"
                    explainMain = "mirror-explain"
                    explain ="お客様の情報機器が、簡単にスマートフォンで操作できるようになる仕組みをご提供します。"
                    to="/mirror"
                />
            </section>
        )

    }
}

const imgStyle = {
    routeZ: {
       position: "absolute",
       top:"48.103px",
       width: "128.262px",
       height: "235.958px",
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
        backgroundColor:"rgba(116,206,226, 0.2)",
        color: "#74CEE2",
        border: "none",
        fontFamily: "Helvetica Neue, Arial",
        fontSize:"16.41px",
        fontWeight: "lighter",
        borderRadius : "17pt",
        zIndex:100,
    },

    gateway: {
        position: "absolute",
        width:"240.667px",
        height: "34px",
        top: "178.054px",
        left:  "221.191px",
        backgroundColor:"rgba(116,206,226, 0.2)",
        color: "#74CEE2",
        border: "none",
        fontFamily: "Helvetica Neue, Arial",
        fontSize:"16.41px",
        fontWeight: "lighter",
        borderRadius : "17pt",
        zIndex:3,
    },
    bulb: {
        position: "absolute",
        width:"240.667px",
        height: "34px",
        top: "124.719px",
        left: "221.191px",
        backgroundColor:"rgba(116,206,226, 0.2)",
        color: "#74CEE2",
        border: "none",
        fontFamily: "Helvetica Neue, Arial",
        fontSize:"16.41px",
        fontWeight: "lighter",
        borderRadius : "17pt",
        zIndex:1,
    },
    engine: {
        position: "absolute",
        width:"240.667px",
        height: "34px",
        top: "152.011px",
        left: "221.191px",
        backgroundColor:"rgba(116,206,226, 0.2)",
        color: "#74CEE2",
        fontFamily: "Helvetica Neue, Arial",
        fontSize:"16.41px",
        border: "none",
        fontWeight: "lighter",
        borderRadius : "17pt",
        zIndex:1,
    },
    reverseMirror: {
        position: "absolute",
        width:"240.667px",
        height: "34px",
        top: "124.879px",
        left: "221.191px",
        backgroundColor:"rgba(116,206,226, 0.2)",
        color: "#74CEE2",
        border: "none",
        fontFamily: "Helvetica Neue, Arial",
        fontSize:"16.41px",
        fontWeight: "lighter",
        borderRadius : "17pt",
        zIndex:1,
    }
}


export default Product;