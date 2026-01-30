# 🏫 Colegio - Sitio Web Institucional

Sitio web institucional desarrollado con Next.js 16, TypeScript y Tailwind CSS, siguiendo arquitectura Feature-First y principios de Clean Architecture.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

## 📁 Estructura del Proyecto

```
src/
├── app/              # App Router (routing)
├── features/         # Lógica de negocio por feature
├── shared/           # Componentes y servicios compartidos
└── types/            # Tipos globales
```

Ver [ARQUITECTURA.md](./ARQUITECTURA.md) para documentación completa.

## 🌐 Rutas Disponibles

- **`/`** - Página de inicio
- **`/nosotros`** - Información institucional
- **`/admision`** - Proceso de admisión
- **`/niveles/inicial`** - Nivel inicial
- **`/niveles/primaria`** - Nivel primaria
- **`/niveles/secundaria`** - Nivel secundaria
- **`/contacto`** - Formulario de contacto

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Arquitectura**: Feature-First + Clean Architecture

## 📦 Comandos Disponibles

```bash
npm run dev          # Desarrollo
npm run build        # Build de producción
npm start            # Servidor de producción
npm run lint         # Linting
```

## 🏗️ Arquitectura

### Feature-First
Cada feature contiene toda su lógica relacionada:
- Componentes específicos
- Hooks personalizados
- Servicios de negocio
- Tipos TypeScript

### Clean Architecture
Separación clara de responsabilidades:
- `app/` - Solo routing y composición
- `features/` - Lógica de dominio
- `shared/` - Código reutilizable

### Alias de Importación
```typescript
import { Header } from '@/shared/components/layout/Header';
import { ContactService } from '@/features/contact/services/contact.service';
```

## 📝 Convenciones

- **Nombres de archivos**: kebab-case para carpetas, PascalCase para componentes
- **Componentes**: Un componente por archivo
- **Exportaciones**: Usar barrel exports (index.ts)
- **Tipos**: Co-ubicar con el código que los usa

## 📚 Documentación

- [ARQUITECTURA.md](./ARQUITECTURA.md) - Documentación completa de la arquitectura
- [setup-estructura.ps1](./setup-estructura.ps1) - Script para recrear la estructura

## 🤝 Desarrollo

Este proyecto está configurado para ser escalable y mantenible:
- ✅ Arquitectura modular por features
- ✅ Separación clara de responsabilidades
- ✅ TypeScript para type-safety
- ✅ Convenciones de código consistentes
- ✅ Estructura preparada para crecimiento

## 📄 Licencia

Proyecto privado - Colegio Institucional

---

**Desarrollado con** ❤️ **usando Next.js 16**
