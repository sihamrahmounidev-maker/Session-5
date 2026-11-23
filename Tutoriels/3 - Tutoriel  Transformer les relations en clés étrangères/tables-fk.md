
# Tables avec clés étrangères (FK)

## 1. VILLE

| Colonne | Clé |
|---|---|
| id_ville | PK |
| nom_ville | — |

## 2. AUTEUR

| Colonne | Clé |
|---|---|
| id_auteur | PK |
| nom_auteur | — |
| prenom_auteur | — |
| email_auteur | — |
| id_ville | FK |

## 3. CATEGORIE

| Colonne | Clé |
|---|---|
| id_categorie | PK |
| nom_categorie | — |

## 4. ARTICLE

| Colonne | Clé |
|---|---|
| id_article | PK |
| titre_article | — |
| contenu_article | — |
| date_publication | — |
| statut_article | — |
| image_article | — |
| id_auteur | FK |
| id_categorie | FK |
