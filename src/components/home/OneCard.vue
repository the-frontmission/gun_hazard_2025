<script setup lang="ts">
const props = defineProps<{
  subTitle: string,
  mainTitle: string,
  imgUrl: string,
}>();
</script>

<template>
  <div class="card border-0">
    <img class="card-img rounded-0" :src="props.imgUrl" alt="Card image">
    <div class="card-img-overlay d-flex justify-content-center align-items-center">
      <div class="text-white text-center">
        <h2 class="display-4 text-uppercase">{{ props.subTitle }}</h2>
        <h1 class="display-1 font-weight-bold border-top border-bottom">{{ props.mainTitle }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img {
  height: 80vh;
  object-fit: cover;
}

@media (max-width: 991.98px) {
  .display-4 {
    font-size: 1.5rem;
  }
  .display-1 {
    font-size: 3rem;
  }
}
</style>
