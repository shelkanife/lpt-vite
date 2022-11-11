export const mix = (arr) => {
  let i = arr.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

export const getOpts = (current, array) => {
  const opts = [];
  const filteredArray = array.filter((e) => e !== current);
  opts.push(current);
  let index = Math.floor(Math.random() * filteredArray.length);
  for (let i = 0; i < 3; i++) {
    while (opts.includes(filteredArray[index]))
      index = Math.floor(Math.random() * filteredArray.length);
    opts.push(filteredArray[index]);
  }
  console.log("finished");
  return mix(opts);
};
