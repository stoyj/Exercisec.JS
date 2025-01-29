// 2. Find the Perfect Short-and-Sweet Pair

// task2
function findClosestPair(playlist, targetDuration) {
  let closestPair = null; // Запазвам най-добрата двойка
  let closestDifference = Infinity; // Най-добрата разлика (начално безкрайна)

  // Вложен цикъл за проверка на всички двойки песни
  for (let i = 0; i < playlist.length; i++) {
    for (let j = i; j < playlist.length; j++) {
      const song1 = playlist[i];
      const song2 = playlist[j];
      const totalDuration = song1.duration + song2.duration;

      // Изчисляваме разликата с целевата стойност
      const difference = Math.abs(targetDuration - totalDuration);

      // Проверяваме дали тази двойка е по-добра
      if (difference < closestDifference) {
        closestPair = { pair: [song1.title, song2.title], totalDuration };
        closestDifference = difference;
      }
    }
  }
  return closestPair;
}

const playlist = [
  { title: "Song A", duration: 3.5 },
  { title: "Song B", duration: 4.2 },
  { title: "Song C", duration: 5.1 },
  { title: "Song D", duration: 2.8 },
];

const result = findClosestPair(playlist, 5);
console.log(result);

// {
//   pair: ["Song D", "Song A"],
//   totalDuration: 6.3
// }
