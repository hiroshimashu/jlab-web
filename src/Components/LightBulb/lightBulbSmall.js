import React, { Component } from "react";
import lightBulb from "../../static/light_bulb_detail.png";
import PropertyTable from "./property_table_small";
import Footer from "../Common/footer_small";


class LightBulbSmall extends Component {
    render() {
        return(
           <div className="light-bulb-wrapper-small">
               <div className="light-bulb-main-wrapper">
                   <p className="light-bulb-main-title">
                       Z-Wave LED電球 Rocket Bulb
                   </p>
                   <p className="light-bulb-main">
                       「Rocket Bulb」は弊社開発による、Z-Waveに対応したスマートLED電球です。遠隔からのオン・オフの操作、調光、ホワイトバランスの設定が行えます。調光・ホワイト調整が可能（昼光色←→電気色）なRocket BulbCCTと、調光のみ可能(電球色）なRocket Bulb DIMの２種類をご提供します。
                   </p>
               </div>
               <div className="light-bulb-img-wrapper">
                   <img src = { lightBulb } className="light-bulb-img" />
               </div>
               <div className="light-bulb-function-small">
                   <p className="light-bulb-function-small-title">
                       機能概要
                   </p>
                   <div className="light-bulb-function-small-main-wrapper">
                       <li>
                           5~100%の調光がスムーズに出来ます
                       </li>
                       <li>
                           お客様のニーズに応じて2700Kから
                       </li>
                       <p>
                           6500Kまでのホワイト調整が可能　※CCTのみ
                       </p>
                       <li>
                           ワイヤレス接続のインストールと設定が簡単で安全
                       </li>
                       <li>
                           901m / Wまでの高い照明効果
                       </li>
                       <li>
                           国際ブランドチップによるIP保証
                       </li>
                   </div>
               </div>
               <div className="light-bulb-property-small">
                   <p className="light-bulb-property-small-title">
                       主な仕様
                   </p>
                   <PropertyTable />
               </div>
               <div className="light-bulb-price-wrapper">
                   <p className="light-bulb-price-title">
                       価格
                   </p>
                   <p className="light-bulb-price">
                       こちらからお問い合わせください
                   </p>
               </div>
               <div className="when-to-start-wrapper">
                   <p className="when-to-start-title">
                       提供開始日
                   </p>
                   <p className="when-to-start">
                       2018年10月
                   </p>
               </div>
               <Footer
                   top="177.25px"
                   height = "37px"
               />
           </div>
        );
    }
}

export default LightBulbSmall;