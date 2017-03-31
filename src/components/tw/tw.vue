<template>
  <div class="list-wrapper">
    <ul class="item-list">
      <li class="item" v-for="item in list">
        <h2 class="title"><i class="icon-optin-monster"></i><span>{{item.title}}</span></h2>
        <p class="desc">{{item.description}}</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;

  export default {
    data() {
      return {
        list: []
      };
    },
    created() {
      this.$http.get('/api/tw').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.list = response.data;
        }
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .list-wrapper
    width: 100%
    .item-list
      padding: .65rem .45rem 0 .4rem
      .item
        margin-bottom: .6rem
        width: 100%
        .title
          margin-bottom: .3rem
          text-align: left
          font-size: 0
          i, span
            height: .4rem
            line-height: .4rem
            font-size: .28rem
          i
            display: inline-block
            margin-right: .2rem
            vertical-align: top
            color: #42b983
          span
            font-weight: 700
            color: #333

        .desc
          padding-left: .6rem
          text-align: justify
          font-size: .26rem
          color: #666
</style>
