const tap = require('tap')
const exo1 = require('../exercices/exo1-a');

tap.same(exo1([1,2,3]), [2,4,6], "Le retour de la fonction n'est pas correct");
tap.same(exo1([10,20,30]), [20,40,60], "Le retour de la fonction n'est pas correct");
tap.same(exo1([-1,-2,-3]), [-2,-4,-6], "Le retour de la fonction n'est pas correct");
tap.same(exo1([1,2,3,4,5,6,7,8,9,0]), [2,4,6,8,10,12,14,16,18,0], "Le retour de la fonction n'est pas correct");
