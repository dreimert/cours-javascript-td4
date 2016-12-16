# Cours de Javascript : TD 4 - Étape 1

## Cahier des charges

Il y a quelques temps, un client vous a contacté pour pour réaliser une application de sondage en ligne. Ce même client revient vers vous car il sent son business model menacé par stack exchange. Il vous a aussi confié qu'il avait des doutes sur les compétences de son designer web.

Votre client souhaite :

* Une analyse des questions posées sur html sur stackoverflow.
* Que ces questions soient posés sous la forme d'un QCM avec comme réponses valides :
  * celle que le questionneur a validé
  * la plus mise en avant par les utilisateurs

## Création du projet

Il faut commencer par initialiser le projet. À l'aide de votre terminal préféré et du TD précédent, créez un fichier *package.json* qui aura pour valeur de la propriété *name* "stack-html".

## Installation des dépendances

Node.js propose dans ses bibliothèques standards un client http. Vous pouvez trouver la documentation à cette url : https://nodejs.org/api/http.html.

Cette API est un peu brute et de nombreuses bibliothèques tierces proposent des implémentations ou des sur-couches plus simple d'usage.

Nous allons utiliser Request : https://github.com/request/request.

En utilisant les connaisances du TD précédent, installez Request dans le projet. Votre fichier *package.json* doit contenir une référence à Request.

## Écrire votre première requête

Vous allez maintenant pouvoir écrire du code. Pour ce faire, vous pouvez utiliser [Atom](https://atom.io/). C'est un IDE écrit en Javascript, HTML et CSS.

En utilisant la documentation de Request, écrivez un programme qui récupère le code html de https://www.google.fr et l'affiche dans le terminal.

Si vous rencontrez des problèmes, n'oubliez pas que vous êtes derrière un proxy :

    let request = require('request').defaults({'proxy':'http://cecinestpaslabonneadrese.com'})

Si tout fonctionne, vous pouvez commencer à travailler.

## La suite...

Vous êtes maintenant capable de récupérer une page web depuis node.

Nous allons pouvoir interroger stack exchange en passant à l'étape 2 : `git checkout etape-2`.
