import React, { Component } from "react";
import gatewaySmall from "../../static/gateway.png";
import FooterSmall from "../Common/footer_small";

class GatewaySmall extends Component {
    render() {
        return(
            <div className="gateway-wrapper-small">
                <p className="gateway-explain-title-small">
                    Z-Wave HOME<br/>
                    ゲートウェイ<br/>Arena Box
                </p>
                <div className="gateway-explain-wrapper">
                    <p>
                        「Arena Box」はZ-Waveに対応したHOMEゲートウェイです。IRtransmitter(赤外線リモコン）機能を搭載しており遠隔からの赤外線家電の操作が行えます。WiFi・Bluetooth・有線LANにも対応しています。
                    </p>
                </div>
                <div className="gateway-img-wrapper-small">
                    <img className="gateway-img-small" src = { gatewaySmall }/>
                </div>
                <div className="gateway-function-wrapper-small">
                    <p className="gateway-function-title-small">
                        機能概要
                    </p>
                    <div className="gateway-function-main-small">
                        <li>Z-Waveゲートウェイ　機能</li>
                        <li>IR transmitter(赤外線学習リモコン)機能</li>
                        <li>温度/湿度/照度センサー機能</li>
                        <li>WiFi/Bluetooth/有線LAN対応</li>
                    </div>
                </div>
                <div className="gateway-price-wrapper">
                    <p className="gateway-price-title-small">
                        価格
                    </p>
                    <p className="gateway-price-main-small">
                        こちらからお問い合わせください
                    </p>
                </div>
                <div　className="gateway-start-wrapper">
                    <p className="gateway-start-title-small">
                        提供開始日
                    </p>
                    <p className="gateway-start-main-small">
                        2018年10月
                    </p>
                </div>
                <FooterSmall top="177.25px" height = "37px"/>
            </div>
        )
    }
}

export default GatewaySmall;