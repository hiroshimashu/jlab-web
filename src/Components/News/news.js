import React, { Component } from 'react';
import SectionTitle from "../Common/sectionTitle";
import SectionTitleSmall from "../Common/sectionTitleSmall";
import UpperTriangle from "../../static/triangle_upper.svg";
import Partner from "./partner";
import { Parallax } from 'react-scroll-parallax';
import LowerTriangle from "../../static/triangle_lower.svg";
import Fade from "react-reveal/Fade";

class News extends Component {
    render() {
    return (
        <section className = "news_and_company" style = {{position: "relative", zIndex:1, marginLeft:"auto", marginRight: "auto", height:"1090px"}}>
            <Parallax
                className="triangle1"
                offsetYMax={70}
                offsetYMin={-15}
                slowerScrollRate
            >
                <img src = { UpperTriangle } alt = "triangle" />
            </Parallax>
            <Parallax
                className="triangle2"
                offsetYMax={-100}
                offsetYMin={15}
                slowerScrollRate
            >
                <img src = { LowerTriangle } alt = "triangle" />
            </Parallax>
            <SectionTitle
                title = "News"
                top = "26.278px"
                left = "358.741px"
                Ref = { this.props.companyRef }
            />
            <SectionTitleSmall
                title = "News"
                id = "news"
            />
            <Fade bottom>
                 <p className = "news-main">
                     2018.00.00 ホームページをリニューアルしました。
                 </p>
            </Fade>
            <SectionTitle
                title = "Company"
                top = "245.142px"
                left = "323.561px"
                Ref = { this.props.companyRef }
            />
            <SectionTitleSmall
                title = "Company"
                id = "company"
            />
            <Fade bottom>
            <div className = "company-header">
                <p className="company-header-text">
                    アイデアと技術で常に一歩先の驚きと感動を。
                </p>
                <p className="company-header-text-small">
                    アイデアと技術で常に一歩先の驚きと感動を
                </p>
            </div>
            </Fade>
            <Fade bottom>
            <p className = "company-main">
            当社はアイデアと技術で常に一歩先の驚きと感動を提供できるサービスや製品の基盤づくりを目指している会社です。ソフトウェアの重要性が高まっている情報家電において、幅広い技術とアイデアが求められています。当社では常に高い技術と創造力を高め、情報家電分野におけるソフトウェアのニーズに応えてきました。STB 、Android TV、スマーフォンといったデバイスへ、マルチデバイス時代に必要なソフトウェア技術を提供します。常に斬新な自社プロダクトを企画・開発しており、培われたアイデアと技術、開発環境を様々な形で提供しています。
            </p>
            </Fade>
            <Partner />
        </section>
    )}
}

export default News;