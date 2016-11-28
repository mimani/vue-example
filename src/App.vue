<template>
  <div id="app">
    <div class="j-header">
      <div class="inner">
        <router-link to="/" exact>
          <!-- <img class="logo" src="./assets/logo.png" alt="logo"> -->
        </router-link>
        <router-link class="links" to="/contact">CONTACT US</router-link>
        <router-link class="links" to="/blogs">BLOGS</router-link>
        <router-link class="links" to="/about">ABOUT</router-link>
        <router-link class="links" to="/#for-business">FOR BUSINESS</router-link>
        <router-link class="links" to="/#for-home">FOR HOME</router-link>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @import "variables.styl";

body
  font-family Roboto, Helvetica, sans-serif
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  padding-top 55px
  color #34495e

a
  color #34495e
  text-decoration none

.j-header
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  background-color rgba(255,255,255,0.4);
  position fixed
  z-index 999
  top 0
  left 0
  right 0
  .inner
    max-width pageWidth
    box-sizing border-box
    margin 0px auto
    padding 15px 5px
  a
    color rgba(0, 0, 0, .8)
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    &:hover
      color #000
    &.router-link-active
      color #000
      font-weight 400
    &:nth-child(2)
      margin-right 0
  .links
    color #000
    font-size .9em
    float right

.logo
  width 100px
  margin-right 10px
  display inline-block
  vertical-align middle

.view
  margin 0 auto
  position relative

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0

@media (max-width 860px)
  .j-header .inner
    padding 15px 30px

@media (max-width 600px)
  body
    font-size 14px
  .j-header
    .inner
      padding 15px
    a
      margin-right 1em
</style>
