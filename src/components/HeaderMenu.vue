<template>
  <ul class="header">
    <li><a class="logo" @click="$router.push('/')">Ciphers</a></li>
    <v-btn class="btn" variant="flat" @click="$router.push('/caesar')">Шифр Цезаря</v-btn>
    <v-btn class="btn" variant="flat" @click="$router.push('/atbash')">Шифр Атбаша</v-btn>
    <v-btn class="btn" variant="flat" @click="$router.push('/vernam')">Шифр Вернама</v-btn>
    <v-btn class="btn" variant="flat" @click="$router.push('/playfair')">Шифр Плейфера</v-btn>
    <v-btn class="btn" variant="flat" @click="$router.push('/codeword')">Кодовое слово</v-btn>
  </ul>
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

.header:last-child {
  margin-left: 10px;
}

.logo {
  margin:0;
  min-height: 10vh;
  font-size: 60px;
  font-weight: 700;
  color: var(--btn-header-color);
  cursor: pointer;
  text-decoration: none;
}
.logo:hover {
  background: var(--header-bg-color);
}

.btn {
  margin: 10px 0;
  width: 13vw;
  min-width: 200px;
  min-height: 56px;
  border-radius: 15px;
  background: var(--btn-header-color);
  font-size: large;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--main-text-color);
}
</style>
