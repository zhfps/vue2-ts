<template>
  <div class="v-tags">
    <div class="v-tag">
      <el-tag
        size="mini"
        closable
      >
        小型标签
      </el-tag>
    </div>
    <div class="v-tag">
      <el-tag
        size="mini"
        closable
      >
        小型标签
      </el-tag>
    </div>
    <div class="v-tag">
      <el-tag
        size="mini"
        closable
      >
        小型标签
      </el-tag>
    </div>
  </div>
</template>
<script lang="ts">
import{Component, Vue}  from 'vue-property-decorator'

@Component
export default class VTags extends Vue{

}
</script>
<style lang="less" scoped>
 .v-tags{
   display: flex;
    height: 25px;
      overflow: hidden;
        background: #fff;
        padding-right: 120px;
        box-shadow: 0 2px 1px #ddd;
    .v-tag{
          margin: 2px 2px 0 5px;
        }
 }
</style>