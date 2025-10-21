CREATE TABLE IF NOT EXISTS users(
    id Serial primary key ,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created at timestamp default now()
)