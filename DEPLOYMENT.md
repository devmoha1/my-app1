# Guide de Déploiement - Dakar Jobs sur Railway

## 🚀 Déployez votre projet en 5 minutes

Railway est la plateforme la plus simple pour déployer Next.js avec PostgreSQL. Tout est gratuit et automatisé!

---

## 📋 Prérequis

1. **Compte GitHub** (gratuit)
2. **Compte Railway** (gratuit) - https://railway.app
3. **Accès à ce repository Git**

---

## ✅ Étape 1 : Pousser le code sur GitHub

Si ce n'est pas déjà fait, créez un repository sur GitHub et poussez le code :

```bash
# Initialiser Git (si pas déjà fait)
git init
git remote add origin https://github.com/VOTRE_USERNAME/dakar-jobs.git

# Pousser le code
git add .
git commit -m "🚀 Préparation pour déploiement sur Railway"
git push -u origin main
```

---

## 🎢 Étape 2 : Créer et Configurer le Projet Railway

### **2.1 Créer un compte Railway**

1. Allez sur https://railway.app
2. Cliquez "Sign Up" et connectez-vous avec GitHub
3. Autorisez Railway à accéder à vos repositories

### **2.2 Créer un nouveau projet**

1. Cliquez "New Project"
2. Sélectionnez "Deploy from GitHub repo"
3. Trouvez et sélectionnez `dakar-jobs`

### **2.3 Configurer l'environnement**

**Railway créera automatiquement** :
- ✅ PostgreSQL (base de données gratuite)
- ✅ Application Next.js
- ✅ Domaine public (ex: dakar-jobs-production.railway.app)

---

## 🔧 Étape 3 : Configurer les Variables d'Environnement

Dans Railway Dashboard :

1. **Onglet** "Variables"
2. **Ajouter les variables suivantes** :

```
NODE_ENV=production
JWT_SECRET=your-super-secret-jwt-key-production-2024
NEXTAUTH_URL=https://votre-app.railway.app
NEXTAUTH_SECRET=your-nextauth-secret-production
```

**Rails configure automatiquement DATABASE_URL!** ✅

---

## 🗄️ Étape 4 : Configurer PostgreSQL

Railway crée automatiquement PostgreSQL, mais vous devez vérifier :

1. **Dans Railway Dashboard**, onglet "Services"
2. Vous verrez "Postgres" - clickez dessus
3. Notez les variables :
   - `POSTGRES_PASSWORD`
   - `POSTGRES_DB`
   - `DATABASE_URL` ✅ (Rails l'ajoute automatiquement)

---

## 🔄 Étape 5 : Déploiement Automatique

Railway déploie **automatiquement** à chaque `git push` vers `main` !

### **Pour déployer une nouvelle version** :

```bash
# Faire vos modifications localement
git add .
git commit -m "✨ Nouvelle feature"
git push origin main

# Railway déploiera automatiquement en ~2-3 minutes
```

**Suivez le déploiement** :
1. Ouvrez https://railway.app
2. Onglet "Deployments"
3. Vous verrez le statut en temps réel

---

## 🎉 Étape 6 : Accéder à votre App

Une fois le déploiement terminé ✅ :

1. Onglet "Settings" → "Domains"
2. Vous verrez l'URL publique
3. **Exemple** : `https://dakar-jobs-production.railway.app`
4. **Partagez cette URL avec vos collègues !**

---

## 📝 Comptes de Test

Après déploiement, les comptes de test sont disponibles :

| Rôle | Email | Mot de passe |
|------|-------|--------------|
| Admin | admin@dakarcjobs.sn | admin123 |
| Recruiter | recruiter@example.com | recruiter123 |
| Candidate | candidate@example.com | candidate123 |

---

## 🔍 Dépannage

### ❌ Le déploiement échoue ?

**Vérifiez les logs** :
1. Dashboard Railway → "Deployments" → Cliquez sur le dernier
2. Onglet "Logs"
3. Cherchez les erreurs

**Problèmes courants** :

| Problème | Solution |
|----------|----------|
| `DATABASE_URL not found` | Railway configure cela automatiquement, patientez 1-2 min |
| Build échoue | Vérifier qu'il n'y a pas d'erreurs TypeScript localement (`npm run build`) |
| 502 Bad Gateway | L'app crash au démarrage, vérifier les logs |

### ✅ Vérifier que tout fonctionne

```bash
# Localement, avant de pousser
npm run build
npm start

# Testez http://localhost:3000
```

---

## 🆓 Coûts (Gratuit!)

**Plan gratuit Railway inclut** :
- ✅ 500 Mo de stockage app
- ✅ 5GB de stockage PostgreSQL
- ✅ $5/mois de crédits gratuits
- ✅ Déploiements illimités
- ✅ Domaine public

**Suffisant pour un MVP/prototype!**

---

## 🚀 Prochaines Étapes

1. **Créer compte Railway** → https://railway.app
2. **Connecter votre GitHub**
3. **Sélectionner ce repo**
4. **Configurer variables d'env**
5. **Déployer!**
6. **Partager l'URL avec vos collègues**

---

## 📞 Besoin d'aide ?

- **Documentation Railway** : https://docs.railway.app
- **Discord Railway** : https://discord.gg/railway (très rapide!)
- **Vérifier les logs** : Rails → Deployments → Logs

---

## ✨ Avantages de Railway

- ✅ **0 configuration** - Fonctionne directement
- ✅ **PostgreSQL inclus** - Gratuit
- ✅ **Auto-scaling** - Grandit avec vous
- ✅ **Monitoring** - Dashboards en temps réel
- ✅ **Redémarrage auto** - Si l'app crash
- ✅ **Custom domains** - (plan payant)
- ✅ **CI/CD intégré** - Déploiement à chaque push

---

**Bon déploiement! 🎉**
