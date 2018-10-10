import React from 'react';
import * as Rules from "./rules";

export default function(value) {
  if (Rules.Mac.getResult()) {
    return <p>Get a PC</p>;
  } else if (Rules.Contribute.getResult(value)) {
    window.location.href = "https://github.com/hoily/how-do-i";
    return <p>Github</p>;
  } else {
    return <p>Don't</p>
  }
}
