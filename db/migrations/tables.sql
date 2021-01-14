DROP TABLE IF EXISTS employee CASCADE;

CREATE TABLE employees (
  id SERIAL PRIMARY KEY NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  pin INTEGER NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,
  start_date TIMESTAMPTZ
);

CREATE TABLE shifts (
  id SERIAL PRIMARY KEY NOT NULL,
  employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE,
  shift_start TIMESTAMPTZ,
  shift_end TIMESTAMPTZ DEFAULT NULL
);

CREATE TABLE tables (
  id SERIAL PRIMARY KEY NOT NULL,
  employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE,
  number_of_seats INTEGER NOT NULL,
  status BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE seats (
  id SERIAL PRIMARY KEY NOT NULL
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

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE,
  table_id INTEGER REFERENCES tables(id) ON DELETE CASCADE,
  seat_id  INTEGER REFERENCES seats(id) ON DELETE CASCADE,
  payment_type  VARCHAR(255) DEFAULT NULL,
  timestamp TIMESTAMPTZ,
  order_items_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  email VARCHAR(255) DEFAULT NULL
);


