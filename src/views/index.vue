<style scoped>
	/*搜索*/
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
	.bar .icon-left:before {
		color: #707070;
	}
	
	.bar .pull-middle {
		width: 72%;
		height: 1.45rem;
		margin: 0 auto;
		margin-top: 0.4rem;
		background: white;
		border-radius: 4px;
		font-size: 0.7rem;
		line-height: 1.4rem;
		text-indent: 15px;
		color: #aabbcc;
		position: relative;
		padding-left: 0.8rem;
	}
	
	.bar .pull-middle div {
		width: 0.82rem;
		height: 0.82rem;
		background: url(../../../resources/image/scSousuo.png);
		background-size: cover;
		position: absolute;
		top: 0.3rem;
		left: 10px;
	}
	
	.bar .pull-right {
		width: 1.1rem;
		height: 1.1rem;
		background: url(../../../resources/image/wdcg.png);
		background-size: cover;
		position: absolute;
		top: 0.5rem;
		right: 4%;
	}
	
	.content-cy {
		width: 100%;
		background: white;
	}
	
	.content-cy .cy-bottom {
		padding: 0;
		margin: 0;
		width: 100%;
	}
	
	.content-cy .cy-bottom li {
		padding: 0;
		margin: 0;
		list-style: none;
		width: 25%;
		height: 4.5rem;
		float: left;
	}
	
	.content-cy .cy-bottom li div {
		width: 2rem;
		height: 2rem;
		background-size: cover;
		margin: 0 auto;
		position: relative;
		top: 0.5rem;
	}
	
	.content-cy .cy-bottom li div img {
		width: 2rem;
		height: 2rem;
	}
	
	.content-cy .cy-bottom li p {
		margin: 0;
		text-align: center;
		height: 0.65rem;
		line-height: 0.65rem;
		font-size: 0.65rem;
		color: #5d5c64;
		position: relative;
		top: 1rem;
	}
	
	.content-xp,
	.content-rm {
		width: 100%;
		background: white;
		margin-top: 0.5rem;
	}
	
	.content-xp .xp-top,
	.content-rm .rm-top {
		width: 100%;
		height: 1.5rem;
		line-height: 1.5rem;
		border-bottom: 1px solid #e6e6e6;
		position: relative;
	}
	
	.content-xp .xp-top .xp-top-1 {
		font-size: 0.7rem;
		color: #ff5c5c;
		font-weight: bold;
		display: inline-block;
		margin-left: 15px;
	}
	
	.content-rm .rm-top .rm-top-1 {
		font-size: 0.7rem;
		color: #f3b359;
		font-weight: bold;
		position: absolute;
		left: 15px;
	}
	
	.content-xp .xp-top .xp-top-2 {
		width: 0.9rem;
		height: 0.9rem;
		display: inline-block;
		vertical-align: middle;
	}
	
	.content-xp .xp-top .xp-top-2 img {
		width: 0.9rem;
		height: 0.9rem;
	}
	
	.content-rm .rm-top .rm-top-2 {
		width: 0.9rem;
		height: 0.9rem;
		position: absolute;
		left: 4rem;
		top: 0.3rem;
	}
	
	.content-rm .rm-top .rm-top-2 img {
		width: 0.9rem;
		height: 0.9rem;
	}
	
	.content-xp .xp-top .xp-top-3,
	.content-rm .rm-top .rm-top-3 {
		width: 1rem;
		height: 1rem;
		background: url(../../../resources/image/scGengduo.svg);
		background-size: cover;
		position: absolute;
		right: 15px;
		top: 0.25rem;
	}

	.xp-top-4{
		position: absolute;right: 35px;font-size: 0.75rem;color:#333;
	}
	
	.content-xp .xp-bottom,
	.content-rm .rm-bottom {
		width: 100%;
		margin: 0;
		padding: 0;
	}
	
	.content-xp .xp-bottom li,
	.content-rm .rm-bottom li {
		height: 6.25rem;
		list-style: none;
		border-bottom: 1px solid #e6e6e6;
		position: relative;
	}
	
	.content-xp .xp-bottom .xp-bottom-left,
	.content-rm .rm-bottom .rm-bottom-left {
		width: 29%;
		height: 6.25rem;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.content-xp .xp-bottom .xp-bottom-left .bottom-left-number,
	.content-rm .rm-bottom .rm-bottom-left .bottom-left-number {
		height: 1.5rem;
		position: absolute;
		left: 15px;
		top: 2rem;
	}
	
	.content-xp .xp-bottom .xp-bottom-left .bottom-left-number-1,
	.content-rm .rm-bottom .rm-bottom-left .bottom-left-number-1 {
		height: 1.5rem;
		line-height: 1.5rem;
		font-size: 1.5rem;
		color: #f46055;
	}
	
	.content-xp .xp-bottom .xp-bottom-left .bottom-left-number-2,
	.content-rm .rm-bottom .rm-bottom-left .bottom-left-number-2 {
		height: 1.5rem;
		font-size: 0.9rem;
		color: #f46055;
	}
	
	.content-xp .xp-bottom .xp-bottom-left .bottom-left-number-3,
	.content-rm .rm-bottom .rm-bottom-left .bottom-left-number-3 {
		height: 1.5rem;
		font-size: 0.7rem;
		color: #f46055;
	}
	
	.content-xp .xp-bottom .xp-bottom-left .bottom-left-word,
	.content-rm .rm-bottom .rm-bottom-left .bottom-left-word {
		height: 0.6rem;
		line-height: 0.6rem;
		font-size: 0.6rem;
		color: #c4c4c4;
		position: absolute;
		top: 4rem;
		left: 15px;
	}
	
	.content-xp .xp-bottom .xp-bottom-middle,
	.content-rm .rm-bottom .rm-bottom-middle {
		width: 45%;
		height: 6.25rem;
		position: absolute;
		left: 34.6%;
		top: 0;
	}

	.xp-bottom-middle.hbjj{
		width: 60%!important;
	}
	.xp-bottom-middle.hbjj p:nth-of-type(1){
		color:#7e672e!important;
	}
	.xp-bottom-middle.hbjj p:nth-of-type(2){
		left: 8.1rem!important;
		top: 1.1rem!important;
		color:#7e672e!important;
	}
	.gold {
		color:#7e672e!important;
	}
	.buyBtn{
		border:1px solid #7e672e;
		font-size: 20px;
		color: #fff;
		background: linear-gradient(#db0a16, #7d0406);
		height: 40px;
		margin-top:10px;
		display: block;
		text-align: center;
		line-height: 40px;
		width:8rem;
	}
	.hbjj .item{
		display: inline-block;
		color:#7e672e!important;
		border:1px solid #7e672e;
		padding:2px;
	}
	.hbjj .item3{
		position: absolute;
		top:2.3rem;
		font-size: 0.6rem;
		line-height: 0.6rem;

	}
	
	.content-xp .xp-bottom .xp-bottom-middle p:nth-of-type(1),
	.content-rm .rm-bottom .rm-bottom-middle p:nth-of-type(1) {
		width: 8rem;
		height: 0.8rem;
		line-height: 0.8rem;
		font-size: 0.8rem;
		color: #383838;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		position: absolute;
		left: 0;
		top: 1rem;
	}
	
	.content-xp .xp-bottom .xp-bottom-middle p:nth-of-type(2),
	.content-rm .rm-bottom .rm-bottom-middle p:nth-of-type(2) {
		/*width: 7rem;*/
		height: 0.6rem;
		line-height: 0.6rem;
		font-size: 0.6rem;
		color: #5d5c64;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		position: absolute;
		left: 0;
		top: 2.7rem;
	}
	
	.content-xp .xp-bottom .xp-bottom-middle p:nth-of-type(3),
	.content-rm .rm-bottom .rm-bottom-middle p:nth-of-type(3) {
		width: 50%;
		height: 1rem;
		line-height: 1rem;
		font-size: 0.6rem;
		color: white;
		border-radius: 2px;
		text-align: center;
		background: #fd9e82;
		position: absolute;
		left: 0;
		top: 4rem;
	}
	.content-xp .xp-bottom .xp-bottom-middle p:nth-of-type(5),
	.content-rm .rm-bottom .rm-bottom-middle p:nth-of-type(5){
		width: 30%;
		height: 1rem;
		line-height: 1rem;
		font-size: 0.6rem;
		color: #a3a0d4;
		border-radius: 2px;
		text-align: center;
		position: absolute;
		left: 97%;
		top: 4rem;
		border: 1px solid #a3a0d4;
	}
	/*低风险*/
	
	.risk_0 {
		color: #69cd83;
		border: 1px solid #69cd83;
		width: 40%;
		height: 1rem;
		line-height: 1rem;
		font-size: 0.6rem;
		border-radius: 2px;
		text-align: center;
		position: absolute;
		left: 53%;
		top: 4rem;
	}
	/*中低风险*/
	
	.risk_1 {
		color: #a9d413;
		border: 1px solid #a9d413;
		width: 40%;
		height: 1rem;
		line-height: 1rem;
		font-size: 0.6rem;
		border-radius: 2px;
		text-align: center;
		position: absolute;
		left: 53%;
		top: 4rem;
	}
	/*中风险*/
	
	.risk_2 {
		color: #f4cd55;
		border: 1px solid #f4cd55;
		width: 40%;
		height: 1rem;
		line-height: 1rem;
		font-size: 0.6rem;
		border-radius: 2px;
		text-align: center;
		position: absolute;
		left: 53%;
		top: 4rem;
	}
	/*中高风险*/
	
	.risk_3 {
		color: #ff8737;
		border: 1px solid #ff8737;
		width: 40%;
		height: 1rem;
		line-height: 1rem;
		font-size: 0.6rem;
		border-radius: 2px;
		text-align: center;
		position: absolute;
		left: 53%;
		top: 4rem;
	}
	/*高风险*/
	
	.risk_4 {
		color: #f46055;
		border: 1px solid #f46055;
		width: 40%;
		height: 1rem;
		line-height: 1rem;
		font-size: 0.6rem;
		border-radius: 2px;
		text-align: center;
		position: absolute;
		left: 53%;
		top: 4rem;
	}
	
	/* .my-swipe {
		height: 6.4rem;
		width: 100%;
	} */
	  .my-swipe {
        height: 6.4rem;
        color: #fff;
        font-size: 30px;
        text-align: center;
        position: relative;
    }
    .swipe-item{
        position: absolute;
    }
	.no-login-info{
		font-size: 0.6rem;
		color: #A3A0D4;
		position: absolute;
	    left: 0;
	    top: 4rem;
	    border-radius: 2px;
		text-align: center;
		/*background: #fd9e82;*/
	}
	.relative{
		position: relative;
	}
    .recommended-pro{
		height: auto!important;
		margin-bottom: 0.5rem;
		background: #fff;
	}
	.recommended-pro .flag{
		position: absolute;
		left: 0;
		top: 0;
		background: #f78e12;
		width: 80px;
		height: 30px;
		color:#FFF;
		line-height: 30px;
		text-align: center;
		font-size: 0.6rem;
	}
	.recommended-pro .pro-desc{
		padding-top: 40px;
		font-size: 1.1rem;
		color: #000000;
	}
	.recommended-pro .pro-syl{
		font-size: 1.5rem;
		color:#f78e12;
		font-weight: bold;
	}
	.recommended-pro .pro-syl-desc{
		color: #726d6d;
		font-size: 0.8rem
	}
	.recommended-pro .tags{
		margin-top: 15px;
		font-size: 0.8rem;
		padding-left: 0;
	}
	.recommended-pro .tags li{
		display: inline-block;
		border-radius: 2px;
		border: solid 1px #f78e12;
		color:#f78e12;
		padding: 2px 3px;
		margin-right: 5px;
	    height: auto!important;
	}
	.recommended-pro .pro-name {
		font-size: 16px;
		margin-top: 20px;
		color:#000;
	}
	.recommended-pro .btn-wrap{
		margin-bottom: 20px;
	}
	.recommended-pro .btn-wrap a{
		background-image: linear-gradient(270deg, #f9a311 0%, #f9880c 100%), linear-gradient( #464b55, #464b55);
		width: 149px;
		height: 40px;
		display: inline-block;
		box-shadow: 0px 7px 10px 0px
		rgba(255, 206, 149, 0.61);
		border-radius: 20px;
		color:#fff;
		line-height: 40px;
		text-align: center;
		margin-top: 10px;
		font-size: 0.9rem;
	}
	.bg-white{
		background: #fff!important;
	}
	.bg-grey{
		background: #efeff4!important;
	}
	.gzb-pro{
		height: auto!important;
		/* border:1px solid #d9d9d9; */
		background: #FFF;
		color: #000;
		padding-bottom: 10px;
		margin-bottom: 10px;
	}
	.gzb-pro .desc1{
		font-size: 20px;
		margin: 40px 0 10px 0;
	}
	.gzb-pro .desc2{
		font-size: 14px;
		color: #726d6d;
	}
	.gzb-pro .hr{
		margin: 15px 40px;
		border-color:#f78e12;
		border-top: none;
	}
	.gzb-pro .pro-name{
		font-size: 1rem;
	}
	.gzb-pro .pro-name a{
		color: #000;
	}
	.gzb-pro .pro-syl{
		font-size: 1.5rem;
		color:#f78e12;
		font-weight: bold;
	}
	.gzb-pro .notify{
		font-size: 0.6rem;
		color: #726d6d;
	}
</style>
<template>
	<div class="page page-current">
		<header class="bar bar-nav">
			<a class="icon icon-left   pull-left" @click="goback"></a>
			<div class="pull-middle" v-link="{name:'search'}">请输入产品代码、名称
				<div></div>
			</div>
			<div class="icon  pull-right " v-link="{name:'userIndex'}"></div>
		</header>
		<div class="content" data-type='native'>
			<div class="content-block">
        <swipe class="my-swipe">
          <swipe-item class="slide1">1</swipe-item>
          <swipe-item class="slide2">2</swipe-item>
          <swipe-item class="slide3">3</swipe-item>
        </swipe>
				<!-- <swipe class="my-swipe" :speed="900" :show-indicators="true" v-if="bannerimgs.length > 0">
					<swipe-item class="slide{{img.ORDER_BY}}" @click="swipeItemClick(img.NAME.indexOf('PICCAPP')>-1?-1:img.ORDER_BY,img.LINK)"  v-for = "img in bannerimgs" :key="img.id">
						<img style="height: 6.4rem;width: 100%;" v-bind:src="img && img.ATTR1_INFO ? img.ATTR1_INFO.split('|')[0] : ''" />
					</swipe-item>
				</swipe> -->
				<div class="content-cy">
					<ul class="cy-bottom">
						<li v-for="menu in menus" @click="topage(menu ? menu.MENU_LINK : '',menu.MENU_NAME)">
							<div>
								<img :src="menu.MENU_ICO" v-if="menu.MENU_ICO != ''"/>
							</div>
							<p>{{menu.MENU_NAME}}</p>
						</li>
						<div style="clear: both"></div>
					</ul>
				</div>
				<div v-for ="areapro in areapros">
					<div class="content-xp" :class="{'bg-grey':areapro.name=='为您推荐'}">
						<div class="xp-top" :class="{'bg-white':areapro.name=='为您推荐'}">
							<div class="xp-top-1">{{areapro.name=='定投宝'?'定投宝 百里挑一':areapro.name}}</div>
							<div class="xp-top-2" v-if="areapro.imgurl != ''">
								<img :src="areapro.imgurl" >
							</div>
							<span class="xp-top-4" v-link="{name:areapro.menulink}" v-if="areapro.name=='定投宝'&&areapro.menulink !=''&&areapro.menulink!='unlink'">小计划 大变化</span>
							<div class="xp-top-3" v-link="{name:areapro.menulink}" v-if="areapro.menulink !=''&&areapro.menulink!='unlink'&&areapro.name!='估值宝'&&areapro.name!='为您推荐'"></div>
						</div>
						<ul v-for="newpro in areapro.pros" class="xp-bottom">
							<!--<li v-if="!islogin">-->
							<li  @click="toProductDetail(newpro)" v-if="areapro.name!='打折基金专区'&&areapro.name!='货币基金专区'&&areapro.name!='定投宝'&&areapro.name!='为您推荐'&&areapro.name!='估值宝'">
								<rxcpprds :product="newpro" :ptype="1" :isshow="!islogin&&newpro.PRO_TYPE != 5 && newpro.PRO_TYPE != 42"></rxcpprds>
								<div class="xp-bottom-middle" v-if="!islogin">
									<p>{{newpro.SHT_NAME}}</p>
									<p v-if="newpro.PRO_TYPE== 6">{{newpro.INST_ID}}</p>
									<!--<p v-if="newpro.PRO_TYPE!= 6">{{newpro.PRO_CODE}}</p>-->
									<p v-if="newpro.INVEST_HORI!=null && (newpro.PRO_TYPE == 5 |||| newpro.PRO_TYPE == 42)">期限：{{newpro.INVEST_HORI}}</p>
									<div class="no-login-info" v-if="newpro.PRO_TYPE != 5 &&  newpro.PRO_TYPE != 42">
										更多信息仅限合格投资者查看
									</div>
									<p v-if="newpro.PRO_TYPE == 5 || newpro.PRO_TYPE == 42">{{newpro.INVE_START}}元起购</p>
									<p v-if="newpro.PRO_TYPE == 5 || newpro.PRO_TYPE == 42" class="{{newpro.RISK_LVL == 0 ? 'risk_0' : newpro.RISK_LVL == 1 ? 'risk_1' : newpro.RISK_LVL == 2 ? 'risk_2' : newpro.RISK_LVL == 3 ? 'risk_3' : newpro.RISK_LVL == 4 ? 'risk_4' : ''}}">{{newpro.RISK_LVL_DESC}}</p>

								</div>
								<div class="xp-bottom-middle" v-if="islogin">
									<p>{{newpro.SHT_NAME}}</p>

									<!--<p v-if="newpro.PRO_TYPE== 6">{{newpro.INST_ID}}</p>-->
									<!--<p v-if="newpro.PRO_TYPE!= 6">{{newpro.PRO_CODE}}</p>-->
									<p >期限：{{newpro.INVEST_HORI?newpro.INVEST_HORI:'--'}}</p>
									<p>{{newpro.INVE_START}}元起购</p>
									<p class="{{newpro.RISK_LVL == 0 ? 'risk_0' : newpro.RISK_LVL == 1 ? 'risk_1' : newpro.RISK_LVL == 2 ? 'risk_2' : newpro.RISK_LVL == 3 ? 'risk_3' : newpro.RISK_LVL == 4 ? 'risk_4' : ''}}">{{newpro.RISK_LVL_DESC}}</p>

								</div>
								<div class="xp-bottom-right"></div>
							</li>
							<li  @click="toProductDetail(newpro)" v-if="areapro.name=='打折基金专区'" >
								<rxcpprds :product="newpro" :ptype="1" :isshow="!islogin"></rxcpprds>
								<div class="xp-bottom-middle" v-if="!islogin">
									<p>{{newpro.SHT_NAME}}</p>
									<p>{{newpro.INST_ID}}</p>
									<!--<p v-if="newpro.PRO_TYPE!= 6">{{newpro.PRO_CODE}}</p>-->

									<div class="no-login-info" >
										更多信息仅限合格投资者查看
									</div>

								</div>
								<div class="xp-bottom-middle" v-if="islogin">
									<p>{{newpro.SHT_NAME}}</p>

									<!--<p v-if="newpro.PRO_TYPE== 6">{{newpro.INST_ID}}</p>-->
									<!--<p v-if="newpro.PRO_TYPE!= 6">{{newpro.PRO_CODE}}</p>-->
									<p >{{newpro.LVL2_TYPE_DESC?newpro.LVL2_TYPE_DESC:'--'}}</p>
									<p>{{newpro.INVE_START}}元起购</p>

									<p class="{{newpro.RISK_LVL == 0 ? 'risk_0' : newpro.RISK_LVL == 1 ? 'risk_1' : newpro.RISK_LVL == 2 ? 'risk_2' : newpro.RISK_LVL == 3 ? 'risk_3' : newpro.RISK_LVL == 4 ? 'risk_4' : ''}}">{{newpro.RISK_LVL_DESC}}</p>
									<p v-if="newpro.DISCOUNT_RATE">{{newpro.DISCOUNT_RATE}}</p>
								</div>
								<div class="xp-bottom-right"></div>
							</li>
							<li  @click="toProductDetail(newpro)" v-if="areapro.name=='货币基金专区'" class="relative" >
								<rxcpprds :product="newpro" :ptype="1" :isshow="!islogin" :type="'hbjj'"></rxcpprds>
								<div class="xp-bottom-middle" v-if="!islogin">
									<p>{{newpro.SHT_NAME}}</p>
									<p>{{newpro.INST_ID}}</p>
									<div class="no-login-info" >
										更多信息仅限合格投资者查看
									</div>
								</div>
								<div class="xp-bottom-middle hbjj gold" v-if="islogin">
									<p>{{newpro.SHT_NAME}}</p>
									<p>[{{newpro.PRO_CODE}}]</p>
									<div class="item3">
										<div class="item">货币型</div>
										<div class="item">{{newpro.INVE_START}}元起购</div>
										<div class="item">{{newpro.RISK_LVL_DESC}}</div>
										<a class="buyBtn">
											立即购买
										</a>
									</div>

								</div>
								<div class="xp-bottom-right"></div>
							</li>
							<li  @click="toProductDetail(newpro)" v-if="areapro.name=='定投宝'" class="" >
								<rxcpprds :product="newpro" :ptype="1" :isshow="!islogin" :type="'hbjj'"></rxcpprds>
								<div class="xp-bottom-middle" v-if="!islogin">
									<p>{{newpro.SHT_NAME}}</p>
									<p>{{newpro.INST_ID}}</p>
									<div class="no-login-info" >
										更多信息仅限合格投资者查看
									</div>
								</div>
								<div class="xp-bottom-middle hbjj gold" v-if="islogin">
									<p>{{newpro.SHT_NAME}}</p>
									<p>[{{newpro.PRO_CODE}}]</p>
									<div class="item3">
										<div class="item">{{newpro.FUND_PRO_TYPE_DESC?newpro.FUND_PRO_TYPE_DESC:'--'}}</div>
										<div class="item">{{newpro.INVE_START}}元起购</div>
										<div class="item">{{newpro.RISK_LVL_DESC}}</div>
										<div class="item" v-if="newpro.DISCOUNT_RATE">{{newpro.DISCOUNT_RATE?newpro.DISCOUNT_RATE:'--'}}</div>
										<a class="buyBtn">
											立即定投
										</a>
									</div>

								</div>
								<div class="xp-bottom-right"></div>
							</li>
							<li v-if="areapro.name=='为您推荐'" class="recommended-pro relative" @click="toProductDetail(newpro)" >
								<div class="flag">{{newpro.PRO_DESC&&newpro.PRO_DESC[1]?newpro.PRO_DESC[1]:'--'}}</div>
								<div class="text-center" >
									<div class="pro-desc">
										{{newpro.PRO_DESC&&newpro.PRO_DESC[0]?newpro.PRO_DESC[0]:'--'}}
									</div>
									<div class="pro-syl">
										{{newpro.syl}}%
									</div>
									<div class="pro-syl-desc">
										{{newpro.syl_desc}}
									</div>
									<ul class="tags">
										<li >{{newpro.FUND_PRO_TYPE_DESC ? newpro.FUND_PRO_TYPE_DESC : '--'}}</li>
										<li > {{newpro.RISK_LVL_DESC ? newpro.RISK_LVL_DESC : '--'}}</li>
										<li >{{newpro.INVE_START ? (newpro.INVE_START | getmoneystr ) : '--'}}元</li>
									</ul>
									<div class="pro-name">
										<span class="text-ellipsis hot-rxcp">{{newpro.SHT_NAME}}</span>
									</div>
									<div class="btn-wrap">
										<a v-if="checkIfCanBuy(newpro)" >立即购买</a>
										<a v-if="!checkIfCanBuy(newpro)" >了解详情</a>
									</div>
								</div>

								<div class="xp-bottom-right"></div>
							</li>
							<li v-if="areapro.name=='估值宝'" class="gzb-pro relative" >
								<div class="text-center">
									<div class="desc1">
										{{newpro.PRO_DESC[0]}}
									</div>
									<div class="desc2">
										{{newpro.PRO_DESC[1]?newpro.PRO_DESC[1]:'--'}}
									</div>
									<hr class="hr"/>

									<div class="pro-name hot-hover">
										<a @click="toGzb()" class="text-ellipsis hot-rxcp">{{newpro.SHT_NAME}}</a>
									</div>
									<div class="pro-syl">
										%
									</div>
									<div class="notify">
										投资需谨慎
									</div>
								</div>

								<div class="xp-bottom-right"></div>
							</li>
						</ul>
						<div v-if="areapro.pros.length==0">
							<div style="text-align: center">正在加载...</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import rxcpprds from '../../components/rxcpprds.vue'
	import Slider from '../../components/Slider.vue'
	import kfpsService from '../../service/kfpsService'
	// import { Swipe, SwipeItem } from 'vue-swipe'
	// import Swipe  from '../../../node_modules/vue-swipe/src/swipe.vue'
	// import SwipeItem from '../../../node_modules/vue-swipe/src/swipe-item.vue'
    import * as type from '../../vuex/mutation-types'
    import config from '../../config'
	export default {
		data() {
				return {
					newpros: [], //新品
					tjpros: [], //推荐
					menus: [], //菜单
					areapros: [], //专区
					bannerimgs:[], //banner图片
					tourl:'',
					islogin : true
				}
			},
			methods: {
				init() { //初始化组件数据
                    // this.$store.dispatch(type.SET_ERROR, true, 'xxx')
					if(localStorage.getItem("USER_INFO")){
						sessionStorage.setItem("USER_INFO",localStorage.getItem("USER_INFO"))
					}
				},
                toGzb() {
                    this.$route.router.go({
                        name: config.routerName.VALUATIONTREAURE
                    })
				},
				toProductDetail(newpro){
					// console.log(newpro)
					let self = this
					if(!self.islogin && (newpro.PRO_TYPE !=5 && newpro.PRO_TYPE !=42)){
						$.modal({
					      title:  '',
					      text: "请先登陆",
					      buttons: [
					        {
					          text: '确定',
					          onClick: function() {
					          	self.$route.router.go({
			                        name: "login"
			                    })
//					           self.goDetail()
					          }
					        }
					      ]
					    })
//						$.alert("请先登陆")
						return
					}
                    sessionStorage.setItem('return_url',config.routerName.HOME)
					self.$route.router.go({
                        name: newpro.PRO_CODE == '000216' ? 'hiddleTreasure' : newpro.PRO_TYPE== 6 ? 'gmdetail': newpro.PRO_TYPE== 5 ? 'gsdetail': newpro.PRO_TYPE== 42 ? 'tgdetail' : 'zgdetail',  params: {pid:newpro.PRO_ID},
                        query: {
                            canback:1
                        }
                    })
				}
				,
				topage(obj, name) {
					let self = this
					if(name == "PICC商城") {
						self.swipeItemClick(-1,self.tourl)
						return
					}
					//临时需求  写死资管
					// if(name == '资管产品'){
					// 	$.alert("根据监管规定，资管产品只向特定对象销售，如有需要，请联系您的客户经理")
					// 	return;
					// }
					//暂时屏蔽投顾产品
/*					if(name == '投顾产品'){
					    $.alert("敬请期待")
						return;
					}*/
					if(obj == "" || obj == "unlink") {
						$.alert("敬请期待")
						return
					}
					if(!self.islogin && (name != '银行理财' && name != '投顾产品')){
						$.modal({
					      title:  '',
					      text: "请先登陆",
					      buttons: [
					        {
					          text: '确定',
					          onClick: function() {
					          	self.$route.router.go({
			                        name: "login"
			                    })
//					           self.goDetail()
					          }
					        }
					      ]
					    })
//						$.alert("请先登陆")
						return
					}
					self.$route.router.go({
						name: obj
					})
				},
				getareadatas() {
					let self = this
//					console.log("菜单加载")
					kfpsService.getMenus({
							MENU_TYPE: "2",
							MENU_STA: "1"
						}) //获取新品
						.done(function(ansData, ansHead, answsers) {
							if(ansHead.MSG_CODE == 0) {
								for(var i = 0; i < ansData[0].length; i++) {
									var data = {
											name: '',
											imgurl: '',
											menulink:'',
											pros: []
										}
										data.menulink = ansData[0][i].MENU_LINK
										data.name = ansData[0][i].MENU_NAME
										data.imgurl = ansData[0][i].MENU_ICO
										self.areapros.push(data)
									if(ansData[0][i].MENU_NAME == "新品专区") {
										kfpsService.getxpzqPrds({

											}) //获取新品
											.done(function(ansd, ansH, answ) {
												//$.alert(1)
												if(ansH.MSG_CODE == 0) {
													//self.newpros = ansData[0]
													//console.log(JSON.stringify(ansd[0]))
													if(ansd[0].length > 0) {
														$.each(ansd[0], function(index, item) {
															if(item.PRO_TYPE == 6) {
																//查询公墓
																kfpsService.getPrdDetail({
																		pro_id: item.PRO_ID
																	})
																	.done(function(ansdata, anshead, answer) {
																		if(anshead.MSG_CODE != 0) {
																			console.log(anshead.MSG_TEXT)
																		} else {
																			for(var k=0;k<self.areapros.length;k++){
																				if(self.areapros[k].name =="新品专区"){
																					self.areapros[k].pros.push(ansdata[0][0])
																				}
																			}
																		}
																	})
																	.fail(function() {
																		console.log("网络异常")
																	})
															}else {
																for(var k=0;k<self.areapros.length;k++){
																	if(self.areapros[k].name =="新品专区"){
																		self.areapros[k].pros.push(item)
																	}
																}
															}
														});
													}
													//console.log("新品："+JSON.stringify(ansData[0]))
												} else if(ansH.MSG_CODE == -2) {
                                                    self.$store.dispatch(type.SET_SESSION_TIMEOUT, true)
												} else {
                                                    self.$store.dispatch(type.SET_ERROR, true, ansH.MSG_TEXT)
												}
											})
											.fail(function() {
                                                self.$store.dispatch(type.SET_ERROR, true, '请求异常')
											})
									}
									else if(ansData[0][i].MENU_NAME == "热销产品") {
										
										//热门产品专区
										kfpsService.getrxcpPrds({
                                            ret_rows:3
											}) //获取热销
											.done(function(ansD, ansH, answ) {
												//$.alert(1)
												if(ansH.MSG_CODE == 0) {
													//self.tjpros = ansData[0]
													//								console.log("热门产品："+JSON.stringify(ansData[0]))
													if(ansD[0].length > 0) {
														$.each(ansD[0], function(index, item) {
															if(item.PRO_TYPE == 6) {
																//查询公募
																kfpsService.getPrdDetail({
																		pro_id: item.PRO_ID
																	})
																	.done(function(ansdata, anshead, answer) {
																		if(anshead.MSG_CODE != 0) {
																			console.log(anshead.MSG_TEXT)
																		} else {
																			for(var k=0;k<self.areapros.length;k++){
																				if(self.areapros[k].name =="热销产品"){
																					self.areapros[k].pros.push(ansdata[0][0])
																				}
																			}
																		}
																	})
																	.fail(function() {
																		console.log("网络异常")
																	})
															} else {
																for(var k=0;k<self.areapros.length;k++){
																	if(self.areapros[k].name =="热销产品"){
																		self.areapros[k].pros.push(item)
																	}
																}
															}
														});
													}
												} else if(ansH.MSG_CODE == -2) {
                                                    self.$store.dispatch(type.SET_SESSION_TIMEOUT, true)
												} else {
                                                    self.$store.dispatch(type.SET_ERROR, true, ansH.MSG_TEXT)
												}
											})
											.fail(function() {
                                                self.$store.dispatch(type.SET_ERROR, true, '请求异常')
											})
									}
                                    else if(ansData[0][i].MENU_NAME == "打折基金专区") {
                                        //打折基金专区专区
                                        kfpsService.getPrds({
                                            pref_type: "8",//基金打折专区
                                            ret_rows:'3'
                                        }) //获取热销
                                            .done(function(ansD, ansH, answ) {
                                                //$.alert(1)
                                                if(ansH.MSG_CODE == 0) {
                                                    for(var k=0;k<self.areapros.length;k++){
                                                        if(self.areapros[k].name =="打折基金专区"){
                                                            self.areapros[k].pros = ansD[0]
                                                        }
                                                    }
                                                } else if(ansH.MSG_CODE == -2) {
                                                    self.$store.dispatch(type.SET_SESSION_TIMEOUT, true)
                                                } else {
                                                    self.$store.dispatch(type.SET_ERROR, true, ansH.MSG_TEXT)
                                                }
                                            })
                                            .fail(function() {
                                                self.$store.dispatch(type.SET_ERROR, true, '请求异常')
                                            })
                                    }else if(ansData[0][i].MENU_NAME == "货币基金专区") {
                                        //打折基金专区专区
                                        kfpsService.getPrds({
                                            pref_type: "9",//
                                            ret_rows:'3'
                                        }) //获取热销
                                            .done(function(ansD, ansH, answ) {
                                                //$.alert(1)
                                                if(ansH.MSG_CODE == 0) {
                                                    for(var k=0;k<self.areapros.length;k++){
                                                        if(self.areapros[k].name =="货币基金专区"){
                                                            self.areapros[k].pros = ansD[0]
                                                        }
                                                    }
                                                } else if(ansH.MSG_CODE == -2) {
                                                    self.$store.dispatch(type.SET_SESSION_TIMEOUT, true)
                                                } else {
                                                    self.$store.dispatch(type.SET_ERROR, true, ansH.MSG_TEXT)
                                                }
                                            })
                                            .fail(function() {
                                                self.$store.dispatch(type.SET_ERROR, true, '请求异常')
                                            })
                                    }else if(ansData[0][i].MENU_NAME == "定投宝") {
                                        //打折基金专区专区
                                        kfpsService.getPrds({
                                            pref_type: "10",//
                                            ret_rows:'3'
                                        }) //获取热销
                                            .done(function(ansD, ansH, answ) {
                                                //$.alert(1)
                                                if(ansH.MSG_CODE == 0) {
                                                    for(var k=0;k<self.areapros.length;k++){
                                                        if(self.areapros[k].name =="定投宝"){
                                                            self.areapros[k].pros = ansD[0]
                                                        }
                                                    }
                                                } else if(ansH.MSG_CODE == -2) {
                                                    self.$store.dispatch(type.SET_SESSION_TIMEOUT, true)
                                                } else {
                                                    self.$store.dispatch(type.SET_ERROR, true, ansH.MSG_TEXT)
                                                }
                                            })
                                            .fail(function() {
                                                self.$store.dispatch(type.SET_ERROR, true, '请求异常')
                                            })
                                    }else if(ansData[0][i].MENU_NAME == "为您推荐") {
                                        //为您推荐专区
                                        kfpsService.getPrds({
                                            pref_type: "11",//
                                            ret_rows:'3'
                                        }) //获取热销
                                            .done(function(ansD, ansH, answ) {
                                                //$.alert(1)
                                                if(ansH.MSG_CODE == 0) {
                                                    for(var k=0;k<self.areapros.length;k++){
                                                        if(self.areapros[k].name =="为您推荐"){
                                                            for(var i=0;i<ansD[0].length;i++) {
                                                                var prd = ansD[0][i]
                                                                prd.syl = prd.EXP_RATE_SEVENDAY || prd.COMM_1M || prd.COMM_3M || prd.COMM_6M || prd.COMM_1Y
                                                                prd.syl = new Number(prd.syl).toFixed(2)
                                                                prd.syl_desc =  prd.EXP_RATE_SEVENDAY?'七日年化收益率': prd.COMM_1M?'近一月收益率':  prd.COMM_3M?'近三月收益率': prd.COMM_6M?'近六月收益率' : prd.COMM_1Y?'近一年收益率':''
                                                                if(prd.PRO_DESC){
                                                                    prd.PRO_DESC = prd.PRO_DESC.split('|')
                                                                }
																self.areapros[k].pros.push(prd)
															}
                                                        }
                                                    }
                                                } else if(ansH.MSG_CODE == -2) {
                                                    self.$store.dispatch(type.SET_SESSION_TIMEOUT, true)
                                                } else {
                                                    self.$store.dispatch(type.SET_ERROR, true, ansH.MSG_TEXT)
                                                }
                                            })
                                            .fail(function() {
                                                self.$store.dispatch(type.SET_ERROR, true, '请求异常')
                                            })
                                    }else if(ansData[0][i].MENU_NAME == "估值宝") {
                                        //估值宝专区
                                        kfpsService.getPrds({
                                            pref_type: "12",//
                                            ret_rows:'1'
                                        }) //获取热销
                                            .done(function(ansD, ansH, answ) {
                                                //$.alert(1)
                                                if(ansH.MSG_CODE == 0) {
                                                    for(var k=0;k<self.areapros.length;k++){
                                                        if(self.areapros[k].name =="估值宝"){
                                                            for(var i=0;i<ansD[0].length;i++) {
                                                                var prd = ansD[0][i]
                                                                if(prd.PRO_DESC){
                                                                    prd.PRO_DESC = prd.PRO_DESC.split('|')
                                                                }
                                                               // prd.syl = prd.EXP_RATE_SEVENDAY || prd.COMM_1M || prd.COMM_3M || prd.COMM_6M || prd.COMM_1Y
                                                               // prd.syl = new Number(prd.syl).toFixed(2)
                                                               // prd.syl_desc =  prd.EXP_RATE_SEVENDAY?'七日年化收益率': prd.COMM_1M?'近一月收益率':  prd.COMM_3M?'近三月收益率': prd.COMM_6M?'近六月收益率' : prd.COMM_1Y?'近一年收益率':''
                                                                self.areapros[k].pros.push(prd)
                                                            }
                                                        }
                                                    }
                                                } else if(ansH.MSG_CODE == -2) {
                                                    self.$store.dispatch(type.SET_SESSION_TIMEOUT, true)
                                                } else {
                                                    self.$store.dispatch(type.SET_ERROR, true, ansH.MSG_TEXT)
                                                }
                                            })
                                            .fail(function() {
                                                self.$store.dispatch(type.SET_ERROR, true, '请求异常')
                                            })
                                    }else if(ansData[0][i].MENU_NAME == "资管产品") {
										
										kfpsService.getzgcpPrds({
												ret_rows : "3"
											}) 
											.done(function(ansD, ansH, answ) {
												if(ansH.MSG_CODE == 0) {
													if(ansD[0].length > 0) {
														for(var j = 0 ; j < ansD[0].length ; j++){
															kfpsService.getPrdDetail({
																pro_id: ansD[0][j].PRO_ID
															})
															.done(function(ansdata, anshead, answer) {
																if(anshead.MSG_CODE != 0) {
																	console.log(anshead.MSG_TEXT)
																} else {
																	for(var k=0;k<self.areapros.length;k++){
																		if(self.areapros[k].name =="资管产品"){
																			self.areapros[k].pros.push(ansdata[0][0])
																		}
																	}
																}
															})
															.fail(function() {
																console.log("网络异常")
															})
														}
														
													}
												} else if(ansH.MSG_CODE == -2) {
                                                    self.$store.dispatch(type.SET_SESSION_TIMEOUT, true)
												} else {
                                                    self.$store.dispatch(type.SET_ERROR, true, ansH.MSG_TEXT)
												}
											})
											.fail(function() {
                                                self.$store.dispatch(type.SET_ERROR, true, '请求异常')
											})
									}else if(ansData[0][i].MENU_NAME == "公募基金"){
										
										kfpsService.getgmjjPrds({
												ret_rows : "3"
											}) 
											.done(function(ansD, ansH, answ) {
												if(ansH.MSG_CODE == 0) {
													if(ansD[0].length > 0) {
														for(var j = 0 ; j < ansD[0].length ; j++){
															kfpsService.getPrdDetail({
																pro_id: ansD[0][j].PRO_ID
															})
															.done(function(ansdata, anshead, answer) {
																if(anshead.MSG_CODE != 0) {
																	console.log(anshead.MSG_TEXT)
																} else {
																	for(var k=0;k<self.areapros.length;k++){
																		if(self.areapros[k].name =="公募基金"){
																			self.areapros[k].pros.push(ansdata[0][0])
																		}
																	}
																}
															})
															.fail(function() {
																console.log("网络异常")
															})
														}
													}
												} else if(ansH.MSG_CODE == -2) {
                                                    self.$store.dispatch(type.SET_SESSION_TIMEOUT, true)
												} else {
                                                    self.$store.dispatch(type.SET_ERROR, true, ansH.MSG_TEXT)
												}
											})
											.fail(function() {
                                                self.$store.dispatch(type.SET_ERROR, true, '请求异常')
											})
									}else if(ansData[0][i].MENU_NAME == "投顾产品"){
										kfpsService.gettgcpPrds({
												ret_rows : "3"
											}) 
											.done(function(ansD, ansH, answ) {
												if(ansH.MSG_CODE == 0) {
													if(ansD[0].length > 0) {
														for(var j = 0 ; j < ansD[0].length ; j++){
															kfpsService.getPrdDetail({
																pro_id: ansD[0][j].PRO_ID
															})
															.done(function(ansdata, anshead, answer) {
																if(anshead.MSG_CODE != 0) {
																	console.log(anshead.MSG_TEXT)
																} else {
																	for(var k=0;k<self.areapros.length;k++){
																		if(self.areapros[k].name =="投顾产品"){
																			self.areapros[k].pros.push(ansdata[0][0])
																		}
																	}
																}
															})
															.fail(function() {
																console.log("网络异常")
															})
														}
													}
												} else if(ansH.MSG_CODE == -2) {
                                                    self.$store.dispatch(type.SET_SESSION_TIMEOUT, true)
												} else {
                                                    self.$store.dispatch(type.SET_ERROR, true, ansH.MSG_TEXT)
												}
											})
											.fail(function() {
                                                self.$store.dispatch(type.SET_ERROR, true, '请求异常')
											})
									}
								}
							} else if(ansHead.MSG_CODE == -2) {
                                self.$store.dispatch(type.SET_SESSION_TIMEOUT, true)
							} else {
                                self.$store.dispatch(type.SET_ERROR, true, ansHead.MSG_TEXT)
							}
						})
						.fail(function() {
                            self.$store.dispatch(type.SET_ERROR, true, '请求异常')
						})

				},
				getbanners(){
					let self = this
					kfpsService.getAdOrNote({
						type: "1",
			            type_val: "4",
			            stat: "1",
			            order_by: "ORDER_BY asc"
					})
					.done(function(ansData, ansHead, answsers) {
						if(ansHead.MSG_CODE != 0) {
							console.log(ansHead.MSG_TEXT)
							return
//							$.alert(ansHead.MSG_TEXT)
						}
						self.bannerimgs = ansData[0] //[{ATTR1_INFO:'../../../resources/1.png'},{ATTR1_INFO:'../../../resources/1.png'}]  //

						for(var i = 0 ; i < ansData[0].length ; i++){
							//tourl
							if(ansData[0][i].NAME.indexOf('PICCAPP')>-1){
								self.tourl = ansData[0][i].LINK
								break
							}
						}
//						//console.log(JSON.stringify(ansData[0]))
					})
					.fail(function(){
						console.log("banner图数据加载异常")
					})
				}
				,
				getmenus() {
					var self = this;
					kfpsService.getMenus({
							MENU_TYPE: "1",
							MENU_STA: "1"
						}) //获取新品
						.done(function(ansData, ansHead, answsers) {
							//$.alert(1)
							// //console.log(JSON.stringify(ansData[0]))
							if(ansHead.MSG_CODE == 0) {
								self.menus = ansData[0]
								////console.log(JSON.stringify(ansData[0]))
							} else if(ansHead.MSG_CODE == -2) {
                                self.$store.dispatch(type.SET_SESSION_TIMEOUT, true)
							} else {
                                self.$store.dispatch(type.SET_ERROR, true, ansHead.MSG_TEXT)
							}
						})
						.fail(function() {
                            self.$store.dispatch(type.SET_ERROR, true, '请求异常')
						})
				},
				goback() {
//					var model = localStorage.getItem("chanell_model")
//					$.alert(model)
					console.log("手机平台属性："+window.kibhContext.model)
					if(window.kibhContext.model != 'h5'){
						console.log("准备调用cordova退出商城")
						var params = {};
						params['action'] = "webPageExit";
						var exec = cordova.require("cordova/exec");
						
						if(exec) {
							console.log("调用cordova退出商城")
							exec(null, null, "KhtCommandPlugin", params['action'], [params]);
						}
						console.log("调用结果!!!")
					}else{
						console.log("调用h5返回上一步")
						window.history.go(-1)
					}
					

				},
				goToSd() {
					//$.toast("返回思迪客户端");
					//window.go(-99)
				},
				topromt() {
					$.alert("敬请期待！")
				},
				isAndroidPlatform() {
					var u = navigator.userAgent;
					var ifa = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
					return ifa; //android终端或者uc浏览器
				},
				isIOSPlatform() {
					var u = navigator.userAgent;
					return(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || u.indexOf('iPhone') > -1); //
				},
				swipeItemClick(index,tourl) {
					console.log('swipeItemClick->' + index);
					if(tourl == null || tourl == ''){
						return
					}
					if(index == -1) {
						$.modal({
							title: '',
							text: '您即将访问保互通商城，保互通商城不属于红塔证券股份有限公司，红塔证券不为其商城相关产品和宣传承担任何责任。',
							buttons: [{
								text: '继续访问',
								onClick: function() {
									var urls = tourl.split(";")
									if(urls.length > 2){
										return
									}else if(urls.length == 2){
										var iosDownload = urls[1];
										var androidDownload = urls[0];
									}else{
										var iosDownload = "";
										var androidDownload = urls[0];
									}
									
									console.log("iosDownload:"+iosDownload +"\tandroidDownload:"+androidDownload)
									if(window.kibhContext.model != 'h5'){
										var params = {};
										params['action'] = "gotoApp";
										params['apptype'] = '0'; //0为打开保互通
										console.log(isIOSPlatform() + "\t" + isAndroidPlatform())
										var exec = cordova.require("cordova/exec");
										if(isIOSPlatform()) {
											params['downloadUrl'] = iosDownload;
											params['scheme'] = 'bhtapp://';
											exec(null, null, "KhtCommandPlugin", params['action'], [params]);
										} else if(isAndroidPlatform()) {
											params['downloadUrl'] = androidDownload;
											params['scheme'] = 'bhtapp://';
											exec(null, null, "KhtCommandPlugin", params['action'], [params]);
										} else {
	
										}
									}
									
								}
							}, {
								text: '取消',
								onClick: function() {
									return
								}
							}]
						})
					}else{
						if(tourl.indexOf("http")==-1){
							this.$route.router.go({
								name: tourl
							})
						}
						
					}
				}
			},
			route: {
				activate: function(transition) {
					//路由进入初始化
					this.init()
					transition.next()
				}
			},
			components: {
				// Swipe, 
				// SwipeItem,
				rxcpprds
			},
			ready() {

				var self = this;
				var userinfo=sessionStorage.getItem("USER_INFO");
				if(!userinfo){
					self.islogin = false
				}
				//banner图片获取
				self.getbanners()
				//菜单数据获取：
				self.getmenus()
					//专区数据获取
				self.getareadatas()
					//新品专区
					//this.newpros=this.newpros2;

				//$.alert(JSON.stringify(this.newpros))

			}

	}
</script>