<template>
    <div style="overflow: scroll">
        <van-nav-bar
                title="武汉EVA线下观影活动 - 2021.08"
        />
        <van-notice-bar
                left-icon="volume-o"
                text="《新·福音战士剧场版：终》8月13日上线Amazon Prime Video"
        />
        <van-cell title="活动宣传视屏" icon="play"  color="#1989fa"/>
        <iframe style="width:100%;height: 200px" src="//player.bilibili.com/player.html?aid=291406455&bvid=BV1Jf4y1b7ZF&cid=362858893&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

        <van-cell title="活动海报" icon="play" />
        <p>“火热夏天 十年等待”</p>
        <p>
            我们在武汉陪你一起看EVA[Cat_congrats]</p>
        <p>
            （欢迎小伙伴们进群一起助力活动～[Cat_heart]）</p>
        <img src="../assets/qrcode.png" style="width: 96%;margin-left: 2%"/>

        <van-cell title="活动创建日志" icon="play" />
        <van-steps direction="vertical" :active="0">
          <van-step>
            <p>一周年纪念~</p>
            <p>2022-09-08</p>
          </van-step>
          <van-step>
            <p>感谢感谢这位网友花时间来回复问卷，今天才看到。也是挺感慨的吧，去年组织EVA武汉线下观影活动（自己傻透了门票定60哈哈，整个活动结束自己感受到了非常多的快乐，纯粹的快乐，也感谢大家包容了我的不成熟、敏感和“冷漠”[666]，其实到最后一起来看的伙伴不太多，大家后面联系也不太多，大概是自己后来疏于去聊天吧，就是一时之勇哈哈，但能遇见三观相似、成熟、能沟通的伙伴、自己真的很开心。能体会到一点点伊森的快乐，帮助他人快乐自己[嘿哈]
            也许以后会继续组织线下活动吧，谁知道呢[让我看看]（补上去年的活动图</p>

            <van-grid>
              <van-grid-item                      
                v-for="(item,index) in images1"
                :key="index"
              >
                <van-image
                    width="80"
                    height="80"
                    fit="fill"
                    :src="item"
                    @click="sceneImg(images1,index)"
                />
              </van-grid-item>
            </van-grid>


            <p>PS. 感谢感谢Eclair同学 一起测评并敲定最终观影的地点</p>
            <p>PPS. 感谢感谢袁胖提供的等等后期技术支持（迟来一年多哈哈哈</p>
            <p>2022-09-08</p>
          </van-step>
            <van-step>
                <p>正式观影～撒花～完结</p>
                <p>再见啦，所有的EVA</p>
                <p><a href="https://www.bilibili.com/video/BV1zy4y1G7vf?share_source=copy_web">【EVA终】新剧场版终的三种结局·完全解析</a></p>
                <p>2021-09-05</p>
            </van-step>
            <van-step>
                <p>和热心群友一起去影院观看试映,非常感谢音符君的参与～</p>
                <p>民那桑，下周日下午三点，凯德1818不见不散哟</p>
                <p>2021-08-29</p>
            </van-step>
            <van-step>
                <p>群内组织线上观影《EVA 破 2.22》</p>
                <p>2021-08-22</p>
            </van-step>
            <van-step>
                <p>和影院方沟通，确认最终活动时间</p>
                <p>活动时间:<b>2021/9/5（周日）15:00 PM</b></p>
                <p>缴费报名截止时间：<b>2021/9/1 12:00 AM</b></p>
                <p>欢迎大家踊跃报名～（准备二刷ing...</p>
                <p>参考资料：<a href="https://mp.weixin.qq.com/s/CR_2krkj3VQEXaie-iEbPg">武汉连续两日0新增！中小学开学时间定了！湖北疾控发布紧急提示……</a></p>
                <p>2021-08-15</p>
            </van-step>
            <van-step>
                <p>亚马逊资源上线啦～感谢群友们热情提供资源链接，需要的朋友请参考下列链接哦：</p>
                <p>1.<a href="https://pan.baidu.com/s/1BY-TFdDOsBior6fHlcFFxg">百度网盘版本-新·福音战士剧场版：终 シン・エヴァンゲリオン劇場版:│▌ (2021)</a> 提取码: yjnb</p>
                <p>2.<a href="http://sharetxts.com/sharepage/6114d87caf32ec45fd62795d">汇总帖-新·福音战士剧场版：终 シン・エヴァンゲリオン劇場版:│▌ (2021)</a></p>
                <p>3.<a href="https://www.aliyundrive.com/s/5CTvmgnNSwF">阿里云盘版本-新·福音战士剧场版：终 シン・エヴァンゲリオン劇場版:│▌ (2021)</a></p>


                <p><b>PS: 特别感谢提供资源的群友:z****h、橘*、陈*</b></p>
                <p>PPS : 资源仅供大家娱乐学习，请不要用于商业用途喔</p>
                <p>2021-08-13</p>
            </van-step>
            <van-step>
                <p>群内组织线上观影《EVA 序 1.11》</p>
                <p>2021-08-08</p>
            </van-step>
            <van-step>
                <p>此次活动预定的影院宣布暂时停业</p>
                <p>我们的活动初步推迟至九月五号，下午三点，活动地点不变</p>
                <p>有合适的建议（关于活动时间、活动地点等）也欢迎群内提出～</p>
                <p>另：原则上，现在不鼓励大家缴费，有需求的朋友可以参照活动日志（2021/8/4）的信息办理退票。</p>
                <p>又另：已经缴费的朋友，也请不要着急，【报名确认函】会在晚些时候发送至你的邮箱，请注意查收喔</p>
                <p>希望，这会是你我一同度过的，非常难忘的夏天——我们曾直面疫情的邪恶与反复</p>
                <p>2021-08-06</p>
            </van-step>
            <van-step>
                <p>新增小伙伴两位</p>
                <p>受疫情影响，进群问卷增加"入群原因"的输入框</p>
                <p>2021-08-05</p>
            </van-step>

            <van-step>
                <p>武汉开始全员核算检查，乡亲们请先别着急哇，王尔德还在积极观望、准备中——线下聚会一定会有的，EVA的美好记忆也一定会有的</p>
                <p>“Hope is a good thing, maybe the best of things, and no good thing ever dies.”</p>
                <p>PS : 着急退票的旁友，请通过邮件发送自己的收款码，礼貌的用语会更受欢迎。王尔德(<a href="mailto:greyson7@yeah.net">greyson7@yeah.net</a>)看到了会第一时间给你退款～</p>
                <p>2021-08-04</p>
            </van-step>
            <van-step>
                <p>新增1位小伙伴</p>
                <p>May it be an evening star</p>
                <p>Shines down upon you
                </p>
                <p>May it be when darkness falls
                </p>
                <p>Your heart will be true</p>
                <p>删掉了发在EVA吧的宣传回帖</p>
                <p>2021-08-01</p>
            </van-step>
            <van-step>
                <p>新增挺多小伙伴</p>
                <p>自助缴费问卷增加了"备注"字段</p>
                <p>自助缴费问卷"微信转账单号"增加了示例图片</p>
                <p>欢迎朋友们自助买票哟</p>
                <p>当然缴费之前，请仔细阅读群公告和报名问卷的那些小字~</p>
                <p>2021-07-30</p>
            </van-step>
            <van-step>
                <h3>新增小伙伴5+名</h3>
                <p>2021-07-29</p>
            </van-step>
            <van-step>
                <h3>新增小伙伴3+名</h3>
                <p>已择吉日吉时开始缴费报名啦</p>
                <p>活动地点：凯德1818</p>
                <p>活动时间：8/15 15:00</p>
                <p>门票：六十</p>
                <p>福音战士们，我们不说再见</p>
                <p>影院场地已预定</p>
                <p>在EVA吧回帖进行活动宣传</p>
                <p>2021-07-28</p>
            </van-step>
            <van-step>
                <h3>新增小伙伴2+名</h3>
                <p>还会记起这个夏天吗？</p>
                <p>2021-07-27</p>
            </van-step>
            <van-step>
                <h3>新增小伙伴6+名</h3>
                <p>还需要一些积极的小伙伴哟，真爱粉们快入群～</p>
                <p>2021-07-26</p>
            </van-step>
            <van-step>
                <h3>新增小伙伴10+名</h3>
                <p>2021-07-25</p>
            </van-step>
            <van-step>
                <h3>新增小伙伴10+名</h3>
                <p>2021-07-24</p>
            </van-step>
            <van-step>
                <h3>新增小伙伴3名,梦回那个电话亭</h3>
                <p>2021-07-23</p>
            </van-step>
            <van-step>
                <h3>新增小伙伴8名，希望我们拥有不一样的夏天</h3>
                <p>"想要被理解，被认同，想要心与心之间开心的交流"</p>
                <p>2021-07-22</p>
            </van-step>
            <van-step>
                <h3>新增小伙伴5名，坑位不多啦，小伙伴们快快加入哟！</h3>
                <p>2021-07-21</p>
            </van-step>
            <van-step>
                <p>各位群成员大家中午好，目前我们群规模已经达到32人，已经达到了影院包场的条件，从今天开始我会去着手准备包场放映的工作(目前暂定徐东春树里万达影城）。同时也希望大家可以可以帮帮我。包场放映是一个比较复杂的准备工作。如果大家有渠道或者认识愿意放映的影院都可以私聊我或者发邮件给我(greyson7@yeah.net)。感谢大家对这次线下观影活动的支持～</p>
                <p>2021-07-19</p>
            </van-step>
        </van-steps>
    </div>
</template>

<script>
    import {Step, Steps,NoticeBar,NavBar,Cell,Grid, GridItem , Image as VanImage , ImagePreview} from 'vant'
    export default {
        name: "welcome",
        components: {
            [Step.name]: Step,
            [Steps.name]: Steps,
            [NoticeBar.name]: NoticeBar,
            [NavBar.name]: NavBar,
            [Cell.name]: Cell,
            [Grid.name]: Grid,
            [GridItem.name]: GridItem,
            [VanImage.name]: VanImage,
            [ImagePreview.name]: ImagePreview,
        },
      data() {
          return {
            images1: [
              'http://amier.asuscomm.com:6391/images/2022/09/16/iShot_2022-09-08_11.49.51-2.png',
                'http://amier.asuscomm.com:6391/images/2022/09/16/iShot_2022-09-08_11.51.07.png',
                'http://amier.asuscomm.com:6391/images/2022/09/16/IMG_8017.jpg',
                'http://amier.asuscomm.com:6391/images/2022/09/16/IMG_8016.jpg',
                'http://amier.asuscomm.com:6391/images/2022/09/16/IMG_8014.jpg'
            ]
          }
      },
      methods:{
        // 图片预览
        sceneImg(images,index) {
          ImagePreview({
            images:images, //需要预览的图片 URL 数组
            showIndex:true, //是否显示页码
            loop:false, //是否开启循环播放
            startPosition:index //图片预览起始位置索引
          })
        },
      }

    }
</script>

<style scoped>

</style>