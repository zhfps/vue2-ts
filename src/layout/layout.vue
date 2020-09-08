<template>
  <div>
    <el-row>
      <el-col :span="24">
        <v-header />
      </el-col>
    </el-row>
    <el-row>
      <el-container>
        <el-aside>
          <v-menu
            :is-collapse="isCollapse"
          />
        </el-aside>
        <el-main>
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
@Component({
  components: {
    VMenu,
    VHeader
  }
})
export default class Layout extends Vue{
  private isCollapse = false
}
</script>
