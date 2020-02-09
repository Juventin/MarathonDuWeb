## Installation des projets

Les projets sont stockés sur des repos GitHub.
Afin de cloner un projet sur votre ordinateur, vous aurez besoin de Git Bash, GitHub Desktop, ou un outil similaire.

**git clone  https://github.com/Juventin/MarathonDuWeb.git**

Pensez à développer sur la branch dev (ou autre)
La branche master est réservée à la mise en production.

Une fois le projet installé, ouvrir git bash, taper **cd** + chemin vers le dossier cloné, puis lancer la commande **npm install** pour installer toutes les dépendances.


Enfin, lancer l'application:
**npm start**

A chaque sauvegarde, l'application locale est rechargée et les erreurs affichées. 

## CREER UNE PAGE

On crée les différentes pages en créant la fonction correspondante dans un fichier src/components et on les déclare dans src/routes/routes.js et dans src/tempates/navTemplate (les importer au début du code puis ajouter la ligne correspondante).