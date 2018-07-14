// const get = async (string) => {
//   const res = await fetch('http://127.0.0.1:')
//   let dara = await res.json();
//   console.log('res', res);
//   return Promise.resolve(`fetched: ${string}`);
// };

async function get(name) {
  const data = await (await fetch('http://127.0.0.1:5000')).json();
  return Promise.resolve(`${name} fetched: ${data.bob}`);
}

// Promise.resolve(`fetched: ${string}`);

const exports = {
  get,
};

export default exports;
