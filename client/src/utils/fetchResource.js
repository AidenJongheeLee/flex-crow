const get = string => Promise.resolve(`fetched: ${string}`);

module.exports = {
  get,
};
