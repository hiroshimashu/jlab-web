import React, { Component } from "react";
import HeaderDetail from "../Header/header_detail";
import dawEngine from "../../static/daw_engine.svg";
import AvEngineSmall from "./av_engine_small";
import MenuScreenDetail from "../Menu/menuScreenDetail";
import Header from "../Header/header";

class AvEngine extends Component {
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
          { this.state.width <= 801 && <Header handleResize = { this.handleResize } handleClick = { this.handleClick } open = { this.state.open  }/> }
          <section style = { styles.wrapper } className="av-engine-wrapper">
            <div style = { styles.contentWrapper }>
                <p style = { styles.drmTitle }>
                    「DRM対応AVプレイヤーエンジン」とは？
                </p>
                <div style = { styles.explain }>
                    <p>
                        スマートフォン端末やSTB等のマルチメディア機器上で映像・音の再生を行
                    </p>
                    <p style = {{ letterSpacing: "0.15em"}}>
                        う為の基本コンポーネントを搭載したソフトウェアです。IPTVフォーラム
                    </p>
                    <p style = {{ letterSpacing: "0.14em"}}>
                        仕様やDRMにも対応しながら、映像のコントロールを細かく制御する事が
                    </p>
                    <p>
                        できます。
                    </p>
                </div>
                <img src = { dawEngine } style = {{
                   marginTop: "43.392px",
                    marginLeft:"10px",
                    width: "516.217px"
                }}/>
                <p style = { styles.footer }>
                    Copyright © 2018 JLabs All Right Reserved.
                </p>
            </div>
        </section>
        <AvEngineSmall />
      </div>
    )}
}

const styles = {
    wrapper: {
        position: "relative",
        marginTop: "149.648px",
        width:"100%",
        height: "1031.867px"
    },
    contentWrapper: {
        marginLeft: "auto",
        marginRight:"auto",
        width: "545px",

    },
    drmTitle: {
        marginLeft:"29.673px",
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
        letterSpacing: "0.12em",
        textAlign: "justify",
    },
    footer: {
        marginTop: "330.943px",
        marginLeft: "134.481px",
        fontSize : "12px",
        fontWeight: "lighter",
        letterSpacing : "0.96px",
        color : "#ffffff",
    }
}

export default AvEngine;