<template>
  <v-form class="main-content">
    <div class="text">
      Введите текст, который хотите зашифровать:
      <v-textarea
        class="input"
        clearable
        variant="solo"
        bg-color="var(--input-bg-color)"
        rows="5"
        no-resize
        v-model="oldText"
      />
    </div>

    <div class="text">
      <v-btn
        @click="generateKey()"
        :readonly="oldText.length ? false : true"
        :variant="oldText.length ? 'elevated' : 'tonal'"
        >Сгенерировать ключ</v-btn
      >
      <div v-if="key.length != oldText.length && key.length != 0" class="error">
        <v-icon icon="mdi-alert-circle"></v-icon>
        Длина ключа должна совпадать с длиной текста!
      </div>
      <v-textarea
        class="input"
        clearable
        variant="solo"
        bg-color="var(--input-bg-color)"
        rows="5"
        no-resize
        v-model="key"
      />
    </div>
    <div class="text">
      <v-btn
        @click="generateNewText()"
        :readonly="key.length == oldText.length && key.length != 0 ? false : true"
        :variant="key.length == oldText.length && key.length != 0 ? 'elevated' : 'tonal'"
        >Зашифровать текст</v-btn
      >
      <v-textarea
        class="input"
        readonly
        variant="solo"
        bg-color="var(--input-bg-color)"
        rows="5"
        no-resize
        v-model="newText"
      />
    </div>
  </v-form>
</template>

<script setup>
import { ref } from "vue";

let oldText = ref("");

const alphabetRus = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
];

const keyLetters = alphabetRus.concat([
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]);

let key = ref("");

function generateKey() {
  key.value="";
  for (let letter in oldText.value) {
    key.value += keyLetters[Math.round(Math.random() * oldText.value.length)];
  }
}

let newText = ref("");

function generateNewText() {
  newText.value = "";
  for (let letter in oldText.value) {
    let ind = keyLetters.indexOf(oldText.value[letter]);
    if (ind != -1) {
      let keyInd = keyLetters.indexOf(key.value[letter]);
      let resInd = keyInd ^ ind;
      newText.value += keyLetters[resInd];
    } else {
      newText.value += oldText.value[letter];
    }
  }
}
</script>

<style scoped>
.main-content {
  margin-top: 5vh;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.text {
  height: fit-content;
  width: 90%;
  font-size: large;
  font-weight: 500;
  color: var(--main-text-color);
}

.input {
  margin-top: 10px;
  box-sizing: content-box;
}

.error {
  color: red;
  justify-self: center;
  align-self: center;
}
</style>
