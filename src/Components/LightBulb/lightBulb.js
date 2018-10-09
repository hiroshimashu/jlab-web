import React from "react";
import lightBulb from "../../static/light_bulb_detail.png";
import　SectionTitleDetail from "../Common/sectionTitleDetail";
import HeaderDetail from "../../Components/Header/header_detail";
import LightBulbSmall from "./lightBulbSmall";

const LightBulb = () => {
    return (
        <div>
        <HeaderDetail/>
        <section className="light-bulb-wrapper" style = {{position: "relative", marginTop: "137.775px", height:"1880.463px"}}>
            <SectionTitleDetail
                title = "Z-Wave LED電球 Rocket Bulb"
                top = "0px"
                space = "0.176em"
            />
            <div style = {styles.lightBulbTitle }>
                <p className="light-bulb-text1">
                    「Rocket Bulb」は弊社開発による、Z-Waveに対応したスマートLED電球
                </p>
                <p className="light-bulb-text2">
                    です。遠隔からのオン・オフの操作、調光、ホワイトバランスの設定が行え
                </p>
                <p className="light-bulb-text3">
                    ます。調光・ホワイト調整が可能（昼光色←→電気色）なRocket Bulb
                </p>
                <p className="light-bulb-text4">
                    CCTと、調光のみ可能(電球色）なRocket Bulb DIMの２種類をご提供しま
                </p>
                <p>
                    す。
                </p>
            </div>
            <img src = { lightBulb } style = { styles.lightBulbImg } alt = "light-bulb"/>
            <div className = "function-wrapper" style = {styles.functionWrapper}>
                <p style = { styles.functionTitle}>
                    機能概要
                </p>
                <div className="function-list" style = { styles.functionList }>
                    <li style = { styles.function1 }>
                        5~100%の調光がスムーズに出来ます
                    </li>
                    <li style = { styles.function2 }>
                        お客様のニーズに応じて2700Kから
                    </li>
                    <p className="organize-white">
                        6500Kまでのホワイト調整が可能　※CCTのみ
                    </p>
                    <li style = { styles.function3 }>
                        ワイヤレス接続のインストールと設定が簡単で安全
                    </li>
                    <li style = { styles.function4 }>
                        901m / Wまでの高い照明効果
                    </li>
                    <li style = { styles.function5 }>
                        国際ブランドチップによるIP保証
                    </li>
                </div>
            </div>
            <div style = { styles.mainProperties }>
                <p style = { styles.propertyTitle }>
                    主な仕様
                </p>
                <table style = { styles.propertyTable }>
                    <tbody>
                        <tr>
                            <td style = {{ backgroundColor:"rgba(116,206,226, 0.2)", width:"140.119px", height:"28px"}} >無線方式</td>
                            <td style = {{ width: "61.666px" }}>共通</td>
                            <td>Z-wave(920Mhz帯無線）</td>
                        </tr>
                        <tr>
                            <td style = {{ backgroundColor:"rgba(116,206,226, 0.2)" }}>光色</td>
                            <td style = {{ width: "61.666px", height: "56px" }}>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "8px 0"
                                    }}>
                                        CCT
                                    </p>
                                </div>
                                <div style = {{width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "8px 0"
                                    }}>
                                        DIM
                                    </p>
                                </div>
                            </td>
                            <td>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "8px 0"
                                    }}>
                                        昼光色相当⇔電球色相当
                                    </p>
                                </div>
                                <div style = {{width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "8px 0"
                                    }}>
                                        電球色相当
                                    </p>
                                </div>
                            </td>
                        </tr>
                        <tr className="col-1">
                            <td style = {{ backgroundColor:"rgba(116,206,226, 0.2)", padding: "0", height: "112px"}}>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "8px 0"
                                    }}>
                                        口金サイズ
                                    </p>
                                </div>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "8px 0"
                                    }}>
                                        周波数
                                    </p>
                                </div>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "8px 0"
                                    }}>
                                        定格電圧
                                    </p>
                                </div>
                                <div style = {{ width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "8px 0"
                                    }}>
                                        定格入力電流
                                    </p>
                                </div>
                            </td>
                            <td style = {{ width: "61.666px" }}>
                                共通
                            </td>
                            <td>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "8px 0"
                                    }}>
                                        E26
                                    </p>
                                </div>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "8px 0"
                                    }}>
                                        50/60Hz共用
                                    </p>
                                </div>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "8px 0"
                                    }}>
                                        100V
                                    </p>
                                </div>
                                <div style = {{ width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "8px 0"
                                    }}>
                                        TBD
                                    </p>
                                </div>
                            </td>
                        </tr>
                        <tr className="col-1">
                            <td style = {{ backgroundColor:"rgba(116,206,226, 0.2)", height: "112px"}}>
                                <p>金光束</p>
                                <p style = {{ fontSize: "9px", letterSpacing:"0.05em"}}>（ランプ単体の明るさ）</p>
                            </td>
                            <td style = {{ width: "61.666px", height: "112px"}}>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "22px 0"
                                    }}>
                                        CCT
                                    </p>
                                </div>
                                <div style = {{width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "22px 0"
                                    }}>
                                        DIM
                                    </p>
                                </div>
                            </td>
                            <td>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize: "11px"}}>
                                    <div style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "12px 0"
                                    }}>
                                        <div>
                                            <p>
                                                昼光色 806 lm
                                            </p>
                                            <p>
                                                電球色 400~500 lm
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div style = {{width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "22px 0"
                                    }}>
                                        電球色 400~500 lm
                                    </p>
                                </div>
                            </td>
                        </tr>
                        <tr className="col-1">
                            <td style = {{ backgroundColor:"rgba(116,206,226, 0.2)" }}>
                                発光効率
                            </td>
                            <td style = {{ width: "61.666px", height: "112px"}}>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "22px 0"
                                    }}>
                                        CCT
                                    </p>
                                </div>
                                <div style = {{width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "22px 0"
                                    }}>
                                        DIM
                                    </p>
                                </div>
                            </td>
                            <td>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize: "11px"}}>
                                    <div style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "12px 0"
                                    }}>
                                        <div>
                                            <p>
                                                昼光色 90.0 lm / W
                                            </p>
                                            <p>
                                                電球色 TBD
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div style = {{width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "22px 0"
                                    }}>
                                        電球色 TBD
                                    </p>
                                </div>
                            </td>
                        </tr>
                        <tr className="col-1">
                            <td style = {{ backgroundColor:"rgba(116,206,226, 0.2)" }}>
                                色濃度
                            </td>
                            <td style = {{ width: "61.666px", height: "112px"}}>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "22px 0"
                                    }}>
                                        CCT
                                    </p>
                                </div>
                                <div style = {{width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "22px 0"
                                    }}>
                                        DIM
                                    </p>
                                </div>
                            </td>
                            <td>
                                <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize: "11px"}}>
                                    <div style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "12px 0"
                                    }}>
                                        <div>
                                            <p>
                                                昼光色　6500K
                                            </p>
                                            <p>
                                                電球色　2700K
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div style = {{width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"}}>
                                    <p style = {{
                                        display: "-webkit-flex",
                                        display: "flex",
                                        webkitAlignItemslign: "center",
                                        alignItems: "center",
                                        webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                        justifyContent: "center",
                                        padding: "22px 0"
                                    }}>
                                        電球色 2700K
                                    </p>
                                </div>
                            </td>
                        </tr>
                        <tr className="col-1">
                            <td style = {{ backgroundColor:"rgba(116,206,226, 0.2)", height: "56px" }}>
                                <div style = {{ display: "flex", direction: "row"}}>
                                    <div style = {{
                                        display:"inline-block", height:"56px", verticalAlign: "middle", fontSize: "11px",lineHeight: "12px"
                                    }}>
                                        <p style = {{
                                            width: "97.193px",
                                            borderRight:"1px solid #74CEE2",
                                            borderBottom:"1px solid #74CEE2",
                                            display: "-webkit-flex",
                                            display: "flex",
                                            webkitAlignItemslign: "center",
                                            alignItems: "center",
                                            webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                            justifyContent: "center",
                                            padding: "22px 0"
                                        }}>
                                            寸法
                                        </p>
                                    </div>
                                    <div className="outer-radius">
                                        <div style = {{borderBottom:"1px solid #74CEE2",height: "28px"}}>
                                            <p
                                                style = {{
                                                    display: "-webkit-flex",
                                                    display: "flex",
                                                    webkitAlignItemslign: "center",
                                                    alignItems: "center",
                                                    webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                                    justifyContent: "center",
                                                    padding: "8px 0"
                                                }}
                                            >外径</p>
                                        </div>
                                        <div style = {{borderBottom:"1px solid #74CEE2", height: "27px", fontSize: "11px",lineHeight: "12px"}}>
                                            <p
                                                style = {{
                                                    display: "-webkit-flex",
                                                    display: "flex",
                                                    webkitAlignItemslign: "center",
                                                    alignItems: "center",
                                                    webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                                    justifyContent: "center",
                                                    padding: "7.5px 0"
                                                }}
                                            >長さ</p>
                                        </div>
                                    </div>
                                </div>
                                <div style = {{ borderBottom:"1px solid #74CEE2", height:"28px",fontSize: "11px",lineHeight: "12px"}}>
                                    <p
                                        style = {{
                                            display: "-webkit-flex",
                                            display: "flex",
                                            webkitAlignItemslign: "center",
                                            alignItems: "center",
                                            webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                            justifyContent: "center",
                                            padding: "7.5px 0"}}
                                    >
                                        質量
                                    </p>
                                </div>
                                <div  style = {{ borderBottom:"1px solid #74CEE2", height:"28px"}}>
                                    <p
                                        style = {{
                                            display: "-webkit-flex",
                                            display: "flex",
                                            webkitAlignItemslign: "center",
                                            alignItems: "center",
                                            webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                            justifyContent: "center",
                                            padding: "7.5px 0"}}
                                    >
                                        寿命
                                    </p>
                                </div>
                                <div  style = {{ height:"28px"}}>
                                    <p
                                        style = {{
                                            display: "-webkit-flex",
                                            display: "flex",
                                            webkitAlignItemslign: "center",
                                            alignItems: "center",
                                            webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                            justifyContent: "center",
                                            padding: "7.5px 0"}}
                                    >
                                        定格消費電力
                                    </p>
                                </div>
                            </td>
                            <td  style = {{ width: "61.666px" }}>
                                共通
                            </td>
                            <td>
                                <div  style = {{ borderBottom:"1px solid #74CEE2", height:"28px"}}>
                                    <p
                                        style = {{
                                            display: "-webkit-flex",
                                            display: "flex",
                                            webkitAlignItemslign: "center",
                                            alignItems: "center",
                                            webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                            justifyContent: "center",
                                            padding: "7.5px 0"}}
                                    >
                                        60mm
                                    </p>
                                </div>
                                <div  style = {{ borderBottom:"1px solid #74CEE2", height:"28px"}}>
                                    <p
                                        style = {{
                                            display: "-webkit-flex",
                                            display: "flex",
                                            webkitAlignItemslign: "center",
                                            alignItems: "center",
                                            webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                            justifyContent: "center",
                                            padding: "7.5px 0"}}
                                    >
                                        118mm
                                    </p>
                                </div>
                                <div  style = {{ borderBottom:"1px solid #74CEE2", height:"28px"}}>
                                    <p
                                        style = {{
                                            display: "-webkit-flex",
                                            display: "flex",
                                            webkitAlignItemslign: "center",
                                            alignItems: "center",
                                            webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                            justifyContent: "center",
                                            padding: "7.5px 0"}}
                                    >
                                        TBD
                                    </p>
                                </div>
                                <div  style = {{ borderBottom:"1px solid #74CEE2", height:"28px"}}>
                                    <p
                                        style = {{
                                            display: "-webkit-flex",
                                            display: "flex",
                                            webkitAlignItemslign: "center",
                                            alignItems: "center",
                                            webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                            justifyContent: "center",
                                            padding: "7.5px 0"}}
                                    >
                                        約25000時間
                                    </p>
                                </div>
                                <div  style = {{height:"28px"}}>
                                    <p
                                        style = {{
                                            display: "-webkit-flex",
                                            display: "flex",
                                            webkitAlignItemslign: "center",
                                            alignItems: "center",
                                            webkitJustifyContent: "center",/* 横方向中央揃え（Safari用） */
                                            justifyContent: "center",
                                            padding: "7.5px 0"}}
                                    >
                                        昼光色　9.0W
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className = "price" style = { styles.priceWrapper }>
                <p style = { styles.priceTitle }>
                    価格
                </p>
                <p style = { styles.price }>
                    こちらからお問い合わせください
                </p>
            </div>
            <div className ="when-to-start" style = { styles.startWrapper }>
                <p style = { styles.startTitle }>
                    提供開始日
                </p>
                <p style = { styles.start }>
                    2018年10月
                </p>
            </div>
            <footer>
                <p style = {{
                    position: "absolute",
                    bottom: "72.72px",
                    left: "50%",
                    transform:"translateX(-50%)",
                    fontSize: "12px",
                    letterSpacing : "0.96pt",
                    color : "#FFFFFF",
                    fontWeight: "lighter",
                }}>
                    Copyright © 2018 JLabs All Right Reserved.
                </p>
            </footer>
        </section>
        <LightBulbSmall />
        </div>
    )
}

const styles = {
    lightBulbTitle: {
        position: "absolute",
        width: "520px",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "14px",
        color: "#ffffff",
        left: "51%",
        top: "61.526px",
        letterSpacing:"0.176em",
        transform: "translateX(-50%)",
        textAlign: "justify",
        lineHeight:"30px"
    },
    lightBulbImg: {
        position: "absolute",
        width: "310.775px",
        height: "207.354px",
        top: "267.824px",
        left:"50%",
        transform:"translate(-50%)"
    },
    functionWrapper: {
        position:"absolute",
        display: "flex",
        width:"520px",
        top:"531.816px",
        left:"50.5%",
        transform:"translate(-50%)"
    },
    functionTitle: {
        position: "absolute",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "14px",
        letterSpacing :"0.176em",
        color: "#74CEE2",
    },
    functionList: {
        position: "absolute",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "12px",
        lineHeight:"22px",
        left:"115.528px",
        letterSpacing :"0.243em",
        color: "#ffffff",
    },
    mainProperties: {
        position:"absolute",
        display: "flex",
        width:"520px",
        top:"715.427px",
        left:"50.5%",
        transform:"translate(-50%)"
    },
    propertyTitle: {
        position: "absolute",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "14px",
        letterSpacing :"0.176em",
        color: "#74CEE2",
    },
    propertyTable: {
        position: "absolute",
        width:"500.119px",
        height: "676.478px",
        left: "7.407px",
        top: "39.956px",
        border: "1px solid #74CEE2",
        borderCollapse:"collapse"
    },
    tableBody: {
        border: "1px solid #74CEE2",
    },
    priceWrapper: {
        position:"absolute",
        display: "flex",
        width:"520px",
        top:"1507.567px",
        left:"50.5%",
        transform:"translate(-50%)"
    },
    priceTitle: {
        position: "absolute",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "14px",
        letterSpacing :"0.176em",
        color: "#74CEE2",
    },
    price: {
        position: "absolute",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "12px",
        lineHeight:"22px",
        left:"115.528px",
        letterSpacing :"0.243em",
        color: "#ffffff",
    },
    startWrapper: {
        position:"absolute",
        display: "flex",
        width:"520px",
        top:"1553.58px",
        left:"50.5%",
        transform:"translate(-50%)"
    },
    startTitle: {
        position: "absolute",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "14px",
        letterSpacing :"0.176em",
        color: "#74CEE2",
    },
    start: {
        position: "absolute",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "12px",
        lineHeight:"22px",
        left:"115.528px",
        letterSpacing :"0.243em",
        color: "#ffffff",
    },



}

export default LightBulb;