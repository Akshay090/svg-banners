const svgs = require("../src/svg");

module.exports = (req, res) => {
  const { type, text1, text2, height, width } = req.query;

  res.setHeader("Content-Type", "image/svg+xml");

  const error_svg = "origin";

  let svg;

  if (type in svgs) {
    svg = svgs[type];
  } else {
    svg = svgs[error_svg];
    console.log(svg("Type not valid", "refer readme for details !!"));
    return res.send(svg("Type not valid", "refer readme for details !!"));
  }

  res.send(svg({ text1, text2, height, width }));
};
