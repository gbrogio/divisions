// 22/7
const number = '22';
const divider = '7';

const numberTb = Array.from({length: 10}, (_, i) => Number(number) * (i + 1));
const dividerTb = Array.from({length: 10}, (_, i) => Number(divider) * (i + 1));

let result = '';
let lastUsed = '';
let q = '';
let time = 0;
let rest = ''

setInterval(() => {
  const i = dividerTb.indexOf(dividerTb.reduce((acc, curr) => {
    if (curr <= Number(number)) return curr
    return acc
  }, 0));

  if (Number(number) - dividerTb[i] === 0) return

  if (!time) {
    q += i + 1 + '.'
    time++
    rest = Number(number) - dividerTb[i] + ''
    return
  }

  while(Number(rest) < Number(divider)) {
    rest += '0'
  }
  const j = dividerTb.indexOf(dividerTb.reduce((acc, curr) => {
    if (curr <= Number(rest)) return curr
    return acc
  }, 0));
  
  q += j + 1 + ''
  rest = Number(rest) - dividerTb[j] + ''
  
  
  if (q.length < 2001) {console.clear(); console.log(q)}
}, 10);

