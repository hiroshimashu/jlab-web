import React from "react";

const PropertyTable = () => {
    return (
        <div style = { styles.mainProperties }>
            <table style = { styles.propertyTable }>
                <tbody>
                <tr>
                    <td style = {{ backgroundColor:"rgba(116,206,226, 0.2)", width:"85.4px", height:"28px", fontSize:"6.5px"}} >無線方式</td>
                    <td style = {{ width: "37.5px", fontSize:"6.5px" }}>共通</td>
                    <td style = {{ fontSize:"6.5px", width: "181.5px"}}>Z-wave(920Mhz帯無線）</td>
                </tr>
                <tr>
                    <td style = {{ backgroundColor:"rgba(116,206,226, 0.2)", fontSize:"6.5px", width:"85.4px", }}>光色</td>
                    <td style = {{ width: "61.666px", height: "56px", fontSize:"6.5px" }}>
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle",lineHeight: "12px", fontSize:"6.5px"}}>
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
                        <div style = {{width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{ width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                    <td style = {{ width: "61.666px", fontSize:"6.5px" }}>
                        共通
                    </td>
                    <td>
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{ width:"100%", display:"inline-block", height:"28px", verticalAlign: "middle",fontSize:"6.5px",lineHeight: "12px"}}>
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
                    <td style = {{ backgroundColor:"rgba(116,206,226, 0.2)", height: "112px", fontSize:"6.5px"}}>
                        <p>金光束</p>
                        <p style = {{ fontSize: "9px", letterSpacing:"0.05em", fontSize:"6.5px"}}>（ランプ単体の明るさ）</p>
                    </td>
                    <td style = {{ width: "61.666px", height: "112px"}}>
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize:"6.5px", lineHeight: "12px"}}>
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
                        <div style = {{width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize:"6.5px"}}>
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
                        <div style = {{width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                    <td style = {{ backgroundColor:"rgba(116,206,226, 0.2)", fontSize:"6.5px"}}>
                        発光効率
                    </td>
                    <td style = {{ width: "61.666px", height: "112px"}}>
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle",fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle",fontSize:"6.5px"}}>
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
                        <div style = {{width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                    <td style = {{ backgroundColor:"rgba(116,206,226, 0.2)", fontSize:"6.5px" }}>
                        色濃度
                    </td>
                    <td style = {{ width: "61.666px", height: "112px"}}>
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{ borderBottom: "1px solid #74CEE2", width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize:"6.5px"}}>
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
                        <div style = {{width:"100%", display:"inline-block", height:"56px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"}}>
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
                    <td style = {{ backgroundColor:"rgba(116,206,226, 0.2)", height: "56px", fontSize:"6.5px" }}>
                        <div style = {{ display: "flex", direction: "row"}}>
                            <div style = {{
                                display:"inline-block", height:"56px", verticalAlign: "middle", fontSize:"6.5px",lineHeight: "12px"
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
                                <div style = {{borderBottom:"1px solid #74CEE2", height: "27px", fontSize:"6.5px",lineHeight: "12px"}}>
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
                        <div style = {{ borderBottom:"1px solid #74CEE2", height:"28px", fontSize:"6.5px",lineHeight: "12px"}}>
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
                    <td  style = {{ width: "61.666px", fontSize:"6.5px" }}>
                        共通
                    </td>
                    <td>
                        <div  style = {{ borderBottom:"1px solid #74CEE2", height:"28px", fontSize:"6.5px"}}>
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
                        <div  style = {{ borderBottom:"1px solid #74CEE2", height:"28px", fontSize:"6.5px"}}>
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
                        <div  style = {{ borderBottom:"1px solid #74CEE2", height:"28px", fontSize:"6.5px"}}>
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
                        <div  style = {{ borderBottom:"1px solid #74CEE2", height:"28px", fontSize:"6.5px"}}>
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
                        <div  style = {{height:"28px", fontSize:"6.5px"}}>
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
    )
}

const styles = {
    propertyTable: {
        position: "relative",
        width:"304px",
        height: "412px",
        top: "39.956px",
        marginLeft: "-35.75px",
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
}

export default PropertyTable;