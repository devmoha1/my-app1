# 🚀 Guide de Démarrage - Dakar Jobs

La plateforme "Dakar Jobs" est maintenant prête! Voici comment la configurer et la lancer.

## ✅ Étape 1 : Configuration de la Base de Données

### Option A : Utiliser PostgreSQL localement

1. **Installer PostgreSQL** (si pas encore fait)
   - Télécharger depuis https://www.postgresql.org/download/
   - Installer avec les paramètres par défaut
   - Mémoriser le mot de passe du user `postgres`

2. **Créer une base de données**
   ```bash
   # Ouvrir pgAdmin ou utiliser la ligne de commande
   psql -U postgres
   
   # Dans le terminal PostgreSQL:
   CREATE DATABASE dakar_jobs;
   ```

3. **Copier le fichier .env.local**
   ```bash
   cp .env.example .env.local
   ```

4. **Configurer l'URL de base de données dans .env.local**
   ```
   DATABASE_URL="postgresql://postgres:votre_mot_de_passe@localhost:5432/dakar_jobs"
   ```

### Option B : Utiliser Docker (plus facile)

```bash
# Installer Docker depuis https://www.docker.com/products/docker-desktop

# Lancer PostgreSQL avec Docker:
docker run --name postgres-dakar-jobs \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=dakar_jobs \
  -p 5432:5432 \
  -d postgres:15

# Puis configurer .env.local:
DATABASE_URL="postgresql://postgres:password@localhost:5432/dakar_jobs"
```

## ✅ Étape 2 : Initialiser la Base de Données

```bash
# Créer les tables et migrations
npm run prisma:migrate

# Remplir la base avec des données d'exemple
npm run prisma:seed
```

## ✅ Étape 3 : Lancer l'application

```bash
# Mode développement
npm run dev

# L'application sera accessible sur http://localhost:3000
```

## 📝 Comptes de Test Disponibles

Après le seed, utilisez ces comptes :

| Rôle | Email | Mot de passe |
|------|-------|-------------|
| Admin | admin@dakarcjobs.sn | admin123 |
| Recruteur | recruiter@example.com | recruiter123 |
| Candidat | candidate@example.com | candidate123 |

## 🔐 Variables d'Environnement Importantes

Fichier `.env.local` (à créer) :

```env
# Base de données
DATABASE_URL="postgresql://user:password@localhost:5432/dakar_jobs"

# JWT Secret (générez une clé sécurisée)
JWT_SECRET="your-super-secret-key-change-in-production"

# Environnement
NODE_ENV="development"
```

## 🛠️ Commandes Utiles

```bash
# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm start

# Accéder à Prisma Studio (interface DB)
npm run prisma:studio

# Linter le code
npm lint

# Nettoyer les dépendances
npm run prisma:generate
```

## 📁 Structure du Projet

```
dakar-jobs/
├── src/
│   ├── app/                 # Pages et routes
│   ├── components/          # Composants React
│   ├── lib/                 # Utilitaires et helpers
│   ├── types/               # Types TypeScript
│   └── app/api/            # Routes API
├── prisma/
│   ├── schema.prisma        # Schéma de base de données
│   └── seed.ts              # Données d'exemple
├── public/                  # Fichiers statiques
└── package.json             # Dépendances
```

## 🐛 Dépannage

### Erreur: "Cannot find module '@prisma/client'"
```bash
npm run prisma:generate
```

### Erreur de connexion à PostgreSQL
- Vérifier que PostgreSQL est lancé
- Vérifier la chaîne DATABASE_URL dans `.env.local`
- Vérifier le mot de passe PostgreSQL

### Erreur: "EADDRINUSE: address already in use :::3000"
Le port 3000 est déjà utilisé:
```bash
# Utiliser un autre port
PORT=3001 npm run dev
```

### Base de données non trouvée
```bash
# Recréer la base
npm run prisma:migrate -- --name init
npm run prisma:seed
```

## 📚 Documentation

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

## 💡 Prochaines Étapes

1. **Personnaliser** : Modifier les couleurs, logos et textes
2. **Ajouter des fonctionnalités** : Notifications email, uploads de fichiers, etc.
3. **Déployer** : Sur Vercel, Heroku, ou votre serveur
4. **Améliorer** : Ajouter des tests, optimiser les performances

## 📞 Support

Pour l'aide:
- Email: info@dakarcjobs.sn  
- Tél: +221 33 824 0101

---

**Prêt à lancer?** Exécutez maintenant:

```bash
npm run dev
```

Puis ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur! 🎉
