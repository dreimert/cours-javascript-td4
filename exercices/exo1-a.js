/*
  La fonction doit multiplier par 2 tous les éléments du tableau en paramètre et retourner un nouveau tableau.
*/
module.exports = function exo1(tableau) {
  let resultat = [];

  for (let elem of tableau) {
    /* START MOD */

    resultat.push(elem * 2);

    /* END MOD */
  }

  return resultat;
}
