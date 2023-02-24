const sqrt = 2;
let result = '';
let rest = '';
let num = '';
let time = 0

let mresult = ''
let mnum = ''
let mtime = ''

setInterval(() => {
  let i = 0;
  while((i + 1) * (i + 1) <= sqrt) {
    i++
  }

  if (!time) {
    result += i + '.'
    time++
    rest = sqrt - Number(i) + ''
    num = Number(rest) + Number(rest) + ''
    return;
  }

  let j = 0;
  let numberDiff = Number(rest) * 100
  while(Number(num + j) * j <= numberDiff) {
    if (Number(num + (j + 1)) * (j + 1) >= numberDiff) break
    j++
  }
  const toDiff = Number(num + j) * j;
  rest = numberDiff - toDiff + ''
  num = num + (j + j) + ''
  result += j
  if (j === 0) result = result.substring(0,result.length-1)

  console.clear(); 
  console.log(result)
}, 10);

