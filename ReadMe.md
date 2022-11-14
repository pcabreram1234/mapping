# Mapping

Es una aplicación web que permite localizar espacios ya sea para trabajar o descansar.

Con el auge que ha tenido el trabajo remoto, esta aplicación pretende aliviar un poco el inconveniente que es  para los desarrolladores de software el poder contar con un espacio ideal para alcanzar su máximo rendimiento, y a la vez que dicho lugar cuente con la tranquilidad necesaria para su concentración.

![localhost_8089_(Laptop)](https://user-images.githubusercontent.com/77460748/201562246-38d01085-e937-4092-b7cf-f4b6c61016b4.png)

## Tecnologías y librerías utilizadas.

En el desarrollo de esta aplicación se utilizaron las siguientes tecnologías y librerías.

- ViteJs (Como empaquetador y manejador de archivos para el posterior despliegue de la app).
- ReactJs (Libraria para el desarrollo de la UI basada en componentes)
- Leaflet (Libreria para la implementación de mapas).
- React-Leaflet (Wrapper para utilizar la librería leaflet con ReactJs).

## Características o features.

1. Posicionamiento actual.
2. Búsqueda de lugares (De momento solo funciona con países).
3. Barra de búsqueda con autocompletado.

![localhost_8089_(Laptop) (1)](https://user-images.githubusercontent.com/77460748/201562292-d2b74597-07b0-43e5-9955-3dbdd32acd55.png)
![localhost_8089_(Laptop) (2)](https://user-images.githubusercontent.com/77460748/201562309-e6b208a8-1384-4e7c-9cad-1b75ac6170ab.png)

## Inicializar el proyecto.

Para comenzar a correr este proyecto solo basta con ejectuar los siguientes pasos.

1. Clonar este repositorio con `git clone https://github.com/pcabreram1234/mapping`
2. Instalar dependencias `npm install`
3. Inicializar el servidor incorporado con ViteJs con el comando `npm run dev`

Para preparar el proyecto para ser subido a producción solo debe ejecutar el comando `npm run build`

### Variables de entorno.
- **VITE_GOOGLE_URL_MAP**: URL del mapa a utilizar (Google, OpenStreetMap, etc...).
- **VITE_DEFAULT_INIT_LAT**: Latitud de la posición por defecto en la cual el mapa se renderizará por primera vez.
- **VITE_DEFAULT_INIT_LONG**: Longitud de la posición por defecto en la cual el mapa se renderizará por primera vez.
- **VITE_HOST**: Ruta del servidor en el cual esta corriendo la aplicación (localhost cuando esta corriendo en un entorno local).

## Colaboración

Cualquier comentario, retroalimentación o problema siéntase libre de hacer un fork a este repositorio y enviarme una solicitud de extracción. Si consideras que este repositorio puede serte util por favor no desdes en darme una ⭐. Lo agradecería bastante.
