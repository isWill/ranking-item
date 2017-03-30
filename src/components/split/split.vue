<template>
  <div class="split">
    <div class="img-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .split
    position: relative
    width: 100%
    height: 1rem
    background: #eee
    .img-wrapper
      position: absolute
      top: .2rem
      left: 50%
      margin-left: -0.3rem
      width: .6rem
      height: .6rem
      background: url("logo.png") no-repeat
      background-size: 100% 100%
</style>
