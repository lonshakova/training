<template>
  <v-form class="main-content">
    <div class="text-input">
      Введите текст, который хотите зашифровать:
      <v-textarea
        class="input"
        clearable
        variant="solo"
        bg-color="var(--input-bg-color)"
        rows="5"
        no-resize
        v-model="text"
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
          <v-icon icon="mdi-alert-circle"></v-icon>
          Значение не может быть меньше -33 или больше 33
        </div>
        <v-btn class="input" size="x-large" v-if="!(shift < -33 || shift > 33)" @click="encryptText()" 
          >Готово</v-btn
        >
      </div>
    </div>
  </v-form>
  {{ newText }}
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    let text = ref("");
    let shift = ref(0);
    let newText = ref("");
    const alphabetLowerRus = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
    const alphabetUpperRus = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
    function encryptText() {
      newText.value = "";
      let letter="";
      for (letter of text.value) {
        var lowerInd = alphabetLowerRus.indexOf(letter);
        var upperInd = alphabetUpperRus.indexOf(letter);
        if (lowerInd != -1) {
          lowerInd = (lowerInd + +shift.value) % 33;
          lowerInd = lowerInd > 0 ? lowerInd : 33 + lowerInd;
          newText.value += alphabetLowerRus[lowerInd];
        }
        else if (upperInd != -1) {
          upperInd = (upperInd + +shift.value) % 33;
          upperInd = upperInd > 0 ? upperInd : 33 - upperInd;
          newText.value += alphabetUpperRus[upperInd];
        }
        else {
          newText.value += letter;
        }
      }
    }
    return {
      text,
      shift,
      newText,
      encryptText,
    };
  },
};
</script>

<style scoped>
.main-content {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.text-input {
  margin-top: 5vh;
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
  margin: 0;
  width: 90%;
  font-size: large;
  font-weight: 500;
  color: var(--main-text-color);
}

.number-and-btn {
  display: flex;
  justify-content: space-between;
}

.error-number {
  margin-top: 1em;
  justify-self: left;
  color: red;
}
</style>
