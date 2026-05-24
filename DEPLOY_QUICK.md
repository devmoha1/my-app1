# 🚀 Guide Rapide - Déploiement en 5 min

## Étape 1 : Préparez GitHub
```bash
# Si le code n'est pas encore sur GitHub
git remote add origin https://github.com/VOTRE_USERNAME/dakar-jobs.git
git push -u origin main
```

## Étape 2 : Créer un compte Railway
1. Allez sur **https://railway.app**
2. Cliquez "Sign Up" avec GitHub
3. Connectez-vous

## Étape 3 : Créer le Projet
1. Cliquez "**New Project**"
2. Sélectionnez "**Deploy from GitHub repo**"
3. Cherchez et sélectionnez votre repo `dakar-jobs`

## Étape 4 : Configurer les Secrets
Dans Railroad Dashboard → Variables :

```
NODE_ENV=production
JWT_SECRET=your-super-secret-key-here
NEXTAUTH_URL=https://YOUR_RAILWAY_URL.railway.app
NEXTAUTH_SECRET=your-secret-here
```

*PostgreSQL est créé automatiquement!*

## Étape 5 : Déployer
✅ Railway déploie **automatiquement** !

Attendez 2-3 minutes... ✅ **C'est en ligne!**

## Étape 6 : Partager avec vos Collègues
1. Allez à Railway → Your Project → **Settings → Domains**
2. Copiez l'URL (ex: `https://dakar-jobs-xyz.railway.app`)
3. Partagez-la! 🎉

## 📝 Accès au Site
**URL**: `https://votre-app.railway.app`

**Comptes de test**:
- Admin: admin@dakarcjobs.sn / admin123
- Recruiter: recruiter@example.com / recruiter123
- Candidate: candidate@example.com / candidate123

## 🔄 Mettre à Jour l'App
Chaque fois que vous faites `git push origin main`, Railway redéploie automatiquement!

```bash
git add .
git commit -m "✨ Nouvelle feature"
git push origin main
# Attendez 2-3 min... c'est à jour!
```

---

**Besoin d'aide?** → Voir `DEPLOYMENT.md` pour le guide complet
