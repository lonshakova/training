<template>
<div class="descriptions">
  <div v-for="cipher in ciphers">
    <CipherDescription :cipher="cipher"/>
    <!-- <hr> -->
  </div>
</div>
    
</template>

<script>
import CipherDescription from "../components/CipherDescription.vue";
export default {
  data() {
    return ({
      ciphers:[
        {
          altTitle:"/caesar",
          title: "Шифр Цезаря",
          description:"Простой метод шифрования, при котором каждая буква в тексте заменяется на букву, находящуюся на фиксированном числе позиций дальше в алфавите. Например, при сдвиге на 3 буква «A» станет «D», «B» — «E» и так далее. Этот шифр получил своё название в честь Юлия Цезаря, который использовал его для защиты своих сообщений."
        },
        {
          altTitle:"/atbash",
          title: "Шифр Атбаша",
          description:"Простой метод шифрования, основанный на замене букв. В этом шифре каждая буква алфавита заменяется на букву, расположенную на противоположном конце. Например, буква «А» заменяется на «Я», «Б» — на «Ю», и так далее. Этот шифр использовался в древности и часто встречается в еврейских текстах."
        },
        {
          altTitle:"/vernam",
          title: "Шифр Вернама",
          description:"Метод симметричного шифрования, который обеспечивает абсолютную безопасность при правильном использовании. Он основан на побитовой операции XOR между открытым текстом и случайно сгенерированным ключом такой же длины.При таком подходе шифр Вернама теоретически не поддается криптоанализу, поскольку каждый символ открытого текста зашифровывается уникальным символом ключа."
        },
        {
          altTitle:"/playfair",
          title: "Шифр Плейфера",
          description:"Метод шифрования, основанный на использовании квадратной таблицы для замены букв. В этом шифре буквы алфавита размещаются в квадрате 5x5, где каждая буква соответствует определённой позиции. При шифровании текст разбивается на пары букв, и если две буквы в паре совпадают, добавляется разделитель. Затем буквы заменяются в зависимости от их расположения: если они находятся в одной строке, заменяются на соседние буквы, если в одном столбце — на нижние."
        },
        {
          altTitle:"/codeword",
          title: "Шифр на основе кодового слова",
          description:"Метод шифрования, при котором используется заданное слово или фраза для создания уникального алфавита. Кодовое слово записывается без повторяющихся букв, а затем к нему добавляются оставшиеся буквы алфавита в порядке их появления. Например, если кодовое слово — «КОД», то шифрованный алфавит будет выглядеть так: К, О, Д, А, Б, Е, Ж, З и т.д. При шифровании каждая буква исходного текста заменяется на соответствующую букву из нового алфавита."
        }
      ]
    })
  },
  components:{
    CipherDescription
  },
};
</script>

<style scoped>
/* hr{
  width: 50vw;
  margin-left: 5vw;
} */

</style>
