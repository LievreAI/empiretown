

INSERT INTO `addon_account` (name, label, shared) VALUES
	('society_mechanic', 'Mechanik', 1)
;

INSERT INTO `addon_inventory` (name, label, shared) VALUES
	('society_mechanic', 'Mechanik', 1)
;

INSERT INTO `datastore` (name, label, shared) VALUES
	('society_mechanic', 'Mechanik', 1)
;

INSERT INTO `jobs` (name, label) VALUES
	('mechanic', 'Mechanik')
;

INSERT INTO `job_grades` (job_name, grade, name, label, salary, skin_male, skin_female) VALUES
	('mechanic',0,'recrue','Praktykant',12,'{}','{}'),
	('mechanic',1,'novice','Nowicjusz',24,'{}','{}'),
	('mechanic',2,'experimente','Doświadczony',36,'{}','{}'),
	('mechanic',3,'chief','Kierownik',48,'{}','{}'),
	('mechanic',4,'boss','Szef',0,'{}','{}')
;

INSERT INTO `items` (name, label, weight) VALUES
	('fixkit', 'Narzedzia naprawcze', 3)
;
