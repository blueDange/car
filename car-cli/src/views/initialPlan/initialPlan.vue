<template>
  <div>
    <nav-menu></nav-menu>
    <car-head :avatar="require('../../assets/about/01.jpg')">
      <div slot="bream" class="bream">
        <el-breadcrumb-item></el-breadcrumb-item>
      </div>
    </car-head>
    <!-- 主体内容 -->
    <div class="content">
      <h1>房车露营地前期规划</h1>
      <div>
        <p>
          有时我们选择改变，并非经过深思熟虑，而更像是听见了天地间冥冥中的呼唤，呼唤你前往另一个地方，过上另一种生活。你并不一定会从此拥有更美好的人生，可你仍然感谢天地和人世所带来的这些变化和发生。不然你大概会一直好奇和不甘吧——家门前的那条小路，到底通向了什么样的远方呢？
        </p>
        <p>
          唯有和相爱的人一起行万里路，才能回到内心深处，才能倾听彼此。正因为心中对自由的向往，让我们选择了自驾车房车露营旅游。
        </p>
        <h2>一、露营是一种生活方式</h2>
        <p style="padding-top: 10px">
          露营（Camping）：可追溯到早期人类在游牧，狩猎、迁徙、军事等活动中临时搭建的野外住宿场所和设施。娱乐露营（Recreational
          Camping）：娱乐露营的起源早在1853年，当时英国人霍丁（THOMAS·H·HOLDING）同300多人的四轮马车队伍一起跨越了美国1200英里的大片草原。并在1908年出版了世界上第一本“露营者手册”。1907年，世界上第一个露营俱乐部由原来的“自行车露营者组织”和其他几个俱乐部合并在英国成立。
        </p>
        <img
          src="../../assets/initialPlan/01.jpg"
          alt=""
          style="height: 368px; width: 1131px"
        />
        <p>
          西方人追求自由与享受自然的生活理念成就了自驾车房车露营的基本雏形，在20世纪三十年代经济大萧条之后，以美国国家公园中陆续划分出特定的区域供人们露营为标志，露营旅行成为一种席卷欧美的时尚生活方式。
        </p>
        <p>
          “911”事件后，美国和一些西方国家的人们对于生命和家庭的看法有了新的认识。他们更加追求紧张工作以外的放松和休闲生活，并尽量同家人一起，以帐篷露营或房车旅游的方式贴近大自然，与亲友共享天伦之乐，再次掀起了汽车露营的高潮。
        </p>
        <img
          src="../../assets/initialPlan/02.jpg"
          alt=""
          style="height: 640px; width: 1131px;padding-bottom: 30px"
        />
        <h2>二、国外房车露营旅游的发展情况</h2>
        <p style="padding-top: 10px">
          截止2013年的数据表明，露营近些年来在世界其他国家和地区也逐渐盛行。欧洲拥25,000多个标准的露营地，每年的夏季都处于爆满的状态。目前，北美地区露营地共有2万多处，房车总数超过一千万辆。
        </p>
        <p>
          2003年，9.5万人参加了英国“全国露营和露营车旅行周”活动，刷新了一晚同时露营的纪录。
        </p>
        <img
          src="../../assets/initialPlan/03.jpg"
          alt=""
          style="height: 586px; width: 1131px;padding-bottom: 30px"
        />
        <h2>三、国内自驾车房车露营地发展现状</h2>
        <p style="padding-top: 10px">
          在我国，汽车营地有时也被称之为汽车露营地。汽车营地可细分为自驾车营地和房车营地以及特殊的汽车营地——汽车影院，也可根据其所处地理环境可以分为：山丘型汽车露营地（如天津蓟县山野房车营地）、水域型汽车露营地（如无锡太湖汽车休闲营地）、草原型汽车露营地（如西川的西部牧场）、林地型汽车露营地（如江苏老山森林汽车公园）、海滨型汽车露营地（如大连金石滩国际汽车露营地）、公园型汽车露营地（如北京延庆龙湾露营公园）等。
        </p>
        <p>
          根据不完全统计，截至2013年末，国内较有规模的营地约有50多家，其中80%分布在环渤海经济圈、长三角、珠三角三大区域，另外四川云南也分布较多。
        </p>
        <img
          src="../../assets/initialPlan/04.jpg"
          alt=""
          style="height:701px; width: 1131px;padding-bottom: 30px"
        />
      </div>
   
      <span style="font-family:sans-serif;font-size:16px;color: #777;text-indent:2em;line-height:30px;">首先需要说明的是，一个成功的自驾车房车营地，绝不仅仅是若干个符合标准的营位空间的集合，也不单纯是一个设施完备符合规范的标准化空间，露营生活之所以有魅力，驱动人们在旅途中一站一站的走下去，吸引周边的人们一次一次到访，都是因为不同的营地所传递出不同的价值理念，不同营地所营造的情绪体验和人文情怀个性而不可复制。</span>
    </div>
    <!-- 页脚 -->
    <foot></foot>
    <!-- 回到顶部 -->
    <go-top></go-top>
  </div>
</template>

<script>
import CarHead from "../../components/CarHead.vue";
import NavMenu from "../../components/NavMenu";
import Foot from "../../components/Foot.vue";
import GoTop from "../../components/GoTop.vue";
export default {
  components: {
    CarHead,
    NavMenu,
    Foot,
    GoTop,
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    font-weight: normal;
    margin: 60px 0;
  }
  > div {
    color: #777;
    font-size: 14px;
    > p {
      margin-bottom: 15px;
      line-height: 23px;
      text-indent: 2em;
    }
  }
}
</style>
