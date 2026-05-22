#!/bin/bash

# Script de configuration de la base de données - Dakar Jobs

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║        Configuration de la Base de Données - Dakar Jobs        ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Vérifier PostgreSQL
echo "🔍 Vérification de PostgreSQL..."
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL n'est pas installé"
    echo "📖 Veuillez installer PostgreSQL en suivant POSTGRES_SETUP.md"
    exit 1
fi
echo "✅ PostgreSQL trouvé: $(psql --version)"
echo ""

# Vérifier connexion
echo "🔗 Test de connexion à PostgreSQL..."
if ! psql -U postgres -c "SELECT 1" &> /dev/null; then
    echo "❌ Impossible de se connecter à PostgreSQL"
    echo "⚠️  Assurez-vous que PostgreSQL est en cours d'exécution"
    exit 1
fi
echo "✅ Connexion réussie"
echo ""

# Créer la base de données
echo "📦 Création de la base de données..."
psql -U postgres -c "CREATE DATABASE dakar_jobs;" 2>&1 | grep -v "already exists"
echo "✅ Base de données créée/vérifiée"
echo ""

# Migrer la base de données
echo "🔄 Migration de la base de données..."
npm run prisma:migrate
if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de la migration"
    exit 1
fi
echo "✅ Migration réussie"
echo ""

# Seed les données
echo "🌱 Population avec données de test..."
npm run prisma:seed
echo "✅ Données de test ajoutées"
echo ""

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║              ✅ Configuration terminée avec succès !            ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "🚀 Prochaines étapes :"
echo "   1. npm run dev          # Démarrer le serveur de développement"
echo "   2. Accéder à http://localhost:3000"
echo "   3. Se connecter avec :"
echo "      - Admin: admin@dakarcjobs.sn / password123"
echo "      - Recruiter: recruiter@example.com / password123"
echo "      - Candidate: candidate@example.com / password123"
echo ""
