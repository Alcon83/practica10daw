# Practica final Despliegue

## Dockerización de la Aplicación

La dockerización de aplicaciones representa una práctica moderna en el desarrollo de software, ofreciendo un entorno de ejecución consistente y seguro para las aplicaciones. Al encapsular una aplicación y sus dependencias en contenedores Docker, facilitamos su despliegue, escalabilidad y mantenimiento, independientemente del entorno de ejecución. Esto asegura que la aplicación se comportará de la misma manera tanto en desarrollo como en producción, eliminando el clásico problema "funciona en mi entorno".

## Pre-requisitos

Para ejecutar este proyecto, necesitas tener instalado:

- **Docker**: [Instalar Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Instalar Docker Compose](https://docs.docker.com/compose/install/)

## Configuración del Proyecto

Para comenzar, realiza los siguientes pasos:

git clone [URL del repositorio]
cd [nombre del directorio del proyecto]

## Ejecución del Proyecto

Para levantar todos los servicios definidos en `docker-compose.yml`, ejecuta:

docker-compose up -d

## Dockerización de la Aplicación

El proyecto utiliza `docker-compose.yml` para definir y correr los servicios necesarios:

- **Servicio de MongoDB**: Utiliza la imagen oficial de mongo para arrancar una base de datos MongoDB. Se configura para crear tablas automáticamente y restaurar datos desde un fichero dump al iniciar.
- **Servicio de Backend**: Construido a partir de `node:19-alpine`, espera a que MongoDB esté listo antes de iniciar. Se ejecuta con `npm start`.
- **Servicio de Frontend**: Similar al backend, pero enfocado en la interfaz de usuario. Se construye y se ejecuta después de que el backend esté disponible.
- **Servicio Mongo-Express**: Un administrador web para MongoDB, facilitando la gestión de la base de datos.
- **Servicio de LoadBalancer con Nginx**: Configura Nginx como un balanceador de carga y proxy inverso para dirigir tráfico al frontend y backend adecuadamente.
- **Servicios de Monitorización (Opcionales)**: Incluye Prometheus y Grafana para monitorear el rendimiento de la aplicación en tiempo real.

## Acceso a la Aplicación

Una vez que los servicios están en marcha, accede a la aplicación a través de:

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8000
- **Mongo-Express**: http://localhost:8081
- **Prometheus**: http://localhost:9090 
- **Grafana**: http://localhost:3500 

Reemplaza `localhost` con la dirección IP de tu Docker host si es necesario.

## Monitorización

Si configuraste Prometheus y Grafana, accede a Grafana en http://localhost:3500 para visualizar dashboards de métricas recogidas por Prometheus.

## Mantenimiento y Backups

El proyecto incluye scripts para restaurar la primera vez que se despliega, teniendo asi la estructura básica para empezar a trabajar.

