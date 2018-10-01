import React from "react";
import dawEngine from "../../static/daw_engine.svg";

const AvEngine = () => {
    return (
        <section style = { styles.wrapper }>
            <div style = { styles.contentWrapper }>
                <p style = { styles.drmTitle }>
                    「DRM対応AVプレイヤーエンジン」とは？
                </p>
                <div style = { styles.explain }>
                    <p>
                        スマートフォン端末やSTB等のマルチメディア機器上で映像・音の再生を行
                    </p>
                    <p style = {{ letterSpacing: "0.15em"}}>
                        う為の基本コンポーネントを搭載したソフトウェアです。IPTVフォーラム
                    </p>
                    <p style = {{ letterSpacing: "0.14em"}}>
                        仕様やDRMにも対応しながら、映像のコントロールを細かく制御する事が
                    </p>
                    <p>
                        できます。
                    </p>
                </div>
                <img src = { dawEngine } style = {{
                   marginTop: "43.392px",
                    marginLeft:"10px",
                    width: "516.217px"
                }}/>
                <p style = { styles.footer }>
                    Copyright © 2018 JLabs All Right Reserved.
                </p>
            </div>
        </section>
    )
}

const styles = {
    wrapper: {
        position: "relative",
        marginTop: "149.648px",
        width:"100%",
        height: "1031.867px"
    },
    contentWrapper: {
        marginLeft: "23.82%",
    },
    drmTitle: {
        marginLeft:"29.673px",
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
        letterSpacing: "0.12em",
        textAlign: "justify",
    },
    footer: {
        marginTop: "330.943px",
        marginLeft: "134.481px",
        fontSize : "12px",
        fontWeight: "lighter",
        letterSpacing : "0.96px",
        color : "#ffffff",
    }
}

export default AvEngine;