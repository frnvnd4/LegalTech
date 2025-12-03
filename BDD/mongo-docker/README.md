# Proyecto LegalTech - Base de Datos MongoDB con Docker

Este proyecto configura y levanta una base de datos MongoDB con Docker. La base de datos está diseñada para almacenar conversaciones de usuarios con el chatbot, tickets de asesoría legal, y logs de actividad, con persistencia de datos garantizada para el desarrollo y pruebas.

---

## Descripción General

La base de datos MongoDB en este proyecto está configurada dentro de un contenedor Docker para asegurar que el entorno de desarrollo sea consistente y fácil de desplegar. MongoDB se utiliza debido a su flexibilidad en el manejo de datos no estructurados, ideal para almacenar el historial de conversaciones y otras interacciones del usuario.

---

## Requisitos

- **Docker**: Versión 20.10 o superior
- **Docker Compose**: Versión 1.29 o superior
- Opcional: Cliente de MongoDB como **MongoDB Compass** o **Studio 3T**

---

## Estructura del Proyecto

```plaintext
mongo-docker/
├── Dockerfile            # Archivo de configuración de Docker
├── docker-compose.yml    # Archivo de configuración para Docker Compose
├── .env                  # Variables de entorno para configuración
└── README.md             # Documentación del proyecto
```

---

## Configuración del Entorno

El archivo `.env` contiene las variables de entorno necesarias para la configuración de MongoDB, como las credenciales de usuario y las configuraciones de red. 

---

## Instrucciones de Uso

1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/iJass21/LegalTech-BDD.git
   ```

2. **Navegar al Directorio de MongoDB**
   ```bash
   cd mongo-docker
   ```

3. **Asegúrate de tener Docker y Docker Compose instalados**

4. **Configurar el Archivo .env**
   Crea un archivo `.env` en la raíz del proyecto con las variables de entorno adecuadas.

5. **Levantar el Contenedor**
   ```bash
   docker-compose up -d
   ```

---

## Conexión a la Base de Datos

Puedes conectarte al contenedor de MongoDB y acceder a la base de datos usando `mongosh`:
```bash
docker exec -it mongo_legaltech bash
mongosh -u [usuario] -p [password] --authenticationDatabase admin
use legaltech_db
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
  docker logs mongo_legaltech
  ```

---

## Explicación y Preparación para la Nube

- **Persistencia de Datos**: Los datos se guardan en un volumen llamado `mongo_data`, lo que asegura que no se perderán al reiniciar el contenedor.
- **Preparación para la Nube**: Cuando estés listo para migrar a un servicio en la nube, puedes exportar los datos de MongoDB usando herramientas como `mongodump` y subirlos a un servicio como MongoDB Atlas o cualquier otro proveedor de alojamiento de MongoDB.

---

## Notas

- **Backups**: Considera hacer copias de seguridad periódicas de los datos para evitar pérdidas.
- **Seguridad**: Asegúrate de que la base de datos esté correctamente asegurada, especialmente si se expone a internet.

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
