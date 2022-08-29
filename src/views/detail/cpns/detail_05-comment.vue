<template>
  <div class="comment">
    <DetailSection
      title="热门评论"
      :more-text="`查看全部${comment.totalCount}条评论`"
    >
      <div class="comment-inner">
        <div class="header">
          <div class="left">
            <div class="score">
              <span class="text">{{comment.overall}}</span>
              <div class="line"></div>
            </div>
          </div>
          <div class="info">
            <div class="title">{{comment.scoreTitle}}</div>
            <div class="count">{{comment.totalCount}}条评论</div>
            <div class="star">
              <van-rate
                v-model="comment.overall"
                color="#38B0DE"
                size="14"
                readonly
                allow-half
              />
            </div>
          </div>
          <div class="right">
            <template
              v-for="(item,index) in comment.subScores"
              :key="index"
            >
              <span class="item">{{item}}</span>
            </template>
          </div>
        </div>
        <div class="tags">
          <template
            v-for="(item,index) in comment.commentTagVo"
            :key="index"
          >
            <span
              class="item"
              :style="{ color: item.color, background: item.backgroundColor }"
            >{{item.text}}</span>
          </template>
        </div>
        <div class="content">
          <div class="user">
            <div class="avatar">
              <img :src="comment.comment.userAvatars" />
            </div>
            <div class="profile">
              <div class="name">{{comment.comment.userName}}</div>
              <div class="date">{{comment.comment.checkInDate}}</div>
            </div>
          </div>
          <div class="text">{{comment.comment.commentDetail}}</div>
        </div>
      </div>
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";
const props = defineProps({
  comment: {
    type: Object,
    default: () => ({})
  }
})
</script>
 
<style lang="less" scoped>
.comment-inner {
  padding: 10px 0;
  .header {
    display: flex;
    .left {
      display: flex;
      align-items: center;
      .score {
        width: 65px;
        height: 100%;
        color: #333;
        position: relative;
        .text {
          font-size: 48px;
          font-weight: 600;
          position: relative;
          z-index: 6;
        }
        .line {
          width: 65px;
          height: 6px;
          border-radius: 10px;
          background-color: #38b0de;
          position: absolute;
          z-index: 5;
        }
      }
    }
    .info {
      margin: 5px 20px;
      align-items: center;
      color: #333;
      .count {
        margin: 5px 0;
        color: #999;
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      justify-content: flex-end;
      .item {
        margin: 0 5px;
        font-size: 14px;
        color: #666;
      }
    }
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    .item {
      padding: 3px 5px;
      margin-right: 8px;
      margin-top: 5px;
      border-radius: 8px;
      font-size: 14px;
    }
  }
  .content {
    border-radius: 8px;
    background-color: #fcfcfc;
    .user {
      display: flex;
      padding: 5px 0;
      .avatar {
        padding-top: 8px;
        padding-left: 8px;
        img {
          width: 44px;
          height: 44px;
          border-radius: 50%;
        }
      }
      .profile {
        padding-top: 8px;
        margin-left: 12px;
        .date {
          margin-top: 3px;
          color: #999;
        }
      }
    }
    .text {
      font-size: 14px;
      line-height: 18px;
      margin-top: 16px;
    }
  }
}
</style>