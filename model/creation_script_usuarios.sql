CREATE TABLE `desafio`.`usuários` (
  `id` INT(10) NOT NULL AUTO_INCREMENT , 
  `usuario` VARCHAR(255) NOT NULL , 
  `senha` VARCHAR(255) NOT NULL , 
  `token` VARCHAR(255) NOT NULL , 
  PRIMARY KEY (`id`)) ENGINE = InnoDB;