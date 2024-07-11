<template>
  <div class="study-guide">
    <div class="study_title">
      <span class="first_title">学习者指南</span>
      <span class="second_title">副标题副标题</span>
    </div>

    <div class="guide_wrapper">
      <div class="top_wrapper">
        <div class="guide_item_top" v-for="item in titleList" :class="activeIndex === item.key ? 'active-item' : ''" :key="item.key" @click="handleItemClick(item.key)">
          <span class="tabs_title">{{ item.name }}</span>
          <span class="tabs_second_title">{{ item.secondName }}</span>
        </div>
      </div>

      <section v-show="activeIndex === 1" class="block-space block-first">
        <div class="left-area">
          <section class="user-info">
            <div class="top_avatar">
              <el-avatar :size="60" src="https://empty">
                <img src="@/assets/images/navbar/avatar.png" />
              </el-avatar>
              <span class="item">赵宁</span>
              <span class="item">您位于 <span style="color: #0493d3">徐汇区</span></span>
            </div>
            <div style="font-weight: bold">您3km内有 <span style="color: #0493d3">2</span> 家学习机构</div>
          </section>
        </div>
        <div class="map">
          <baidu-map class="bm-view" :zoom="12" :center="{ lng: 116.404, lat: 39.915 }"> </baidu-map>
        </div>
      </section>
      <section v-show="activeIndex === 2" class="block-space">2</section>
      <section v-show="activeIndex === 3" class="block-space">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
        </el-table>
      </section>
      <section v-show="activeIndex === 4" class="block-space">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="AAAA" width="180" />
          <el-table-column prop="name" label="BBB" width="180" />
          <el-table-column prop="address" label="CCCC" />
          <el-table-column prop="address" label="EEE" />
          <el-table-column prop="address" label="FFFF" />
        </el-table>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
const titleList = ref([
  { name: '分布地图', secondName: '可认证的成果清单', key: 1 },
  { name: '学习地图', secondName: '学习随时随地', key: 2 },
  { name: '成果目录', secondName: '可认证的成果清单', key: 3 },
  { name: '转换目录', secondName: '可转换的成果清单', key: 4 },
])
const activeIndex = ref(1)
const handleItemClick = (item: any) => {
  activeIndex.value = item
  console.log(item, activeIndex.value)
}
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
</script>

<style lang="scss" scoped>
.study-guide {
  margin-top: -200px;
  position: relative;
  bottom: -200px;
  z-index: 1000;
}
.top_wrapper {
  display: flex;
  width: 1200px;

  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 10px;
}
.study_title {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .first_title {
    color: #333;
    font-size: 24px;
    padding-top: 24px;
    padding-bottom: 18px;
    font-weight: 700;
  }
  .second_title {
    color: #999;
    padding-bottom: 10px;
    font-size: 16px;
  }
}
.guide_wrapper {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;
  opacity: 1;
  border-radius: 6px;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background: #ffffff;
  .guide_item_top {
    display: flex;
    width: 1200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    // border-bottom: 1px solid #333;
    padding: 0 80px;
    .tabs_title {
      display: block;
      color: #333;
      font-size: 18px;
      padding-top: 10px;
      padding-bottom: 6px;
      font-weight: 600;
      cursor: pointer;
    }
    .tabs_second_title {
      color: #999;
      font-size: 14px;
      padding-bottom: 4px;
    }
  }
}

.active-item {
  > span {
    color: #0493d3 !important;
  }
}

.active-item::after {
  content: ' ';
  display: block;
  width: 60px;
  height: 3px;

  position: absolute;
  background: #0493d3;
  bottom: -10px;
  border-radius: 4px;
  overflow: hidden;
}
.block-space {
  //   min-height: 400px;
  //   padding: 20px;
  height: 400px;
}
.block-first {
    display: flex;
}
.map {
    flex: 1;
    padding: 10px;
}
.left-area {
  width: 300px;
  height: 100%;
  border-right: 1px solid #dcdcdc;
}
.user-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  .top_avatar {
    display: flex;
    margin-top: 60px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .item {
      margin: 8px 0;
      display: block;
      font-weight: 600;
    }
  }
}

.bm-view {
  width: 100%;
  height: 100%;
}
</style>
