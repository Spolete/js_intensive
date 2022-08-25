const task02 = () => {
  const number = +prompt('Введите первое число', 0);
  if (!isFinite(number)) {
    console.log("Некорректный ввод!");
    return
  }

  const notation = +prompt('Введите второе число', 0);
  if (!isFinite(notation)) {
    console.log("Некорректный ввод!");
    return
  }

  console.log(`Ответ: ${number + notation}, ${number / notation}.`)
}

task02();