import React from "react";
import jsonInfo from "../../static/jobs_info.svg";

const Recruit = () => {
    return (
        <section className="recruit-wrapper" style = {{position: "relative", marginTop: "137.775px"}}>
            <div>
                Recruit
            </div>
            <div>
                <div style = { styles.jos }>
                    <div>
                        募集職種
                    </div>
                    <div>
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
                <div style = { styles.joRequirement }>
                    <div>
                        必要な経験・スキル
                    </div>
                    <div>
                        <li>
                            Androidアプリ開発経験
                        </li>
                        <li>
                            組み込みLinux開発経験
                        </li>
                        <li>
                            Java、C/C++、C#、Python（すべてを網羅していなくても可)
                        </li>
                        <li>
                            プロジェクトマネージメントの2年以上の経験(経験者優遇)
                        </li>
                    </div>
                </div>
                <div style = { styles.salary }>
                    <div>
                        給与
                    </div>
                    <div>
                        経験・能力を重視し、応相談
                    </div>
                    <div>
                        <div>
                            勤務時間
                        </div>
                        <div>
                            10:00 ~ 18:00
                        </div>
                    </div>
                    <div>
                        <div>
                            勤務地
                        </div>
                        <div>
                            東京
                        </div>
                    </div>
                </div>
            </div>
            <div style = { styles.info }>
                <img alt = "info" src = { jsonInfo }/>
                <div>

                </div>
            </div>
            <div style = { styles.address }>
                info@jlabs.com
            </div>
            <footer>
                Copyright © 2018 JLabs All Right Reserved.
            </footer>
        </section>
    )
}

const styles = {
    jobs: {

    }
}

export default Recruit;