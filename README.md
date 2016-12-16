# Cours de Javascript : TD 4 - Étape 2

## Cahier des charges

Votre client vient de préciser l'analyse qu'il souhaite :

* Récupérer les questions parlant de html.
  * lister les titres des questions
  * lister les tags relié et leur nombres d'occurrences
  * lister leurs auteurs
  * lister les utilisateurs qui répondent
* Structurer les données dans un fichier json

## Récupérer les questions parlant de html

Pour récupérer les questions parlant de html, nous allons utiliser l'api de recherche. D'après la doc, la route doit ressembler à quelque-chose comme ça :

    http://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=html&site=stackoverflow

Mais comme on overquota, utilisons :

    https://github.com/dreimert/cours-javascript-td4/blob/data/data.bin?raw=true

Essayez d'afficher les données renvoyer.

> ### Q1 - Que ce passe-t'il ? Pourquoi ?

Ce code résout le problème :

```Javascript
const request = require('request');
const zlib = require('zlib');

const url = 'https://github.com/dreimert/cours-javascript-td4/blob/data/data.bin?raw=true';

request(url, {encoding: null}, function(err, response, body){
  if (!err && response.statusCode == 200) {
    zlib.gunzip(body, function(err, dezipped) {
      console.log(dezipped.toString());
    });
  }
});
```

> ### Q2 - Que fait ce code ? Expliquez-le.

À ce stade, la réponse doit s'afficher dans votre console bien qu'elle ne soit pas très facile à lire.

> ### Q3 - Les données semblent structurées dans un format particulier. Quel est-il ?
> ### Q4 - En javascript, il y a une méthode standard pour convertir ce format. Quelle est-elle ?

Essayez de n'afficher que le contenu du tableau items.

## Exercices sur les callbacks

Réécrire le code précédent pour créer une fonction qui récupère et affiche un page staskexchange, votre fonction doit ressembler à ça :

```Javascript
const getUrlContentAndShow = function(url) {
  // ...
});
getUrlContentAndShow(url);
```

Le comportement de votre programme ne doit pas changer.

Réécriver encore votre programme en vous interdisant d'utiliser `console.log` dans la fonction getUrlContentAndShow qui devient getUrlContent. Votre code doit ressembler à ça :

```Javascript
const getUrlContent = function(url, callback) {
  // ...
});
getUrlContent(url, console.log);
```

Le comportement de votre programme ne doit pas changer.

## Traiter les données

Nous savons récupérer une liste de questions. Il faut maintenant en extraire les données.

Afficher dans votre terminal un nouvel object contenant les listes des titres, des tags et des auteurs.

> ### Q5 - Combien de niveau d'indentation avez-vous ?

Si vous indentez votre code ce qui est indispensable pour s'y retrouver, vous devez avoir de nombreux niveaux d'imbrication. Une bonne pratique est de découper en fonctions. Il y a plusieurs avantages : Chaque fonction a un nom qui décrit ce qu'elle fait et le code est plus facile à lire. Découper votre code pour obtenir quelque-chose comme ça :

```Javascript
const getUrlContentParseJson = function(url, callback) {
  // ...
});

const extractInfos = function(content) {
  // ...
};

getUrlContentParseJson(url, function(err, content){
  if(!err) {
    extractInfos(content);
  }
});
```

Regardez bien, `getUrlContentParseJson` utilise un paramètre appelé callback. C'est une convention en Javascript pour les fonctions utilisant des appels asynchrones. En effet, télécharger l'url est un appel asynchrone mais il n'y a pas dans le langage de mots clefs pour attendre. Du coup, notre fonction ne peut pas retourner une valeur à la fin de son appel. Un callback permet d'être informer quand l'opèration est terminé et de continuer notre suite de calcules.

## Multiples appels asynchrones

Il faut maintenant récupérer la liste des personnes qui répondent mais on n'a pas cette liste dans les données que nous avons. Il va falloir de nouveau interroger stackexchange mais pour chaque question cette fois. D'après la documentation, l'API ressemble à ça :

    http://api.stackexchange.com/2.2/questions/${id}/answers?order=desc&sort=activity&site=stackoverflow

Mais comme on est overquota :

    https://github.com/dreimert/cours-javascript-td4/blob/data/${id}.bin?raw=true

Essayez d'analyser les répondeurs de la première question.

> ### Q6 - Avez-vous une idée de comment faire pour analyser plusieurs questions ? Si oui, essayez !

Pour faire ce genre de chose à la main en utilisant des callbacks, il faut soit utiliser la récursion soit une mécanique à base de drapeaux un peu compliquée. Il existe aussi de nombreuses bibliothèques qui permettent de gérer ce genre de choses comme async. Mais la bonne solution est d'utiliser les promesses.

Une bonne explication des promesses [par ici](https://developers.google.com/web/fundamentals/getting-started/primers/promises) et [par là](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

Les promesses en quelques mots. Une promesse représente un résultat futur, c'est un outil pour contrôler le flux d'exécution de votre programme. Quand on fait un appel asynchrone, plutôt que d'utiliser un callback, la fonction va retourner un promesse. Sur cette promesse, on peut appeler une fonction `then` qui prend deux paramètres : un callback de réussite et un callback d'erreur. Ce qui fait la force des promesses, c'est que si vous ne passez pas un des callbacks, par exemple le callback d'erreur mais que votre promesse retourne une erreur, alors c'est le prochain callback d'erreur qui sera appelé. Et ça permet aussi de les enchainer. Exemple :

```JavaScript
returnPromiseFunction(...)
.then(function2)
.then(function(){
  //...
  return result;
})
.then(functio3)
.then(console.log)
```

Bon, passons à la pratique. On pourrait promessifier request à la main mais ça a déjà été fait par [request-promise](https://github.com/request/request-promise). Installer request-promise et à l'aide de [l'exemple](https://github.com/request/request-promise#crawl-a-webpage) charger une page. Attention, si vous voulez quelque-chose de lisible ne le faite pas sur stackexchange.

Maintenant, que l'on peut charger une page, pour stackexchange, il faut la décompresser mais zlib utilise un callback. Pas de problème ! On peut promessifier gunzip à la main ou demander à bluebird de le faire. Bluebird est une bibliothèque de promesse qui rajoute plein d'outil mais un nous intéresse particulièrement : [promisify](http://bluebirdjs.com/docs/api/promise.promisify.html).

Installer Bluebird.

Pour promessifier gunzip, il suffit de faire :

```Javascript
const Promise = require('bluebird');
const zlib = require('zlib');

const gunzip = Promise.promisify(zlib.gunzip);
```

Essayez de réécrire `getUrlContentParseJson` en renvoyant une promesse plutôt quand utilisant un callback.

Réécrivez votre code pour qu'il ressemble à celà :

```Javascript
getUrlContentParseJson(url)
.then(extractInfos)
.then(console.log)
```

Revenons à nos moutons. Comment récupérer les répondeurs aux questions ? En quoi les promesses nous aide ?

Grace à la `Promise.all` ! Cette fonction prend un tableau de promesses et retourne un promesses qui est résolue quand toutes les promesses du tableau sont résolues avec comme valeur un tableau contenant tous les résultats.

Essayez de récupérer la liste des répondeurs pour chaque questions.

## Exporter au format JSON

Pour prendre un objet Javascript et le mettre au format JSON, il faut utiliser `JSON.stringify`.

## Cahier des charges rempli

Vous avez maintenant rempli le cahier des charges du client pour l'analyse des données. Vous pouvez passer à l'étape suivante : `git checkout etape-3`
