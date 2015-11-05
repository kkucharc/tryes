var tab = [1,2,3];
tab.forEach(it => console.log(it*2));

var nums = tab.map((v, i) => v + i);
console.log(nums);

var pairs = tab.map(v => ({even: v, odd: v + 1}));
console.log(pairs);

