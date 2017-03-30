<template>
  <div id="app">
    <split></split>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/api/appData?country=cn">cn</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/api/appData?country=en">en</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/api/appData?country=jp">jp</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/api/appData?country=kr">kr</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/api/appData?country=tw">tw</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/api/appData?country=hk">hk</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/api/appData?country=fr">fr</router-link>
      </div>
    </div>
    <list></list>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import split from '@/components/split/split';
  import list from '@/components/list/list';

  export default {
    components: {
      split,
      list
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
        &.router-link-active
          color: #42b983
</style>
