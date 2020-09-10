<template>
  <div>
    <el-row>
      <el-col :span="24">
        <v-header
          @change="changMenu"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-container>
        <el-aside
          class="v-aside"
          :style="{width: sideWidth}"
        >
          <v-menu
            :is-collapse="isCollapse"
          />
        </el-aside>
        <el-main>
          <v-tags />
          <router-view />
        </el-main>
      </el-container>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VMenu from './components/VMenu.vue'
import VHeader from './components/VHeader.vue'
import VTags from './components/VTags.vue'
@Component({
  components: {
    VMenu,
    VHeader,
    VTags
  }
})
export default class Layout extends Vue{
  private isCollapse = true

  private sideWidth = '240px'

  private changMenu(data: boolean){
    this.isCollapse = data

    if(data){
      this.sideWidth = '64px'
    }else{
      this.sideWidth = '240px'
    }
  }
}
</script>
<style lang="less" scoped>
.v-aside{
  height: calc(100vh - 44px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>