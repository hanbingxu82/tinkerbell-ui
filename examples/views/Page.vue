<template>
  <div class="page">
    <div class="home">
      <div class="adc-home-text-left">
        <!-- <img class="img_adc_da" src="../assets/images/page_img/adc_da架构.png" alt="" /> -->
        <p class="titleFont">Thinkbell-UI</p>
        <br />
        <div class="adc-home-text-left-text">Thinkbell软件高效研发架构，基于松耦合的体系架构，包含开发工具、技术架构、通用技术组件和软件开发方法学，是用于支持WEB应用软件快速构建的一体化解决方案。</div>
      </div>
      <div class="adc-home-text-right">
        <img class="adc_da_banner" src="../assets/images/page_img/banner.png" alt="" />
      </div>
      <div class="white_in_blue"></div>
    </div>

    <div class="white_screen" style="height: 667px;">
      <div class="team">
        <div class="team_screen">
          <img class="white_screen_img" src="../assets/images/page_img/团队介绍.png" />
        </div>
        <span class="white_screen_title">
          团队介绍
        </span>
        <span class="white_screen_text">
          thinkerbell小组致力于深入研究软件通用技术，通过技术手段提升研发效率、进行质量保障，提升软件服务能力。
        </span>
      </div>

      <div class="research">
        <div class="research_screen">
          <img class="white_screen_img" src="../assets/images/page_img/研发模式.png" />
        </div>
        <span class="white_screen_title">
          研发模式
        </span>
        <span class="white_screen_text">
          打破既有瀑布式研发模式，强调模式划分与设计，进行组件、模块的匹配、接口定义，划分核心与非核心组件从而选择性研发。
        </span>
      </div>
      <div class="teachnology">
        <div class="teachnology_screen">
          <img class="white_screen_img" src="../assets/images/page_img/技术培训.png" />
        </div>
        <span class="white_screen_title">
          技术培训
        </span>
        <span class="white_screen_text">
          针对性提供thinkerbell架构系统化技术培训， 逐步形成WEB软件技术路线，提高行业竞争力，打造共享经济和集体利益。
        </span>
      </div>
      <div class="bottom_screen">
        <div style="width:90%;height: 40%;margin-left: 5%;float: left">
          <span class="mail_text">邮箱：hbx831@126.com</span>
          <span class="add_text"> </span>
          <span class="ver_1">
              <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/hanbingxu82/tinkerbell-ui?style=social"/>
              </span>
        </div>
        <div class="b_s_d_2" style="width:90%;height: 50%;margin-left: 5%;float: left;">
          <span class="tel_text">
              备案号：津ICP备200008xx号</span>

          <a class="ver_2" href="">
            <!-- <img alt="npm" src="https://img.shields.io/npm/v/tinkerbell-ui?style=social" /> -->
            <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/hanbingxu82/tinkerbell-ui?style=social"/>
          </a>
          <a class="uv">
            <!-- <img alt="npm" src="https://img.shields.io/npm/v/tinkerbell-ui?style=social"/> -->
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="less" scoped>
@media screen and (min-width: 1920px) {
  .adc-home-text-left {
    padding-top: 130px;
    box-sizing: border-box;
    width: 35%;
    height: 100%;
    display: inline-block;
  }
  .adc-home-text-right {
    width: 65%;
    height: 80%;
    padding: 0 2%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    position: absolute;
    text-align: right;
  }
  .adc_da_banner {
    width: 1000px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1920px) {
  .adc-home-text-left {
    padding-top: 130px;
    box-sizing: border-box;
    width: 35%;
    height: 100%;
    display: inline-block;
  }
  .adc-home-text-right {
    width: 65%;
    height: 80%;
    padding: 0 2%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    position: absolute;
    text-align: right;
  }
  .adc_da_banner {
    width: 90%;
  }
}
@media screen and (min-width: 720px) and (max-width: 1200px) {
  .adc-home-text-left {
    padding-top: 90px;
    box-sizing: border-box;
    width: 100%;
  }
  .adc-home-text-right {
    width: 100%;
    padding: 0 100px;
    box-sizing: border-box;
    text-align: center;
  }
  .adc_da_banner {
    width: 500px;
  }
}
@media screen and (min-width: 375px) and (max-width: 720px) {
  .adc-home-text-left {
    padding-top: 90px;
    box-sizing: border-box;
    width: 100%;
  }
  .adc-home-text-right {
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  }
  .adc_da_banner {
    width: 100%;
    padding: 0 10%;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 375px) {
  .adc-home-text-left {
    padding-top: 90px;
    box-sizing: border-box;
    width: 100%;
  }
  .adc-home-text-right {
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  }
  .adc_da_banner {
    width: 100%;
    margin-top: 60px;
    box-sizing: border-box;
  }
}
// .page{
//   height: 100%;
//   overflow-y: auto;
// }
.home {

  padding: 0 5%;
  padding-top: 60px;
  box-sizing: border-box;
  width: 100%;
  height: 700px;
  background: #188fff;
  color: white;
  position: relative;
  overflow-x: hidden;
}
.titleFont{
    font-size: 40px;
    font-weight: 700;
}
.img_adc_da {
  display: block;
  height: 3.5rem;
}
.adc-home-text-left-text {
  width: 100%;
  word-wrap: break-word;
}
.white_in_blue {
  margin: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  width: 90%;
  height: 10%;
}
.white_in_blue {
  margin: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  width: 90%;
  height: 10%;
}
.white_screen {
  width: 100%;
  background: #f3f8fc;
}
.team,
.teachnology,
.research {
  width: 30%;
  height: 70%;
  float: left;
  background: white;
  padding-bottom: 4%;
  padding-top: 0;
}
.team_screen,
.teachnology_screen,
.research_screen {
  width: 100%;
  height: 45%;
  position: relative;
}
.team {
  margin-left: 5%;
}
.teachnology {
}
.white_screen_img {
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
}
.white_screen_title {
  margin-top: 2%;
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 150%;
  display: block;
}
.white_screen_text {
  margin-top: 13%;
  margin-left: 17%;
  width: 70%;
  height: 50px;
  line-height: 30px;
  display: block;
  text-align: left;
  color: #a6a6a6;
}
.bottom_screen {
  width: 100%;
  height: 16%;
  margin-top: 3%;
  background: rgba(0, 0, 0, 0.65);
  float: left;
  color: white;
  font-size: 14px;
}
.mail_text {
  width: 17%;
  float: left;
  margin-top: 2%;
}
.add_text {
  width: 30%;
  float: left;
  margin-left: 2%;
  margin-top: 2%;
}
.ver_1 {
  width: 13%;
  float: right;
  text-align: right;
  margin-top: 2%;
}
.ver_2 {
  float: right;
  text-align: center;
  margin-top: 1%;
  cursor: pointer;
}
.ver_2:hover {
  color: #ff6347;
}
.uv {
  float: right;
  margin-right: 6%;
  text-align: center;
  margin-top: 1%;
  cursor: pointer;
}
.tel_text {
  width: 15%;

  margin-top: 1%;
  float: left;
}
.blue_screen_left {
  width: 40%;
  height: 100%;
  float: left;
}
.bar_ul_btn {
  background: white;
  text-align: center;
  height: 50px;
  width: 50px;
  line-height: 50px;
  color: #188fff;
  float: right;
  right: 5%;
  -moz-border-rdius: 8px; /* Firefox */
  -webkit-border-radius: 8px; /* Safari å’Œ Chrome */
  border-radius: 8px; /* Opera 10.5+, ä»¥åŠä½¿ç”¨äº†IE-CSS3çš„IEæµè§ˆå™¨ */
  top: 8px;
  position: fixed;
  cursor: pointer;
}
.bar_ul_vertical {
  position: fixed;
  top: 64px;
  width: 100%;
  display: none;
}
.bar_ul_vertical li {
  display: block;
  background: #104e8b;
  color: white;
  height: 50px !important;
  line-height: 50px !important;
  width: 100% !important;
  text-align: left;
  font-size: 20px;
  cursor: pointer;
}
.bar_ul_vertical li:hover {
  background: #87ceeb;
}
@media screen and (max-width: 480px) {
  .uv {
    margin-right: 0;
    margin-top: 2%;
  }
  //   .bar_img{
  // 	left:5%;
  // 	height:40%;
  // }
  .blue_screen_left {
    width: 100%;
    height: 35%;
    margin-top: 0%;
    float: left;
    font-size: 150%;
  }
  // .img_adc_da{
  // 	display: block;
  // 	height:60%;
  // }
  .adc_da_img_screen {
    width: 100%;
    height: 50%;
    margin-left: 0%;
    position: relative;
  }
  .adc_da {
    font-size: 20px;
    width: 80%;
    height: 40%;
    float: left;
    margin-left: 14%;
    margin-top: 20%;
  }

  // .adc_da_banner{
  // 	margin:auto;
  // 	position: absolute;
  // 	left:0;right:0;top:25%;bottom:0;
  // 	height:60%;
  // }
  .team_screen,
  .teachnology_screen,
  .research_screen {
    width: 100%;
    height: 35%;
    position: relative;
  }
  .team,
  .teachnology,
  .research {
    width: 90%;
    height: 50%;
    float: left;
    background: white;
    padding-bottom: 0%;
    padding-top: 0;
    margin-left: 5%;
    font-size: 150%;
    border-radius: 0px;
    font-size: 18px;
  }
  .teachnology {
    height: 60%;
  }
  .research {
    height: 50%;
  }
  .bottom_screen {
    width: 100%;
    height: 20%;
    margin-top: 6%;
    background: rgba(0, 0, 0, 0.65);
    float: left;
    color: white;
    font-size: 10px;
  }
  .white_screen_text {
    margin-top: 7%;
    margin-left: 17%;
    width: 70%;
    height: 50px;
    line-height: 30px;
    display: block;
    text-align: left;
    color: #a6a6a6;
  }

  .mail_text {
    width: 40%;
    float: left;
    margin-top: 2%;
  }
  .add_text {
    width: 50%;
    float: right;
    text-align: right;
    margin-top: 2%;
  }
  .ver_1 {
    width: 100%;
    float: left;
    text-align: left;
    margin-top: 2%;
  }
  .ver_2 {
    width: 40%;
    text-align: right;
    float: right;
    margin-top: 2%;
    cursor: pointer;
  }
  .ver_2:hover {
    color: #ff6347;
  }
  .tel_text {
    width: 55%;
    margin-top: 2%;
    float: left;
  }
  .b_s_d_2 {
    margin-top: 2%;
  }
}
@media screen and (max-width: 720px) and (min-width: 480px) {
  .uv {
    margin-right: 3%;
    margin-top: 2%;
  }
  //   .bar_img{
  //     height:55%;
  // 	left:5%;
  // }
  .blue_screen_left {
    width: 100%;
    height: 35%;
    margin-top: 0%;
    float: left;
    font-size: 150%;
  }
  // .img_adc_da{
  // 	display: block;
  // 	height:60%;
  // }
  .adc_da_img_screen {
    width: 100%;
    height: 50%;
    margin-left: 0%;
    position: relative;
  }
  .adc_da {
    font-size: 20px;
    width: 80%;
    height: 40%;
    float: left;
    margin-left: 14%;
    margin-top: 20%;
  }

  // .adc_da_banner{
  // 	margin:auto;
  // 	position: absolute;
  // 	left:0;right:0;top:25%;bottom:0;
  // 	height:60%;
  // }
  .team_screen,
  .teachnology_screen,
  .research_screen {
    width: 100%;
    height: 35%;
    position: relative;
    border-radius: 0px;
  }
  .team,
  .teachnology,
  .research {
    width: 90%;
    height: 60%;
    float: left;
    background: white;
    padding-bottom: 0%;
    padding-top: 0;
    margin-left: 5%;
    font-size: 150%;
  }
  .teachnology {
    height: 70%;
  }
  .research {
    height: 60%;
  }
  .bottom_screen {
    width: 100%;
    height: 20%;
    margin-top: 6%;
    background: rgba(0, 0, 0, 0.65);
    float: left;
    color: white;
    font-size: 14px;
  }
  .white_screen_text {
    margin-top: 7%;
    margin-left: 17%;
    width: 70%;
    height: 50px;
    line-height: 30px;
    display: block;
    text-align: left;
    color: #a6a6a6;
  }

  .mail_text {
    width: 50%;
    float: left;
    margin-top: 2%;
  }
  .add_text {
    width: 45%;
    float: right;
    text-align: right;
    margin-top: 2%;
  }
  .ver_1 {
    width: 100%;
    float: left;
    text-align: left;
    margin-top: 1%;
  }
  .ver_2 {
    width: 22%;
    float: right;
    text-align: right;
    margin-top: 2%;
    cursor: pointer;
  }
  .ver_2:hover {
    color: #ff6347;
  }
  .tel_text {
    width: 40%;
    margin-top: 2%;
    float: left;
  }
  .b_s_d_2 {
    margin-top: 3%;
  }
}
@media screen and (min-width: 720px) and (max-width: 960px) {
  .uv {
    float: left;
    margin-left: 2%;
    margin-top: 2%;
  }
  .blue_screen_left {
    width: 100%;
    height: 35%;
    margin-top: 0%;
    float: left;
    font-size: 150%;
  }
  // .img_adc_da{
  // 	display: block;
  // 	height:60%;
  // }
  .adc_da_img_screen {
    width: 100%;
    height: 50%;
    margin-left: 0%;
    position: relative;
  }
  .adc_da {
    width: 80%;
    height: 40%;
    float: left;
    margin-left: 14%;
    margin-top: 12%;
  }

  // .adc_da_banner{
  // 	margin:auto;
  // 	position: absolute;
  // 	left:0;right:0;top:15%;bottom:0;
  // 	height:80%;
  // }
  .team_screen,
  .teachnology_screen,
  .research_screen {
    width: 100%;
    height: 35%;
    position: relative;
    border-radius: 0px;
  }
  .team,
  .teachnology,
  .research {
    width: 90%;
    height: 60%;
    float: left;
    background: white;
    padding-bottom: 0%;
    padding-top: 0;
    margin-left: 5%;
    font-size: 150%;
  }
  .teachnology {
    height: 60%;
  }
  .research {
    height: 60%;
  }
  .bottom_screen {
    width: 100%;
    height: 20%;
    margin-top: 6%;
    background: rgba(0, 0, 0, 0.65);
    float: left;
    color: white;
    font-size: 14px;
  }
  .white_screen_text {
    margin-top: 7%;
    margin-left: 17%;
    width: 70%;
    height: 50px;
    line-height: 30px;
    display: block;
    text-align: left;
    color: #a6a6a6;
  }

  .mail_text {
    width: 30%;
    float: left;
    margin-top: 2%;
  }
  .add_text {
    width: 40%;
    float: left;
    margin-top: 2%;
  }
  .ver_1 {
    width: 20%;
    float: right;
    text-align: right;
    margin-top: 2%;
  }
  .ver_2 {
    width: 22%;
    float: right;
    text-align: right;
    margin-top: 2%;
    cursor: pointer;
  }
  .ver_2:hover {
    color: #ff6347;
  }
  .tel_text {
    width: 30%;
    margin-top: 2%;
    float: left;
  }
}
@media screen and (min-width: 960px) and (max-width: 1280px) {
  // .adc_da_banner{
  // 	margin:auto;
  // 	position: absolute;
  // 	left:0;right:0;top:0;bottom:10%;
  // 	/*height:57%;*/
  // 	width:100%;
  // }
  .adc_da_img_screen {
    width: 65%;
    height: 100%;
    float: left;
    margin-left: 0%;
    position: relative;
  }
  .blue_screen_left {
    width: 35%;
    height: 100%;
    float: left;
  }
  // .adc_da{
  // 	width:80%;
  // 	height:50%;
  // 	float: left;
  // 	margin-left:14%;
  // 	margin-top: 55%;
  // }
  .text_adc_da {
    margin-top: 5%;
    display: block;
    font-size: 100%;
  }
  .ver_1 {
    width: 23%;
  }
  .add_text {
    width: 35%;
  }
  .mail_text {
    width: 27%;
  }
  .tel_text {
    width: 35%;
  }
  .white_screen_img {
    width: 60%;
  }
}
@media screen and (min-width: 1280px) and (max-width: 1440px) {
  // .adc_da_banner{
  // 	margin:auto;
  // 	position: absolute;
  // 	left:0;right:0;top:0;bottom:10%;
  // 	/*height:67%;*/
  // 	width:100%;
  // }
  .adc_da_img_screen {
    width: 65%;
    height: 100%;
    float: left;
    margin-left: 0%;
    position: relative;
  }
  .blue_screen_left {
    width: 35%;
    height: 100%;
    float: left;
  }
  // .adc_da{
  // 	width:80%;
  // 	height:50%;
  // 	float: left;
  // 	margin-left:14%;
  // 	margin-top: 43%;
  // }
  .text_adc_da {
    margin-top: 5%;
    display: block;
    font-size: 100%;
  }
  .white_screen_img {
    width: 50%;
  }
}
@media screen and (min-width: 1440px) and (max-width: 1920px) {
  // .adc_da_banner{
  // 	margin:auto;
  // 	position: absolute;
  // 	left:0;right:0;top:0;bottom:10%;
  // 	/*height:80%;*/
  // 	width:100%;
  // }
  .adc_da_img_screen {
    width: 65%;
    height: 100%;
    float: left;
    margin-left: 0%;
    position: relative;
  }
  .blue_screen_left {
    width: 35%;
    height: 80%;
    float: left;
  }
  // .adc_da{
  // 	width:100%;
  // 	height:50%;
  // 	float: left;
  // 	margin-left:14%;
  // 	margin-top: 45%;
  // }
  .text_adc_da {
    margin-top: 5%;
    display: block;
    font-size: 100%;
  }
  .white_screen_img {
    width: 40%;
  }
}
@media screen and (min-width: 1920px) {
  .adc_da_img_screen {
    width: 65%;
    height: 100%;
    float: left;
    margin-left: 0%;
    position: relative;
  }
  .blue_screen_left {
    width: 35%;
    height: 80%;
    float: left;
  }
  .text_adc_da {
    margin-top: 5%;
    display: block;
    font-size: 100%;
  }
  .white_screen_img {
    width: 40%;
  }
}
</style>
