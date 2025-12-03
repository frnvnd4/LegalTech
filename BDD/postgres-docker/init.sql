-- Crear tabla de Usuarios
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    rut INT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de Credenciales de Usuario
CREATE TABLE UserCredentials (
    id SERIAL PRIMARY KEY,
    user_id INT UNIQUE REFERENCES Users(user_id),
    password_hash VARCHAR(255) NOT NULL,
    last_password_change TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de Log de Auditoría Administrativa
CREATE TABLE AdminAuditLogs (
    log_id SERIAL PRIMARY KEY,
    admin_id INT REFERENCES Users(user_id),
    action VARCHAR(255) NOT NULL,
    target_id INT,
    target_type VARCHAR(50),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    details TEXT
);

--Crear tabla para almacenar las clinicas juridicas
CREATE TABLE Legal_Clinics (
    clinic_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    contact_email VARCHAR(255),
    phone_number VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Crear tabla para almacenar los tickets asignados
CREATE TABLE TicketAssignments (
    ticket_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    clinic_id INT REFERENCES Legal_Clinics(clinic_id),
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);