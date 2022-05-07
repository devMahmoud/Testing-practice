const stringLength = (text) => {
  if(text.length < 1 | text.length > 10) {
    throw new Error('string is empty or too long');
  } 
  return text.length
};



export default stringLength;