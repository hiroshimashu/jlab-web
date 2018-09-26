import React from "react";
import SectionTitle from "../Common/sectionTitle";
import Pentagon from "./backgroundPentagon";
import ExplainModule from "../Common/explainModule";
import Consulting from "../../static/consulting.svg";
import Embbed from "../../static/embbed.svg";

const Solution = () => {
    return (
        <section className="solution-wrapper" style = {{ position: "relative", widht: "100%", height: "1057.54px"}}>
            <SectionTitle
                title = "Solution"
            />
            <Pentagon/>
            <ExplainModule
                top = "165.444px"
                left = "calc((100% - 546.99px) / 2)"
                imgStyle = { imgStyle.consulting }
                imgSrc = { Consulting }
                titleStyle = { titleStyle.consulting }
                explainStyle = { explainStyle.consulting }
                buttonStyle = { buttonStyle.consulting }
                title = "ソフトウェア技術コンサル"
                explain = "豊富な製品開発経験を生かし、製品に最適なソフトウェア構成を設計、仕様策定やその後の開発支援もお手伝いをします。"
            />
            <ExplainModule
                top = "535.924px"
                left = "calc((100% - 546.99px) / 2)"
                imgStyle = { imgStyle.embbed }
                imgSrc = { Embbed }
                titleStyle = { titleStyle.embbed }
                explainStyle = { explainStyle.embbed }
                buttonStyle = { buttonStyle.embbed }
                title = "組み込みミドルウェア開発"
                explain = "当社の研究開発から培われたものづくりの豊富なノウハウと技術力を生かし、様々なご要望にお答えいたします。"
            />
        </section>
    )
}

const imgStyle = {
    consulting: {
        position: "absolute",
        top:"24.665px",
        width: "155.407px",
        height: "264.131px"
    },
    embbed: {
        position: "absolute",
        top:"25.784px",
        width: "159.06px",
        height: "216.48px"
    }
}

const titleStyle = {
    consulting: {
        position: "absolute",
        width: "261.576px",
        left:  "219.347px",
        color:"#FFFFFF",
        fontSize: "20px",
        fontWeight: "lighter",
        letterSpacing :"1.15px",
    },
    embbed: {
        position: "absolute",
        width: "261.576px",
        left:  "219.347px",
        color:"#FFFFFF",
        fontSize: "20px",
        fontWeight: "lighter",
        letterSpacing :"1.15px",
    }
}

const explainStyle = {
    consulting: {
        position: "absolute",
        top: "44.598px",
        left:"219.347px",
        fontSize : "13px",
        lineHeight : "28px",
        letterSpacing :"2.15px",
        width: "330.69px",
        textAlign: "justify",
        fontWeight: "lighter",
        color :"#ABE1FA",
    },
    embbed: {
        position: "absolute",
        top: "44.598px",
        left:"219.347px",
        fontSize : "13px",
        lineHeight : "28px",
        letterSpacing :"2.15px",
        width: "330.69px",
        textAlign: "justify",
        fontWeight: "lighter",
        color :"#ABE1FA",
    }
}

const buttonStyle = {
    consulting: {
        position: "absolute",
        width:"240.667px",
        height: "34px",
        top: "147.169px",
        left: "219.347px",
        backgroundColor:"rgba(116,206,226, 0.2)",
        border:"none",
        color: "#74CEE2",
        fontFamily: "Helvetica Neue, Arial",
        fontSize:"16.41px",
        fontWeight: "lighter",
        borderRadius : "17pt",
        zIndex:1,
    },
    embbed: {
        position: "absolute",
        width:"240.667px",
        height: "34px",
        top: "147.169px",
        left: "219.347px",
        backgroundColor:"rgba(116,206,226, 0.2)",
        border:"none",
        color: "#74CEE2",
        fontFamily: "Helvetica Neue, Arial",
        fontSize:"16.41px",
        fontWeight: "lighter",
        borderRadius : "17pt",
        zIndex:1,
    }
}


export default Solution;
