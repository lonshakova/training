<template>
    <div class="cipher">
        <h2 class="title" @click="$router.push(cipher.altTitle)">
            {{ cipher.title }}
        </h2>
        <p class="description">
            {{ cipher.description }}
        </p>
        <v-divider />
    </div>
</template>

<script>
export default {
    props: {
        cipher: {
            type: Object,
            required: true,
        }
  }
};
</script>

<style scoped >
.cipher {
  margin: 20px;
  background: var(--article-bg-color);
  color: var(--main-text-color);
}
.title {
    cursor: pointer;
}
.description {
    padding-left: 10px;
    cursor: default;
}
</style>
  