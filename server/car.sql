#设置客户端连接服务器端的编码
set names utf8;
DROP DATABASE if EXISTS CAR;

CREATE DATABASE CAR charset = utf8;

USE CAR;

-- 产品详情

CREATE TABLE PROSET_DETAIL (
    tid INT PRIMARY KEY auto_increment,
    pic VARCHAR(118) NOT NULL
);
INSERT INTO PROSET_DETAIL VALUES (
    NULL,
    '01-1.jpg#01-2.jpg'
);
INSERT INTO PROSET_DETAIL VALUES (
    NULL,
    '02-1.jpg#02-2.jpg'
);
INSERT INTO PROSET_DETAIL VALUES (
    NULL,
    '03-1.jpg#03-2.jpg'
);
INSERT INTO PROSET_DETAIL VALUES (
    NULL,
    '04-1.jpg#04-2.jpg'
);
INSERT INTO PROSET_DETAIL VALUES (
    NULL,
    '05-1.jpg#05-2.jpg'
);
INSERT INTO PROSET_DETAIL VALUES (
    NULL,
    '06-1.jpg#06-2.jpg'
);

-- 产品选购
CREATE TABLE CAR_PROSET (
    sid INT PRIMARY KEY auto_increment,
    pic VARCHAR(118) default 'proset01.jpg',
    title varchar(118) NOT NULL,
    type INT NOT NULL
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  default,
  '10米超景观营地房车租赁款',
  10
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  default,
  '10米超景观营地房车麻将款',
  10
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  default,
  '10米超观景亲子款营地房车',
  10
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset02.jpg',
  '10米超观景KTV版营地房车',
  10
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset03.jpg',
  '8米超景观版营地房车住宿版B款',
  8
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset03.jpg',
  '8米超景观版营地房车住宿版A款',
  8
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset03.jpg',
  '8米超观景版营地房车',
  8
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset04.jpg',
  '13米超观景五星级版营地房车',
  13
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset05.jpg',
  '8米标准版营地房车',
  8
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset06.jpg',
  '8米景观款拖挂式营地房车',
  8
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset05.jpg',
  '10米超观景VIP版营地房车',
  10
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset07.jpg',
  '10米营地教育版拖挂式营地房车',
  10
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset08.jpg',
  '10米温泉款拖挂式营地房车',
  10
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset09.jpg',
  '11.5米免维护型木屋房车',
  1
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset10.jpg',
  '11米免维护型木屋房车榻榻米版',
  1
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset11.jpg',
  '11米免维护型木屋房车',
  1
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset12.jpg',
  '10米免维护木屋房车',
  1
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset13.jpg',
  '8.5米免维护木屋型房车',
  1
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset14.jpg',
  '7.2米免维护型木屋房车',
  1
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset15.jpg',
  '11米VIP定制款拖挂式营地房车',
  11
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset16.jpg',
  '12米定制款拖挂式营地房车',
  12
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset17.jpg',
  '10米吧台款拖挂式营地房车',
  10
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset18.jpg',
  '8米KTV款拖挂式营地房车',
  8
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset19.jpg',
  '8米圆床款拖挂式营地房车',
  8
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset20.jpg',
  '13米超级VIP定制款营地房车',
  13
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset21.jpg',
  '10米酒店款拖挂式营地房车',
  10
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset22.jpg',
  '10米KTV款拖挂式营地房车',
  10
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset23.jpg',
  '10米麻将桌款拖挂式营地房车',
  10
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset24.jpg',
  '10米卡座款拖挂式营地房车',
  10
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset25.jpg',
  '8米榻榻米款拖挂式营地房车',
  8
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset26.jpg',
  '8米情侣款拖挂式营地房车',
  8
);
INSERT INTO CAR_PROSET VALUES(
  NULL,
  'proset27.jpg',
  '8米亲子款拖挂式营地房车',
  8
);




-- 成功案例
CREATE TABLE CAR_SUCCESS (
    sid INT PRIMARY KEY auto_increment,
    title VARCHAR(128) NOT NULL,
    pic1 VARCHAR(128),
    pic2 VARCHAR(128),
    pic3 VARCHAR(128)
);
INSERT INTO CAR_SUCCESS VALUES(NULL,'湖南邵阳银杏房车营地','1-1.jpg','1-2.jpg','1-3.jpg');
INSERT INTO CAR_SUCCESS VALUES(NULL,'沈阳参仙谷度假康养房车营地','2-1.jpg','2-2.jpg','2-3.jpg');
INSERT INTO CAR_SUCCESS VALUES(NULL,'湖南沅陵借母溪房车营地','3-1.jpg','3-2.jpg','3-3.jpg');
INSERT INTO CAR_SUCCESS VALUES(NULL,'海南黄金海岸日月湾房车营地','4-1.jpg','4-2.jpg','4-3.jpg');
INSERT INTO CAR_SUCCESS VALUES(NULL,'东郊国际马术俱乐部房车营地','5-1.jpg','5-2.jpg','5-3.jpg');
INSERT INTO CAR_SUCCESS VALUES(NULL,'新疆那拉泉生态小木屋房车营地','6-1.jpg','6-2.jpg','6-3.jpg');
INSERT INTO CAR_SUCCESS VALUES(NULL,'江苏南通世外桃源休闲农庄','7-1.jpg','7-2.jpg','7-3.jpg');
INSERT INTO CAR_SUCCESS VALUES(NULL,'湖南长沙莲花山房车营地','8-1.jpg','8-2.jpg','8-3.jpg');
INSERT INTO CAR_SUCCESS VALUES(NULL,'湘潭盘龙大观园房车露营地','9-1.jpg','9-2.jpg','9-3.jpg');
INSERT INTO CAR_SUCCESS VALUES(NULL,'中航爱游客枫泾房车露营地','10-1.jpg','10-2.jpg','10-3.jpg');
INSERT INTO CAR_SUCCESS VALUES(NULL,'昆明世博房车时光·行云轩轩房车营地','11-1.jpg','11-2.jpg','11-3.jpg');
INSERT INTO CAR_SUCCESS VALUES(NULL,'秦皇岛野途房车桃林口营地','12-1.jpg','12-2.jpg','12-3.jpg');


-- 用户表
create table car_user(
  uid int primary key auto_increment,
  phone char(11) not null,
  upwd varchar(16) not null,
  uname varchar(16) not null,
  code varchar(8),
  head_pic varchar(128) not null
);
insert into car_user values (null, '18888888888', 'a1234567',  'zhangsan','123456', 'head.jpg');


-- 用户意向表
create table car_intention(
  uid int primary key auto_increment,
  phone char(11) not null,
  uname varchar(16) not null,
  uadd1 VARCHAR(64) not NULL,
  uadd2 VARCHAR(64) not NULL,
  type varchar(16) not null ,
  code varchar(1000)
);
insert into car_intention values (null, '18888888888', 'zhangsan','江苏/南京','8米亲子款拖挂式营地房车', '暂无需求');