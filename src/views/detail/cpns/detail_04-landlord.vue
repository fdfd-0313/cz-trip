<template>
  <div class="landlord">
    <DetailSection
      title="房东介绍"
      more-text="查看房东主页"
    >
      <div class="header">
        <div class="left">
          <div class="avatar">
            <img :src="landlord.hotelLogo">
          </div>
          <div class="info">
            <div class="name">{{landlord.hotelName}}</div>
            <div class="tags">
              <template
                v-for="(item,index) in landlord.hotelTags"
                :key="index"
              >
                <div class="item">
                  <span>{{item.tagText.text}}</span>
                  <span
                    class="diliver"
                    v-if="index !==landlord.hotelTags.length -1"
                  >|</span>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="contact">
            联系房东
          </div>
        </div>
      </div>
      <div class="bootom">
        <template
          v-for="(item,index) in landlord.hotelSummary"
          :key="index"
        >
          <div class="item">
            <div class="title">{{item.title}}</div>
            <div class="score">{{ item.introduction }}</div>
            <div class="desc">{{ item.tip }}</div>
          </div>
        </template>
      </div>

    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";
const props = defineProps({
  landlord: {
    type: Object,
    default: () => ({})
  }
})
</script>
 
<style lang="less" scoped>
.landlord {
  padding: 10px 0;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    .left {
      display: flex;
      .avatar {
        img {
          width: 54px;
          height: 54px;
        }
      }
      .info {
        margin: 0px 6px;
        .name {
          font-size: 16px;
          font-weight: 800;
        }
        .tags {
          display: flex;
          margin: 6px 0px;
          color: #9d9d9d;
          .item {
            .diliver {
              margin: 5px;
            }
          }
        }
      }
    }
    .right {
      height: 24px;
      line-height: 24px;
      border-radius: 5px;
      padding: 0 12px;
      font-size: 12px;
      color: #fff;
      background-image: linear-gradient(90deg, #38b0de, #97cbff);
    }
  }
  .bootom {
    display: flex;
    justify-content: space-between;
    margin: 20px 4px;
    .item {
      font-size: 14px;
      .title {
        color: #999;
      }
      .score {
        margin: 5px 0;
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }
      .desc {
        color: #666;
      }
    }
  }
}
</style>