<template>
  <div class="descriptions">
    <div v-for="cipher in ciphers">
      <CipherDescription :cipher="cipher" />
    </div>
  </div>
</template>

<script>
import CipherDescription from "../components/CipherDescription.vue";
export default {
  data() {
    return {
      ciphers: [
        {
          altTitle: "/caesar",
          title: "Шифр Цезаря",
          description:
            "Метод шифрования, при котором каждая буква в тексте заменяется на букву, находящуюся на фиксированном числе позиций дальше в алфавите. Например, при сдвиге на 3 буква «A» станет «Г», «Б» — «Д» и так далее. Этот шифр получил своё название в честь Юлия Цезаря, который использовал его для защиты своих сообщений.",
        },
        {
          altTitle: "/atbash",
          title: "Шифр Атбаша",
          description:
            "Метод шифрования, основанный на замене букв. Каждая буква алфавита заменяется на букву, расположенную на противоположном конце. Например, буква «А» заменяется на «Я», «Б» — на «Ю», и так далее. Этот шифр использовался в древности и часто встречается в еврейских текстах.",
        },
        {
          altTitle: "/vernam",
          title: "Шифр Вернама",
          description:
            "Метод симметричного шифрования, который основан на побитовой операции XOR между буквами открытого текста и ключом такой же длины. При таком подходе шифр Вернама теоретически не поддается криптоанализу.",
        },
        {
          altTitle: "/playfair",
          title: "Шифр Плейфера",
          description:
            'Метод шифрования, основанный на использовании матрицы для замены букв. Буквы алфавита размещаются в матрице 4x8. При шифровании текст разбивается на пары букв, если текст имеет нечётное количечтво букв, в конце добавляется "ъ". Затем буквы заменяются в зависимости от их расположения: если они находятся в одной строке, заменяются на соседние буквы справа, если в одном столбце — на нижние, если же буквы находятся в разных строках и стобцах, они заменяются на буквы, стоящие в углах прямоугольника.',
        },
        {
          altTitle: "/codeword",
          title: "Шифр на основе кодового слова",
          description:
            "Метод шифрования, при котором используется заданное слово или фраза для создания уникального алфавита. Кодовое слово записывается без повторяющихся букв, а затем к нему добавляются оставшиеся буквы алфавита в порядке их появления. Например, если кодовое слово — «КОД», то шифрованный алфавит будет выглядеть так: К, О, Д, А, Б, В, Г, Е и т.д. При шифровании каждая буква исходного текста заменяется на соответствующую букву из нового алфавита.",
        },
      ],
    };
  },
  components: {
    CipherDescription,
  },
};
</script>

<style scoped></style>
