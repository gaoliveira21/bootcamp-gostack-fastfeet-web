const cepMask = (value) => {
  const regex = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;

  if (regex.test(value)) return value.replace(regex, '$1$2-$3');

  return value;
};

export default cepMask;
