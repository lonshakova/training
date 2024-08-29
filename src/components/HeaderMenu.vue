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
  height: 100px;
  background: #FF86C8;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.logo {
  margin:0;
  min-height: 100px;
  font-size: 50px;
  font-weight: 700;
  color: #FFDC5E;
}
.logo:hover {
  background: #FF86C8;
}

.btn {
  width: 250px;
  min-width: fit-content;
  min-height: 56px;
  border-radius: 15px;
  background-color: #FFDC5E;
  font-size: large;
  text-transform: uppercase;
  font-weight: 700;
  color: #972f89;
}
</style>
