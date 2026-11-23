
# MLD complet du Blog

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

## 4. TAG

| Colonne | Clé |
|---|---|
| id_tag | PK |
| nom_tag | — |

## 5. ARTICLE

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

## 6. ARTICLE_TAG

| Colonne | Clé |
|---|---|
| id_article | PK, FK |
| id_tag | PK, FK |
