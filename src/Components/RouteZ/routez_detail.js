import React from "react";
import routezImgExplain from "../../static/RouteZ_Img_explanation.png";
import routezExlain from "../../static/RouteZ_explain.png";
import routezExplainSmall from "../../static/zwave_small.svg";
import demo from "../../static/keyvisual_movie.mp4";
import Fade from "react-reveal/Fade";


const RouteZDetail = () => {
    return (
        <section className="routez-detail">
            <p className="routez-detail-title">
                「RouteZ」とは?
            </p>
            <div className = "routez-detail-explain">
                <p>
                    RouteZはZ-Waveセンサデバイスを使用したIOTサービスを実現するため
                </p>
                <p className="routez-detail-explain-2">
                    のソフトウエアがすべて統合された開発プラットフォームです。本プラット
                </p>
                <p>
                    フォームを使用することによりお客様はわずかな工数で迅速にサービスを
                </p>
                <p>
                    開始することが可能です。
                </p>
            </div>
            <div className = "routez-detail-explain-small">
                <p>
                    RouteZはZ-Waveセンサデバイスを使用したIOTサービスを実現するためのソフトウエアがすべて統合された開発プラットフォームです。本プラットフォームを使用することによりお客様はわずかな工数で迅速にサービスを開始することが可能です。
                </p>
            </div>
            <div className="routez-detail-img1-wrapper">
                <img src = { routezImgExplain } alt = "routez-img-explain" className="routez-detail-img1"/>
            </div>
            <img src = { routezExlain } alt = "routez-explain" className="routez-detail-img2" />
            <img src = { routezExplainSmall } alt = "routez-explain" className="routez-detail-img2-small" />
            <div className="demo-movie-title-wrapper">
                    <p  style = { styles.demoMovieTitleText1 }>
                        RouteZ demo movie
                    </p>
                    <p style = { styles.demoMovieTitleText2 }>
                        「From anywhere」
                    </p>
            </div>
            <div className="demo-video-wrapper">
                <video
                controls
                muted
                src = { demo }
                className="demo-video"
                >
                </video>
            </div>
        </section>
    )
}

const styles = {
    explainTitle: {
        position: "absolute",
        fontSize : "24px",
        lineHeight : "30px",
        letterSpacing : "4.22px",
        color : "#74CEE2",
        fontWeight: "lighter",
        left: "215.716px"
    },
    explainText: {
        position: "absolute",
        width: "516.327px",
        top:"60.966px",
        left: "51.403px",
        fontSize : "13px",
        fontWeight: "lighter",
        lineHeight : "28px",
        letterSpacing : "2.25px",
        color : "#ABE1FA",
        textAlign: "justify",
    },
    routezImg: {
        position: "absolute",
        width: "110.894px",
        top: "293.223px",
        left: "253.161px",
    },
    routezExplain: {
        position: "absolute",
        width: "582.801px",
        height: "656.506px",
        top: "503.163px",
    },
    demoMovieTitle: {
        position: "absolute",
        width: "208.389px",
        top: "1283.011px",
        fontSize : "18px",
        lineHeight : "30px",
        letterSpacing : "2.17px",
        textAlign: "center",
        left: "200.852px",
        fontWeight: "lighter"
    },
    demoMovieTitleText1: {
        color : "#ABE1FA",
    },
    demoMovieTitleText2: {
        color: "#ffffff"
    },
    demoMovie: {
        position: "absolute",
        width: "584.614px",
        height: "329.979px",
        top: "1361.191px",
        left:"16.301px",
    }


}

export default RouteZDetail;

