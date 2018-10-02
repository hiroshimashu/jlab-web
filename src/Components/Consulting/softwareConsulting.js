import React from "react";
import consulting from "../../static/software_consulting.svg";
import HeaderDetail from "../../Components/Header/header_detail";



const SoftwareConsulting = () => {
        return (
            <div>
              <HeaderDetail/>
              <section style = { styles.wrapper }>
                <div style = { styles.contentWrapper }>
                    <p style = { styles.drmTitle }>
                        ソフトウェア技術コンサル
                    </p>
                    <div style = { styles.explain }>
                        <p style = {{ letterSpacing: "0.176em"}}>
                            ドライバ/ミドルウェア/アプリケーションといった各ソフトウェア分野
                        </p>
                        <p style = {{ letterSpacing: "0.067em"}}>
                            を問わない豊富な製品開発経験を生かすことで、製品に最適なソフトウェア構
                        </p>
                        <p style = {{ letterSpacing: "0.14em"}}>
                            成を設計いたします。また、仕様策定やその後の開発支援もお手伝いも可
                        </p>
                        <p style = {{ letterSpacing: "0.09em"}}>
                            能です。
                        </p>
                    </div>
                    <img src = { consulting } style = {{
                        marginTop: "43.392px",
                        width: "540px"
                    }}/>
                    <div style = { styles.exWrapper }>
                        <p style = { styles.exTitle }>
                            ex.
                        </p>
                        <p>
                            ■iOS/Androidスマートフォンに搭載する業務系、コンシューマ向けアプリケーションの開発
                        </p>
                        <p>
                            ■マルチメディア情報機器の開発（セット・トップ・ボックス、Stick型小型ビデオプレイヤー端末等）
                        </p>
                        <p>
                            ■Android OSを搭載する情報機器の開発(Android TV/Android STB/業務用タブレット等）
                        </p>
                        <p>
                            ■その他 (BtoB専用端末等)
                        </p>
                    </div>
                    <p style = { styles.footer }>
                        Copyright © 2018 JLabs All Right Reserved.
                    </p>
                </div>
              </section>
            </div>
        )
}

const styles = {
        wrapper: {
            position: "relative",
            marginTop: "149.648px",
            width:"100%",
            height: "973.67px"
        },
        contentWrapper: {
            marginLeft: "auto",
            marginRight: "auto",
            width: "540px"
        },
        drmTitle: {
            marginLeft:"125.16px",
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
            marginTop: "215.048px",
            marginLeft: "134.481px",
            fontSize : "12px",
            fontWeight: "lighter",
            letterSpacing : "0.96px",
            color : "#ffffff",
        },
        exWrapper: {
            marginTop:"13.561px",
            fontFamily: "Helvetica Neue, Arial",
            fontWeight: "lighter",
            fontSize: "10px",
            lineHeight: "30px",
            color : "#85A2BD",
            letterSpacing: "0.116em",
            textAlign: "justify",
        },
        exTitle: {
            fontSize: "10px",
            letterSpacing: "0.176em",
        },

}


export default SoftwareConsulting;