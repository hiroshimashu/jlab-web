import React, { Component } from "react";
import infoSmall from "../../static/recruit_info_small.png";
import FooterSmall from "../Common/footer_small";

class RecruitSmall extends Component {
    render() {
        return (
            <div className="recruit-wrapper-small">
                <p className="recruit-title">
                    Recruit
                </p>
                <div className="recruit-jobs-wrapper">
                    <p className="recruit-jobs-title">
                        募集職種
                    </p>
                    <div className="recruit-jobs">
                        <li>
                            Androidエンジニア
                        </li>
                        <li>
                            iOSエンジニア
                        </li>
                        <li>
                            組み込みソフトウェアエンジニア
                        </li>
                        <li>
                            サーバーサイドエンジニア
                        </li>
                    </div>
                </div>
                <div className="required-skills-wrapper">
                    <p className="required-skills-title">
                        必要な経験・スキル
                    </p>
                    <div className="required-skills">
                        <li>
                            Androidアプリ開発経験
                        </li>
                        <li>
                            組み込みLinux開発経
                        </li>
                        <li>
                            Java、C/C++、C#、Python（すべてを網羅していなくても可)
                        </li>
                        <li>
                            プロジェクトマネージメントの2年以上の経験(経験者優遇)
                        </li>
                    </div>
                </div>
                <div className="working-hours-wrapper">
                    <p className="working-hours-title">
                        勤務時間
                    </p>
                    <p className="working-hours">
                        10:00 ~ 18:00
                    </p>
                </div>
                <div className="working-place-wrapper">
                    <p className="working-place-title">
                       勤務地
                    </p>
                    <p className="working-place">
                        東京
                    </p>
                </div>
                <div className="jobs-info-wrapper">
                    <img src = { infoSmall } alt = "jobs-info" className="jobs-info" />
                </div>
                <div className="address-wrapper">
                    <p className="address">
                        info@jlabs.com
                    </p>
                </div>
                <FooterSmall top="177.25px" height = "37px"/>
            </div>
        )
    }
}

export default RecruitSmall;