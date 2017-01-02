const fonctionExterne = function(callback) {
  setTimeout(function() {
    callback("html");
  });
}

/*
  La fonction doit multiplier par 2 tous les éléments du tableau en paramètre et retourner un nouveau tableau.
*/
module.exports = function exo2(callback) {
  /* START MOD */

  // votre code ici

  /* END MOD */
  fonctionExterne(callback);
}
