<template>
  <div class="hello">
    <van-nav-bar :title="assessment.name" />
<!--    <video autoplay src="http://play.qiqiuyun.net/sdk_api/video/hls_stream/shd.m3u8?resNo=a1be855768a445dea4c568e9f0c67057&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsZXZlbCI6InNoZCIsInByZXZpZXciOm51bGwsInBsYXlBdWRpbyI6MCwiaGVhZCI6bnVsbCwic2tpcCI6bnVsbCwibm8iOiJhMWJlODU1NzY4YTQ0NWRlYTRjNTY4ZTlmMGM2NzA1NyIsImp0aSI6IjZmNThkZjg5LWIxODYtNDgiLCJ0aW1lcyI6OTk5OTksImV4cCI6IjE2MjQyOTMyMzYiLCJlbmNyeXB0IjoyLCJuYXRpdmUiOjAsImhsc0NsZWZFbmNyeXB0VmVyc2lvbiI6Mn0.k6NcyQkpSsnaDolLFreG4WzG3L2kCs40NsNJpdRJhW8&ssl=0"/>-->
    <van-list type="primary">
      <div
        style="width: 100%"
        v-html="`${currentIndex + 1} . ${items[currentIndex].material}`"
      />
    </van-list>
    <van-divider content-position="right">
      {{ currentIndex + 1 }} / {{ items.length }}
    </van-divider>
    <van-radio-group v-model="checked">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in items[currentIndex].questions[0]
            .response_points"
          :title="`${item.radio.val}. ${item.radio.text}`"
          :key="index"
          clickable
          @click="checked = item.radio.val"
        >
          <template #right-icon>
            <van-radio :name="item.radio.val" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>

    <van-cell>
     解析{{items[currentIndex].analysis || items[currentIndex].questions[0].analysis}}
    </van-cell>

    <van-submit-bar button-text="下一题" @submit="onSubmit" />
  </div>
</template>

<script>
import {
  SubmitBar,
  Toast,
  NavBar,
  List,
  Cell,
  CellGroup,
  RadioGroup,
  Radio,
  Divider
} from "vant";
import QUESTION from "./../constants/midwayTest";
// const { QUESTION_EIGHT } = CONSTANTS;
export default {
  name: "HelloWorld",
  components: {
    [SubmitBar.name]: SubmitBar,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar,
    [List.name]: List,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Divider.name]: Divider
  },
  props: {
    msg: String
  },
  data() {
    return {
      // checked: "B",
      assessment: QUESTION.assessment,
      items: QUESTION.assessment.sections[0].items,
      currentIndex: 0
    };
  },
  computed: {
    checked () {
      let val = undefined
      const {currentIndex,items} = this
      val = items[currentIndex].questions[0].answer[0]
      return val
    }

  },
  methods: {
    onSubmit() {
      // Toast('下一题')
      this.currentIndex = this.currentIndex + 1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h3 {*/
/*  margin: 40px 0 0;*/
/*}*/
/*ul {*/
/*  list-style-type: none;*/
/*  padding: 0;*/
/*}*/
/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/
/*a {*/
/*  color: #42b983;*/
/*}*/
</style>
