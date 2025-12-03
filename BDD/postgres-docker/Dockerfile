# Usar la imagen oficial de PostgreSQL
FROM postgres:latest

# Establecer variables de entorno para el usuario y la base de datos de PostgreSQL
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=adminpassword
ENV POSTGRES_DB=legaltech_db

# Copiar el script SQL para la inicialización
COPY init.sql /docker-entrypoint-initdb.d/