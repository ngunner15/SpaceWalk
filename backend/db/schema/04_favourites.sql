DROP TABLE IF EXISTS favourites CASCADE;

CREATE TABLE favourites (
   id SERIAL PRIMARY KEY NOT NULL,
   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
   photo_id INTEGER REFERENCES photos(id) ON DELETE CASCADE
);