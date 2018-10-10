import Parser from 'ua-parser-js';

const useragent = new Parser();

const Rule = class Rule {
  constructor(options) {
    if(options.os != null) {
      this.os = options.os
    }
    if (options.text != null) {
      this.text = options.text;
    }
  }

  getResult(input) {
    if (this.text != null) {
      return input.toLowerCase() === this.text.toLowerCase();
    } else if (this.os != null) {
      return useragent.getOS().name === this.os;
    } else {
      return false
    }
  }
};

export const Mac = new Rule({os: "Mac OS"});
export const Contribute = new Rule({ text: "contribute" });
