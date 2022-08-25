const number = +prompt('Введите число', 0);
const notation = +prompt('Введите систему счисления', 10);

if (isFinite(number) && isFinite(notation)) {
  console.log(number.toString(notation))
} else {
  console.log("Некорректный ввод!")
}