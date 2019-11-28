
# Création d'une Todo List avec GraphQL


***Projet Full Stack réalisé dans le cadre du parcours Digital.e de 3ème année Centrale Marseille***


## Le Projet 


-   Utiliser la simplicité des requêtes de GraphQL pour ajouter une fonctionnalité supplémentaire à la Todo list classique  
      
    
-   Avoir une Todo List où chaque tâche est attribuée à un collaborateur. Grâce aux requêtes plus compactes de GraphQL, l’idée est d’obtenir facilement, dans le détail des tâches, les données liées à son collaborateur


## Structure

![Structure](https://i.imgur.com/8jagXDa.png)

 - On créé une base de donnée MongoDB sur mLab. 
 - Dans la partie serveur, GraphQL gère les requêtes adressées à la base de donnée. La partie back-end est codée en Node.JS

![Structure](https://i.imgur.com/3cdTrH2.png)

 - Côté Front, on utilise React pour l'interface utilisateur
 - On utilise le client Apollo pour permettre à React de comprendre le language GraphQL

## Utilisation

 Pour utiliser l'application il faut lancer la partie serveur et la partie client
 
 - On fait tourner la partie serveur sur le port 4000 avec l'interface *GraphiQL* qui permet d'envoyer des requêtes
 - La partie client qui est une application React tourne sur le port 3000
