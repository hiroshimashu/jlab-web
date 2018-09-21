import React from 'react';
import SectionTitle from "../Common/sectionTitle";
import Triangle from "../../static/background_triangle.svg";

const News = () => {
    return (
        <section className = "news_and_company" style = {{position: "relative", zIndex:1, marginTop: "71.245px", marginLeft:"calc((100% - 782px) / 2)", width: "782px", height:"1090px", backgroundImage:"url('../../static/background_triangle.svg)"}}>
           <img src = { Triangle } alt = "triangle" style = {{ position: "absolute",width:"782px" }} />
           <SectionTitle 
               title = "News"
               top = "26.278px"
           />
           <p className = "news-main" style = {{ 
               position: "absolute",
               color:"#ABE1FA", 
               fontSize: "13px" ,
               top: "86.893px", 
               left: "226.339px", 
               letterSpacing: "0.15em", 
               fontWeight: "lighter",
            
            }} >
               2018.00.00 ホームページをリニューアルしました。
            </p>
            <SectionTitle
                title = "Company"
                top = "245.142px"
　          />
            <div className = "company-header" style = {{
               position: "absolute",
               color:"#FFFFFF", 
               fontSize: "24px",
               top: "392.389px", 
               left: "133.817px",
               letterSpacing: "2.63px", 
               fontWeight: "lighter",
               display:"inline"
            }}>
                アイデアと技術で常に一歩先の驚きと感動を。
            </div>
            <p className = "company-main" style = {{ 
               position: "absolute",
               color:"#ABE1FA", 
               fontSize: "13px" ,
               top: "445.213px", 
               left: "133.817px",
               letterSpacing: "2.64px",  
               lineHeight: "21pt",
               fontWeight: "lighter",
            }}>
            当社はアイデアと技術で常に一歩先の驚きと感動を提供できるサービスや製品<br/>
            の基盤づくりを目指している会社です。ソフトウェアの重要性が高まっている情<br/>
            報家電において、幅広い技術とアイデアが求められています。当社では常に<br/>
            高い技術と創造力を高め、情報家電分野におけるソフトウェアのニーズに応えて<br/>
            きました。STB、Android TV、スマーフォンといったデバイスへ、マルチ<br/>
            デバイス時代に必要なソフトウェア技術を提供します。常に斬新な自社プロダ<br/>
            クトを企画・開発しており、培われたアイデアと技術、開発環境を様々な形で<br/>
            提供しています。
            </p>
        </section>
    )
}

export default News;