PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE bens_bikes_blogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  author TEXT,
  image TEXT, -- URL or path to image
  content TEXT,
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP
, shortcontent TEXT, longcontent TEXT);
INSERT INTO bens_bikes_blogs VALUES(1,'Early days biking','slug-1','ally','/r2-images/bb-gallery-1.jpg','As a kid, I loved riding my bike around the neighborhood. The freedom and adventure of exploring new places on two wheels was unmatched. I remember the thrill of learning to ride without training wheels and the joy of racing down hills with friends.','2025-10-05 11:05:39','The ABC Road Bike is a lightwe','<p>The ABC Road Bike is a lightweight, carbon-framed machine built for speed and comfort...</p>');
INSERT INTO bens_bikes_blogs VALUES(2,'Favourite Rides','slug-2','ben','/r2-images/bb-gallery-5.jpg','I have  ridden some amazing routes over the years, but a few stand out as my favourites. ','2025-10-05 11:05:39','The XYZ Mountain Bike tackles ','<p>The XYZ Mountain Bike tackles rugged terrain with ease, thanks to its full suspension and grippy tires...</p>');
INSERT INTO bens_bikes_blogs VALUES(3,'Toughest Love','slug-3','john','/r2-images/bb-gallery-9.jpg','Sometimes you don not  want to ride, but get your gear on and go anyway.','2025-10-05 11:05:39','Looking for a commuter-friendl','<p>Looking for a commuter-friendly hybrid? The Urban Glide 300 blends city style with weekend versatility...</p>');
INSERT INTO bens_bikes_blogs VALUES(4,'jwh','slug-4','liz','/r2-images/bb-merch-2.jpg','jwh','2025-10-05 13:04:01','The Retro Cruiser is all about','<p>The Retro Cruiser is all about comfort and charm — perfect for beach rides and gentle trails...</p>');
INSERT INTO bens_bikes_blogs VALUES(5,'jwh','slug-5','mia','/r2-images/bb-merch-1','tttessttt','2025-10-05 13:09:14','Electric bikes are changing th','<p>Electric bikes are changing the game. The VoltEdge E500 offers pedal-assist power with a sleek frame...</p>');
INSERT INTO bens_bikes_blogs VALUES(6,'jwh','slug-6','emma','/r2-images/bb-merch-1.jpg','adljadlnad','2025-10-05 13:11:26','We tested the GravelPro GX on ','<p>We tested the GravelPro GX on mixed terrain — and it delivered stability, speed, and surprising comfort...</p>');
INSERT INTO bens_bikes_blogs VALUES(7,'jwh','slug-7','richie','/r2-images/bb-gallery-7.jpg','as;ldka;sdk','2025-10-05 13:59:59','Kids deserve great bikes too. ','<p>Kids deserve great bikes too. The MiniRider 20 is safe, stylish, and built to grow with your child...</p>');
INSERT INTO bens_bikes_blogs VALUES(8,'jwhjwhw','slug-8','mark','','as''dla''sdl;da'' dla''d la ','2025-10-20 08:45:14','Touring across the UK? The End','<p>Touring across the UK? The Enduro Trekker 700 packs durability, pannier mounts, and a smooth gear range...</p>');
COMMIT;
