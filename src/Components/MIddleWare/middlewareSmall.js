import React, { Component } from "react";
import middleWareSmall from "../../static/middleware.png";
import FooterSmall from "../Common/footer_small";

class MiddlewareSmall extends Component {
    render() {
        return (
            <div className="middleware-wrapper-small">
                <p className="middleware-title-small">
                    組込みミドルウェア開発
                </p>
                <p className="middleware-main-small">
                    当社の研究開発から培われたものづくりの豊富なノウハウと技術力を生かし、様々なご要望にお答えいたします。
                </p>
                <div className="middleware-img-wrapper-small">
                    <img className="middleware-img-small" src = { middleWareSmall }/>
                </div>
                <div className="middleware-exmple-wrapper-small">
                    <p>
                        ex.
                    </p>
                    <p>
                        ■ネットワークプレイヤー開発技術や、DRM、ARIB等のデジタル放送受信機開発技術、DLNAといった高度な経験と知識を必要とするミドルウェア開発ソリューションをご提供します。
                    </p>
                    <p>
                        ■Androidを組み込んだ情報家電の開発をご提供します。お客様のご要望にあわせてAndroidOSの移植やカスタマイズを行います。
                    </p>
                </div>
                <FooterSmall top="177.25px" height = "37px"/>
            </div>
        )
    }
}

export default MiddlewareSmall;