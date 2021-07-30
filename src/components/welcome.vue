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
        <img src="../assets/qrcode.png" style="width: 100%;padding:9px;border: 1px solid #f0f0f0;"/>

        <van-cell title="活动创建日志" icon="play" />
        <van-steps direction="vertical" :active="0">
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
    import {Step, Steps,NoticeBar,NavBar,Cell} from 'vant'
    export default {
        name: "welcome",
        components: {
            [Step.name]: Step,
            [Steps.name]: Steps,
            [NoticeBar.name]: NoticeBar,
            [NavBar.name]: NavBar,
            [Cell.name]: Cell,

        }

    }
</script>

<style scoped>

</style>