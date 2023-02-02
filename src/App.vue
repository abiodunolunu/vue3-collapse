<script  lang="ts">
import { defineComponent, ref } from 'vue';
import Vue3Collapse from './components/Vue3Collapse.vue';


export default defineComponent({
  components: {
    Vue3Collapse,
  },
  setup() {
    const val = ref(false)

    return {
      val
    }
  }
})

</script>

<template>
  <div>

    <button @click="val = !val">Toggle</button>
    <br>

    <Vue3Collapse v-model="val" duration="320">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, laborum perferendis? Quaerat harum atque vero
        repudiandae dolor quisquam beatae magnam nemo iusto obcaecati! Aut iste delectus possimus, a at aspernatur
        consequatur debitis adipisci quasi excepturi ullam inventore iure, nobis repellendus quod pariatur voluptatum
        fuga, rerum consequuntur? Ab libero ipsum veniam odit tenetur pariatur aut facere sed impedit totam. Obcaecati
        cumque sint vitae quaerat, minima accusantium repudiandae ipsam ea nihil fugiat, perspiciatis eum. Ipsa cum
        consequatur nihil deleniti cumque quod debitis quisquam, a placeat incidunt tempora sequi minus repellendus
        obcaecati aliquam culpa officia quos sed blanditiis corporis accusantium. Eveniet debitis at architecto commodi
        est maiores beatae repellendus eligendi labore, magnam iste quae nesciunt fugit veritatis laudantium quam hic
        recusandae harum, adipisci culpa provident explicabo dolore! Porro natus error voluptas alias dolorem enim
        blanditiis minima consequatur sapiente. Aperiam beatae, cumque quis assumenda ea, modi ipsam officia dolores,
        magnam voluptatem itaque consectetur nemo.</div>
    </Vue3Collapse>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
