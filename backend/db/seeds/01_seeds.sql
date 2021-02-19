INSERT INTO users (username, password, is_admin) VALUES
('admin', 'admin123', true),
('ninja', 'ninja123', false);

INSERT INTO planets (name, description) VALUES
('Mercury', '01 A description or fun fact.'),
('Venus', '02 A description or fun fact.'),
('Earth', '03 A description or fun fact.'),
('Mars', '04 A description or fun fact.'),
('Jupiter', '05 A description or fun fact.'),
('Saturn', '06 A description or fun fact.'),
('Uranus', '07 A description or fun fact.'),
('Neptune', '08 A description or fun fact.'),
('Pluto', '09 A description or fun fact.');

INSERT INTO photos (title, description, url, posted_date) VALUES
('Bubble Nebula', 'Stunningly beautiful.', 'https://i.imgur.com/k0kEQc4.jpg', '2020-01-01'),
('Twin Jet Nebula', 'A striking example of a bipolar planetary nebula. Bipolar planetary nebulae are formed when the central object is not a single star,
  but a binary system.', 'https://i.imgur.com/txpD5r2.jpg', '2020-01-02'),
('Carina nebula', 'The Carina Nebula is an immense cloud of gas and dust where a maelstrom of star birth and death is taking place.',
  'https://i.imgur.com/y8K9cRi.jpg', '2020-01-03'),
('Veil Nebula', 'It formed from the violent death of a star twenty times the mass of the Sun that exploded about 8000 years ago.', 'https://i.imgur.com/mKLHds6.jpg', '2020-01-04'),
('Cone Nebula', 'Ultraviolet light heats the edges of the dark cloud, releasing gas into the relatively empty region of surrounding space.
  There, additional ultraviolet radiation causes the hydrogen gas to glow, which produces the red halo of light seen around the pillar.',
    'https://i.imgur.com/6lcb5cY.jpg', '2020-01-05'),
('Crab Nebula', 'The Crab Nebula, the result of a supernova noted by Earth-bound chroniclers in 1054 A.D. In the nebula''s very center lies a pulsar:
  a neutron star as massive as the Sun but with only the size of a small town.', 'https://i.imgur.com/BmplgpG.jpg', '2020-01-06'),
('Helix Nebula', 'Before the star died, its comets, and possibly planets, would have orbited the star in an orderly fashion.
  When the star ran out of hydrogen to burn, and blew off its outer layers, the icy bodies and outer planets would have been tossed about and into each other,
  kicking up an ongoing cosmic dust storm.', 'https://i.imgur.com/lVfsbiO.jpg', '2020-01-07'),
('Horsehead Nebula', 'The dark molecular cloud, roughly 1,500 light years distant, is visible only because its obscuring dust is silhouetted against another, brighter nebula.',
  'https://i.imgur.com/FmdOMJG.jpg', '2020-01-08'),
('Hourglass Nebula', 'A young planetary nebula located about 8,000 light-years away. 8000 lightyears = 7.568585e+16km !', 'https://i.imgur.com/1RbiDMR.jpg', '2020-01-09'),
('Ring Nebula', 'The nebula is not like a bagel, but rather, like a jelly doughnut, because it''s filled with material in the middle. - C. Robert O''Dell',
  'https://i.imgur.com/UrsmZkZ.jpg', '2020-01-10'),
('Stellar spire in the Eagle Nebula', 'A billowing tower of cold gas and dust rising from a stellar nursery called the Eagle Nebula which is 90 trillion kilometers high!',
  'https://i.imgur.com/kJ0WQT7.jpg', '2020-01-11'),
('Rose', 'Formed by galaxies', 'https://i.imgur.com/EZMPd7Y.jpg', '2020-01-12'),
('Sombrero galaxy' , 'The Sombrero has a central supermassive black hole at its heart. Observations of star motions near the black hole
  suggest it could have the mass of a billion Suns, perhaps the most massive of any black hole found so far at the heart of a galaxy.', 'https://i.imgur.com/UyqQvdT.jpg',
  '2020-01-13'),
('The Merge', 'Two galaxies that are merging', 'https://i.imgur.com/SQhI4zP.jpg', '2020-01-14'),
('Pillars of creation', 'These are in fact cool interstellar hydrogen gas and dust that act as incubators for new stars.', 'https://i.imgur.com/9c7Ggjv.jpg',
  '2020-01-15'),
('Star cluster Pismis 24', 'Pismis 24 over 200 times the mass of our Sun, making it a record holder. This star is the brightest object
  located just to the left of the gas front', 'https://i.imgur.com/ARze3UK.jpg', '2020-01-24'),
('Westerlund 2' , 'Strong winds and radiation from those massive young stars have sculpted and shaped the region''s gas and dust, into starforming pillars
  that point back to the central cluster. Red dots surrounding the bright stars are the cluster''s faint newborn stars, still within their natal gas and dust cocoons.',
  'https://i.imgur.com/3jekqkJ.jpg', '2020-01-25'),
('Cosmic Dust Bunnies', 'surprisingly complex loops and blobs of cosmic dust lie hidden in the giant elliptical galaxy NGC 1316.', 'https://i.imgur.com/rgMQnrX.jpg',
  '2020-01-26'),
('Stellar Outburst', 'Picture from 2002 of light which continued to echo for three years', 'https://i.imgur.com/OLxxmqg.jpg', '2020-01-27'),
('Mystic Mountain', 'The Mystic Mountain is being eaten away by the brilliant light from nearby bright stars. The pillar is also
  being assaulted from within, as infant stars buried inside it fire off jets of gas that can be seen streaming from towering peaks.', 'https://i.imgur.com/64dk219.jpg',
  '2020-01-28'),
('NGC 1275', 'It accretes matter as entire galaxies fall into it, ultimately feeding a supermassive black hole at the galaxy''s core', 'https://i.imgur.com/YTRlxhK.jpg',
  '2020-01-29');

INSERT INTO favourites (user_id, photo_id) VALUES
(1, 1),
(1, 2),
(1, 8),
(1, 9),
(1, 10),
(1, 13),
(2, 1),
(2, 13),
(2, 12),
(2, 21),
(2, 15);