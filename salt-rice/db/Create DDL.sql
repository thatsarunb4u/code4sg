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


-- Dumping database structure for saltrice
CREATE DATABASE IF NOT EXISTS `saltrice` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `saltrice`;

-- Dumping structure for table saltrice.blockeduser
CREATE TABLE IF NOT EXISTS `blockeduser` (
  `BID` int(10) NOT NULL AUTO_INCREMENT,
  `sourceUser` int(10) unsigned NOT NULL DEFAULT 0,
  `blockedUser` int(10) unsigned NOT NULL DEFAULT 0,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`BID`),
  KEY `blocked_user_fk` (`blockedUser`),
  KEY `source_user_fk` (`sourceUser`),
  CONSTRAINT `blocked_user_fk` FOREIGN KEY (`blockedUser`) REFERENCES `user` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `source_user_fk` FOREIGN KEY (`sourceUser`) REFERENCES `user` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table saltrice.category
CREATE TABLE IF NOT EXISTS `category` (
  `categoryID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `categoryName` tinytext NOT NULL DEFAULT '',
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`categoryID`),
  KEY `category_name` (`categoryName`(255))
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table saltrice.comment
CREATE TABLE IF NOT EXISTS `comment` (
  `commentID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `body` text NOT NULL DEFAULT '',
  `postID` int(10) unsigned NOT NULL DEFAULT 0,
  `authorID` int(10) unsigned NOT NULL DEFAULT 0,
  `upVote` int(10) NOT NULL DEFAULT 0,
  `downVote` int(10) NOT NULL DEFAULT 0,
  `isActive` int(10) unsigned NOT NULL DEFAULT 1,
  `isFlagged` int(10) unsigned NOT NULL DEFAULT 0,
  `isAnonymous` int(10) unsigned NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`commentID`),
  KEY `comment_author_fk` (`authorID`),
  KEY `post_comment_fk` (`postID`),
  CONSTRAINT `comment_author_fk` FOREIGN KEY (`authorID`) REFERENCES `user` (`userID`),
  CONSTRAINT `post_comment_fk` FOREIGN KEY (`postID`) REFERENCES `post` (`postID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table saltrice.post
CREATE TABLE IF NOT EXISTS `post` (
  `postID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` tinytext NOT NULL DEFAULT '',
  `body` mediumtext NOT NULL DEFAULT '',
  `categoryID` int(10) unsigned NOT NULL DEFAULT 0,
  `authorID` int(10) unsigned NOT NULL DEFAULT 0,
  `upVote` int(10) NOT NULL DEFAULT 0,
  `downVote` int(10) NOT NULL DEFAULT 0,
  `isAnonymous` tinyint(1) NOT NULL DEFAULT 0,
  `isFlagged` tinyint(1) NOT NULL DEFAULT 0,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`postID`) USING BTREE,
  KEY `post_category_fk` (`categoryID`) USING BTREE,
  KEY `post_author_fk` (`authorID`) USING BTREE,
  CONSTRAINT `post_author_fk` FOREIGN KEY (`authorID`) REFERENCES `user` (`userID`),
  CONSTRAINT `post_category_fk` FOREIGN KEY (`categoryID`) REFERENCES `category` (`categoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table saltrice.posttag
CREATE TABLE IF NOT EXISTS `posttag` (
  `postTagID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `postID` int(10) unsigned NOT NULL DEFAULT 0,
  `tagID` int(10) unsigned NOT NULL DEFAULT 0,
  `isActive` tinyint(1) unsigned NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`postTagID`),
  KEY `tag_fk` (`tagID`),
  KEY `post_fk` (`postID`),
  CONSTRAINT `post_fk` FOREIGN KEY (`postID`) REFERENCES `post` (`postID`),
  CONSTRAINT `tag_fk` FOREIGN KEY (`tagID`) REFERENCES `tag` (`tagID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table saltrice.tag
CREATE TABLE IF NOT EXISTS `tag` (
  `tagID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tagName` tinytext NOT NULL DEFAULT '',
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`tagID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table saltrice.user
CREATE TABLE IF NOT EXISTS `user` (
  `userID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `UUID` tinytext NOT NULL,
  `nickname` tinytext DEFAULT NULL,
  `score` float DEFAULT NULL,
  `rank` tinytext DEFAULT NULL,
  `age` tinyint(3) unsigned DEFAULT NULL,
  `isActive` tinyint(1) unsigned NOT NULL DEFAULT 1,
  `isBlacklisted` tinyint(1) unsigned DEFAULT 0,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`userID`),
  UNIQUE KEY `UUID` (`UUID`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
