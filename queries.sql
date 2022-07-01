   CREATE TABLE IF NOT EXISTS Cadaster (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role ENUM ("normal", "admin") DEFAULT "normal"
   );