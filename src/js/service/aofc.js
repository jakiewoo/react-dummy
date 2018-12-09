
export function takeSnapshot() {
  console.log('hello')
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('C:/wa.jpg')
    }, 1000);
  });
}

export function remoteAPIcall(payload) {
  return fetch('http://www.mocky.io/v2/5c0b36562f0000790013ebb2?mocky-delay=10000ms');
}