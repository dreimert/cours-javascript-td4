/*
  La fonction doit appliquer à tous les éléments du tableau en paramètre la fonction `toApply` et retourner un nouveau tableau.
*/
module.exports = function exo1(tableau, toApply) {
  return tableau.map(/* START MOD */  toApply  /* END MOD */);
}
