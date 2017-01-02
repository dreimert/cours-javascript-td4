const tap = require('tap')
const exo1 = require('../exercices/exo1-d');

tap.same(exo1([1,2,3], (val) => val*2), [2,4,6], "Le retour de la fonction n'est pas correct");
tap.same(exo1([1,2,3], (val) => val+3), [4,5,6], "Le retour de la fonction n'est pas correct");
tap.same(exo1([1,2,3], (val) => val*10), [10,20,30], "Le retour de la fonction n'est pas correct");
tap.same(exo1([10,20,30], (val) => val*2), [20,40,60], "Le retour de la fonction n'est pas correct");
tap.same(exo1([-1,-2,-3], (val) => val*2), [-2,-4,-6], "Le retour de la fonction n'est pas correct");
tap.same(exo1([1,2,3,4,5,6,7,8,9,0], (val) => val*2), [2,4,6,8,10,12,14,16,18,0], "Le retour de la fonction n'est pas correct");

tap.same(exo1([1,2,3], (val) => val.toString()), ["1","2","3"], "Le retour de la fonction n'est pas correct");
