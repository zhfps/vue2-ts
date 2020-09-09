<template>
  <div class="v-header">
    IMES
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class VHeader extends Vue{}
</script>
<style lang="less">
 .v-header{
    background-color: rgb(71, 119, 201); 
    height: 44px; 
    line-height: 44px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
 }
</style>