const callback = () => {
    console.log('callback');

    // Main Title Text load effect
    function mainTitleLoad(mainTop, subTop){
        var $aboutMainTitle = $('.about-title-box'),
            $mainTitle = $aboutMainTitle.children('h2'),
            $mainText = $aboutMainTitle.children('p');

        $mainTitle.animate({marginTop: mainTop, opacity: 1}, 500);
        $mainText.delay(400).animate({marginTop: subTop, opacity: 1}, 500);
    }

    function pcScrollingEffect(goldBoxH, blackBoxH){
        $(window).on('scroll',function(){

            var scrollT = $(window).scrollTop();

            var aboutMainH = $('.about-title-box').height(),
                scr01 = aboutMainH - 550,
                scr02 = aboutMainH - 50,
                scr03 = aboutMainH + 700;

            if(scrollT > scr01){

                var $goldBox = $('.article-gold');

                $goldBox.animate({height: goldBoxH}, 500, function(){

                    var $goldText = $('.art-text-box').find('h3');

                    $goldText.eq(0).animate({marginTop: 250, opacity: 1}, 300);
                    $goldText.eq(1).delay(200).animate({marginTop: 340, opacity: 1}, 300);
                    $goldText.eq(2).delay(400).animate({marginTop: 430, opacity: 1}, 300);

                    var $goldBoxT = $goldBox.offset().top;

                    $('.gold-deco').children('span').addClass('act_bgG');

                });
            }

            if(scrollT > scr02){

                var $blackBox = $('.article-vision');

                $blackBox.animate({height: blackBoxH}, 500, function(){

                    var $blackText = $blackBox.find('p');

                    $blackBox.find('h4').animate({paddingTop: 145, opacity: 1}, 300);

                    $blackText.eq(0).animate({paddingTop: 0, opacity: 1}, 300);
                    $blackText.eq(1).delay(200).animate({paddingTop: 0, opacity: 1}, 300, function(){

                        $('.vision-dash').addClass('act_vision')
                    });
                });
            }

            if(scrollT > scr03){

                var $whiteText = $('.article-principal').find('p');

                $('.article-principal').find('h4').animate({paddingTop: 50, opacity: 1}, 300);
                $whiteText.eq(0).delay(200).animate({paddingTop: 0, opacity: 1}, 300);
                $whiteText.eq(1).delay(400).animate({paddingTop: 0, opacity: 1}, 300);
                $whiteText.eq(2).delay(600).animate({paddingTop: 0, opacity: 1}, 300, function(){

                    $('.principal-dash').addClass('act_princ')
                });
            }
        });

        // Works Link Button effect
        var $workLink = $('.about-work-box').children('a');

        var $loadBox = $workLink.find('.load-box'),
            $activeBox = $workLink.find('.active-box'),
            $activeDir = $activeBox.find('.dir-box'),
            $actDirFloor = $activeDir.children('div');

            // $loadBox.hide();

        $workLink.on('mouseenter',function(){

            // 기존 loadbox 숨기기
            $loadBox.removeClass('load_show');
            $loadBox.addClass('load_hide');
            $loadBox.children('p').delay(200).hide();
            $loadBox.children('div').delay(200).hide();

            // activebox 보이기 - 애니메이션 구동
            $activeBox.find('p').delay(250).animate({marginBottom: 0}, 400);

            $activeDir.addClass('dir_move');

        });

        $workLink.on('mouseleave', function(){

            // 기존 loadbox 보이기
            $loadBox.removeClass('load_hide');
            $loadBox.addClass('load_show');
            $loadBox.children('p').show();
            $loadBox.children('div').show();


            // activebox 숨기기
            $activeBox.find('p').animate({marginBottom: -100}, 300, function(){

                $activeDir.removeClass('dir_move');
            });

        });

    }

    var winW = $(window).width();

    if(winW >= 1350){

        mainTitleLoad(-45, 60);
        pcScrollingEffect(832, 450);

    }else if( 1350 > winW && winW >= 950){

        mainTitleLoad(-40, 50);
        pcScrollingEffect(832, 450);

    }else if( 950 > winW && winW >= 800){

        mainTitleLoad(-35, 40);
        pcScrollingEffect(832, 450);

    }

    console.log(winW);



};

export default {
    render(){
        const htmlString = `
            <style>
             #header h1 a{color: #fff;}
            </style>
            <div class="about-title-box">
                <h2>About Us</h2>
                <p>We make successfull digital stories for WEB &amp; MOBILE</p>
            </div>
            <div class="about-intro-box">
                <div class="about-object-group">
                    <div class="obj-thunder thu-1"></div>
                    <div class="obj-thunder thu-2"></div>
                    <div class="obj-thunder thu-3"></div>
                    <div class="obj-Hcircle top-hcir">
                        <span class="cone"></span>
                        <span class="dash-cir"></span>
                    </div>
                    <div class="obj-diagonal dg_left"></div>
                    <div class="obj-square squbox-1">
                        <span class="squ-1"></span>
                    </div>
                    <div class="obj-square squbox-2">
                        <span class="squ-2"></span>
                    </div>
                    <div class="obj-diagonal dg_right"></div>
                    <div class="obj-long-line"></div>
                    <div class="obj-wave"></div>
                    <div class="obj-quites"></div>
                    <!-- <div class="obj-test">"</div> -->
                    <div class="obj-HcirLine"></div>
                    <div class="obj-square squbox-3">
                        <span class="squ-3"></span>
                    </div>
                    <div class="obj-square squbox-4">
                        <span class="squ-4"></span>
                    </div>
                    <div class="obj-thunder thu-4"></div>
                    <div class="obj-thunder thu-5"></div>
                    <div class="obj-thunder thu-6"></div>
                    <div class="obj-Hcircle bot-hcir">
                        <span class="cone"></span>
                        <span class="dash-cir"></span>
                    </div>
                </div>
                <div class="article-gold"></div>
                <div class="art-text-box">
                    <h3 class="art-text1">Design</h3>
                    <h3 class="art-text2">and</h3>
                    <h3 class="art-text3">Marketing</h3>
                </div>
                <div class="gold-deco">
                    <span></span>
                </div>
                <div class="article-vision">
                    <h4>Vision</h4>
                    <p>우리는 우리의 디자인과 기술을 통해 좀 더 나은 세상을 만들고자 합니다.</p>
                    <p>우리는 오직 더 나은 발전됨을 추구하며, 성공적인 온라인 비지니스를 <br/> 달성하기 위한 <span class="font-g">전략적 파트너</span>가 되고자합니다.</p>
                </div>
                <span class="vision-dash">
                    <span class="dash-bottom line-w"></span>
                    <span class="dash-bottom line-g"></span>
                </span>
                <div class="article-principal">
                    <span class="obj-quites"></span>
                    <h4>Principal</h4>
                    <p>우리의 목표는 탁월하고 재능 있는 인력을 확보하여 <br/> 각자의 독창성을 이끌어 내는 것입니다. <br/>
                        편안한 분위기와 명확한 운영 프로세스가 이를 지원할 것이며, <br/><span class="font-g">개인과 조직의 목표가 다르지 않음을 실천</span>하고자 합니다.</p>
                    <p>지난 8년 동안 훌륭한 인력과 강한 팀워크를 확보 했으며 <br/> 지속적인 혁신을 위해 노력해 왔습니다. <br/>
                        현재 우리는 온라인 비지니스와 미디어, 특히 온라인커머스에 대한 <br/> 전문 지식과 다양한 경험을 가지고 있습니다.</p>
                    <p>앞으로도 어떤 도전이 오더라도 <br/><span class="font-g">오직 더 나음을 위해</span>창의적으로 생각하고 발전해 나갈 것입니다.</p>
                </div>
                <span class="principal-dash">
                    <span class="dash-bottom line-g"></span>
                    <span class="dash-bottom line-w"></span>
                </span>
            </div>
            <div class="about-service-box">
                <h4>Service</h4>
                <div class="service-contents">
                    <dl class="service-list-1">
                        <dt>BRANDING</dt>
                        <dd>Corporate image Art direction</dd>
                        <dd>Graphic design</dd>
                        <dd>Interactive design</dd>
                        <dd>Web and mobile</dd>
                        <dd>Web app</dd>
                        <dd>Motion design</dd>
                    </dl>
                    <span class="dash-service ser-1"></span>
                    <dl class="service-list-2">
                        <dt>STRATEGY</dt>
                        <dd>Brand strategy</dd>
                        <dd>Interactive strategy</dd>
                        <dd>Consultant services and project planning</dd>
                        <dd>Data analysis</dd>
                    </dl>
                    <span class="dash-service ser-2"></span>
                    <dl class="service-list-3">
                        <dt>E-COMMERCE</dt>
                        <dd>Consulting</dd>
                        <dd>Shopping mall Development</dd>
                        <dd>Design & marketing</dd>
                        <dd>System maintenance CRM</dd>
                        <dd>Market analysis</dd>
                    </dl>
                    <span class="dash-service ser-3"></span>
                    <dl class="service-list-4">
                        <dt>MARKTING & COMMUNICATIONS</dt>
                        <dd>Advertising(print, interactive, SNS)</dd>
                        <dd>Integrated campaigns</dd>
                        <dd>Promotional campaigns</dd>
                        <dd>Community management</dd>
                        <dd>Corporate videos</dd>
                    </dl>
                </div>
            </div>
            <div class="about-contact-box">
                <div class="contact-info">

                    <h5>CONTACT</h5>
                    <p>5TH FLOOR, 9-15, GANGNAM-DAERO 55-GIL,<br />SEOCHO-GU, SEOUL, REPUBLIC OF KOREA</p>
                    <ul>
                        <li><p>TEL : 02.501.6172</p></li>
                        <li><p>FAX : 02.6499.1250</li>
                    </ul>

                    <a href="https://www.google.co.kr/maps/place/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%84%9C%EC%B4%88%EA%B5%AC+%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C55%EA%B8%B8+9-15/@37.4947021,127.0257289,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca15af2cf9b17:0xd1ccf1ba8e2f15a0!8m2!3d37.4947021!4d127.0279176?dcr=0" target="_blank"  class="map-load">MAP</a>

                    <h5 class="none_mb">WORK WITH US</h5>
                    <a href="mailto:Contact@santelglobal.com" class="email-load">Contact@santelglobal.com</a>

                </div>
            </div>
            <div class="about-work-box">
                <a href="/#/works">
                    <div class="load-box">
                        <p>Works</p>
                        <!--
                        <div class="dir-box">
                            <span class="diag-1"></span>
                            <span class="col-line"></span>
                            <span class="diag-2"></span>
                        </div>
                         -->
                    </div>
                    <div class="active-box">
                        <div class="text-over">
                            <p>Works</p>
                        </div>
                        <div class="dir-box">
                            <div>
                                <span class="diag-1"></span>
                            </div>
                            <div>
                                <span class="col-1"></span><span class="col-2"></span>
                            </div>
                            <div>
                                <span class="diag-2"></span>
                            </div>
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
