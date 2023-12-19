// input is a string
export const createTitle = (input) => {
  return input.split('-').map(word => { return word[0].toUpperCase() + word.substring(1) }).join(' ');
}