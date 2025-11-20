CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  title TEXT,
  description TEXT,
  price INTEGER,
  category TEXT,
  image TEXT,
  images TEXT,
  longDescription TEXT
);
CREATE TABLE _cf_METADATA (
        key INTEGER PRIMARY KEY,
        value BLOB
      );
CREATE TABLE bens_bikes_products (
  id INTEGER PRIMARY KEY,
  title TEXT,
  description TEXT,
  price INTEGER,
  category TEXT,
  image TEXT,
  images TEXT,
  longDescription TEXT
, status TEXT DEFAULT 'active');
CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  author TEXT,
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE sqlite_sequence(name,seq);
CREATE TABLE bens_bikes_merchandise (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,         
  description TEXT,
  long_description TEXT, 
  image TEXT,         
  price INTEGER,         
  category TEXT       
, status TEXT DEFAULT 'active');
CREATE TABLE bens_bikes_services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,         
  description TEXT,
  long_description TEXT, 
  image TEXT,         
  price INTEGER,         
  category TEXT       
, status TEXT DEFAULT 'active');
CREATE TABLE bens_bikes_gallery (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,         
  description TEXT,
  long_description TEXT, 
  image TEXT,         
  price INTEGER,         
  category TEXT       
, status TEXT DEFAULT 'active');
CREATE TABLE bens_bikesposts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  author TEXT,
  image TEXT, -- URL or path to image
  content TEXT,
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE bens_bikes_posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  author TEXT,
  image TEXT, -- URL or path to image
  content TEXT,
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE bens_bikes_blogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  author TEXT,
  image TEXT, -- URL or path to image
  content TEXT,
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP
, shortcontent TEXT, longcontent TEXT, status TEXT DEFAULT 'active');
CREATE TABLE bens_bikes_orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  cart JSON NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'pending'
);
