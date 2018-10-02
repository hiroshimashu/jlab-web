import React from "react";
import mirror from "../../static/mirror_img.svg";
import HeaderDetail from "../../Components/Header/header_detail";

const Mirror = () => {
    return (
        <div>
           <HeaderDetail/>
           <section style = { styles.wrapper }>
            <div style = { styles.contentWrapper }>
                <p style = { styles.drmTitle }>
                    「逆ミラーリング」とは
                </p>
                <div style = { styles.explain }>
                    <p>
                        お客様の情報機器が、簡単にスマートフォンで操作できるようになる仕組
                    </p>
                    <p style = {{ letterSpacing: "0.145em"}}>
                        みをご提供します。Android OSを搭載したSTBや情報機器を、スマート
                    </p>
                    <p style = {{ letterSpacing: "0.23em"}}>
                        フォンからリモート操作することを実現する為のSDKです。当社の
                    </p>
                    <p style = {{ letterSpacing: "0.14em"}}>
                        RemoteDeviceDriver技術により、情報機器が表示する画面をリアルタイ
                    </p>
                    <p style = {{ letterSpacing: "0.09em"}}>
                        ムにスマートフォンの画面へ表示することや、スマートフォンのデバイスリ
                    </p>
                    <p>
                        ソースを情報機器にて利用する事が可能となります。
                    </p>
                    <p>

                    </p>
                </div>
                <img src = { mirror } style = {{
                    marginTop: "43.392px",
                    marginLeft:"13.793px",
                    width: "487.317px"
                }}/>
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
        width: "530px"
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
    }
}

export default Mirror;