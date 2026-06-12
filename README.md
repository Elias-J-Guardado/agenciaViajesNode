# AgenciaViajesNode

Este proyecto permite agregar experiencias de viaje simulando el flujo de una empresa de viajes.

## Tabla de contenidos
- [Descripción](#descripción).
- [Instalación](#instalación).
- [Tecnologías](#tecnologías).
- [Estrucctura](#estrucctura).

## Descripción
Aplicación que simula la página de una agencia de viajes con visualización desde base de datos de reseñas de usuarios.

## Requisitos previos
- Node.js v18 o superior
- pnpm (npm install -g pnpm)
- MySQL 8+ corriendo localmente

## Instalación 

1. Clona el respositorio
```bash
    git clone https://github.com/Elias-J-Guardado/agenciaViajesNode.git
```
2. Instala dependencias
```bash
    pnpm install
```
3. Configura las variables de entorno
```bash
    DATABASE_URL= "YOUR DATABASE URL"
```
4. Crea la base de datos con sequalize y corre las migraciones
npx sequelize-cli db:create
npx sequelize-cli db:migrate

5. Inicia el servidor de desarrollo
```bash
    pnpm dev
```

## Tecnologías
- [node.js](https://nodejs.org/en)
- [express](https://expressjs.com/en/)
- [pug](https://pugjs.org/api/getting-started.html)
- [sequelize](https://sequelize.org/)
- [mysql](https://www.mysql.com/)