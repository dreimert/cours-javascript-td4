# Cours de Javascript : TD 4 - Étape 0

Nous allons voir à cette étape quelques exercices pour mieux comprendre les fonctions d'ordre supérieurs et les callbacks.

## Fonctionnement

Pour chaque exercice, il y a deux fichiers associés : un dans `exercice` et un dans `test`. Vous devrez modifier le fichier dans `exercice`. Vous pouvez lire le fichier situer dans `test` pour mieux comprendre ce qui est attendu mais pas le modifier.

Les zones que vous avez le droit de modifier sont délimitées par des commentaires comme ceux-ci :

```Javascript
/* START MOD */
  Vous pouvez écrire ce que vous voulez ici et même sauter des lignes.
/* END MOD */

/* START MOD */ Cela peut aussi être sur une seule ligne /* END MOD */
```

Entre les balises `/* START MOD */` et `/* END MOD */`, vous pouvez sauter autant de lignes que vous voulez. Par contre, vous n'avez pas le droit de mettre une parenthèse ou une accolade qui interagit avec quelque-chose en dehors de la zone.

Pour commencer, faite un `npm install`.

## Exercice 0 - Fonctionnement des tests

Faite `npm run test_exo0` et regardez le résultat.

Éditez le fichier `exercices/exo0.js` pour que la fonction `exo0` returne `"Bonjour !"`. Une fois que c'est fait, faite de nouveau `npm run test_exo0` et assurez-vous que cela fonctionne.

C'est la structure minimale d'un exercice. Le fichier déclare un export qui est ensuite récupérer via la mécanique de require dans le test.

## Exercice 1 - De l'impératif au fonctionnel

### a - exo1-a.js

La fonction doit multiplier par 2 tous les éléments du tableau en paramètre et retourner un nouveau tableau.

Pour tester : `npm run test_exo1-a`.

### b - exo1-b.js

On veut rendre notre fonction plus générique que multiplier par 2. On va passer en paramètre le facteur multiplicatif.

La fonction doit multiplier par le facteur tous les éléments du tableau en paramètre et retourner un nouveau tableau.

Pour tester : `npm run test_exo1-b`.

### c - exo1-c.js

On veut rendre notre fonction encore plus générique. Pourquoi se limiter à la multiplication ? Pourquoi pas la division, la soustraction ou même des choses plus complexe ? On va passer en paramètre la fonction a appliquer !

La fonction doit appliquer à tous les éléments du tableau en paramètre la fonction `toApply` et retourner un nouveau tableau.

Pour tester : `npm run test_exo1-c`.

### d - exo1-d.js

La fonction que l'on vient d'écrire existe déjà, c'est la fonction `map` des tableaux Javascript.

La fonction doit appliquer à tous les éléments du tableau en paramètre la fonction `toApply` et retourner un nouveau tableau.

Pour tester : `npm run test_exo1-d`.

### Ce qu'il faut retenir

Comme on peut passer un nombre ou un tableau en paramètre d'une fonction, on peut passer une fonction en paramètre d'une fonction.

## Exercice 2 - Une histoire de callback

Dans cette exercice, `fonctionExterne` représente une fonction mis à disposition par une bibliothèque que vous ne pouvez pas modifier. Le but est de retourner son résultat.

### a - exo2-a.js

La fonction `fonctionExterne` est **synchrone**, c.-à-d., que quand on l'appel, elle retourne instantanément un résultat.

Faite en sorte que la fonction exo2 retourne le résultat de la fonction `fonctionExterne`.

Pour tester : `npm run test_exo2-a`.

### b - exo2-b.js

La fonction `fonctionExterne` est cette fois **asynchrone**, c.-à-d., que quand on l'appel, elle ne retourne pas instantanément un résultat. Pour récupérer le résultat de la fonction, il faut utiliser un callback, c.-à-d., une fonction que l'on passe comme paramètre. De plus, quand un résultat est passé par callback, on ne peut pas le retourner via `return` mais il faut aussi utiliser un callback.

Faite en sorte que la fonction exo2 retourne le résultat de la fonction `fonctionExterne` via un callback.

### Ce qu'il faut retenir

Quand vous utilisez une fonction asynchrone, il faut utiliser un callback mais quand une donnée est obtenu par callback, on ne peut la retourner que par callback.

Pour tester : `npm run test_exo2-b`.

## La suite...

Nous allons pouvoir passer à la pratique en passant à l'étape 1 : `git checkout etape-1`.
