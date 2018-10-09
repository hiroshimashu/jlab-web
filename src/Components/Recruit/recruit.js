import React from "react";
import jsonInfo from "../../static/jobs_info.svg";
import HeaderDetail from "../../Components/Header/header_detail";
import RecruitSmall from "./recruitSmall";

const Recruit = () => {
    return (
        <div>
          <HeaderDetail/>
          <section className="recruit-wrapper" style = {{
            position: "relative",
            marginTop: "149.648px",
            width:"100%",
            height: "1300.489px",
          }}>
            <div className="content-wrapper" style = {{
                marginLeft:"auto",
                marginRight: "auto",
                width:"540px"
            }}>
                <div style = { styles.recruitTitle }>
                    Recruit
                </div>
                <div style = { styles.jobsWrapper }>
                    <p style = { styles.jobsTitle }>
                        募集職種
                    </p>
                    <div style = { styles.jobs }>
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
                    <div style = { styles.jobRequirementWrapper }>
                        <div style = { styles.jobRequirementTitle }>
                            必要な経験・スキル
                        </div>
                        <div style = { styles.jobRequirement }>
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
                    <div style = { styles.salarytWrapper }>
                        <div style = { styles.salaryTitle}>

                            給与
                        </div>
                        <div style = { styles.salary }>
                            経験・能力を重視し、応相談
                        </div>
                    </div>
                    <div style = { styles.workingHourWrapper }>
                        <div style = { styles.workingHourTitle }>
                            勤務時間
                        </div>
                        <div style = { styles.workingHour}>
                            10:00 ~ 18:00
                        </div>
                    </div>
                    <div style = { styles.workingPlaceWrapper }>
                        <div style = { styles.workingPlaceTitle }>
                            勤務地
                        </div>
                        <div style = { styles.workingPlace }>
                            東京
                        </div>
                    </div>
                <div style = { styles.infoWrapper }>
                    <img alt = "info" src = { jsonInfo } style = { styles.infoImg } />
                    <div style = { styles.info }>
                        <p style = { styles.infoText1 }>
                            申し込みを希望される方は下記アドレスに
                        </p>
                        <p style = { styles.infoText2 }>
                            履歴書と職務経歴書をお送りください。
                        </p>
                        <p style = { styles.infoText3 }>
                            後日、弊社担当より連絡させていただきます。
                        </p>
                    </div>
                </div>
                <a href = "mailto:info@jlabs.com">
                  <div style = { styles.address }>
                    info@jlabs.com
                  </div>
               </a>
                <footer style = { styles.footer }>
                    Copyright © 2018 JLabs All Right Reserved.
                </footer>
            </div>
          </section>
          <RecruitSmall />
        </div>
    )
}

const styles = {
    recruitTitle: {
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "24px",
        color: "#74CEE2",
        letterSpacing: "0.176em",
        textAlign: "center"
    },
    jobsWrapper: {
        marginLeft: "57.746px",
        marginTop: "111.065px",
        display:"flex",
    },
    jobsTitle: {
        height: "30px",
        fontSize : "13px",
        fontWeight: "lighter",
        lineHeight : "30px",
        letterSpacing : "1.94px",
        color : "#85A2BD",
        display:"inline",
    },
    jobs: {
        fontSize : "13px",
        fontWeight: "lighter",
        lineHeight : "22px",
        letterSpacing : "2.75px",
        color : "#ffffff",
        marginLeft:"57.572px",
    },
    jobRequirementWrapper: {
        marginTop: "63.634px",
        width: "680px",
        display:"flex",
    },
    jobRequirementTitle: {
        height: "30px",
        fontSize : "13px",
        fontWeight: "lighter",
        lineHeight : "30px",
        letterSpacing : "0.8px",
        color : "#85A2BD",
    },
    jobRequirement: {
        fontSize : "13px",
        fontWeight: "lighter",
        lineHeight : "22px",
        letterSpacing : "2.75px",
        color : "#ffffff",
        marginLeft:"57.572px"

    },
    salarytWrapper: {
        marginTop: "66.805px",
        display:"flex",
    },
    salaryTitle: {
        width:"105.22px",
        height: "30px",
        fontSize : "13px",
        fontWeight: "lighter",
        lineHeight : "30px",
        letterSpacing : "0.8px",
        color : "#85A2BD",
        textAlign: "right",
    },
    salary: {
        fontSize : "13px",
        fontWeight: "lighter",
        lineHeight : "22px",
        letterSpacing : "2.75px",
        color : "#ffffff",
        marginLeft:"57.572px",
        marginTop: "5px"

    },
    workingHourWrapper: {
        marginTop: "64.523px",
        display:"flex",
    },
    workingHourTitle: {
        width:"105.22px",
        height: "30px",
        fontSize : "13px",
        fontWeight: "lighter",
        lineHeight : "30px",
        letterSpacing : "0.8px",
        color : "#85A2BD",
        textAlign: "right",
    },
    workingHour: {
        fontSize : "13px",
        fontWeight: "lighter",
        lineHeight : "22px",
        letterSpacing : "2.75px",
        color : "#ffffff",
        marginLeft:"57.572px",
        marginTop: "5px"
    },
    workingPlaceWrapper: {
        marginTop: "64.523px",
        display:"flex",
    },
    workingPlaceTitle: {
        width:"105.22px",
        height: "30px",
        fontSize : "13px",
        fontWeight: "lighter",
        lineHeight : "30px",
        letterSpacing : "0.8px",
        color : "#85A2BD",
        textAlign: "right",
    },
    workingPlace: {
        fontSize : "13px",
        fontWeight: "lighter",
        lineHeight : "22px",
        letterSpacing : "2.75px",
        color : "#ffffff",
        marginLeft:"57.572px",
        marginTop: "5px"

    },
    infoWrapper: {
        position: "relative",
        marginTop:"64.656px",
        marginLeft: "auto",
        marginRight: "auto",
        width: "355px",
        height: "123.326px"
    },
    infoImg: {
        position:"absolute",
    },
    info: {
        position: "absolute",
        left: "43.744px",
        top: "17.318px",
        fontSize : "11px",
        fontWeight: "lighter",
        lineHeight : "22px",
        letterSpacing : "2.75px",
        color : "#85A2BD",
    },
    infoText1: {
        marginLeft:"12px",
    },
    infoText2: {
        marginLeft:"18px",
    },
    address: {
        fontFamily: "Helvetica Neue, Arial",
        fontSize : "24px",
        fontWeight: "lighter",
        lineHeight : "30px",
        letterSpacing : "4.22px",
        color : "#ffffff",
        marginTop: "29.092px",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"

    },
    footer: {
        display:"block",
        marginTop: "288px",
        marginLeft: "90.974px",
        fontSize : "12px",
        fontWeight: "lighter",
        letterSpacing : "0.96px",
        color : "#ffffff",
    }


}

export default Recruit;