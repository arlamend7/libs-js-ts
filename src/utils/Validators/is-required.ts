export const isRequired = (value) => {
  throw new Error(`${value} is required`);
};
