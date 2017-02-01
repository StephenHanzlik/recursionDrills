'use strict';

module.exports = {

  factoral: function(n) {
    if (n == 0) {
      return 1
    } else {
      return n * factoral(n - 1)
    }
  }

};
