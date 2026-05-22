#!/usr/bin/env pwsh

# 🚀 Dakar Jobs - Quick Setup Script

Write-Host "╔════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║      Welcome to Dakar Jobs Setup! 🎉           ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Check if .env.local exists
if (!(Test-Path ".env.local")) {
    Write-Host "📋 Creating .env.local from .env.example..." -ForegroundColor Yellow
    Copy-Item ".env.example" ".env.local"
    Write-Host "✅ Done! Please edit .env.local with your database configuration." -ForegroundColor Green
    Write-Host ""
    Write-Host "🔍 Looking for DATABASE_URL in .env.local..." -ForegroundColor Yellow
    Write-Host "   Example: postgresql://postgres:password@localhost:5432/dakar_jobs" -ForegroundColor Gray
    Write-Host ""
}

# Check if PostgreSQL database is configured
$envContent = Get-Content ".env.local"
if (!($envContent -match "DATABASE_URL")) {
    Write-Host "⚠️  WARNING: No DATABASE_URL found in .env.local" -ForegroundColor Red
    Write-Host ""
    Write-Host "📚 Please follow these steps:" -ForegroundColor Yellow
    Write-Host "   1. Install PostgreSQL: https://www.postgresql.org/download/" -ForegroundColor Gray
    Write-Host "   2. Create a database: CREATE DATABASE dakar_jobs;" -ForegroundColor Gray
    Write-Host "   3. Update .env.local with your connection string" -ForegroundColor Gray
    Write-Host ""
    exit 1
}

# Setup database
Write-Host "🗄️  Initializing database..." -ForegroundColor Yellow
npm run prisma:migrate
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Database migration failed" -ForegroundColor Red
    exit 1
}

Write-Host "📊 Seeding sample data..." -ForegroundColor Yellow
npm run prisma:seed
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Seeding failed (you can continue without sample data)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "╔════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║      ✅ Setup Complete!                        ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""

Write-Host "🚀 Starting development server..." -ForegroundColor Cyan
npm run dev
