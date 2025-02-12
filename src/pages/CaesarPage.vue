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
    <div class="input-number">
      Укажите размер сдвига:
      <div class="number-and-btn">
        <v-text-field
          class="input"
          density="compact"
          type="number"
          bg-color="var(--input-bg-color)"
          variant="solo"
          max-width="100px"
          v-model="shift"
        />
        <div v-if="shift < -33 || shift > 33" class="error-number">
        <v-icon icon="mdi-alert-circle"/>
        Значение не может быть меньше -33 или больше 33
      </div>
      </div>
    </div>
    
    <div class="text">
      <v-btn
        @click="generateNewText()"
        :readonly="shift > -33 && shift < 33 ? false : true"
        :variant="shift > -33 && shift < 33 ? 'elevated' : 'tonal'"
        >Зашифровать текст</v-btn
      >
      <v-textarea
        class="input"
        clearable
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

function generateNewText(){
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
      lowerInd = (lowerInd + +shift.value) % 33;
      lowerInd = lowerInd >= 0 ? lowerInd : 33 + lowerInd;
      newText.value  += alphabetLowerRus[lowerInd];
    } else if (upperInd != -1) {
      upperInd = (upperInd + +shift.value) % 33;
      upperInd = upperInd >= 0 ? upperInd : 33 + upperInd;
      newText.value  += alphabetUpperRus[upperInd];
    } else {
      newText.value  += letter;
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

.input-number {
  font-size: large;
  font-weight: 500;
  color: var(--main-text-color);
  align-self: right;
  width: 90%;
}

.number-and-btn {
  display: flex;
  width: 100%;
}

.error-number {
  color: red;
  justify-self: center;
  align-self: center;
}
</style>
