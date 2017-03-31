<template>
  <div id="app">
    <split></split>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/cn">cn</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/en">en</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/jp">jp</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/kr">kr</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/tw">tw</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/hk">hk</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/fr">fr</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import split from '@/components/split/split';

  export default {
    components: {
      split
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    border-bottom: 1px solid #eee
    .tab-item
      flex: 1
      & > a
        display: block
        height: .8rem
        line-height: .8rem
        text-align: center
        font-size: .3rem
        &.active
          color: #42b983
</style>
