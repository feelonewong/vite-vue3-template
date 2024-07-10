<template>
  <div class="news-wrapper">
    <div class="news-content">
      <span class="title">新闻动态</span>
      <span class="desc">副标题副标题副标题</span>

      <div class="area-wrapper">
        <div class="time-line">
          <el-timeline style="max-width: 600px">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp="activity.timestamp"
            >
              <section class="hover-item">
                {{ activity.content }}
              </section>
            </el-timeline-item>
          </el-timeline>
        </div>
        <div class="right-img">
          <img src="@/assets/images/navbar/news.png" width="100%" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: 'NewsInfo' })
const router = useRouter()
const activeIndex = ref(0)

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
  },
  {
    content: '标题可以是指一本书，以及任何其他发表物或艺术品的名字，它通常是作者选择的作品的名称。 标题可以用来识别作品，对作品进行区别',
    timestamp: '2018-04-03 20:46',
    color: '#0493D3',
  },
  {
    content: '标题可以是指一本书，以及任何其他发表物或艺术品的名字，它通常 size',
    timestamp: '2018-04-03 20:46',
    color: '#0493D3',
  },
  {
    content: '我数量第三季度李施德林老师地脚螺栓简单来说收到了数据库',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    color: '#0493D3',
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
.hover-item:hover {
  background: linear-gradient(147deg, #9cd5ee -52%, #ffffff 19%);
  transition: transform 0.8s ease, box-shadow 0.3s ease;
  //   padding: 20px;
  transform: scale(1.3);
  border-radius: 20px;
  box-shadow: 0px 10px 20px 0px rgba(12, 111, 154, 0.084);
}
.hover-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box; /* 使padding不会影响大小 */
  transition: padding 0.3s ease; /* 动画效果 */
}

.hover-item::before {
  padding: 20px; /* 悬浮时增加的padding */
}
</style>
