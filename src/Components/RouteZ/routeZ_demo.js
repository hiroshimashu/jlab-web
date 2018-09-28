import React from "react";
import demokit from "../../static/demo_kit.svg";

const DemoKit = () => {
    return (
        <section className =  "routez-demokit" style = { styles.demokit}>
            <p className = "routez-demokit-title" style = { styles.demokitTitle }>
               RouteZ デモキット
            </p>
            <div className = "demokit-text" style = { styles.demokitText }>
                <p>
                    RouteZデモキットはZ-Wave用IOTサービス用開発プラットフォームである
                </p>
                <p style = {{letterSpacing: "2.15px"}}>
                    [RouteZ]の機能を期間限定でご評価いただけるキットです。すべてプリ
                </p>
                <p style = {{letterSpacing: "1.1px"}}>
                    セットされた状態でお渡しいたしますのでお手持ちのスマートフォン等から
                </p>
                <p style ={{letterSpacing: "1.25px"}}>
                    すぐにでもセンサ類のコントロールをお試しいただけます。
                </p>
            </div>
            <div style = { styles.infoWrapper }>
                <img src = {demokit} alt = "demo-kit" style = { styles.infoImg }/>
                <div style = { styles.info }>
                    <p style = {{ textAlign: "center" }}>
                        デモキット詳細は
                    </p>
                    <p style = {{ letterSpacing: "0.05em"}}>
                        下記までお問い合わせください。
                    </p>
                </div>
            </div>
            <p style = { styles.email }>
                info@jlabs.com
            </p>
        </section>
    )
}

const styles = {
    demokit: {
        position: "relative",
        marginTop: "235.735px",
        height: "378.184px",
        width: "100%"
    },
    demokitTitle: {
        position: "absolute",
        fontFamily : "Helvetica Neue, arial",
        fontSize : "24px",
        fontWeight:"lighter",
        letterSpacing : "4.22px",
        color : "#74CEE2",
        left: "50%",
        transform: "translateX(-50%)"
    },
    demokitText: {
        position: "absolute",
        fontFamily : "Helvetica Neue, arial",
        fontSize : "14px",
        lineHeight: "30px",
        fontWeight:"lighter",
        letterSpacing : "1.55px",
        color : "#FFFFFF",
        left: "50%",
        width: "515.485px",
        top: "61.493px",
        transform: "translateX(-50%)",
        textAlign:"justify"
    },
    infoWrapper: {
        position: "absolute",
        width: "355px",
        height: "91.236px",
        top: "232.871px",
        left: "50%",
        transform:"translateX(-50%)"
    },
    info: {
        position: "absolute",
        fontFamily : "Helvetica Neue, arial",
        fontSize : "12px",
        lineHeight: "22px",
        fontWeight:"lighter",
        letterSpacing : "0.15em",
        color : "#FFFFFF",
        left: "50%",
        width: "192.426px",
        top: "25.898px",
        transform: "translateX(-50%)",
        textAlign:"justify"
    },
    email: {
        position: "absolute",
        fontSize : "24px",
        lineHeight: "30px",
        fontWeight:"lighter",
        letterSpacing : "0.156em",
        color : "#FFFFFF",
        top:"353.199px",
        left: "50%",
        transform: "translateX(-50%)",
    }

}



export default DemoKit;

