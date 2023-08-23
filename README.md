# Proyecto Frontend y Backend

Este proyecto consta de una aplicación frontend desarrollada con Next.js y un servidor backend desarrollado con Express.

## Requisitos

Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

## Instalación del Frontend

1. Navega a la carpeta `frontend`:

```bash
$ cd frontend
```

2. Instala las dependencias:

```bash
$ npm install
```


## Instalación del Backend

1. Navega a la carpeta `backend`:

```bash
$ cd backend
```

2. Instala las dependencias:

```bash
$ npm install
```

## Iniciar la Aplicación en Modo de Desarrollo

1. Inicia el servidor backend:

Desde la carpeta `backend`, ejecuta:

```bash
$ npm start
```

El servidor backend se ejecutará en http://localhost:4000.

2. Inicia la aplicación frontend:

Desde la carpeta `frontend`, ejecuta:

```bash
$ npm run dev
```


La aplicación frontend se ejecutará en http://localhost:3000.

Ahora podrás acceder tanto a la aplicación frontend como al servidor backend en sus respectivas URL durante el desarrollo.

## Ruta para poder solicitar una lista de personas humanos de rick y morty

http://localhost:4000/get-characters?page=1