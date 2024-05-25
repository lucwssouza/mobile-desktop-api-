-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: pastelmania
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `idprodutos` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `preco` varchar(45) DEFAULT NULL,
  `foto` longtext,
  `quantidade` varchar(45) DEFAULT NULL,
  `apagado` varchar(45) DEFAULT NULL,
  `data_cadastro` datetime DEFAULT NULL,
  `data_edicao` datetime DEFAULT NULL,
  PRIMARY KEY (`idprodutos`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'igor33','12','','24',NULL,'2024-05-23 08:35:37','2024-05-23 09:39:20'),(2,'com foto','5','https://nutrimassasesalgados.com/wp-content/uploads/2020/05/MG_6902-copiar.jpg','2',NULL,'2024-05-23 08:36:06',NULL),(3,'carne','9','https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/cd04cda7-df36-4ffa-8e51-f3501ead4443/Derivates/e237daff-2c7f-47b6-81eb-8fd7937211fb.jpg','2',NULL,'2024-05-23 08:59:47',NULL),(4,'refri','10','https://superprix.vteximg.com.br/arquivos/ids/213951-600-600/5c977f0088a0425c8e725d309a5f6b37_refrigerante-guarana-antarctica-garrafa-3l_lett_1.jpg?v=638212410589570000','3',NULL,'2024-05-23 09:00:38',NULL),(5,'trento','9','https://docemalu.vtexassets.com/arquivos/ids/5351106-800-auto?v=638422008812600000&width=800&height=auto&aspect=true','8',NULL,'2024-05-23 09:27:49',NULL);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `email` varchar(225) DEFAULT NULL,
  `senha` varchar(225) DEFAULT NULL,
  `apagado` varchar(45) DEFAULT NULL,
  `data_cadastro` datetime DEFAULT NULL,
  `data_edicao` datetime DEFAULT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'primariy','kkk@gmail.com','992','1',NULL,'2024-05-21 08:13:46'),(2,'BRUNAO','bruno@gmail.com','123','1',NULL,NULL),(3,'lucasw','ww','123',NULL,NULL,NULL),(4,'w','','w','1',NULL,NULL),(5,'www','w','123',NULL,NULL,NULL),(8,'lucas','lucas@gmail.com','tesa',NULL,NULL,'2024-05-21 08:15:23'),(9,'igor','igor@gmail.com','999',NULL,NULL,NULL),(10,'ww','w2@gmail.com','123',NULL,NULL,NULL),(11,'lucas','lucaszin','22',NULL,NULL,NULL),(24,'zezinho','0','123',NULL,'2024-05-20 11:06:21',NULL),(25,'topp','ze@gmail.com','123',NULL,'2024-05-20 11:07:45',NULL),(28,'testeee','teste12321312@gmail.com','99',NULL,'2024-05-21 07:38:08',NULL),(29,'aa','213@da','',NULL,'2024-05-21 07:39:02',NULL),(30,'a','2@sd','',NULL,'2024-05-21 07:39:20',NULL),(31,'agr','vai@opgg','$2y$10$/MXHL0Ru0a.GF8jafnyy6.MPSB4wRL1K16rc3u/5Tfn.iy5Gl3xsy',NULL,'2024-05-21 07:45:48',NULL),(32,'senhanormal','senhaa@gmail.com','99',NULL,'2024-05-21 07:46:22',NULL),(33,'adwdwa','dawdwa@dsada','123',NULL,'2024-05-21 09:55:02',NULL),(34,'das','asdsa@dsa','123',NULL,'2024-05-21 09:57:05',NULL),(35,'www','123@d','123',NULL,'2024-05-21 10:09:00',NULL),(36,'ooo','opd@gmail.com','123',NULL,'2024-05-21 10:09:26',NULL),(37,'igor','igor@rivieson','123',NULL,'2024-05-21 10:11:09',NULL),(38,'asd','213213@dw','123',NULL,'2024-05-21 10:11:55',NULL),(39,'testee','dasdassadsawd@dfas','213',NULL,NULL,NULL),(40,'zxzx','zxzxzxz@dsad','32',NULL,NULL,NULL),(41,'igorteste','oooppppsa@gmail.com','33',NULL,NULL,NULL),(42,'www','daw2daw2@dsa','213',NULL,NULL,NULL),(44,'dasd','as@dadaw','213',NULL,NULL,NULL),(45,'w1','2dWS@dsa','23',NULL,NULL,NULL),(46,'zeds2','ze2@gmail.com','123',NULL,NULL,NULL),(47,'awd','ze1asd@gmail.com','12322',NULL,'2024-05-21 10:40:03',NULL),(48,'igor','igosdadr@rivieson','123',NULL,'2024-05-21 10:40:26',NULL),(49,'dsds','sdsdsd@dsad','123',NULL,'2024-05-23 09:41:30',NULL),(50,'ww','12312132dsa@gdas','123',NULL,'2024-05-23 10:19:24',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-24  8:57:46
