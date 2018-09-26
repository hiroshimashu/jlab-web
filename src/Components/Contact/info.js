import React from "react";

const Info = () => {
    return (
        <div className = "info-wrapper" style = {styles.infoWrapper}>
            <div className="company-name"　style = {{display:"flex"}}>
                <p>
                   社名
                </p>
                <p style = {{marginLeft:"32.422px"}}>
                    株式会社JLabs(ジェイラボ）
                </p>
            </div>
            <div className="since" style = {{display:"flex"}}>
                <p>
                    設立
                </p>
                <p style = {{marginLeft:"32.422px"}}>
                    2012年11月
                </p>
            </div>
            <div className="principal" style = {{display:"flex"}}>
                <p>
                    代表者
                </p>
                <p style = {{marginLeft:"32.305px"}}>
                    代表取締役
                </p>
                <p style = {{marginLeft:"32.5px"}}>
                    榎本淳也
                </p>
            </div>
            <div　className="capital" style = {{display:"flex"}}>
                <p>
                   資本金
                </p>
                <p　style = {{marginLeft:"32.305px"}}>
                    1000万円
                </p>
            </div>
            <div className="address">
                <p>
                    〒150-0022東京都渋谷区恵比寿南１丁目９−４長谷川力ビル　６階
                </p>
            </div>
            <div className = "TEL" style = {{display:"flex"}}>
                <p>
                    TEL: 03-6712-2779
                </p>
                <p style = {{marginLeft:"32.5px"}}>
                    Mail: info@jlabs.com
                </p>
            </div>
        </div>
    )
}

const styles = {
    infoWrapper: {
        position: "absolute",
        fontSize:"13px",
        lineHeight:"28px",
        fontWeight: "lighter",
        letterSpacing:"3.25px",
        color: "#ffffff",
        top: "362.047px",
        left: "140.532px"
    }
}

export default Info;