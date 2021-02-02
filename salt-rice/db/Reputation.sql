-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.5.6-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table saltrice.reputation
CREATE TABLE IF NOT EXISTS `reputation` (
  `repID` int(10) NOT NULL AUTO_INCREMENT,
  `title` tinytext NOT NULL DEFAULT '',
  `floor` smallint(6) NOT NULL DEFAULT 0,
  `ceil` smallint(6) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`repID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table saltrice.reputation: ~3 rows (approximately)
/*!40000 ALTER TABLE `reputation` DISABLE KEYS */;
INSERT INTO `reputation` (`repID`, `title`, `floor`, `ceil`, `createdAt`, `updatedAt`) VALUES
	(1, 'Guide', 1, 50, '2020-12-21 17:43:38', '2020-12-22 16:44:38'),
	(2, 'Mentor', 51, 100, '2020-12-21 17:44:07', '2020-12-22 16:44:28'),
	(3, 'Advisor', 101, 150, '2020-12-21 17:44:49', '2020-12-22 16:44:21'),
	(4, 'Sage', 151, 20000, '2020-12-22 16:43:55', '2020-12-22 16:44:48');
/*!40000 ALTER TABLE `reputation` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
