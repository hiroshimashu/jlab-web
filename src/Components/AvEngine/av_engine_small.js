import React, { Component } from "react";
import dawEngineSmall from "../../static/daw_engine.svg";
import FooterSmall from "../Common/footer_small";

class AvEngineSmall extends Component {
    render() {
        return (
            <div className="daw-wrapper-small">
                <p className="daw-title-small">
                    「DRM対応<br/>
                    AVプレイヤー<br/>
                    エンジン」とは？
                </p>
                <div className="daw-main-wrapper">
                    <p>

                        DRMにも対応したAVプレイヤーエンジンです。スマートフォン端末やSTB等のマルチメディア機器上で映像・音の再生を行う為の基本コンポーネントを搭載したソフトウェアです。IPTVフォーラム仕様やDRMにも対応しながら、映像のコントロールを細かく制御する事ができます。
                    </p>
                    <p>
                        特殊な再生方式やストリーミング、DRMを必要とする場合や、独自のプレイヤーの開発をご検討の方へご提供できる最適なソリューションです。AVプレイヤーエンジンをお客様のプラットフォームへ移植することも可能です。
                    </p>
                </div>
                <div className="daw-img-wrapper-small">
                    <img src = { dawEngineSmall } />
                </div>
                <FooterSmall top="177.25px" height = "37px"/>
            </div>
        )
    }
}

export default AvEngineSmall;

