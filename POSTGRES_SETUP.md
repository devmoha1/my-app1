# Guide d'Installation PostgreSQL - Dakar Jobs

## Installation sur Windows

### Option 1 : Installer PostgreSQL localement (Recommandé)

1. **Télécharger PostgreSQL**
   - Allez sur https://www.postgresql.org/download/windows/
   - Téléchargez la dernière version (16+)

2. **Installation**
   - Lancez l'installateur
   - Port par défaut : 5432
   - Mot de passe pour `postgres` : **password** (ou votre choix)
   - Décochez pgAdmin si vous n'en avez pas besoin

3. **Vérifier l'installation**
   ```bash
   psql --version
   ```

### Option 2 : PostgreSQL via Docker

```bash
docker run --name dakar-jobs-db \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=dakar_jobs \
  -p 5432:5432 \
  -d postgres:16
```

## Configuration de la Base de Données

Après l'installation de PostgreSQL, exécutez :

```bash
# Se connecter à PostgreSQL
psql -U postgres

# Créer la base de données
CREATE DATABASE dakar_jobs;

# Créer l'utilisateur (optionnel)
CREATE USER dakar_user WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE dakar_jobs TO dakar_user;

# Quitter
\q
```

## Configuration dans l'application

Le fichier `.env.local` contient déjà :
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/dakar_jobs"
```

Modifiez si vous avez utilisé d'autres identifiants.

## Commandes Prisma

Une fois PostgreSQL configuré :

```bash
# Générer Prisma Client
npm run prisma:generate

# Créer les tables
npm run prisma:migrate -- --name init

# Ajouter données de test
npm run prisma:seed

# Ouvrir interface graphique Prisma
npm run prisma:studio
```

## Démarrer l'application

```bash
npm run dev
```

Accédez à http://localhost:3000
