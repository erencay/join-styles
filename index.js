function joinStyles() {
  var args = Array.prototype.slice.call(arguments);
  var styles = {};

  if (typeof args[0] === "object" && args[0] !== null) {
    styles = args.shift();
  }

  var classNames = [];

  for (var i = 0; i < args.length; i++) {
    var className = styles[args[i]] || args[i];

    if (!className) {
      continue;
    }

    if (classNames.includes(className)) {
      className = args[i];
    }

    classNames.push(className);
  }

  return classNames.join(" ");
}

module.exports = joinStyles;
module.exports.default = joinStyles;
