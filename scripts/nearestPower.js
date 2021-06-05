function nearestPower(num) {
  // eslint-disable-next-line no-undef
  console.log(Math.pow(2, Math.round(Math.log(num) / Math.log(2))));
}

// eslint-disable-next-line no-undef
nearestPower(parseInt(process.argv.slice(2)[0]));
