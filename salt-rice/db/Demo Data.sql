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

-- Dumping data for table saltrice.blockeduser: ~0 rows (approximately)
/*!40000 ALTER TABLE `blockeduser` DISABLE KEYS */;
/*!40000 ALTER TABLE `blockeduser` ENABLE KEYS */;

-- Dumping data for table saltrice.category: ~8 rows (approximately)
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` (`categoryID`, `categoryName`, `isActive`, `createdAt`, `updatedAt`) VALUES
	(1, 'Reflections', 1, '2020-11-08 12:19:17', '2020-11-15 09:58:24'),
	(2, 'Family-Children', 1, '2020-11-08 12:19:26', '2020-11-15 09:58:39'),
	(3, 'Growing Old', 1, '2020-11-15 09:58:52', '2020-11-15 09:58:52'),
	(4, 'Health', 1, '2020-11-15 09:59:05', '2020-11-15 09:59:05'),
	(5, 'Mental Health', 1, '2020-11-15 09:59:14', '2020-11-15 09:59:14'),
	(6, 'Dating', 1, '2020-11-15 09:59:27', '2020-11-15 09:59:27'),
	(7, 'Food Recipes', 1, '2020-11-15 09:59:37', '2020-11-15 09:59:37'),
	(8, 'Past time/Passion', 1, '2020-11-15 09:59:49', '2020-11-15 09:59:49'),
	(9, 'Professional Work/Occupation', 1, '2020-11-15 10:00:02', '2020-11-15 10:00:02');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

-- Dumping data for table saltrice.comment: ~74 rows (approximately)
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` (`commentID`, `body`, `postID`, `authorID`, `upVote`, `downVote`, `isActive`, `isFlagged`, `isAnonymous`, `createdAt`, `updatedAt`) VALUES
	(2, 'I didn’t come out of the closet sooner; especially hiding my sexual orientation from my friends and family for so long', 1, 10, 0, 0, 1, 0, 0, '2020-11-15 07:24:54', '2020-11-15 13:23:19'),
	(3, 'Worked too hard n neglected the upbringing of my child', 1, 8, 0, 0, 1, 0, 0, '2020-11-15 07:25:17', '2020-11-15 13:21:17'),
	(4, 'Not having children', 1, 2, 0, 0, 1, 0, 0, '2020-11-15 07:25:30', '2020-11-15 13:21:22'),
	(5, 'Lack of Family bonding', 1, 4, 0, 0, 1, 0, 0, '2020-11-15 07:25:42', '2020-11-15 13:21:26'),
	(6, 'cheated on my wife throughout', 1, 11, 0, 0, 1, 0, 0, '2020-11-15 07:28:35', '2020-11-15 13:23:28'),
	(7, 'Did not travel much when young', 1, 10, 0, 0, 1, 0, 0, '2020-11-15 07:28:46', '2020-11-15 13:21:36'),
	(8, 'I have no regrets', 1, 7, 0, 0, 1, 0, 0, '2020-11-15 07:28:54', '2020-11-15 13:24:35'),
	(9, 'I am not as smart as other kids\' parents. My regert is not being smart enough, so I cannot really teach my kids schoolwork or life lessons, like other people.', 1, 6, 0, 0, 1, 0, 0, '2020-11-15 07:29:05', '2020-11-15 13:24:27'),
	(10, 'spending time with family, my childrengrew up very fast and have their own children now.', 1, 5, 0, 0, 1, 0, 0, '2020-11-15 07:29:15', '2020-11-15 13:24:00'),
	(11, 'I have a lot of regrets but nothing can be changed. My career had been okay. It\'s about my family life. Looking back, I realize a lot of unhappy and resentful things during that time do not matter at this age. I had a lot of quarrels with my mother in law and my husband was the one in the middle. Until my mother in law passed away did I understand that those quarrels were just small matters. When my children were young, I lived with my mother in law and my husband often took business trips. I often had fights with my mother in law. My children saw the quarrels at home very often. The situations were so bad that I wanted to divorce my husband after my children got married.', 1, 8, 0, 0, 1, 0, 0, '2020-11-15 07:29:35', '2020-11-15 13:21:50'),
	(12, 'Yes. On n off, I wonder what would be the outcome if we had continued our relationship ', 18, 1, 0, 0, 1, 0, 0, '2020-11-15 08:01:10', '2020-11-15 08:01:10'),
	(13, 'yes, supported a woman and family for 5 years while I m still married to my wife of 40 years. Tricked into lending and giving her monthly allowance ,whatever she wanted and she was ungrateful and had another man when I m not around.', 18, 1, 0, 0, 1, 0, 0, '2020-11-15 08:01:23', '2020-11-15 08:01:55'),
	(14, 'Prayers will ease the pain', 18, 1, 0, 0, 1, 0, 0, '2020-11-15 08:02:11', '2020-11-15 08:02:11'),
	(15, 'One major turning point was deciding to study at NUS instead of going overseas .\nif given another chance I would have gone overseas .', 25, 1, 0, 0, 1, 0, 0, '2020-11-15 08:04:25', '2020-11-15 08:04:25'),
	(16, 'There are many turning points, eg car accidents, different work demands, different child demands, every senior’s death. Nothing, I would not do differently.', 25, 1, 0, 0, 1, 0, 0, '2020-11-15 08:04:36', '2020-11-15 08:04:36'),
	(17, 'At 27 I moved to Singapore to work and then made it my home. I wouldn\'t have changed anything. It was for the best ', 25, 1, 0, 0, 1, 0, 0, '2020-11-15 08:04:45', '2020-11-15 08:04:45'),
	(18, 'Working life. Marriage. Having children ', 25, 1, 0, 0, 1, 0, 0, '2020-11-15 08:04:53', '2020-11-15 08:04:53'),
	(19, 'Be more religious when younger', 25, 1, 0, 0, 1, 0, 0, '2020-11-15 08:11:21', '2020-11-15 08:11:21'),
	(20, 'Marriage and career. \nFor marriage, perhaps taking longer before settling down to enjoy the dating process and getting to understand spouse better. For career, to pursue overseas exposure.', 25, 1, 0, 0, 1, 0, 0, '2020-11-15 08:11:40', '2020-11-15 08:11:40'),
	(21, 'Everyone dies eventually. doesnt matter what you achieve in life, rich or poor, criminal or lawyer. I would have done what I love the most and not worry about anything else, living my life to the fullest.', 25, 1, 0, 0, 1, 0, 0, '2020-11-15 08:11:58', '2020-11-15 08:11:58'),
	(22, 'Do not think so much & just do it\nix.	I wanted to study literature at college but I failed. My national exam scores only allowed me to study accounting at a vocational college. I just took it and my first job at the postal office (public sector) was about accounting so I never thought of changing. Working at the postal office was very stable. I learned different skills though various posting at the postal office. \nI did not think about career trajectories....', 25, 1, 0, 0, 1, 0, 0, '2020-11-15 08:12:07', '2020-11-15 08:12:07'),
	(23, 'not a parent so i can’t answer this', 26, 1, 0, 0, 1, 0, 0, '2020-11-15 08:13:15', '2020-11-15 08:13:15'),
	(24, 'No point in my life or my child’s life. The job is a journey through time. Enjoy the Bumpy exciting ride. :)', 26, 1, 0, 0, 1, 0, 0, '2020-11-15 08:13:29', '2020-11-15 08:13:29'),
	(25, 'Parenting is for life, no matter how old the child is.', 26, 1, 0, 0, 1, 0, 0, '2020-11-15 08:13:36', '2020-11-15 08:13:36'),
	(26, 'When I see the child mirroring the sound values practised by the parents', 26, 1, 0, 0, 1, 0, 0, '2020-11-15 08:13:42', '2020-11-15 08:13:42'),
	(27, 'Gave good education for her to survive', 26, 1, 0, 0, 1, 0, 0, '2020-11-15 08:13:50', '2020-11-15 08:13:50'),
	(28, 'when they have their own family', 26, 1, 0, 0, 1, 0, 0, '2020-11-15 08:14:01', '2020-11-15 08:14:01'),
	(29, 'I think the best way to balance childcare and career is to find your family to take care of your children, not just hiring a maid. When I gave birth to my daughter, I asked my mom to help and when gave birth to my son, my mother in law helped care. My sister in law also came to help. ', 27, 1, 0, 0, 1, 0, 0, '2020-11-15 08:16:10', '2020-11-15 08:16:32'),
	(30, 'yes I decided to retire when my then partner was dying of cancer . I have absolutely no regrets doing that .', 27, 1, 0, 0, 1, 0, 0, '2020-11-15 08:17:08', '2020-11-15 08:17:08'),
	(31, 'Never had this dilemma. So no regrets.', 27, 1, 0, 0, 1, 0, 0, '2020-11-15 08:17:18', '2020-11-15 08:17:18'),
	(32, 'No, I m self centered and think for myself first', 27, 1, 0, 0, 1, 0, 0, '2020-11-15 08:17:26', '2020-11-15 08:17:26'),
	(33, 'If I were you put your priority right. Before you know your child outgrows you', 27, 1, 0, 0, 1, 0, 0, '2020-11-15 08:17:36', '2020-11-15 08:17:36'),
	(34, 'I have strong family support all this while.', 27, 1, 0, 0, 1, 0, 0, '2020-11-15 08:17:44', '2020-11-15 08:17:44'),
	(35, 'yes, family sacrifice', 27, 1, 0, 0, 1, 0, 0, '2020-11-15 08:17:52', '2020-11-15 08:17:52'),
	(36, 'You need to manage your child without depending on parents-in-law. There are other options, neighbours, friends, domestic helper, infant/childcare, your employer. Create a robust timetable with a group of people.', 27, 1, 0, 0, 1, 0, 0, '2020-11-15 08:18:07', '2020-11-15 08:18:07'),
	(37, 'you have to make sure you’re financially independent especially if you’re single ; look after your health ( eat well , exercise and occupy yourself with hobbies , charity work etc )', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:20:01', '2020-11-15 08:20:01'),
	(38, 'Eat, Sleep & Exercise daily. Be positive and mindful of words when communicating to the young.', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:20:11', '2020-11-15 08:20:11'),
	(39, 'One day at a time. Keep yourself occupied. Play a sport. Meet up with friends ', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:20:18', '2020-11-15 08:20:18'),
	(40, 'Strengthening social circle and cultivating interest in non-work related activities eg hobbies, volunteering etc. increase physical activity to stay healthy. ', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:20:25', '2020-11-15 08:20:25'),
	(41, 'Save save save the first day one starts working. ', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:20:34', '2020-11-15 08:20:34'),
	(42, 'enjoy when you can still be active', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:20:40', '2020-11-15 08:20:40'),
	(43, '1) savings so that you are on top of situations 2) extend your network of friends so that they will keep in touch and take care of you3) must have a hobby or hobbies so that you won’t b bored4) learn a new skill. Continues to upgrade 5) keep yourself healthy n keep fit', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:20:54', '2020-11-15 08:20:54'),
	(44, 'Financially and mentally', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:21:00', '2020-11-15 08:21:00'),
	(45, 'Doing volunteer work', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:21:06', '2020-11-15 08:21:06'),
	(46, 'Enough money for yourself ', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:21:12', '2020-11-15 08:21:12'),
	(47, 'Strengthening social circle and cultivating interest in non-work related activities eg hobbies, volunteering etc. increase physical activity to stay healthy. ', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:21:19', '2020-11-15 08:21:19'),
	(48, 'Relive what I have done, repent,be remorseful and treat my wife well, she had worked all her life to help with family finances.I am a selfish, crazy for another woman to satisfy my desire, don\'t care,who I hurt. My wife does not deserve me. I should pray to god for forgiveness and my unfaithfulness and cheating behind her back.', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:21:30', '2020-11-15 08:21:30'),
	(49, 'Pray to god that my wife would forgive me for all the wrong I have done ', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:22:05', '2020-11-15 08:22:05'),
	(50, 'Strengthening social circle and cultivating interest in non-work related activities eg hobbies, volunteering etc. increase physical activity to stay healthy. ', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:22:12', '2020-11-15 08:22:12'),
	(51, 'always take care of your body and have some savings saved up', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:22:18', '2020-11-15 08:22:18'),
	(52, 'Health, take care of yourself. Health is the most important ', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:22:26', '2020-11-15 08:22:26'),
	(53, 'have a passion, the reason why I open my store is cause I love people to eat my food and I love to see my regular customers. during the lockdown, I was too bored and life felt meaningless. so have a passion or a hobby you enjoy', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:22:31', '2020-11-15 08:22:31'),
	(54, 'prepare mentally. make sure you understand that as you grow old, things will change, your body will change, people around you will change, the world will change, remind yourself constantly that you are growing older.. \n\nAlso, there are things you cannot do as you grow old. do those when you are young. \n', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:22:39', '2020-11-15 08:22:39'),
	(55, 'I think it’s the mindset. Before I retired, I didn’t think that I was older than my colleagues at 50 years old. I learned to use computer for work at the age of 55. The company asked all people to use computer so I was forced to learn. Anyway, I just asked around and my colleagues helped me a lot. I used a lot of post-it and put them next to the computer to learn it. ', 28, 1, 0, 0, 1, 0, 0, '2020-11-15 08:22:47', '2020-11-15 08:22:47'),
	(61, 'the hardest thing is dealing with “ the mind is willing but the body is not “ ie Physical deterioration \nthe best thing about growing old - doing whatever you want within reason and not having to ask for permission; not worrying what other people think !\n', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:26:28', '2020-11-15 08:26:28'),
	(62, 'Not sure, I do not feel old. The younger folks work harder! ;)', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:26:40', '2020-11-15 08:26:40'),
	(63, 'You don\'t have the energy you used to have before ', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:26:50', '2020-11-15 08:26:50'),
	(64, 'Hardest- increasing frailty and fatigue, more prone to illnesses. Best thing- able to have more time to pursue personal interest and less need to work to make a living ( assuming Home mortgage is settled), more confident of oneself from life’s experiences. ', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:26:57', '2020-11-15 08:26:57'),
	(65, 'The younger people having little respect for the elderly. No best thing, I m in the sandwich generation ', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:27:11', '2020-11-15 08:27:11'),
	(66, 'miserable when your partner is not faithful. Be happy for your own self\n', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:27:22', '2020-11-15 08:27:22'),
	(67, 'Loneliness - you find that you are alone most of the time. The best thing - you have the choice of time , food that you want to eat and people whom you want to continue to keep in touch', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:27:29', '2020-11-15 08:27:29'),
	(68, 'Loneliness. Wiser', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:27:35', '2020-11-15 08:27:35'),
	(69, 'Not as agile ', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:27:40', '2020-11-15 08:27:40'),
	(70, 'Body & mind become weaker. More knowledgeable ', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:27:47', '2020-11-15 08:27:47'),
	(71, 'Hardest- increasing frailty and fatigue, more prone to illnesses. Best thing- able to have more time to pursue personal interest and less need to work to make a living ( assuming Home mortgage is settled), more confident of oneself from life’s experiences. ', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:27:55', '2020-11-15 08:27:55'),
	(72, 'Loneliness - you find that you are alone most of the time. The best thing - you have the choice of time , food that you want to eat and people whom you want to continue to keep in touch', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:28:02', '2020-11-15 08:28:02'),
	(73, 'Being heart broken for the woman I had affair with, left for a younger,richer and better man', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:28:37', '2020-11-15 08:28:37'),
	(74, 'looking frail and sick most if the time.Having a faithful,loyal caring partner.', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:28:44', '2020-11-15 08:28:44'),
	(75, 'Hardest- increasing frailty and fatigue, more prone to illnesses. Best thing- able to have more time to pursue personal interest and less need to work to make a living ( assuming Home mortgage is settled), more confident of oneself from life’s experiences. ', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:28:50', '2020-11-15 08:28:50'),
	(76, 'Health and wealth ', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:29:00', '2020-11-15 08:29:00'),
	(77, 'People come and go.. family too, so you might feel a little lonely which is why everytime when people like you or my regular customers visit me, i am very happy. \n\nBest thing- i guess less stress \n', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:29:10', '2020-11-15 08:29:10'),
	(78, 'for me, i cannot do some exercise, thats the hardest part. I cannot run as much and do many sports. \n\nBest thing is my senior citizen discount hehe \n', 29, 1, 0, 0, 1, 0, 0, '2020-11-15 08:29:27', '2020-11-15 08:29:27'),
	(79, 'i.	Personally for me, I had been through this \'persistent\' mode where I tried really hard to impress and do a lot of things for the ladies with the hope that she will be touched by my sincerity. But I feel that this mentality is quite tiring for me and sometimes the ladies might think that you are desperate. I feel that somehow I let my emotions control my actions entirely which is not good. So subsequently, I change my mindset. Instead of finding someone just to date, I took a long term perspective of finding someone with the hope of settling down in the near future. With this, I approach my date with the thought of knowing them as a person and see if they are compatible with my character and values. So if you are going by this approach, I feel that its more acceptable since you are trying to know that person for who she is and not because of your own desire to date her. So with this approach, she might slowly opened up to you and thats when you can slowly do more? ( e.g. plan for movies, exercise etc..) and it gives you the benefit that you can judge for yourself if she the one that you really want to take the next stage. If you find that she is not even opening up to you, then you can just drop the idea and move on. So when I take this approach, it changes the concept of \'persistent\'. Its no longer a chase or a sprinting race but more like a marathon which is more sustainable.', 30, 1, 0, 0, 1, 0, 0, '2020-11-15 08:31:43', '2020-11-15 08:31:43'),
	(80, 'i.	Actually listen. Just doing active listening and then discussing about what they mention will benefit you greatly. Networking in physical presence is much better than online version. Dont worry too much, just use my first tip and you will see that networking can be quite natural and interesting. If you "Wayang", then it is very obvious and just refrain from doing that.', 31, 1, 0, 0, 1, 0, 0, '2020-11-15 08:33:07', '2020-11-15 08:33:07'),
	(81, '@Arun gfg', 1, 1, 0, 0, 1, 0, 0, '2020-11-17 17:52:02', '2020-11-17 17:52:02'),
	(82, 'aaa', 1, 1, 0, 0, 1, 0, 0, '2020-11-28 17:27:38', '2020-11-28 17:27:38'),
	(83, '@Bigby Sumner  asdg', 1, 1, 0, 0, 1, 0, 0, '2020-11-28 18:17:26', '2020-11-28 18:17:26');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- Dumping data for table saltrice.post: ~13 rows (approximately)
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` (`postID`, `title`, `body`, `categoryID`, `authorID`, `upVote`, `downVote`, `isAnonymous`, `isFlagged`, `isActive`, `createdAt`, `updatedAt`) VALUES
	(1, 'Reflections', 'What do you feel have been the biggest regret in your life?', 1, 1, 10, 1, 0, 0, 1, '2020-11-08 13:30:26', '2020-11-28 18:18:15'),
	(18, 'Reflections', 'Did you have a lost love? Or regrets on your lost relationships? How did you deal with them?', 1, 4, 10, 0, 0, 0, 1, '2020-11-09 06:39:49', '2020-11-15 13:18:40'),
	(25, 'Reflections', 'What do you think the turning points have been in your life? What would you have done differently?', 1, 5, 0, 0, 0, 0, 1, '2020-11-15 08:03:26', '2020-11-15 13:19:10'),
	(26, 'Family – Children', 'At which point or stage in your life or their child\'s life do they feel that they have done their job as a parent?', 2, 2, 0, 0, 0, 0, 1, '2020-11-15 08:13:02', '2020-11-15 13:18:54'),
	(27, 'Family - Children', 'I am in the middle of building my career while being a mom with a young kid. Sometimes I feel that I need to choose between career and family. I love my job but it requires a lot of time and business trips. Even though my partner is understanding, my parents-in-law are not and often used passive aggressive languages towards my work trips. Have you ever had to choose between family or career? What was your decision? Regrets?', 2, 1, 0, 0, 0, 0, 1, '2020-11-15 08:15:58', '2020-11-15 10:00:44'),
	(28, 'Growing old', 'How should a person prepare for old age?', 3, 6, 5, 0, 0, 0, 1, '2020-11-15 08:19:47', '2020-11-15 13:19:55'),
	(29, 'Growing Old', 'What’s the hardest thing about growing older? The best thing?', 3, 8, 0, 0, 0, 0, 1, '2020-11-15 08:23:46', '2020-11-15 13:20:14'),
	(30, 'Dating', 'For ladies, what do you think of guys who continue to go after you even though you are not interested. Do you warm up to the guy eventually?// Kind of curious about what is everyone\'s mindset when it comes to persistence/chasing in dating. Would love to hear your opinions here!', 6, 11, 0, 0, 0, 0, 1, '2020-11-15 08:31:29', '2020-11-15 13:19:18'),
	(31, 'Professional Work/Occupation', 'How do you network? How do you network other than brown nosing others and throwing your shame away and connecting with everyone and anyone on LinkedIn that has jobs or work at a company or industry that you think you like? Its so fake.', 9, 1, 1, 0, 0, 0, 1, '2020-11-15 08:32:56', '2020-12-06 11:28:09'),
	(32, 'Breakfast Ideas?', 'What are your healthy breakfast recipes be like?', 7, 8, 0, 0, 0, 0, 1, '2020-11-15 11:10:58', '2020-11-15 13:19:28'),
	(33, 'Lunch recipes?', 'Do you prefer rice or bread for lunch?', 7, 1, 0, 0, 0, 1, 1, '2020-11-15 12:55:05', '2020-11-15 13:30:00'),
	(34, 'Dinner ideas?', 'Share some dinner meal plan?', 7, 1, 0, 0, 0, 0, 1, '2020-11-15 14:27:02', '2020-11-15 14:27:02');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;

-- Dumping data for table saltrice.posttag: ~26 rows (approximately)
/*!40000 ALTER TABLE `posttag` DISABLE KEYS */;
INSERT INTO `posttag` (`postTagID`, `postID`, `tagID`, `isActive`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 2, 1, '2020-11-08 13:31:13', '2020-11-08 13:31:13'),
	(3, 1, 6, 1, '2020-11-09 06:34:22', '2020-11-09 06:34:22'),
	(10, 25, 9, 1, '2020-11-15 08:03:26', '2020-11-15 08:03:26'),
	(11, 26, 10, 1, '2020-11-15 08:13:02', '2020-11-15 08:13:02'),
	(12, 27, 11, 1, '2020-11-15 08:15:58', '2020-11-15 08:15:58'),
	(13, 27, 12, 1, '2020-11-15 08:15:58', '2020-11-15 08:15:58'),
	(14, 27, 13, 1, '2020-11-15 08:15:58', '2020-11-15 08:15:58'),
	(15, 27, 14, 1, '2020-11-15 08:15:58', '2020-11-15 08:15:58'),
	(19, 28, 18, 1, '2020-11-15 08:19:47', '2020-11-15 08:19:47'),
	(20, 28, 19, 1, '2020-11-15 08:19:47', '2020-11-15 08:19:47'),
	(21, 28, 20, 1, '2020-11-15 08:19:47', '2020-11-15 08:19:47'),
	(22, 29, 19, 1, '2020-11-15 08:23:47', '2020-11-15 08:23:47'),
	(23, 29, 21, 1, '2020-11-15 08:23:47', '2020-11-15 08:23:47'),
	(25, 30, 22, 1, '2020-11-15 08:31:29', '2020-11-15 08:31:29'),
	(26, 30, 23, 1, '2020-11-15 08:31:29', '2020-11-15 08:31:29'),
	(27, 30, 24, 1, '2020-11-15 08:31:29', '2020-11-15 08:31:29'),
	(28, 31, 25, 1, '2020-11-15 08:32:56', '2020-11-15 08:32:56'),
	(29, 31, 26, 1, '2020-11-15 08:32:56', '2020-11-15 08:32:56'),
	(30, 31, 27, 1, '2020-11-15 08:32:56', '2020-11-15 08:32:56'),
	(31, 33, 28, 1, '2020-11-15 12:55:05', '2020-11-15 12:55:05'),
	(32, 33, 29, 1, '2020-11-15 12:55:05', '2020-11-15 12:55:05'),
	(33, 33, 30, 1, '2020-11-15 12:55:05', '2020-11-15 12:55:05'),
	(34, 34, 29, 1, '2020-11-15 14:27:02', '2020-11-15 14:27:02'),
	(35, 34, 31, 1, '2020-11-15 14:27:02', '2020-11-15 14:27:02'),
	(36, 34, 32, 1, '2020-11-15 14:27:02', '2020-11-15 14:27:02'),
	(37, 34, 33, 1, '2020-11-15 14:27:02', '2020-11-15 14:27:02'),
	(38, 35, 34, 1, '2020-11-28 18:18:40', '2020-11-28 18:18:40');
/*!40000 ALTER TABLE `posttag` ENABLE KEYS */;

-- Dumping data for table saltrice.tag: ~26 rows (approximately)
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` (`tagID`, `tagName`, `isActive`, `createdAt`, `updatedAt`) VALUES
	(1, 'testtag', 1, '2020-11-08 11:31:18', '2020-11-08 11:31:18'),
	(2, 'covid', 1, '2020-11-08 11:31:27', '2020-11-08 11:31:27'),
	(3, 'test111', 1, '2020-11-08 18:26:38', '2020-11-08 18:26:55'),
	(4, 'test2111', 1, '2020-11-08 18:26:38', '2020-11-08 18:26:57'),
	(6, 'testNew', 1, '2020-11-09 06:15:46', '2020-11-09 06:15:46'),
	(7, 'socialcovid', 1, '2020-11-13 17:11:33', '2020-11-13 17:11:33'),
	(8, 'asd', 1, '2020-11-14 17:47:13', '2020-11-14 17:47:13'),
	(9, 'turningpoints', 1, '2020-11-15 08:03:26', '2020-11-15 08:04:20'),
	(10, 'parent', 1, '2020-11-15 08:13:02', '2020-11-15 08:13:02'),
	(11, 'familyorwork', 1, '2020-11-15 08:15:58', '2020-11-15 08:15:58'),
	(12, 'decision', 1, '2020-11-15 08:15:58', '2020-11-15 08:15:58'),
	(13, 'in-laws', 1, '2020-11-15 08:15:58', '2020-11-15 08:15:58'),
	(14, 'regrets', 1, '2020-11-15 08:15:58', '2020-11-15 08:15:58'),
	(18, 'oldage', 1, '2020-11-15 08:19:47', '2020-11-15 08:19:47'),
	(19, 'growingold', 1, '2020-11-15 08:19:47', '2020-11-15 08:19:47'),
	(20, 'preparation', 1, '2020-11-15 08:19:47', '2020-11-15 08:19:47'),
	(21, 'tough', 1, '2020-11-15 08:23:47', '2020-11-15 08:23:47'),
	(22, 'persistence', 1, '2020-11-15 08:31:29', '2020-11-15 08:31:29'),
	(23, 'chasing', 1, '2020-11-15 08:31:29', '2020-11-15 08:31:29'),
	(24, 'sincerety', 1, '2020-11-15 08:31:29', '2020-11-15 08:31:29'),
	(25, 'networking', 1, '2020-11-15 08:32:56', '2020-11-15 08:32:56'),
	(26, 'career', 1, '2020-11-15 08:32:56', '2020-11-15 08:32:56'),
	(27, 'linkedin', 1, '2020-11-15 08:32:56', '2020-11-15 08:32:56'),
	(28, 'lunch', 1, '2020-11-15 12:55:05', '2020-11-15 12:55:05'),
	(29, 'recipes', 1, '2020-11-15 12:55:05', '2020-11-15 12:55:05'),
	(30, 'healthyrecipes', 1, '2020-11-15 12:55:05', '2020-11-15 12:55:05'),
	(31, 'dinner', 1, '2020-11-15 14:27:02', '2020-11-15 14:27:02'),
	(32, 'healthy', 1, '2020-11-15 14:27:02', '2020-11-15 14:27:02'),
	(33, 'mealplan', 1, '2020-11-15 14:27:02', '2020-11-15 14:27:02'),
	(34, 'aasa', 1, '2020-11-28 18:18:40', '2020-11-28 18:18:40');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;

-- Dumping data for table saltrice.user: ~18 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`userID`, `UUID`, `password`, `nickname`, `score`, `rank`, `age`, `isActive`, `isBlacklisted`, `createdAt`, `updatedAt`) VALUES
	(1, '45a3b14e2be2680c40f1ceed731a768661c95589e40b979d6a3d1b2d2025872b', '', 'Bigby Sumner', NULL, NULL, 30, 1, 1, '2020-10-31 19:00:38', '2020-11-22 11:49:59'),
	(2, '6fde8bf6575294e5929a1ca4091c2a67429f89152b194ffd7ebe689e30ea4f8b', '', 'Timothy Shafer', NULL, NULL, 30, 1, 1, '2020-11-01 17:19:18', '2020-11-22 11:50:12'),
	(4, '111111', '', 'Rary Slade', NULL, NULL, 30, 1, 0, '2020-11-15 13:16:14', '2020-11-22 11:50:21'),
	(5, '22222', '', 'Kelly Snape', NULL, NULL, NULL, 1, 0, '2020-11-15 13:16:32', '2020-11-22 11:50:30'),
	(6, '33333', '', 'Kelsey Szymanski', NULL, NULL, NULL, 1, 0, '2020-11-15 13:16:43', '2020-11-22 11:51:01'),
	(7, '44444', '', 'Dimmity Sinclair', NULL, NULL, NULL, 1, 0, '2020-11-15 13:17:02', '2020-11-22 11:51:18'),
	(8, '55555', '', 'Katy Sena', NULL, NULL, NULL, 1, 0, '2020-11-15 13:17:12', '2020-11-22 11:51:09'),
	(9, '66666', '', 'Geoffrey Schade', NULL, NULL, NULL, 1, 0, '2020-11-15 13:17:34', '2020-11-22 11:51:27'),
	(10, '77777', '', 'Amy Sinistra', NULL, NULL, NULL, 1, 0, '2020-11-15 13:17:49', '2020-11-22 11:51:32'),
	(11, '8888', '', 'Penny Sto', NULL, NULL, NULL, 1, 0, '2020-11-15 13:18:01', '2020-11-22 11:51:38'),
	(12, 'd17f25ecfbcc7857f7bebea469308be0b2580943e96d13a3ad98a13675c4bfc2', '4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8', '11111', NULL, NULL, NULL, 1, 0, '2020-12-07 12:15:03', '2020-12-07 12:15:03');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
