// function printCombinations(arr) {
//   function permute(current, remaining) {
//     if (remaining.length === 0) {
//       console.log(current.join(' '));
//       return;
//     }

//     for (let i = 0; i < remaining.length; i++) {
//       const next = current.concat(remaining[i]);
//       const rest = remaining.slice(0, i).concat(remaining.slice(i + 1));
//       permute(next, rest);
//     }
//   }

//   permute([], arr);
// }

// // Example usage
// const names = ["A", "B", "C", "D"];
// printCombinations(names);
