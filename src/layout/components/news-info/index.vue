<template>
  <div class="news-wrapper">
    <div class="news-content">
      <span class="title">新闻动态</span>
      <span class="desc">副标题副标题副标题</span>

      <div class="area-wrapper">
        <div class="time-line">
          <el-timeline style="max-width: 600px; margin-top: 10px">
            <!-- v-for="(activity, index) in activities" -->

            <el-timeline-item :type="activities[0].type" :color="activities[0].color" :size="activities[0].size" class="hover-item" :timestamp="activities[0].timestamp">
              <section @mouseover.native="handleMouseLeave('1')">
                <span> {{ activities[0].content }}</span>
              </section>
              <section v-if="hoverStatus !== null" class="hover-preview" @mouseleave.native="leaveMouseLeave('1')">
                <div class="breathing-light"></div>
                {{ hoverStatus != null ? activities[0].content : '' }}
              </section>
            </el-timeline-item>
            <el-timeline-item :type="activities[1].type" :color="activities[1].color" :size="activities[1].size" class="hover-item" :timestamp="activities[1].timestamp">
              <section @mouseover.native="handleMouseLeave2('2')">
                <span> {{ activities[1].content }}</span>
              </section>
              <section v-if="hoverStatus2 !== null" class="hover-preview" @mouseleave.native="leaveMouseLeave2('2')">
                <div class="breathing-light"></div>
                {{ hoverStatus2 != null ? activities[1].content : '' }}
              </section>
            </el-timeline-item>
            <el-timeline-item :type="activities[2].type" :color="activities[2].color" :size="activities[2].size" class="hover-item" :timestamp="activities[2].timestamp">
              <!-- @mouseover="handleMouseLeave(String(index))" @mouseleave="leaveMouseLeave(String(index))" -->
              <section @mouseover.native="handleMouseLeave3('3')">
                <span> {{ activities[2].content }}</span>
                <section v-if="hoverStatus3 !== null" class="hover-preview" @mouseleave.native="leaveMouseLeave3('3')">
                  <div class="breathing-light"></div>
                  {{ hoverStatus3 != null ? activities[2].content : '' }}
                </section>
              </section>
            </el-timeline-item>
            <el-timeline-item :type="activities[3].type" :color="activities[3].color" :size="activities[3].size" class="hover-item" :timestamp="activities[3].timestamp">
              <!-- @mouseover="handleMouseLeave(String(index))" @mouseleave="leaveMouseLeave(String(index))" -->
              <section @mouseover.native="handleMouseLeave4('4')">
                <span> {{ activities[3].content }}</span>
              </section>
              <section v-if="hoverStatus4 !== null" class="hover-preview" @mouseleave.native="leaveMouseLeave4('4')">
                <div class="breathing-light"></div>
                {{ hoverStatus4 != null ? activities[3].content : '' }}
              </section>
            </el-timeline-item>
            <!-- <section v-if="hoverStatus !== null" class="hover-preview">
            {{ hoverStatus != null ? activities[hoverStatus].content : '' }}
          </section> -->
          </el-timeline>
        </div>
        <div class="right-img">
          <img :src="imgSrc" width="100%" height="300px" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: 'NewsInfo' })
const router = useRouter()
const activeIndex = ref(0)
const hoverStatus = ref<string | null>(null)
const hoverStatus2 = ref<string | null>(null)
const hoverStatus3 = ref<string | null>(null)
const hoverStatus4 = ref<string | null>(null)
const imgSrc = ref(
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
)
function handleRefresh() {
  router.push(`/redirect/dashboard`)
}

const activities = ref([
  {
    content:
      '标题可以是指一本书，以及任何其他发表物或艺术品的名字，它通常是作者选择的作品的名称。 标题可以用来识别作品，对作品进行区别。 在图书设计中，标题通常显示在书脊，前封面，还有标题页上...',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    color: '#0493D3',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    content: '标题可以是指一本书，以及任何其他发表物或艺术品的名字，它通常是作者选择的作品的名称。 标题可以用来识别作品，对作品进行区别',
    timestamp: '2018-04-03 20:46',
    color: '#0493D3',
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    content: '标题可以是指一本书，以及任何其他发表物或艺术品的名字，它通常 size',
    timestamp: '2018-04-03 20:46',
    color: '#0493D3',
    url: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    content: '我数量第三季度李施德林老师地脚螺栓简单来说收到了数据库',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    color: '#0493D3',
    url: 'https://images.unsplash.com/photo-1605256585681-455837661b18?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
])
const handleItemClick = (item: any) => {
  activeIndex.value = item.key
}
/** 组件挂载完成后执行的操作 */
async function handleMounted() {}

/** 组件实例被卸载之前执行的操作 */
async function handleUnmounted() {}

/** 注册一个回调函数，在组件挂载完成后执行 */
onMounted(handleMounted)
/** 注册一个回调函数，在组件实例被卸载之前调用 */
onUnmounted(handleUnmounted)

const leaveMouseLeave = (index: string) => {
  if (hoverStatus.value === index) {
    hoverStatus.value = null
  }
}

const handleMouseLeave = (index: string) => {
  if (hoverStatus.value) {
    return
  } else {
    hoverStatus.value = index
  }
  imgSrc.value = activities.value[0].url
}

const leaveMouseLeave2 = (index: string) => {
  if (hoverStatus2.value === index) {
    hoverStatus2.value = null
  }
}

const handleMouseLeave2 = (index: string) => {
  if (hoverStatus2.value) {
    return
  } else {
    hoverStatus2.value = index
  }
  imgSrc.value = activities.value[1].url
}

const leaveMouseLeave3 = (index: string) => {
  if (hoverStatus3.value === index) {
    hoverStatus3.value = null
  }
}

const handleMouseLeave3 = (index: string) => {
  if (hoverStatus3.value) {
    return
  } else {
    hoverStatus3.value = index
  }
  imgSrc.value = activities.value[2].url
}

const leaveMouseLeave4 = (index: string) => {
  if (hoverStatus4.value === index) {
    hoverStatus4.value = null
  }
}

const handleMouseLeave4 = (index: string) => {
  if (hoverStatus4.value) {
    return
  } else {
    hoverStatus4.value = index
  }
  imgSrc.value = activities.value[3].url
}
</script>
<style lang="scss" scoped>
.news-wrapper {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  padding-bottom: 30px;
  padding-top: 30px;
  background: #f8fbfc;

  .news-content {
    width: 1200px;
    margin: 0 auto;
    .title {
      display: block;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 2.81px;
      color: #333333;
      margin: 20px 0;
    }
    .desc {
      text-align: center;
      display: block;
      color: #999;
      margin-bottom: 10px;
    }
  }
  .area-wrapper {
    margin-top: 30px;
    display: flex;
  }
}
.right-img {
  border: 14px solid #fff;
  flex: 1;
  margin-left: 10px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
::v-deep .el-timeline-item__tail {
  border: 1px solid rgba(4, 147, 211, 0.2);
  height: 100%;
  left: 4px;
  position: absolute;
}
.hover-item {
  position: relative;
  // border: 1px solid green;
}
.hover-preview {
  position: absolute;
  bottom: 10px;
  left: 0px;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
  z-index: 10;
  width: 600px;
  // height: 60px;
  background: linear-gradient(147deg, #9cd5ee -52%, #ffffff 19%);
  box-shadow: 0px 10px 20px 0px rgba(12, 111, 154, 0.084);
  border-radius: 10px;
  padding: 20px;
  padding-bottom: 30px;
  transition: all 1.5s ease;
  transform: scale(1.04);
}

.breathing-light {
  width: 5px;
  margin-bottom: 13px;
  height: 5px;
  border-radius: 50%;
  background-color: #0493d3;
  animation: breathing 3s ease-in-out infinite;
}

@keyframes breathing {
  0% {
    box-shadow: 0 0 2px 2px rgba(173, 216, 230, 0.5);
  }
  50% {
    box-shadow: 0 0 10px 10px rgba(173, 216, 230, 0.7);
  }
  100% {
    box-shadow: 0 0 2px 2px rgba(173, 216, 230, 0.5);
  }
}
</style>
