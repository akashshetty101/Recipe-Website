export function limitWords(str, count) {
    if (!str || count <= 0) return str;
  
    const words = str.split(" ");
    let result = "";
  
    for (let i = 0; i < Math.min(count, words.length); i++) {
      result += (i > 0 ? " " : "") + words[i];
    }
  
    return result;
  }