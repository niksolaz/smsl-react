"use strict";

React.render(React.createElement(
  "h1",
  null,
  "Hello, world!"
), React.createElement("textarea", { rows: "4", cols: "50" }), React.createElement(
  "button",
  { type: "submit" },
  "Send Me!"
), document.getElementById('textarea'));