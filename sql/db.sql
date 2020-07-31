
CREATE DATABASE proyectos_uaz;

CREATE TABLE IF NOT EXISTS proyects(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK (name <> ''),    
    priority INTEGER NOT NULL,
    description TEXT,
    deliverydate DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,    
    name TEXT NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    proyectId INTEGER REFERENCES proyects(id)
);

DROP DATABASE proyectos;

-- registros de proyects

INSERT INTO proyects (name, priority, description, deliverydate)
    VALUES('Make a Web App', 1, 'Using Javascript', '2020-05-29');

INSERT INTO proyects (name, priority, description, deliverydate)
	VALUES('Make a Api Rest', 1, 'Using node and postgresql', '2020-05-29');
	
INSERT INTO proyects (name, priority, description, deliverydate)
	VALUES('Hacer Una Tienda Online', 2, 'Using PHP', '2020-05-29');
	
INSERT INTO proyects (name, priority, description, deliverydate)
	VALUES('Make a Chat', 2, 'Using Node and Javascript', '2020-05-29');

INSERT INTO proyects (name, priority, description, deliverydate)
	VALUES('Make a CRUD with Django', 1, 'Using Python and Django', '2020-05-29');

-- registros de tasks
INSERT INTO tasks(name, done, proyectId) VALUES('Dominar html', true, 1);
INSERT INTO tasks(name, done, proyectId) VALUES('Dominar javascript', true, 1);
INSERT INTO tasks(name, done, proyectId) VALUES('Dominar css', false, 1);

INSERT INTO tasks(name, done, proyectId) VALUES('Dominar node', true, 2);
INSERT INTO tasks(name, done, proyectId) VALUES('Aprender javascript', true, 2);
INSERT INTO tasks(name, done, proyectId) VALUES('Saber DB en postgresql', true, 2);
INSERT INTO tasks(name, done, proyectId) VALUES('Aprender express', false, 2);

INSERT INTO tasks(name, done, proyectId) VALUES('Aprender PHP', true, 3);
INSERT INTO tasks(name, done, proyectId) VALUES('Aprender Laravel', false, 3);

INSERT INTO tasks(name, done, proyectId) VALUES('Aprender node y express', true, 3);

INSERT INTO tasks(name, done, proyectId) VALUES('Aprender python y django', true, 3);