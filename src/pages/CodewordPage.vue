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
      Введите ключ:
      <v-text-field
        class="input"
        variant="solo"
        clearable
        width="20vw"
        density="compact"
        bg-color="var(--input-bg-color)"
        v-model="key"
      />
    </div>
    <div class="text">
      <v-btn
        @click="generateNewText()"
        :readonly="key ? false : true"
        :variant="key ? 'elevated' : 'tonal'"
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

const alphabetLowerRus = [
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
];

const alphabetUpperRus = [
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

let key = ref("");

let newText = ref("");

function generateNewText() {
  newText.value = "";

  let lowerKeyArray = key.value.toLowerCase().split("");
  const newLowerAlphabet = [...new Set(lowerKeyArray.concat(alphabetLowerRus))];

  for (let letter of oldText.value) {
    if (alphabetLowerRus.concat(alphabetUpperRus).indexOf(letter) == -1) {
      newText.value += letter;
    } else if (alphabetUpperRus.indexOf(letter) != -1) {
      let letterInd = alphabetUpperRus.indexOf(letter);
      newText.value += newLowerAlphabet[letterInd].toUpperCase();
    } else {
      let letterInd = alphabetLowerRus.indexOf(letter);
      newText.value += newLowerAlphabet[letterInd];
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
