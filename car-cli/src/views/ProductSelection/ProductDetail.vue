<template>
  <div>
    <div class="count">
      <h3>{{ title }}</h3>
      <div class="pic">
        <img :src="require('../../assets/car-detail-img/' + pic1)" alt="" />
        <img :src="require('../../assets/car-detail-img/' + pic2)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import httpApi from '../../http'
export default {
  data() {
    return {
      title: '',
      pic1: '',
      pic2: '',
    }
  },
  mounted() {
    let id = { id: this.$route.query.id }
    let title = { title: this.$route.query.title }
    httpApi.prosetApi.prosetdetail(id).then(res => {
      title = title.title
      let result = res.data.data.result
      result.forEach(element => {
        let a = element.pic
        let b = a.split('#')
        console.log(b)
        let pic1 = b.at(0)
        let pic2 = b.at(1)
        this.pic1 = pic1
        this.pic2 = pic2
        console.log('pic1', pic1)
        // b.forEach(element => {
        //   console.log(element)
        //   this.pic = b
        // })
      })
      this.title = title
    })
  },
}
</script>

<style lang="scss" scoped>
.pic {
  max-width: 1230px;
  min-width: 1200px;
  margin: 0 auto;

  img {
    width: 100%;
  }
}
h3 {
  font-weight: 400;
  text-align: center;
  margin: 50px 0;
}
</style>
