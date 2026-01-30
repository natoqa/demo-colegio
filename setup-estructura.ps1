# 🔧 Comandos para Crear la Estructura del Proyecto
# Copia y ejecuta estos comandos en PowerShell desde la raíz del proyecto

# ============================================
# PASO 1: Crear estructura de directorios
# ============================================

Write-Host "Creando estructura de directorios..." -ForegroundColor Cyan

# Crear directorio src base
New-Item -ItemType Directory -Force -Path "src"

# Crear estructura app/ con route group (public)
New-Item -ItemType Directory -Force -Path "src/app/(public)/nosotros"
New-Item -ItemType Directory -Force -Path "src/app/(public)/admision"
New-Item -ItemType Directory -Force -Path "src/app/(public)/niveles/inicial"
New-Item -ItemType Directory -Force -Path "src/app/(public)/niveles/primaria"
New-Item -ItemType Directory -Force -Path "src/app/(public)/niveles/secundaria"
New-Item -ItemType Directory -Force -Path "src/app/(public)/contacto"
New-Item -ItemType Directory -Force -Path "src/app/api/contact"

# Crear estructura features/
New-Item -ItemType Directory -Force -Path "src/features/home/components"
New-Item -ItemType Directory -Force -Path "src/features/home/hooks"
New-Item -ItemType Directory -Force -Path "src/features/home/types"
New-Item -ItemType Directory -Force -Path "src/features/about/components"
New-Item -ItemType Directory -Force -Path "src/features/about/hooks"
New-Item -ItemType Directory -Force -Path "src/features/about/types"
New-Item -ItemType Directory -Force -Path "src/features/admission/components"
New-Item -ItemType Directory -Force -Path "src/features/admission/hooks"
New-Item -ItemType Directory -Force -Path "src/features/admission/types"
New-Item -ItemType Directory -Force -Path "src/features/levels/components"
New-Item -ItemType Directory -Force -Path "src/features/levels/hooks"
New-Item -ItemType Directory -Force -Path "src/features/levels/types"
New-Item -ItemType Directory -Force -Path "src/features/contact/components"
New-Item -ItemType Directory -Force -Path "src/features/contact/hooks"
New-Item -ItemType Directory -Force -Path "src/features/contact/services"
New-Item -ItemType Directory -Force -Path "src/features/contact/types"

# Crear estructura shared/
New-Item -ItemType Directory -Force -Path "src/shared/components/ui"
New-Item -ItemType Directory -Force -Path "src/shared/components/layout"
New-Item -ItemType Directory -Force -Path "src/shared/hooks"
New-Item -ItemType Directory -Force -Path "src/shared/services"
New-Item -ItemType Directory -Force -Path "src/shared/types"
New-Item -ItemType Directory -Force -Path "src/shared/utils"

# Crear directorio types/
New-Item -ItemType Directory -Force -Path "src/types"

Write-Host "✅ Estructura de directorios creada" -ForegroundColor Green

# ============================================
# PASO 2: Crear archivos .gitkeep
# ============================================

Write-Host "Creando archivos .gitkeep..." -ForegroundColor Cyan

"" | Out-File -FilePath "src/features/home/components/.gitkeep" -Encoding utf8
"" | Out-File -FilePath "src/features/home/hooks/.gitkeep" -Encoding utf8
"" | Out-File -FilePath "src/features/about/components/.gitkeep" -Encoding utf8
"" | Out-File -FilePath "src/features/about/hooks/.gitkeep" -Encoding utf8
"" | Out-File -FilePath "src/features/admission/components/.gitkeep" -Encoding utf8
"" | Out-File -FilePath "src/features/admission/hooks/.gitkeep" -Encoding utf8
"" | Out-File -FilePath "src/features/levels/components/.gitkeep" -Encoding utf8
"" | Out-File -FilePath "src/features/levels/hooks/.gitkeep" -Encoding utf8
"" | Out-File -FilePath "src/features/contact/components/.gitkeep" -Encoding utf8
"" | Out-File -FilePath "src/features/contact/hooks/.gitkeep" -Encoding utf8
"" | Out-File -FilePath "src/shared/components/ui/.gitkeep" -Encoding utf8
"" | Out-File -FilePath "src/shared/hooks/.gitkeep" -Encoding utf8

Write-Host "✅ Archivos .gitkeep creados" -ForegroundColor Green

# ============================================
# PASO 3: Mover archivos existentes (si aplica)
# ============================================

Write-Host "Moviendo archivos existentes..." -ForegroundColor Cyan

# Mover globals.css si existe en app/
if (Test-Path "app/globals.css") {
    Move-Item -Path "app/globals.css" -Destination "src/app/globals.css" -Force
    Write-Host "  → globals.css movido" -ForegroundColor Gray
}

# Mover layout.tsx si existe en app/
if (Test-Path "app/layout.tsx") {
    Remove-Item "app/layout.tsx" -Force
    Write-Host "  → layout.tsx eliminado (se usa el del route group)" -ForegroundColor Gray
}

# Mover page.tsx si existe en app/
if (Test-Path "app/page.tsx") {
    Remove-Item "app/page.tsx" -Force
    Write-Host "  → page.tsx eliminado (se usa el del route group)" -ForegroundColor Gray
}

Write-Host "✅ Archivos movidos" -ForegroundColor Green

# ============================================
# RESUMEN
# ============================================

Write-Host "`n╔══════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║  ✅ Estructura creada exitosamente      ║" -ForegroundColor Green
Write-Host "╚══════════════════════════════════════════╝" -ForegroundColor Green

Write-Host "`n📁 Archivos creados automáticamente:" -ForegroundColor Yellow
Write-Host "  • Páginas de rutas (src/app/(public)/...)" -ForegroundColor Gray
Write-Host "  • Componentes de layout (Header, Footer)" -ForegroundColor Gray
Write-Host "  • Servicios (api.service.ts, contact.service.ts)" -ForegroundColor Gray
Write-Host "  • Tipos TypeScript" -ForegroundColor Gray
Write-Host "  • API route (src/app/api/contact/route.ts)" -ForegroundColor Gray
Write-Host "  • Utilidades compartidas" -ForegroundColor Gray

Write-Host "`n📚 Consulta ARQUITECTURA.md para más información" -ForegroundColor Cyan

Write-Host "`n🚀 Próximos pasos:" -ForegroundColor Yellow
Write-Host "  1. npm run dev" -ForegroundColor Gray
Write-Host "  2. Visita http://localhost:3000" -ForegroundColor Gray
Write-Host "  3. Comienza a desarrollar tus features" -ForegroundColor Gray
