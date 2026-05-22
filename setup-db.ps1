# Script de configuration de la base de données - Dakar Jobs

Write-Host "╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║        Configuration de la Base de Données - Dakar Jobs        ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Vérifier PostgreSQL
Write-Host "🔍 Vérification de PostgreSQL..." -ForegroundColor Yellow
$psqlCheck = psql --version 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ PostgreSQL n'est pas installé ou pas dans le PATH" -ForegroundColor Red
    Write-Host "📖 Veuillez installer PostgreSQL en suivant POSTGRES_SETUP.md" -ForegroundColor Yellow
    exit 1
}
Write-Host "✅ PostgreSQL trouvé: $psqlCheck" -ForegroundColor Green
Write-Host ""

# Vérifier connexion
Write-Host "🔗 Test de connexion à PostgreSQL..." -ForegroundColor Yellow
$testConn = psql -U postgres -c "SELECT 1" 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Impossible de se connecter à PostgreSQL" -ForegroundColor Red
    Write-Host "⚠️  Assurez-vous que PostgreSQL est en cours d'exécution" -ForegroundColor Yellow
    exit 1
}
Write-Host "✅ Connexion réussie" -ForegroundColor Green
Write-Host ""

# Créer la base de données
Write-Host "📦 Création de la base de données..." -ForegroundColor Yellow
psql -U postgres -c "CREATE DATABASE dakar_jobs;" 2>&1 | Where-Object { $_ -notmatch "already exists" } | ForEach-Object { Write-Host $_ }
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Base de données créée/vérifiée" -ForegroundColor Green
} else {
    Write-Host "⚠️  La base de données existe peut-être déjà" -ForegroundColor Yellow
}
Write-Host ""

# Migrer la base de données
Write-Host "🔄 Migration de la base de données..." -ForegroundColor Yellow
npm run prisma:migrate
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors de la migration" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Migration réussie" -ForegroundColor Green
Write-Host ""

# Seed les données
Write-Host "🌱 Population avec données de test..." -ForegroundColor Yellow
npm run prisma:seed
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Avertissement lors du seed (peut ne pas être critique)" -ForegroundColor Yellow
}
Write-Host "✅ Données de test ajoutées" -ForegroundColor Green
Write-Host ""

Write-Host "╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║              ✅ Configuration terminée avec succès !            ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Prochaines étapes :" -ForegroundColor Cyan
Write-Host "   1. npm run dev          # Démarrer le serveur de développement"
Write-Host "   2. Accéder à http://localhost:3000"
Write-Host "   3. Se connecter avec :" -ForegroundColor Gray
Write-Host "      - Admin: admin@dakarcjobs.sn / password123" -ForegroundColor Gray
Write-Host "      - Recruiter: recruiter@example.com / password123" -ForegroundColor Gray
Write-Host "      - Candidate: candidate@example.com / password123" -ForegroundColor Gray
Write-Host ""
