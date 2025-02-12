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

function generateMatrix(alphabet) {
  let matrix = [];
  for (let i = 0; i < 4; i++) {
    matrix.push(alphabet.slice(i * 8, (i + 1) * 8));
  }
  return matrix;
}

function generateNewText() {
  newText.value=""

  let lowerKeyArray = key.value.toLowerCase().split("");
  for (let letter in lowerKeyArray) {
    if (lowerKeyArray[letter] == "ё") {
      lowerKeyArray[letter] = "е";
    }
  }
  const newLowerAlphabet = [...new Set(lowerKeyArray.concat(alphabetLowerRus))];
  let upperKeyArray = key.value.toUpperCase().split("");
  for (let letter in upperKeyArray) {
    if (upperKeyArray[letter] == "Ё") {
      upperKeyArray[letter] = "Е";
    }
  }
  const newUpperAlphabet = [...new Set(upperKeyArray.concat(alphabetUpperRus))];

  let lowerMatrix = generateMatrix(newLowerAlphabet);

  let textWithoutSpaces = "";
  for (let letter of oldText.value) {
    if (newLowerAlphabet.concat(newUpperAlphabet).indexOf(letter) != -1) {
      textWithoutSpaces += letter;
    }
  }

  if (textWithoutSpaces.length % 2 != 0) {
    textWithoutSpaces = textWithoutSpaces + "ъ";
  }

  textWithoutSpaces=textWithoutSpaces.toLowerCase()

  let first = {
    x: 0,
    y: 0,
  };

  let second = {
    x: 0,
    y: 0,
  };

  let text = "";

  for (let ind = 0; ind < textWithoutSpaces.length; ind += 2) {
    if (newLowerAlphabet.indexOf(textWithoutSpaces[ind]) != -1) {
      for (let i = 0; i < 4; i++) {
        if (lowerMatrix[i].indexOf(textWithoutSpaces[ind]) != -1) {
          first.x = i;
          first.y = lowerMatrix[i].indexOf(textWithoutSpaces[ind]);
        }
      }
    }

    if (newLowerAlphabet.indexOf(textWithoutSpaces[ind + 1]) != -1) {
      for (let i = 0; i < 4; i++) {
        if (lowerMatrix[i].indexOf(textWithoutSpaces[ind + 1]) != -1) {
          second.x = i;
          second.y = lowerMatrix[i].indexOf(textWithoutSpaces[ind + 1]);
        }
      }
    }

  if (first.x == second.x) {

    if (first.y < second.y) {
      text += lowerMatrix[first.x][(first.y + 1) % 8];
      text += lowerMatrix[second.x][(second.y + 1) % 8];
    } else {
      text += lowerMatrix[second.x][(second.y + 1) % 8];
      text += lowerMatrix[first.x][(first.y + 1) % 8];
    }
  } else if (first.y == second.y) {
    if (first.x < second.x) {
      text += lowerMatrix[(first.x + 1) % 4][first.y];
      text += lowerMatrix[(second.x + 1) % 4][second.y];
      
    } else {
      text += lowerMatrix[(second.x + 1) % 4][second.y];
      text += lowerMatrix[(first.x + 1) % 4][first.y];
      
    }
  } else {
    if (first.x < second.x) {
      text += lowerMatrix[first.x][second.y];
      text += lowerMatrix[second.x][first.y];
    } else {
      text += lowerMatrix[second.x][first.y];
      text += lowerMatrix[first.x][second.y];
    }
  }
  }
  let i = 0;

  for (let letter of oldText.value){
    if (newLowerAlphabet.concat(newUpperAlphabet).indexOf(letter) == -1){
      newText.value += letter;
    }
    else if (newUpperAlphabet.indexOf(letter) != -1){
      newText.value += text[i].toUpperCase();
      i++;
    }
    else {
      newText.value += text[i];
      i++;
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
