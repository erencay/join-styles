function joinStyles() {
  var args = Array.prototype.slice.call(arguments);
  var styles = args.shift();
  var classNames = '';


  for (var i = 0; i < args.length; i++) {
    var className = styles[args[i]] || args[i];

    classNames += className + ' ';
  }

  return classNames.replace(/\s+$/g,'');
}

module.exports = joinStyles;
