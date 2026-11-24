# MLD — Gestion d'un restaurant

### 1. REPAS
- **code_repas (PK)**
- nom_repas
- description_repas
- prix_repas

### 2. CATEGORIE
- **code_categorie (PK)**
- nom_categorie

### 3. CLIENT
- **code_client (PK)**
- nom_client
- prenom_client
- email_client
- telephone_client

### 4. COMMANDE
- **code_commande (PK)**
- date_commande
- heure_commande
- statut_commande
- code_client (FK)

### 5. REPAS_CATEGORIE
- **code_repas (PK, FK)**
- **code_categorie (PK, FK)**

### 6. REPAS_COMMANDE
- **code_commande (PK, FK)**
- **code_repas (PK, FK)**
- quantite_commandee
- prix_unitaire_commande

