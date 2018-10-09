import React, { Component } from "react";
import gateway from "../../static/gateway.png";
import HeaderDetail from "../../Components/Header/header_detail";
import GatewaySmall from "./gatewaySmall";
import MenuScreenDetail from "../Menu/menuScreenDetail";
import Header from "../Header/header";

class Gateway extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
            isOpen: false,
            open: null,
            width: window.innerWidth
        }
    }

    handleResize = (e) => {
        this.setState(() => {
            return {width: window.innerWidth}
        });
    }

    handleClick = (e) => {
        if(this.state.open === null) {
            this.setState(() => {
                return {
                    open: "open",
                    isOpen: true
                }
            })
        } else {
            this.setState(() => {
                return {
                    open: null,
                    isOpen: false
                }
            })
        }
    }

    render() {

    return (
        <div>
            <MenuScreenDetail open = { this.state.open }  handleClick = { this.handleClick }/>
            { this.state.width > 801  &&  <HeaderDetail />}
            { this.state.width <= 801 && <Header handleResize = { this.handleResize } handleClick = { this.handleClick } open = { this.state.open  } /> }
            <section style = { styles.wrapper } className="gateway-wrapper">
            <div style = { styles.contentWrapper }>
                <p style = { styles.drmTitle }>
                    Z-Wave HOME ゲートウェイ　Arena Box
                </p>
                <div style = { styles.explain }>
                    <p style = {{ letterSpacing: "0.168em"}}>
                        「Arena Box」はZ-Waveに対応したHOMEゲートウェイです。IR
                    </p>
                    <p style = {{ letterSpacing: "0.155em"}}>
                        transmitter(赤外線リモコン）機能を搭載しており遠隔からの赤外
                    </p>
                    <p style = {{ letterSpacing: "0.075em"}}>
                        線家電の操作が行えます。WiFi・Bluetooth・有線LANにも対応していま
                    </p>
                    <p style = {{ letterSpacing: "0.14em"}}>
                        す。
                    </p>
                </div>
                <img src = { gateway } style = {{
                    marginTop: "-100px",
                    marginLeft:"102.485px",
                    width: "310.775px"
                }}/>
                <div　style = { styles.functionWrapper }>
                  <div style = {{
                      display:"flex"
                  }}>
                    <p style = {{
                        marginLeft:"15.056px",
                        fontFamily: "Helvetica Neue, Arial",
                        fontWeight: "lighter",
                        fontSize: "14px",
                        color: "#74CEE2",
                        letterSpacing: "0.05em",
                    }} >
                       機能概要
                    </p>
                    <div style = {{
                        fontFamily: "Helvetica Neue, Arial",
                        fontWeight: "lighter",
                        fontSize: "14px",
                        color: "#ffffff",
                        letterSpacing: "0.05em",
                        marginLeft:"93.552px"
                    }}>
                        <li>Z-Waveゲートウェイ　機能</li>
                        <li>IR transmitter(赤外線学習リモコン)機能</li>
                        <li>温度/湿度/照度センサー機能</li>
                        <li>WiFi/Bluetooth/有線LAN対応</li>
                    </div>
                  </div>
                    <div style = {{
                        display:"flex",
                        marginTop: "33.892px"
                    }}>
                        <p style = {{
                            marginLeft:"15.056px",
                            fontFamily: "Helvetica Neue, Arial",
                            fontWeight: "lighter",
                            fontSize: "14px",
                            color: "#74CEE2",
                            letterSpacing: "0.05em",
                        }} >
                            価格
                        </p>
                        <div style = {{
                            fontFamily: "Helvetica Neue, Arial",
                            fontWeight: "lighter",
                            fontSize: "14px",
                            color: "#ffffff",
                            letterSpacing: "0.05em",
                            marginLeft:"118.93px"
                        }}>
                           <div>
                           <p>
                           こちらからお問い合わせ下さい
                           </p>
                           <div style = {{
                               height:"1px",
                               width:"70px",
                               backgroundColor:"#ffffff"
                           }}></div>
                           </div>
                        </div>
                  </div>
                    <div style = {{
                        display:"flex",
                        marginTop: "33.086px"
                    }}>
                        <p style = {{
                            marginLeft:"15.056px",
                            fontFamily: "Helvetica Neue, Arial",
                            fontWeight: "lighter",
                            fontSize: "14px",
                            color: "#74CEE2",
                            letterSpacing: "0.05em",
                        }} >
                            提供開始日
                        </p>
                        <div style = {{
                            fontFamily: "Helvetica Neue, Arial",
                            fontWeight: "lighter",
                            fontSize: "14px",
                            color: "#ffffff",
                            letterSpacing: "0.05em",
                            marginLeft:"78.668px"
                        }}>
                            2018年10月
                        </div>
                    </div>
                </div>
                <p style = { styles.footer }>
                    Copyright © 2018 JLabs All Right Reserved.
                </p>
            </div>
        </section>
        <GatewaySmall/>
        </div>
    )}
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
        width: "520px"
    },
    drmTitle: {
        marginLeft:"15.056px",
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
    functionWrapper: {
        marginTop: "-10px"
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

export default Gateway;