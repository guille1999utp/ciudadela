## Proyecto de Tarjetas de Personajes de Rick and Morty

¡Bienvenido al emocionante proyecto de tarjetas de personajes de Rick and Morty! En esta página web, puedes explorar una colección de tarjetas que muestran a tus personajes favoritos de la serie. donde solo estamos mostrando los personajes que son humanos. 

Cada tarjeta tiene el nombre del personaje,y por supuesto una imagen para que puedas reconocerlos al instante!

La página es sencilla, sin complicaciones. Así que, ¿por qué no te tomas un momento para explorar a los  personajes humanos de Rick and Morty? 


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