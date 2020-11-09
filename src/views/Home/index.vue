<template>
  <div class="page-home">
    <!-- 首页头部 begin -->
    <header class="index-header">
      <a href="">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="">
        <div class="header-search"></div>
      </a>
    </header>
    <!-- 首页头部 end -->
    <div class = 'index-main'>
      <!-- 轮播图 begin -->
    <Swiper @change="onChange" class="my-swiper">
      <SwiperItem>
        <img
          src="https://img.manhuadao.cn/upload/AdGroup201906/9315f7dd68b346928219f29bd9c89e60.jpg"
          alt
        />
      </SwiperItem>
      <SwiperItem>
        <img
          src="https://img.manhuadao.cn/upload/AdGroup201903/22b43c03a0f943cda001c5338fe0ddd9.jpg"
          alt
        />
      </SwiperItem>
      <SwiperItem>
        <img
          src="https://img.manhuadao.cn/upload/AdGroup202003/dda50e4233e34186910fd490aea1cd91.jpg"
          alt
        />
      </SwiperItem>
    </Swiper>
    <!-- 轮播图 end -->
    <nav class="index-nav">
      <a href="javascript:;">
        <div class="nav-item">
          <i class="iconfont icon-icon_addmessage"></i>
          <p class="nav-text font-24">分类</p>
        </div>
      </a>
      <a href="javascript:;">
        <div class="nav-item">
          <i class="iconfont icon-icon_addresslist"></i>
          <p class="nav-text font-24">排行</p>
        </div>
      </a>
      <a href="javascript:;">
        <div class="nav-item">
          <i class="iconfont icon-icon_addressbook"></i>
          <p class="nav-text font-24">VIP专区</p>
        </div>
      </a>
      <a href="javascript:;">
        <div class="nav-item">
          <i class="iconfont icon-icon_at"></i>
          <p class="nav-text font-24">历史</p>
        </div>
      </a>
    </nav>
     <section class="index-recommend">
        <div class="recommend-divide"></div>
        <div class="recommend-title">
          <div class="title-group">
            <img class="title-icon" src="https://img.manhuadao.cn/upload/icon/180208/ic_rexue.png" />
            <span class="title-text font-36">燃烧吧热血</span>
          </div>
          <span class="title-more font-24">更多 &gt;</span>
        </div>
        <div class="recommend-type-1">
          <div class="item">
            <img
              class="item-pic"
              src="https://img.manhuadao.cn/upload/BigBook201905/314b3ba47fb74621883462c8662aaed6.jpg"
            />
            <p class="item-name font-28">驭灵师</p>
            <p class="item-text font-24">取代主角的光环作者</p>
          </div>
          <div class="item">
            <img
              class="item-pic"
              src="https://img.manhuadao.cn/upload/BigBook201812/773db9e30dc043df9ad19eb142ac0dbd.jpg"
            />
            <p class="item-name font-28">天才高手</p>
            <p class="item-text font-24">屌丝美男的各种宿命的纠缠</p>
          </div>
          <div class="item">
            <img
              class="item-pic"
              src="https://img.manhuadao.cn/upload/BigBook201907/fa3e71b6701449fb90b54e3d8e341b8d.jpg"
            />
            <p class="item-name font-28">末世恋爱法则</p>
            <p class="item-text font-24">孤女重生，狂虐渣男，手撕绿茶</p>
          </div>
          <div class="item">
            <img
              class="item-pic"
              src="https://img.manhuadao.cn/upload/BigBook201903/f90e5ead5452431b94b90e4cc2b1a9c7.png"
            />
            <p class="item-name font-28">末世为王</p>
            <p class="item-text font-24">末世穿越而来的王者！</p>
          </div>
        </div>
      </section>

      <section class="index-recommend">
        <div class="recommend-divide"></div>
        <div class="recommend-title">
          <div class="title-group">
            <img class="title-icon" src="https://img.manhuadao.cn/upload/icon/180208/shaonv.png" />
            <span class="title-text font-36">少女恋爱系</span>
          </div>
          <span class="title-more font-24">更多 &gt;</span>
        </div>
        <div class="recommend-type-1">
          <div class="item">
            <img
              class="item-pic"
              src="https://img.manhuadao.cn/upload/BigBook201807/hsdshxq400400.jpg"
            />
            <p class="item-name font-28">贺少的闪婚暖妻</p>
            <p class="item-text font-24">亲爱的，做好只属于我的觉悟吧！</p>
          </div>
          <div class="item">
            <img
              class="item-pic"
              src="https://img.manhuadao.cn/upload/BigBook201808/kvcs400400.jpg"
            />
            <p class="item-name font-28">狂女重生：纨绔七皇妃</p>
            <p class="item-text font-24">这一世，我不再是任人摆布的棋子</p>
          </div>
          <div class="item">
            <img class="item-pic" src="https://img.manhuadao.cn/upload/lasy/0417/400-400.jpg" />
            <p class="item-name font-28">撩爱上瘾</p>
            <p class="item-text font-24">不小心就惹上了总裁</p>
          </div>
          <div class="item">
            <img
              class="item-pic"
              src="https://img.manhuadao.cn/upload/BigBook201912/0bc2af84fd6540329669c65b1b85a9e1.jpg"
            />
            <p class="item-name font-28">逆袭天后系统</p>
            <p class="item-text font-24">天才女导演重生小群演</p>
          </div>
        </div>
      </section>

      <section class="index-recommend">
        <div class="recommend-divide"></div>
        <div class="recommend-title">
          <div class="title-group">
            <img
              class="title-icon"
              src="https://img.manhuadao.cn/upload/icon/180208/ic_paihang.png"
            />
            <span class="title-text font-36">一周热门排行</span>
          </div>
          <span class="title-more font-24">更多 &gt;</span>
        </div>

        <div class="recommend-type-3">
          <div class="item">
            <img
              class="item-pic"
              src="https://img.manhuadao.cn/upload/BigBook201901/1db019a4e0a849ecad0e1acc7f3705d8.jpg"
            />
            <div class="ranking-group">
              <div class="item-ranking item-ranking-1"></div>
            </div>
            <div class="text-group">
              <p class="item-name font-30">地府开发商</p>
              <p class="item-hot font-24">
                人气：
                <span class="hot-hot">5.11亿</span>
              </p>
              <p
                class="item-text font-24"
              >打工竟然偶遇女友和别人开房？！为了夺回女友，姚兵走上了开发地府的逆袭之路，一路收服小弟，攻略美女，甚至发现了女友身上隐藏的阴谋。以前，你们高高在上，如今，都得对我俯首陈臣！</p>
            </div>
          </div>
          <div class="item">
            <img
              class="item-pic"
              src="https://img.manhuadao.cn/upload/BigBook201809/cbsjsz504300.jpg"
            />
            <div class="ranking-group">
              <div class="item-ranking item-ranking-2"></div>
            </div>
            <div class="text-group">
              <p class="item-name font-30">才不是金手指</p>
              <p class="item-hot font-24">
                人气：
                <span class="hot-hot">3.37亿</span>
              </p>
              <p
                class="item-text font-24"
              >袁洪面临事业、爱情双悲催，绝望的自杀却在此时意外获得金手指！金手指中潜藏的各种超级能力也随之慢慢浮现出来！今日的袁洪你爱理不理，明日的袁洪让你高攀不起！</p>
            </div>
          </div>
          <div class="item">
            <img
              class="item-pic"
              src="https://img.manhuadao.cn/upload/BigBook201809/wdwgrl504300.jpg"
            />
            <div class="ranking-group">
              <div class="item-ranking item-ranking-3"></div>
            </div>
            <div class="text-group">
              <p class="item-name font-30">我的外挂戒灵</p>
              <p class="item-hot font-24">
                人气：
                <span class="hot-hot">3.21亿</span>
              </p>
              <p
                class="item-text font-24"
              >都市废材身陷怪梦，意外获得神秘戒指，开启最强外挂，悲惨人生开始惊天逆转！清冷女总裁、可爱未婚妻、性感女间谍一一倒贴而来！但就在要走上人生巅峰之时，却发现梦中戒指竟不止一枚！？为了神秘的封印，不得不杀死其他的持有者……</p>
            </div>
          </div>
          <div class="item">
            <img
              class="item-pic"
              src="https://img.manhuadao.cn/upload/BigBook201807/wjzccrf504300.jpg"
            />
            <div class="ranking-group">
              <div class="item-ranking-other item-ranking-4"></div>
            </div>
            <div class="text-group">
              <p class="item-name font-30">我家总裁吃软饭</p>
              <p class="item-hot font-24">
                人气：
                <span class="hot-hot">2.59亿</span>
              </p>
              <p
                class="item-text font-24"
              >叶南心在目睹男友劈腿富家小姐的现场后，在郊区山上捡到一个受伤的帅气男人。这个男人从医院他醒来后，居然什么都不记得了？还赖在她的家里吃软饭？！然而，他真的失忆了吗？他和晟远集团的总裁陆嘉言怎么这么像……</p>
            </div>
          </div>
          <div class="item">
            <img
              class="item-pic"
              src="https://img.manhuadao.cn/upload/BigBook201806/ydgf504300.jpg"
            />
            <div class="ranking-group">
              <div class="item-ranking-other item-ranking-5"></div>
            </div>
            <div class="text-group">
              <p class="item-name font-30">一代诡妃</p>
              <p class="item-hot font-24">
                人气：
                <span class="hot-hot">5.48亿</span>
              </p>
              <p
                class="item-text font-24"
              >鬼修公主纳兰天月，以吸食男人的阳气作为修炼的手段。供奉她的顾家背叛了她，她在屠尽顾家满门后消亡，却附身在另一个大陆的废柴丞相之女身上。被退婚、被陷害、无法修炼……这些能难倒身为天之骄女的她？笑话，她终将修为大进，睥睨天下！“别在本宫脚下哭，脏了本宫屠城的路。”</p>
            </div>
          </div>
          <div class="item">
            <img class="item-pic" src="https://img.manhuadao.cn/upload/2018/4/17/zclg504300.jpg" />
            <div class="ranking-group"></div>
            <div class="text-group">
              <p class="item-name font-30">总裁老公爱不够</p>
              <p class="item-hot font-24">
                人气：
                <span class="hot-hot">5.59亿</span>
              </p>
              <p class="item-text font-24">一夜情竟偶遇正牌老公？恶女缠身，初恋归来？唐泽辰，不要以为你是总裁就可以为所欲为！你是有老婆的人！</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// 使用../的相对路径时，如果当前文件位置发生变化的时候，相对路径也需要修改。
// 如果使用 @ 别名的方式，就不需要去修改这个路径了
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
import { Swiper, SwiperItem } from '@/components/Swiper'

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    onChange (index) {
      console.log('swiper', index)
    }
  },
  created () {
    fetch('http://localhost:9090/migu/today/todayonhistory/').then(res => res.json()).then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
// 引入共用的mixins.scss
@import "~@/assets/styles/mixins.scss";
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .index-header {
    position: relative;
    display: flex;
    height: 44px;
    // 三者等分平铺
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    // border-bottom: 1px solid #e9e9e9;
    // &::after{
    //   content: '';
    //   position: absolute;
    //   width: 100%;
    //   left: 0px;
    //   bottom: 0px;
    //   height: 1px;
    //   background: #e9e9e9;
    //   transform: scaleY(0.5);
    // }
    @include border-bottom;
    .user-btn {
      width: 25px;
      height: 25px;
      background: url(~@/assets/icon/user-btn.png) no-repeat;
      background-size: 100%;
    }
    .header-logo {
      width: 92px;
      height: 28px;
      background: url(~@/assets/logo.png) no-repeat;
      background-size: 100%;
    }
    .header-search {
      width: 25px;
      height: 25px;
      background: url(~@/assets/icon/header-search.png) no-repeat;
      background-size: 100%;
    }
  }
  .my-swiper img {
    width: 100%;
  }
  .index-main {
    flex: 1;
    overflow-y: auto;
  }
  .index-nav {
    @include border-bottom;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 100px;
    .nav-item {
      .iconfont {
        font-size: 52px;
        line-height: 1.2;
      }
      .nav-text {
        color: #8d8d8d;
        font-weight: 500;
        text-align: center;
      }
    }
  }
  .index-recommend {
    .recommend-divide {
      height: 10px;
      background-color: #f4f4f4;
    }
    .recommend-title {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-top: 20px;
      margin-bottom: 18px;
      .title-group {
        display: flex;
        align-items: center;
        .title-icon {
          width: 22px;
          height: 22px;
          margin-right: 5px;
        }
        .title-text {
          color: #3a3a3a;
          font-weight: 500;
        }
      }
      .title-more {
        color: #b0b0b0;
        position: absolute;
        right: 18px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .recommend-type-1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
      .item {
        width: 174px;
        height: 218px;
        margin-bottom: 16px;
        .item-pic {
          width: 174px;
          height: 174px;
          margin-bottom: 4px;
          position: relative;
        }
        .item-name {
          max-width: 100%;
          margin-bottom: 2px;
          color: #3a3a3a;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .item-text {
          max-width: 100%;
          color: #8d8d8d;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
    .recommend-type-3 {
      padding: 0 10px;
      box-sizing: border-box;
      .item {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 16px;
        position: relative;
        .item-pic {
          width: 154px;
          height: 90px;
        }
        .text-group {
          width: 158px;
          margin-left: 42px;
          .item-name {
            margin-bottom: 4px;
            color: #3a3a3a;
            font-weight: 500;
          }
          .item-hot {
            color: #b0b0b0;
            margin-bottom: 15px;
            .hot-hot {
              color: red;
            }
          }
          .item-text {
            color: #8d8d8d;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
        .ranking-group {
          .item-ranking {
            width: 25px;
            height: 25px;
            background-repeat: no-repeat;
            background-position: top;
            background-size: 100%;
            position: absolute;
            top: 4px;
            left: 168px;
          }
          .item-ranking-other {
            width: 25px;
            height: 25px;
            background-repeat: no-repeat;
            background-position: top;
            background-size: 100%;
            position: absolute;
            top: 6px;
            left: 168px;
          }
          .item-ranking-1 {
            background-image: url("../../assets/icon/rank-1.png");
          }
          .item-ranking-2 {
            background-image: url("../../assets/icon/rank-2.png");
          }
          .item-ranking-3 {
            background-image: url("../../assets/icon/rank-3.png");
          }
          .item-ranking-4 {
            background-image: url("../../assets/icon/rank-4.png");
          }
          .item-ranking-5 {
            background-image: url("../../assets/icon/rank-5.png");
          }
        }
      }
    }
  }
}
</style>
