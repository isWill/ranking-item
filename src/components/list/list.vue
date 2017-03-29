<template>
  <div class="list-wrapper">
    <ul class="item-list">
      <li class="item" v-for="item in list">
        <h2 class="title"><i></i><span>{{item.title}}</span></h2>
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
    methods: {
      urlParse() {
        let url = window.location.hash;
        let str = '';
        let reg = /[?&][^?&]+=[^?&]+/g;
        let arr = url.match(reg);
        // ['?country=cn']
        if (arr) {
          let val = arr[0].split('=')[1];
          str = val;
        } else {
          str = 'cn';
        }

        if ((str !== 'cn') && (str !== 'en') && (str !== 'jp') && (str !== 'kr') && (str !== 'tw') && (str !== 'hk') && (str !== 'fr')) {
          str = 'cn';
        }
        return str;
      }
    },
    created() {
      this.$http.get('/api/appData').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.list = Object.assign({}, this.list, response.data)[this.urlParse()];
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
          i
            display: inline-block
            margin-right: .2rem
            width: .4rem
            height: .4rem
            background: url("./dian.png") no-repeat
            background-size: 100% 100%
            vertical-align: top
          span
            height: .4rem
            line-height: .4rem
            font-size: .28rem
            font-weight: 700
            color: #333

        .desc
          padding-left: .6rem
          text-align: justify
          font-size: .26rem
          color: #666
</style>
