export const hashtags = (text) => { //DONE!
  return text.match(/#[a-z]+/gi);
}

// const hashtags = (text) => {
//   let newText = text.split(" ")
//   return newText.filter(word => word[0] === "#")
// }