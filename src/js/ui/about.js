const callback = () => {
    console.log('callback');
    let title = document.getElementsByTagName('p');

    title.style.color = "#456852";
};

export default {
    render(){
        const htmlString = `
            <!--
                <div class="about" style="padding-top:120px;text-align:center;">
                    <h2>ABOUT</h2>
                    <p id="title">눈누난나</p>
                </div>
             -->
            <div class="about-title-box">
                <h2>About Us</h2>
                <p>We make successfull digital stories for WEB &amp; MOBILE</p>
            </div>
            <div class="about-intro-box">
                <div class="about-object-group">
                    <div class="obj-thunder thu-1"></div>
                    <div class="obj-thunder thu-2"></div>
                    <div class="obj-thunder thu-3"></div>
                    <div class="obj-Hcircle top-hcir"><span class="dottCir"></span></div>
                    <div class="obj-diagonal dg_left"></div>
                    <div class="obj-square squ-1"></div>
                    <div class="obj-square squ-2"></div>
                    <div class="obj-wave"></div>
                    <div class="obj-long-line"></div>
                    <div class="obj-diagonal dg_right"></div>
                    <div class="obj-quites qut-ani"></div>
                    <div class="obj-HcirLine"><span class="cir-line"></span></div>
                    <div class="obj-quites qut-small"></div>
                    <div class="obj-square squ-3"></div>
                    <div class="obj-square squ-4"></div>
                    <div class="obj-thunder thu-4"></div>
                    <div class="obj-thunder thu-5"></div>
                    <div class="obj-thunder thu-6"></div>
                    <div class="obj-Hcircle bot-hcir"><span class="dottCir"></span></div>
                </div>
                <div class="article-gold">
                    <div class="art-text-box">
                        <h3 class="art-text1">Design</h3>
                        <h3 class="art-text2">and</h3>
                        <h3 class="art-text3">Marketing</h3>
                        <span class="bgc-gray"></span>
                    </div>
                </div>
                <div class="article-vision">
                    <h4>Vision</h4>
                    <p>우리는 우리의 디자인과 기술을 통해 좀 더 나은 세상을 만들고자 합니다.</p>
                    <p>우리는 오직 더 나은 발전됨을 추구하며, 성공적인 온라인 비지니스를 <br/> 달성하기 위한 <span class="font-g">전략적 파트너</span>가 되고자합니다.</p>
                    <span class="dash-bottom line-w"></span>
                    <span class="dash-bottom line-g"></span>
                </div>
                <div class="article-principal">
                    <h4>Principal</h4>
                    <p>우리의 목표는 탁월하고 재능 있는 인력을 확보하여 <br/> 각자의 독창성을 이끌어 내는 것입니다. <br/>
                        편안한 분위기와 명확한 운영 프로세스가 이를 지원할 것이며, <br/><span class="font-g">개인과 조직의 목표가 다르지 않음을 실천</span>하고자 합니다.</p>
                    <p>지난 8년 동안 훌륭한 인력과 강한 팀워크를 확보 했으며 <br/> 지속적인 혁신을 위해 노력해 왔습니다. <br/>
                        현재 우리는 온라인 비지니스와 미디어, 특히 온라인커머스에 대한 <br/> 전문 지식과 다양한 경험을 가지고 있습니다.</p>
                    <p>앞으로도 어떤 도전이 오더라도 <br/><span class="font-g">오직 더 나음을 위해</span>창의적으로 생각하고 발전해 나갈 것입니다.</p>
                    <span class="dash-bottom line-g"></span>
                </div>
            </div>
            <div class="about-service-box">
                <span class="dash-bottom line-w"></span>
                <h4>Service</h4>
                <div class="service-contents">
                    <dl class="service-list-1">
                        <dt></dt>
                        <dd></dd>
                    </dl>
                    <span class="dash-ser-1"></span>
                    <dl class="service-list-2">
                        <dt></dt>
                        <dd></dd>
                    </dl>
                    <span class="dash-ser-2"></span>
                    <dl class="service-list-3">
                        <dt></dt>
                        <dd></dd>
                    </dl>
                    <span class="dash-ser-3"></span>
                    <dl class="service-list-4">
                        <dt></dt>
                        <dd></dd>
                    </dl>
                </div>
            </div>
            <div class="about-contact-box">
                <div class="contact-contents">
                    <div class="info">
                        <h5>CONTACT</h5>
                        <p>5TH FLOOR, 9-15, GANGNAM-DAERO 55-GIL,<br />SEOCHO-GU, SEOUL, REPUBLIC OF KOREA</p>
                        <p class='font-b'>TEL : 02.501.6172</p>
                        <p class='font-b'>FAX : 02.6499.1250</p>
                    </div>
                    <a href="#" class="map-load">MAP</a>
                    <div class="email">
                        <h5>WORK WITH US</h5>
                        <a href="mailto:Contact@santelglobal.com" class="link">Contact@santelglobal.com</a>
                    </div>
                </div>
            </div>
            <div class="about-work-box">
                <a href="">
                    <div class="load-box">
                        <p>Works</p>
                        <img src="#" alt="#">
                    </div>
                    <div class="active-box">
                        <p>Works</p>
                        <div class="dir-ani">
                            <span class="col-line"></span>
                            <span class="diag-1"></span>
                            <span class="diag-2"></span>
                        </div>
                    </div>
                </a>
            </div>
        `;

        return {
            htmlString,
            callback
        }
    },
    destroy(){

    }
}
