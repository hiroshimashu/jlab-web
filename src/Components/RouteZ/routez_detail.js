import React from "react";
import routezImgExplain from "../../static/RouteZ_Img_explanation.png";
import routezExlain from "../../static/RouteZ_explain.png";
import demo from "../../static/keyvisual_movie.mp4";


const RouteZDetail = () => {
    return (
        <section className="routez-detail" style = {{ position: "relative", marginTop: "139.361px"}}>
            <p style = { styles.explainTitle }>
                「RouteZ」とは?
            </p>
            <div style = { styles.explainText }>
                <p>
                    RouteZはZ-Waveセンサデバイスを使用したIOTサービスを実現するため
                </p>
                <p style = {{ letterSpacing: "1.78px"}}>
                    のソフトウエアがすべて統合された開発プラットフォームです。本プラット
                </p>
                <p>
                    フォームを使用することによりお客様はわずかな工数で迅速にサービスを
                </p>
                <p>
                    開始することが可能です。
                </p>
            </div>
            <img src = { routezImgExplain } alt = "routez-img-explain" style = {styles.routezImg}/>
            <img src = { routezExlain } alt = "routez-explain" style = {styles.routezExplain} />
            <div　style = { styles.demoMovieTitle }>
                <p  style = { styles.demoMovieTitleText1 }>
                   RouteZ demo movie
                </p>
                <p style = { styles.demoMovieTitleText2 }>
                    「From anywhere」
                </p>
            </div>
            <video
                controls
                muted
                style = { styles.demoMovie}
                src = { demo }
            >

            </video>
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
        left: "50%",
        transform: "translateX(-50%)"
    },
    explainText: {
        position: "absolute",
        width: "516.327px",
        top:"60.966px",
        left: "50%",
        transform: "translateX(-50%)",
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
        left: "50%",
        top: "293.223px",
        transform: "translateX(-50%)",
    },
    routezExplain: {
        position: "absolute",
        width: "582.801px",
        height: "656.506px",
        left: "50%",
        top: "503.163px",
        transform: "translateX(-50%)",
    },
    demoMovieTitle: {
        position: "absolute",
        width: "208.389px",
        top: "1283.011px",
        fontSize : "18px",
        lineHeight : "30px",
        letterSpacing : "2.17px",
        left: "50%",
        transform: "translateX(-50%)",
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
        left: "50%",
        transform: "translateX(-50%)"
    }


}

export default RouteZDetail;

