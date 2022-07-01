CREATE TABLE users (
    user_id SERIAL NOT NULL,
    city CHARACTER VARYING(50),
    postal_code INTEGER,
    region CHARACTER VARYING(50),
    country CHARACTER VARYING(50),
    firstname CHARACTER VARYING(25),
    lastname CHARACTER VARYING(50),
    phone_number CHARACTER VARYING(100) UNIQUE NOT NULL,
    email CHARACTER VARYING(100) UNIQUE,
    password CHARACTER VARYING(200) NOT NULL,
    gender CHARACTER VARYING(10),
    birthdate DATE DEFAULT,
    adress CHARACTER VARYING(200),
    facebook_name CHARACTER VARYING(200), 
    profile_avatar CHARACTER VARYING(50), 
    PRIMARY KEY (user_id) 
);

CREATE TABLE houses (
    house_id SERIAL NOT NULL,
    area CHARACTER VARYING(20),
    label CHARACTER VARYING(100) NOT NULL,
    city CHARACTER VARYING(50) NOT NULL,
    postal_code INTEGER,
    region CHARACTER VARYING(50),
    country CHARACTER VARYING(50) NOT NULL,
    adress CHARACTER VARYING(200) NOT NULL,
    rent_price CHARACTER VARYING(20) NOT NULL,
    rooms_number INTEGER NOT NULL,
    description TEXT NOT NULL,
    state CHARACTER VARYING(20) NOT NULL,
    end_date INTEGER NOT NULL,
    open_date DATE,
    published_on DATE DEFAULT CURRENT_DATE,
    house_type CHARACTER VARYING(50) NOT NULL,
    user_id INTEGER NOT NULL,
    PRIMARY KEY (house_id)
);

CREATE TABLE house_type (
    house_type_id SERIAL NOT NULL,
    category CHARACTER VARYING(20) NOT NULL,
    PRIMARY KEY (house_type_id)
);

CREATE TABLE house_photo (
    house_photo_id SERIAL NOT NULL,
    path CHARACTER VARYING(50) NOT NULL,
    house_id INTEGER NOT NULL,
    PRIMARY KEY (house_photo_id)
);

CREATE TABLE rooms (
    room_id SERIAL NOT NULL,
    type CHARACTER VARYING(20) NOT NULL,
    quantity INTEGER NOT NULL,
    house_id INTEGER NOT NULL,
    PRIMARY KEY (room_id)
);

CREATE TABLE services (
    services_id SERIAL NOT NULL,
    interior_toilets boolean NOT NULL,
    outdoor_toilets boolean NOT NULL,
    running_water boolean NOT NULL,
    garage boolean NOT NULL,
    pool boolean NOT NULL,
    garden boolean NOT NULL,
    accessibility CHARACTER VARYING (100),
    PRIMARY KEY (services_id)
);

CREATE TABLE favorite (
    favorite_id SERIAL NOT NULL,
    user_id INTEGER NOT NULL,
    house_id INTEGER NOT NULL,
);

CREATE TABLE offers (
    offers_id SERIAL NOT NULL,
    house_id INTEGER NOT NULL,
    services_id INTEGER NOT NULL,
);

/* ALTER TABLE houses
    ADD FOREIGN KEY (house_type_id)
    REFERENCES house_type (house_type_id)
    ON DELETE SET NULL
    NOT VALID;
 */
ALTER TABLE houses
    ADD FOREIGN KEY (user_id)
    REFERENCES users (user_id)
    ON DELETE CASCADE
    NOT VALID;

ALTER TABLE favorite
    ADD FOREIGN KEY (user_id)
    REFERENCES users (user_id)
    ON DELETE SET NULL
    NOT VALID;

ALTER TABLE favorite
    ADD FOREIGN KEY (house_id)
    REFERENCES houses (house_id)
    ON DELETE SET NULL
    NOT VALID;

ALTER TABLE house_photo
    ADD FOREIGN KEY (house_id)
    REFERENCES houses (house_id)
    ON DELETE SET NULL
    NOT VALID;

ALTER TABLE rooms
    ADD FOREIGN KEY (house_id)
    REFERENCES houses (house_id)
    ON DELETE SET NULL
    NOT VALID;

ALTER TABLE offers
    ADD FOREIGN KEY (house_id)
    REFERENCES houses (house_id)
    ON DELETE SET NULL
    NOT VALID;

ALTER TABLE offers
    ADD FOREIGN KEY (services_id)
    REFERENCES services (services_id)
    ON DELETE SET NULL
    NOT VALID;