<template>
  <div class="main-content">
    <v-form class="text-form">
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
    <v-card class="new-text"  variant="text">
      {{ newText }}
    </v-card>
  </div>
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
          lowerInd = lowerInd > 0 ? lowerInd : (33 + lowerInd) % 33;
          newText.value += alphabetLowerRus[lowerInd];
        }
        else if (upperInd != -1) {
          upperInd = (upperInd + +shift.value) % 33;
          upperInd = upperInd > 0 ? upperInd : (33 + upperInd) % 33;
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
  flex-direction: column;
  align-items: center;
}

.text-form {
  display: flex;
  flex-direction: column;
  width: 90%;
}

.text-input {
  margin-top: 5vh;
  height: fit-content;
  font-size: large;
  font-weight: 500;
  color: var(--main-text-color);
}

.input:deep {
  margin-top: 10px;
  box-sizing: content-box;
}

.input-number {
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

.new-text {
  padding: 1% 2%;
  min-height: 14vh;
  width: 86%;
  background-color: var(--new-text-bg-color);
  border-radius: 5px;
}
</style>
