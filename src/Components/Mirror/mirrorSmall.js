import React, { Component } from "react";
import mirrorSmall from "../../static/mirror_fix.svg";
import FooterSmall from "../Common/footer_small";

class MirrorSmall extends Component {
    render() {
        return (
            <div className="mirror-wrapper-small">
                <p className="mirror-title-small">
                    「逆ミラーリング」とは?
                </p>
                <div className="mirror-main-wrapper">
                    <p>
                        お客様の情報機器が、簡単にスマートフォンで操作できるようになる仕組みをご提供します。Android OSを搭載したSTBや情報機器を、スマートフォンからリモート操作することを実現する為のSDKです。当社のRemoteDeviceDriver技術により、情報機器が表示する画面をリアルタイムにスマートフォンの画面へ表示することや、スマートフォンのデバイスリソースを情報機器にて利用する事が可能となります。
                    </p>
                </div>
                <div className="mirror-img-wrapper-small">
                    <p className="smartphone-small">
                        スマートフォン / タブレット
                    </p>
                    <p className="tv-app-small">
                        テレビアプリ
                    </p>
                    <img src = { mirrorSmall } className="mirror-img-small"/>
                </div>
                <FooterSmall top="177.25px" height = "37px"/>
            </div>
        )

    }
}

export default MirrorSmall;
