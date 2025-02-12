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
        @click="generateNewText()"
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
let shift = ref(0);
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

let newText = ref("");

function generateNewText() {
  newText.value = "";
  if (shift.value < -33 || shift.value > 33) {
    newText.value = "";
  }
  let letter = "";
  let text = "";
  for (letter of oldText.value) {
    var lowerInd = alphabetLowerRus.indexOf(letter);
    var upperInd = alphabetUpperRus.indexOf(letter);
    if (lowerInd != -1) {
      newText.value += alphabetLowerRus[-lowerInd + 32];
    } else if (upperInd != -1) {
      newText.value += alphabetUpperRus[-upperInd + 32];
    } else {
      newText.value += letter;
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
</style>
