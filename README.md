# CRM — PHP / MySQL / MVC

Application CRM (Customer Relationship Management) développée dans le cadre du BTS SIO SLAM (2026).

## Présentation

Application web de gestion de la relation client permettant de gérer des contacts, des entreprises et des utilisateurs. Développée en PHP pur avec une architecture MVC sans framework.

## Fonctionnalités

- Authentification avec système de rôles (Admin / Standard)
- Gestion des contacts (CRUD complet)
- Gestion des entreprises
- Recherche et filtres sur les contacts
- Tableau de bord avec statistiques
- Gestion des utilisateurs (Admin uniquement)
- Prévention des doublons

## Stack technique

| Technologie | Usage |
|-------------|-------|
| PHP | Backend, logique métier |
| MySQL | Base de données |
| HTML / CSS | Interface utilisateur |
| Architecture MVC | Structure du code |
| WAMP | Environnement de développement |

## Architecture MVC

```
crm-php-mvc/
├── app/
│   └── views/
│       ├── auth/
│       │   └── login.php
│       ├── contacts/
│       │   ├── index.php
│       │   ├── form.php
│       │   └── show.php
│       ├── users/
│       │   ├── index.php
│       │   └── form.php
│       ├── dashboard/
│       │   └── index.php
│       └── layout/
│           ├── header.php
│           └── footer.php
├── dao/
│   ├── ContactDAO.php
│   ├── EntrepriseDAO.php
│   ├── UtilisateurDAO.php
│   ├── InteractionDAO.php
│   └── PersonneDAO.php
├── models/
│   ├── Contact.php
│   ├── Entreprise.php
│   ├── Personne.php
│   └── Standard.php
├── config/
│   └── Database.php
└── public/
    └── index.php
```

## Modèle de données (MCD)

```
ENTREPRISE ──< CONTACT >── PERSONNE_PHYSIQUE
     │
     └── STATUT

UTILISATEUR (Admin / Standard)
```

## Installation

### Prérequis
- WAMP / XAMPP
- PHP 7.4+
- MySQL

### Étapes
1. Copier le dossier dans `C:\wamp64\www\CRM`
2. Importer la base de données via phpMyAdmin
3. Configurer la connexion dans `config/Database.php`
4. Accéder à `http://localhost/CRM/public/`

### Comptes de test
| Rôle | Login | Mot de passe |
|------|-------|--------------|
| Admin | admin@crm.fr | admin123 |
| Standard | user@crm.fr | user123 |

## Système de rôles

| Fonctionnalité | Admin | Standard |
|----------------|-------|----------|
| Voir les contacts | ✅ | ✅ |
| Ajouter un contact | ✅ | ✅ |
| Modifier un contact | ✅ | ✅ |
| Supprimer un contact | ✅ | ❌ |
| Gérer les utilisateurs | ✅ | ❌ |

## Auteur

**Krou Eric-Donald Akpangni**
BTS SIO SLAM — Lycée Carcouet, Nantes
2026
