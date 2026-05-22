# Dakar Jobs - Plateforme d'offres d'emploi

Une plateforme moderne et complète pour les offres d'emploi à Dakar et au Sénégal, construite avec Next.js 15, TypeScript, Tailwind CSS, et PostgreSQL.

## 🚀 Caractéristiques

### Authentification
- ✅ Inscription et connexion avec email/mot de passe
- ✅ Connexion Google (NextAuth)
- ✅ Rôles : Candidat, Recruteur et Admin
- ✅ Hashage sécurisé des mots de passe avec bcrypt
- ✅ JWT pour l'authentification

### Interface Utilisateur
- ✅ Design moderne et professionnel
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Dark mode
- ✅ Composants réutilisables
- ✅ Animations fluides avec Framer Motion

### Gestion des Offres
- ✅ Publier, modifier et supprimer des offres
- ✅ Recherche avancée (métier, entreprise, localisation, salaire)
- ✅ Filtres dynamiques
- ✅ Pagination
- ✅ Offres en vedette

### Candidat
- ✅ Parcourir les offres d'emploi
- ✅ Postuler à une offre
- ✅ Sauvegarder les offres
- ✅ Historique des candidatures
- ✅ Upload de CV
- ✅ Tableau de bord personnalisé

### Recruteur
- ✅ Créer et publier des offres
- ✅ Gérer les candidatures
- ✅ Voir les statistiques
- ✅ Tableau de bord analytique
- ✅ Gestion de l'entreprise

### Admin
- ✅ Gestion des utilisateurs
- ✅ Modération du contenu
- ✅ Suppression d'annonces frauduleuses
- ✅ Statistiques globales

## 🛠️ Technologies

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Base de données**: PostgreSQL, Prisma ORM
- **Authentification**: JWT, bcryptjs
- **Validation**: Zod, React Hook Form
- **UI**: Shadcn/ui, Lucide Icons, Framer Motion
- **Notifications**: Sonner
- **Autres**: Zustand (state management), Axios

## 📋 Prérequis

- Node.js 18+ et npm/yarn
- PostgreSQL 14+
- Git

## 🚀 Installation

### 1. Cloner le repository
```bash
git clone <repository-url>
cd dakar-jobs
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configuration de l'environnement

Créer un fichier `.env.local` à la racine du projet:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dakar_jobs"

# JWT Secret
JWT_SECRET="your-super-secret-key-change-this"

# Node environment
NODE_ENV="development"

# NextAuth (optionnel)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"

# Google OAuth (optionnel)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 4. Initialiser la base de données

```bash
# Générer le client Prisma
npm run prisma:generate

# Exécuter les migrations
npm run prisma:migrate

# Seeder la base de données avec des données d'exemple
npm run prisma:seed
```

### 5. Lancer l'application

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📊 Données de test

Après le seed de la base de données, vous pouvez vous connecter avec:

- **Admin**: admin@dakarcjobs.sn / admin123
- **Recruteur**: recruiter@example.com / recruiter123
- **Candidat**: candidate@example.com / candidate123

## 📁 Structure du projet

```
src/
├── app/
│   ├── api/                 # Routes API
│   │   ├── auth/           # Authentification
│   │   ├── jobs/           # Offres d'emploi
│   │   └── applications/   # Candidatures
│   ├── auth/               # Pages d'authentification
│   ├── dashboard/          # Tableaux de bord
│   ├── admin/              # Pages admin
│   ├── jobs/               # Pages d'offres
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Accueil
├── components/
│   ├── layout/             # Composants de layout
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MainLayout.tsx
│   └── ui/                 # Composants UI réutilisables
├── lib/
│   ├── auth/               # Logique d'authentification
│   ├── schemas.ts          # Schémas Zod
│   ├── utils.ts            # Utilitaires
│   └── prisma.ts           # Client Prisma
├── types/                  # Types TypeScript
└── prisma/
    ├── schema.prisma       # Schéma de base de données
    └── seed.ts             # Données d'exemple

```

## 🔐 Sécurité

- ✅ Validation des données avec Zod
- ✅ Hash des mots de passe avec bcrypt
- ✅ JWT pour l'authentification
- ✅ CORS et headers de sécurité
- ✅ Protection CSRF
- ✅ Validation côté serveur

## 🎨 Customisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.ts`. Vous pouvez les personnaliser selon votre marque.

### Métadonnées SEO
Modifiez les métadonnées dans `src/app/layout.tsx` et chaque page.

### Localisation
Les textes sont en français. Pour ajouter d'autres langues, créez un système de traduction.

## 📱 Déploiement

### Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🐛 Dépannage

### Erreurs de connexion à la base de données
Assurez-vous que PostgreSQL est en cours d'exécution et que la chaîne de connexion dans `.env.local` est correcte.

### Erreurs de migration Prisma
```bash
# Réinitialiser la base de données
npx prisma migrate reset

# Régénérer le client
npm run prisma:generate
```

## 📚 Documentation

- [Next.js](https://nextjs.org/docs)
- [Prisma](https://www.prisma.io/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## 📞 Support

Pour l'aide et le support:
- Email: support@dakarcjobs.sn
- Tél: +221 33 824 0101
- Site: www.dakarcjobs.sn

## 📄 Licence

Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

## 🙏 Contribuer

Les contributions sont bienvenues! Pour contribuer:

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

Construit avec ❤️ pour Dakar
