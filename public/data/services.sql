DELETE FROM bens_bikes_services;
INSERT INTO bens_bikes_services (id, title, description, long_description, image, price, category) VALUES (1, 'Find a Bike', 'Use my extensive network to find your perfect bike.', '', '/r2-images/ben-cyr-1.jpg', 100, 'Find A Bike');
INSERT INTO bens_bikes_services (id, title, description, long_description, image, price, category) VALUES (2, 'Fix A Bike', 'We can fix your bike', 'we can fix your bike', '/r2-images/ben-cyr-2.jpg', 30, 'drawing');
INSERT INTO bens_bikes_services (id, title, description, long_description, image, price, category) VALUES (3, 'Recommend a Bike', 'We can look at your needs and recommend a bike.', 'copy for recommend a bike', '/r2-images/ben-cyr-3.jpg', 25, 'digital');
INSERT INTO bens_bikes_services (id, title, description, long_description, image, price, category) VALUES (4, 'Green Laning', 'We can take you on a Green Lane Expedition.', '', '/r2-images/bb-green-1.jpg', 35, 'photography');
SELECT * FROM bens_bikes_services;