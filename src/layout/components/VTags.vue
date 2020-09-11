<template>
  <div class="v-tags">
    <div
      class="v-tag"
      v-for="(page,key) in pages"
      :key="key"
    >
      <el-tag
        size="mini"
        closable
        @close="colse(page.path)"
        @click="link(page.path)"
      >
        {{ page.name }}
      </el-tag>
    </div>
  </div>
</template>
<script lang="ts">
import{Component, Vue}  from 'vue-property-decorator'

@Component
export default class VTags extends Vue{
  private pages =[
    {path: '/test',name: '测试'},
    {path: '/home',name: '首页'}
    ]
  private colse(path: string): void{
    this.pages.splice(this.pages.findIndex(x=>x.path === path),1)
    const pagesNum = this.pages.length;
    if(pagesNum>0){
         const pagePath = this.pages[pagesNum-1].path
          if(this.$route.path !== pagePath){
                this.$router.push(pagePath)
            }        
    }else{
      this.$router.push('/home')
    }
  }
  private link(path: string): void{
    if(this.$route.path !== path){
        this.$router.push(path)
    }
  }
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