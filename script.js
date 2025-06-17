function trailingZeros(n) {
  let count = 0;
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

const input = prompt("Enter a number");
const number = parseInt(input);

if (!isNaN(number) && number >= 0) {
  alert(trailingZeros(number));
} else {
 // alert("Please enter a valid non-negative integer.");
}

