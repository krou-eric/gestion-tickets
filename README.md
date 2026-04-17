# Gestion de Tickets — React / NestJS / MySQL

Application de gestion de tickets développée durant mon stage chez ALEOS (BTS SIO SLAM — 2025).

## Présentation

POC (Proof of Concept) d'une application full stack permettant de créer, rechercher et afficher des tickets connectés à Jira via son API REST.

## Fonctionnalités

- Création de tickets (titre, description, ID utilisateur)
- Recherche de tickets par ID
- Récupération de tous les tickets avec filtres
- Statistiques : tickets "à faire", "en cours", "traités"
- Connexion à l'API Jira pour synchronisation
- Documentation API via Swagger

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Frontend | React, JavaScript |
| Backend | NestJS, TypeScript |
| Base de données | MySQL |
| Documentation API | Swagger |
| Versioning | Git / GitHub |

## Architecture

```
FRONT (React)
    │
    └── API REST
          │
    BACK (NestJS)
          │
    ├── MySQL (base de données)
    └── API Jira (synchronisation tickets)
```

## Structure du projet

```
gestion-tickets/
├── poc/              ← Frontend React
│   ├── src/
│   │   ├── components/
│   │   │   ├── TicketDetails.js
│   │   │   ├── TicketSearch.js
│   │   │   └── UserDetails.js
│   │   └── pages/
│   │       ├── TicketPage.js
│   │       └── HomePage.js
│   └── package.json
└── poc-mgn/          ← Backend NestJS
    ├── src/
    │   ├── ticket/
    │   └── utilisateurs/
    └── package.json
```

## Installation

### Prérequis
- Node.js
- MySQL
- WAMP ou équivalent

### Backend (NestJS)
```bash
cd poc-mgn
npm install
npm run start
```
L'API est accessible sur `http://localhost:3000`
La documentation Swagger est sur `http://localhost:3000/api#/`

### Frontend (React)
```bash
cd poc
npm install
npm start
```
L'application est accessible sur `http://localhost:3001`

## Routes API

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | /tickets | Récupérer tous les tickets |
| GET | /tickets/:id | Récupérer un ticket par ID |
| POST | /tickets | Créer un ticket |
| PUT | /tickets/:id | Modifier un ticket |
| DELETE | /tickets/:id | Supprimer un ticket |

## Base de données

```sql
CREATE TABLE ticket (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  description VARCHAR(255) NULLABLE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE utilisateur (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255),
  prenom VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  motDePasse VARCHAR(255)
);
```

## Auteur

**Krou Eric-Donald Akpangni**
BTS SIO SLAM — Lycée Carcouet, Nantes
Stage ALEOS — 2025
