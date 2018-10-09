import React from "react";
import consulting from "../../static/software_consulting.svg";
import middleWare from "../../static/middleware.png";
import MiddlewareSmall from "./middlewareSmall";
import HeaderDetail from "../../Components/Header/header_detail";


const MiddleWare = () => {
    return (
        <div>
          <HeaderDetail/>
          <section style = { styles.wrapper } className="middleware-wrapper">
            <div style = { styles.contentWrapper }>
                <p style = { styles.drmTitle }>
                    組込みミドルウェア開発
                </p>
                <div style = { styles.explain }>
                    <p style = {{ letterSpacing: "0.1em"}}>
                        当社の研究開発から培われたものづくりの豊富なノウハウと技術力を生か
                    </p>
                    <p style = {{ letterSpacing: "0.067em"}}>
                        し、様々なご要望にお答えいたします。
                    </p>
                </div>
                <img src = { middleWare } style = {{
                    marginTop: "43.392px",
                    marginLeft:"32.983px",
                    width: "447.119px"
                }}/>
                <div style = { styles.exWrapper }>
                    <p style = { styles.exTitle }>
                        ex.
                    </p>
                    <p>
                        ■ネットワークプレイヤー開発技術や、DRM、ARIB等のデジタル放送受信機開発技術、
                    </p>
                    <p>
                        DLNAといった高度な経験と知識を必要とするミドルウェア開発ソリューションをご提供します。
                    </p>
                    <p>
                        ■Androidを組み込んだ情報家電の開発をご提供します。
                    </p>
                    <p>
                        お客様のご要望にあわせてAndroidOSの移植やカスタマイズを行います。
                    </p>
                </div>
                <p style = { styles.footer }>
                    Copyright © 2018 JLabs All Right Reserved.
                </p>
            </div>
          </section>
          <MiddlewareSmall />
        </div>
    )
}

const styles = {
    wrapper: {
        position: "relative",
        marginTop: "149.648px",
        width:"100%",
        height: "890.67px"
    },
    contentWrapper: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "520px"
    },
    drmTitle: {
        textAlign: "center",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "24px",
        color: "#74CEE2",
        letterSpacing: "0.05em",
    },
    explain: {
        marginTop:"29.673px",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "14px",
        lineHeight: "30px",
        color: "#ffffff",
        letterSpacing: "0.116em",
        textAlign: "justify",
    },
    footer: {
        marginTop: "253.157px",
        marginLeft: "134.481px",
        fontSize : "12px",
        fontWeight: "lighter",
        letterSpacing : "0.96px",
        color : "#ffffff",
    },
    exWrapper: {
        width: "640px",
        marginTop:"13.561px",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "13px",
        lineHeight: "30px",
        color : "#85A2BD",
        letterSpacing: "0.116em",
        textAlign: "justify",
    },
    exTitle: {
        fontSize: "13px",
        letterSpacing: "0.176em",
    },

}


export default MiddleWare;