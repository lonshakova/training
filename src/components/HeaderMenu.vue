<template>
  <div class="header">
    <v-btn class="logo" variant="text" @click="$router.push('/')">Ciphers</v-btn>
    <v-btn class="btn" variant="flat" @click="$router.push('/caesar')">Шифр Цезаря</v-btn>
    <v-btn class="btn" variant="flat" @click="$router.push('/atbash')">Шифр Атбаша</v-btn>
    <v-btn class="btn" variant="flat" @click="$router.push('/vernam')">Шифр Вернама</v-btn>
    <v-btn class="btn" variant="flat" @click="$router.push('/playfair')">Шифр Плейфера</v-btn>
    <v-btn class="btn" variant="flat" @click="$router.push('/codeword')">Кодовое слово</v-btn>
  </div>
</template>

<script>

</script>

<style scoped >
.header {
  width: 100vw;
  min-height: 10vh;
  background: var(--header-bg-color);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.logo {
  margin:0;
  min-height: 100px;
  font-size: 50px;
  font-weight: 700;
  color: var(--btn-header-color);
}
.logo:hover {
  background: var(--header-bg-color);
}

.btn {
  margin: 10px 0;
  width: 250px;
  min-width: fit-content;
  min-height: 56px;
  border-radius: 15px;
  background: var(--btn-header-color);
  font-size: large;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--main-text-color);
}
</style>
