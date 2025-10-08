DELETE FROM bens_bikes_services;

INSERT INTO bens_bikes_services (id, title, description, long_description, image, price, category) VALUES (1, 'Find a Bike', 'Use my extensive network to find your perfect bike.', '', '/r2-images/ben-service-1.jpg', 100, 'Find');
INSERT INTO bens_bikes_services (id, title, description, long_description, image, price, category) VALUES (2, 'Fix A Bike', 'We can fix your bike', '', '/r2-images/ben-service-2.jpg', 30, 'Fix');
INSERT INTO bens_bikes_services (id, title, description, long_description, image, price, category) VALUES (3, 'Recommend a Bike', 'We can look at your needs and recommend a bike.', '', '/r2-images/ben-service-3.jpg', 25, 'Recommend');
INSERT INTO bens_bikes_services (id, title, description, long_description, image, price, category) VALUES (4, 'Recover/Transport a Bike', 'Broken down at the track, need a lift to the track', '', '/r2-images/ben-service-4.jpg', 25, 'Pick');
INSERT INTO bens_bikes_services (id, title, description, long_description, image, price, category) VALUES (5, 'Green Laning', 'We can take you on a Green Lane Expedition.', '', '/r2-images/bb-service-5.jpg', 35, 'ADventure');

SELECT * FROM bens_bikes_services;