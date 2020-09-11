<template>
  <div class="v-header">
    <div
      class="isCollapse"
      :style="{marginLeft}"
      @click.stop="changeMenu"
    >
      <i :class="menuIcon" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class VHeader extends Vue{
  private isCollapse = false
  private menuIcon = 'el-icon-s-fold'
  private  marginLeft = '240px'
  private changeMenu(){
    if(this.menuIcon === 'el-icon-s-fold'){
       this.menuIcon = 'el-icon-s-unfold'
       this.isCollapse = true
       this.marginLeft = '60px'
    }else{
       this.menuIcon = 'el-icon-s-fold'
       this.isCollapse = false
       this.marginLeft = '240px'
    }

    this.$emit("change",this.isCollapse)
  }

}
</script>
<style lang="less">
 .v-header{
    background-color: rgb(71, 119, 201); 
    height: 44px; 
    line-height: 44px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    .isCollapse {     
      font-size: 24px;
      color: #409EFF;
    }

 }
</style>