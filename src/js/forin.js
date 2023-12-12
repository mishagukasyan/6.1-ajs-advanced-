export default function orderByProps(object, arrStart) {
  const arrKey = []; 
  for (const el in object) {
    if ({}.hasOwnProperty.call(object, el)) {
      arrKey.push(el);
    }
  }
  const arrResult = []; 
  arrKey.sort(); 

  const arrReverse = arrStart.reverse(); 
  for (let i = 0; i < arrReverse.length; i += 1) { 
    const index = arrKey.findIndex((item) => item === arrReverse[i]); 
    arrKey.unshift(...arrKey.splice(index, 1)); 
  }
  for (let i = 0; i < arrKey.length; i += 1) { 
    const k = arrKey[i];
    const newObject = { key: k, value: object[k] };
    arrResult.push(newObject); 
  }
  return arrResult;
}
