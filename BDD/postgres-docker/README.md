# Proyecto LegalTech - Base de Datos PostgreSQL con Docker

Este proyecto contiene la configuración para levantar una base de datos PostgreSQL con Docker, utilizando un archivo `init.sql` para crear las tablas automáticamente. La base de datos está diseñada para soportar el backend de un chatbot legal, con funcionalidades de auditoría, gestión de usuarios y almacenamiento de información relevante.

---

## Descripción General

La base de datos PostgreSQL en este proyecto está configurada dentro de un contenedor Docker para asegurar que el entorno de desarrollo sea consistente y fácil de desplegar. Se incluyen archivos de configuración y scripts de inicialización necesarios para preparar la base de datos.

---

## Requisitos

- **Docker**: Versión 20.10 o superior
- **Docker Compose**: Versión 1.29 o superior
- Opcional: Cliente de PostgreSQL como **psql**, **DataGrip**, o **pgAdmin**

---

## Estructura del Proyecto

```plaintext
postgres-docker/
├── Dockerfile            # Archivo de configuración de Docker
├── docker-compose.yml    # Archivo de configuración para Docker Compose
├── .env                  # Archivo de entorno con variables sensibles
├── init.sql              # Script SQL de inicialización de la base de datos
└── README.md             # Documentación del proyecto
```

---

## Configuración del Entorno

El archivo `.env` contiene las variables de entorno necesarias, como las credenciales de la base de datos y las configuraciones de red.

---

## Instrucciones de Uso

1. **Construir e Iniciar el Contenedor**
   Navega a la carpeta `postgres-docker` y ejecuta el siguiente comando:
   ```bash
   docker-compose up -d
   ```
   Esto descargará la imagen de PostgreSQL (si no la tienes ya) y levantará el contenedor en segundo plano.

2. **Verificar el Estado del Contenedor**
   Puedes verificar que el contenedor esté corriendo correctamente con:
   ```bash
   docker ps
   ```

3. **Acceso a la Base de Datos**
   Puedes acceder al contenedor y usar `psql` para interactuar con la base de datos:
   ```bash
   docker exec -it postgres_legaltech psql -U [user] -d [nombre_db]
   ```

---

## Comandos Útiles

- **Levantar la base de datos**: 
  ```bash
  docker-compose up -d
  ```
- **Detener la base de datos**: 
  ```bash
  docker-compose down
  ```
- **Ver logs del contenedor**:
  ```bash
  docker logs postgres_legaltech
  ```

---

## Notas (Tareas por hacer)

- **Backups**: Se recomienda establecer un sistema de respaldo para la base de datos.
- **Firewall**: Configura un firewall para restringir el acceso a la base de datos, permitiendo solo conexiones necesarias.

---

## Contacto y Soporte

Para más información o soporte técnico, por favor contacta a los desarrolladores principales del proyecto:

- Jazmín Cuitiño: jazmin.cuitino@mail.udp.cl
- Felipe Gutiérrez: felipe.gutierrez_l@mail.udp.cl
- Catalina Lorca: catalina.lorca_b@mail.udp.cl
- Fernanda Lorca: fernanda.lorca_b@mail.udp.cl
- Gonzalo Troncoso: gonzalo.troncoso_m@mail.udp.cl

---

## Licencia

Este proyecto se encuentra bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
