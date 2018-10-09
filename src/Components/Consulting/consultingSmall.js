import React, { Component } from "react";
import consulting from "../../static/software_consulting.svg";
import FooterSmall from "../Common/footer_small";

class ConsultingSmall extends Component {
    render() {
        return (
            <div className="consulting-wrapper-small">
                <p className="consulting-explain-title-small">
                    ソフトウェア技術<br/>
                    コンサル
                </p>
                <div className="consulting-explain-small">
                    <p>
                        ドライバ/ミドルウェア/アプリケーションといった各ソフトウェア分野を問わない豊富な製品開発経験を生かすことで、製品に最適なソフトウェア構成を設計いたします。また、仕様策定やその後の開発支援もお手伝いも可能です。
                    </p>
                </div>
                <div className="cosulting-img-wrapper-small">
                    <img src = { consulting } />
                </div>
                <div className="consulting-exmple-wrapper-small">
                    <p>
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
                <FooterSmall top="177.25px" height = "37px"/>
            </div>
        )
    }
}

export default  ConsultingSmall;
