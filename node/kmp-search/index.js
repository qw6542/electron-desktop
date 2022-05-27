function search(text, pattern) {
    let t_index = 0;
    let p_index = 0;
    const nextTable = next(pattern);
    const res = [];
  
    while (p_index < text.length - t_index) {
      if (text.charAt(t_index) == pattern.charAt(p_index)) {
        p_index += 1;
        t_index += 1;
        if (p_index == pattern.length - 1) {
          res.push(t_index - p_index);
        }
      } else {
        if (p_index > 0) {
          p_index = nextTable[p_index - 1];
        } else {
          t_index += 1;
        }
      }
    }
    return res;
  }
  
  function next(pattern) {
    const lsp = [0];
    let len = 0;
    let i = 1;
  
    while (lsp.length < pattern.length) {
      if (pattern.charAt(i) === pattern.charAt(len)) {
        len += 1;
        lsp[i] = len;
        i += 1;
      } else {
        if (len > 0) {
          len = lsp[len - 1];
        } else {
          lsp[i] = 0;
          i += 1;
        }
      }
    }
    return lsp;
  }
  

  module.exports = { search }
