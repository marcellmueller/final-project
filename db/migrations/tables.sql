DROP TABLE IF EXISTS employees CASCADE;
DROP TABLE IF EXISTS shifts CASCADE;
DROP TABLE IF EXISTS tables CASCADE;
DROP TABLE IF EXISTS seats CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS order_items CASCADE;

CREATE TABLE employees (
  id SERIAL PRIMARY KEY NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  pin VARCHAR(255) NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,
  start_date TIMESTAMPTZ
);

CREATE TABLE shifts (
  id SERIAL PRIMARY KEY NOT NULL,
  employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE,
  punch_time TIMESTAMPTZ,
  is_in BOOLEAN DEFAULT TRUE
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  is_food BOOLEAN NOT NULL
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  description VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE tables (
  id SERIAL PRIMARY KEY NOT NULL,
  employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE,
  number_of_seats INTEGER NOT NULL,
  status BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE seats (
  id SERIAL PRIMARY KEY NOT NULL,
  seat_number INTEGER NOT NULL DEFAULT 1,
  table_id INTEGER REFERENCES tables(id) ON DELETE CASCADE
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE,
  table_id INTEGER REFERENCES tables(id) ON DELETE CASCADE,
  payment_type  VARCHAR(255) DEFAULT NULL,
  timestamp TIMESTAMPTZ DEFAULT CLOCK_TIMESTAMP(),
  email VARCHAR(255) DEFAULT NULL
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  seat_number INTEGER DEFAULT 1,
  item  INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  is_payed  BOOLEAN NOT NULL DEFAULT FALSE,
  is_made  BOOLEAN NOT NULL DEFAULT FALSE,
  timestamp TIMESTAMPTZ DEFAULT CLOCK_TIMESTAMP(),
  mods VARCHAR(255) DEFAULT NULL
);




