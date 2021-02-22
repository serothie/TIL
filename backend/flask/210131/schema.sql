create table if not exists user(
    id int not null AUTO_INCREMENT,
    fullname varchar(32) not null,
    email varchar(64) not null,
    password varchar(128) not null,
    primary key(id),
    unique(email)
);

create table if not exists board(
    id int not null AUTO_INCREMENT,
    name varchar(64) not null,
    create_date timestamp default NOW(),
    primary key (id)
);

create table if not exists boardArticle(
    id int not null AUTO_INCREMENT,
    title varchar(64) not null,
    content text,
    board_id int not null,
    create_date timestamp default NOW(),
    primary key (id),
    foreign key (board_id) references board(id)
);

INSERT INTO user (fullname, email, password) VALUES ('test_name1', 'test1@test1.com', 'pbkdf2:sha256:150000$1UsN1QVJ$3192e558a841d1cc4d3b6b110f4eb6c6132577721c82f1c9273d8a6ef226fe4f');
INSERT INTO user (fullname, email, password) VALUES ('test_name2', 'test2@test2.com', 'pbkdf2:sha256:150000$cMFrlh2b$5ee28dfdb5e40091e3d07bc31ce14001b8c4889250f5bed5556a31f446fb1760');
INSERT INTO user (fullname, email, password) VALUES ('test_name3', 'test3@test3.com', 'pbkdf2:sha256:150000$U5SYtNAz$4979846300ea1a7270e034b0bf7bed349139d45775047b4d784bb4d95963646c');

INSERT INTO board (name) VALUES ('test1');
INSERT INTO board (name) VALUES ('test2');

INSERT INTO boardArticle (title, content, board_id) VALUES ('제목1', '내용1', 1);
INSERT INTO boardArticle (title, content, board_id) VALUES ('제목2', '내용2', 1);
INSERT INTO boardArticle (title, content, board_id) VALUES ('제목3', '내용3', 2);