-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-10-2025 a las 22:18:41
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `autor` varchar(255) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `titulo`, `autor`, `categoria`, `imagen`) VALUES
(1, 'la santa biblia', 'barios autores', 'literatura', 'https://i.pinimg.com/736x/38/da/5a/38da5a2a7472933a2df9d1e0a723ea1b.jpg'),
(2, 'El universo en una cáscara de nuez', 'Stephen Hawking', 'ciencia', 'https://i.pinimg.com/736x/1b/05/b5/1b05b563b625619ece33df61676a9d24.jpg'),
(3, 'Historia del arte', 'E. H. Gombrich', 'arte', 'https://i.pinimg.com/736x/93/70/a1/9370a1e0a120c88648d81ded02bc78f3.jpg\r\n'),
(4, 'Piense y hágase rico', 'Napoleon Hill', 'desarrollo', 'https://i.pinimg.com/736x/e6/07/27/e607278ffa56f5d5a6e39d4f5268f8cc.jpg'),
(5, 'Breve historia del mundo', 'Ernst Gombrich', 'historia', 'https://i.pinimg.com/736x/72/58/51/725851dacc543c57a8ade0a4b556c8d2.jpg'),
(6, 'Don Quijote de la Mancha\r\n', 'Miguel de Cervantes Saavedra', 'literatura', 'https://i.pinimg.com/736x/7c/01/65/7c01659097afccecf8146f1c4eeab7e2.jpg'),
(7, 'la iliada', 'Dante Alighieri', 'literatura', 'https://i.pinimg.com/736x/27/d8/d9/27d8d97606c21c4278f3259d7a790e4b.jpg'),
(8, 'Romeo y Julieta', 'William Shakespeare', 'literatura', 'https://i.pinimg.com/1200x/a6/32/33/a63233370350ebcd9c945f1f48a4cce5.jpg'),
(9, 'El paraíso perdido', 'John Milton', 'literatura', 'https://i.pinimg.com/736x/ec/a0/e4/eca0e4e27eaad2454b8d9448a3df19ed.jpg'),
(10, 'Cien años de soledad', 'Gabriel García Márquez', 'literatura', 'https://i.pinimg.com/736x/c8/21/54/c821543f1184353201d188963b861d70.jpg'),
(11, 'Los detectives salvajes', 'Roberto Bolaño', 'literatura', 'https://i.pinimg.com/736x/bc/34/aa/bc34aa7b22ef427e94971428447df5ab.jpg'),
(12, 'El juego del ángel', 'Carlos Ruiz Zafón', 'literatura', 'https://i.pinimg.com/1200x/91/11/fe/9111fea75c8869d020c6055635825924.jpg'),
(13, 'Los pilares de la Tierra', 'Ken Follett', 'literatura', 'https://i.pinimg.com/736x/db/3f/b3/db3fb3042e9be56669c9b206294c12d9.jpg'),
(14, 'La ladrona de libros', 'Markus Zusak', 'literatura', 'https://i.pinimg.com/736x/dd/15/6e/dd156eaa206b6b79c35639efd5fe7156.jpg'),
(15, 'The Girl on the Train', 'Paula Hawkins', 'literatura', 'https://i.pinimg.com/736x/77/5b/e7/775be70a916571e6a270ff55f7b4086f.jpg'),
(16, 'El origen de las especies', 'Charles Darwin', 'ciencia', 'https://i.pinimg.com/736x/c3/c7/13/c3c713967ecb73b3411d8f104771f419.jpg'),
(17, 'Historia del tiempo', 'Stephen Hawking', 'ciencia', 'https://i.pinimg.com/736x/b1/fb/8b/b1fb8bb24da3c173a8d7861794b4c43b.jpg'),
(18, 'El universo en una cáscara de nuez', 'Stephen Hawking', 'ciencia', 'https://i.pinimg.com/736x/65/14/17/65141759f16b0cae8f80d094c848572d.jpg'),
(19, 'Cosmos', 'Carl Sagan', 'ciencia', 'https://i.pinimg.com/736x/82/f6/be/82f6be1b0cf952acdebb06e2d75351a6.jpg'),
(20, 'Los dragones del Edén', 'Carl Sagan', 'ciencia', 'https://i.pinimg.com/736x/50/7a/4c/507a4c5a5efc8e3fdabc28a09510fa68.jpg'),
(21, 'Yo no soy mi cerebro', 'Markus Gabriel', 'ciencia', 'https://i.pinimg.com/1200x/0d/53/a5/0d53a54360db17ce58b36ed27e07d971.jpg'),
(23, 'Industrial Revolution', 'Patrick O’Brien', 'ciencia', 'https://i.pinimg.com/1200x/e9/f9/9f/e9f99f0e2140995405d1e580ae696e10.jpg'),
(24, 'la historia de el capitalismo', 'Shoshana Zuboff', 'ciencia', 'https://i.pinimg.com/736x/0a/02/0f/0a020f24833721e1345802815862865d.jpg'),
(25, 'Superpotencias de la inteligencia artificial', 'Kai-Fu Lee', 'ciencia', 'https://imgs.search.brave.com/5JaUcUvF31LRr9ekZyZhpIDJZlZs4UyD5Ru2VCTEdxI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGlj/aW9uZXNkeWQuY29t/LmFyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA0L0RfNzQ1/NjUzLU1MQTczOTgy/NTAxNzkyXzAxMjAy/NC1GLmpwZw'),
(26, 'Clean Code', 'Robert C. Martin', 'clean code ', 'https://imgs.search.brave.com/iyJX6SNb4yuQPgSH6GEoCwgUWR7NXlMT4irbj5RzG2Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2RuMy5idXNj/YWxpYnJlLmNvbS9m/aXQtaW4vMzYweDM2/MC8xMC9mYi8xMGZi/MTcwZDc3MzJiN2Rj/YTI1ZWJiODFkZWQy/NTcyZC5qcGc'),
(27, 'El cerebro digital', 'Marcelo Rinesi', 'ciencia', 'https://i.pinimg.com/736x/61/68/78/616878b1066340ade92a5d5f0aecb9ac.jpg'),
(28, 'Inteligencia Artificial', 'Pedro Ponce Cruz', 'ciencia', 'https://imgs.search.brave.com/ne8JJrdthmS17uHVRKItarGwNpiwvb7FTF13YfyfmZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2RuMS5idXNj/YWxpYnJlLmNvbS9m/aXQtaW4vMzYweDM2/MC8xNy8wNy8xNzA3/NDUyNTljY2ZlM2Yz/ZWUwNmEyZDllMTJm/MDNiMy5qcGc'),
(29, 'La historia del mundo sin los trozos aburridos', 'Fernando Garcés Blázquez', 'historia', 'https://i.pinimg.com/736x/72/58/51/725851dacc543c57a8ade0a4b556c8d2.jpg'),
(30, 'Historia del tiempo', 'Stephen Hawking', 'historia', 'https://i.pinimg.com/736x/50/4c/e9/504ce93b458720149545249509dbe44e.jpg'),
(31, 'Armas, gérmenes y acero', 'Jared Diamond', 'historia', 'https://imgs.search.brave.com/4y4f5AUod3uXPos7X0BPgTuwAPRuysZvFKlKjrvVJBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2RuMS5idXNj/YWxpYnJlLmNvbS9m/aXQtaW4vMzYweDM2/MC9iMi9iZi9iMmJm/YzAzNGEyZDg4NmEx/MGU0MmY5NDA2ZTM4/NWNhYS5qcGc'),
(32, 'Los orígenes del totalitarismo', 'Hannah Arendt', 'historia', 'https://i.pinimg.com/1200x/b9/a4/82/b9a482f25778beaf8cc6eae3ec02a501.jpg'),
(33, 'Sapiens De animales a dioses', 'Yuval Noah Harari', 'historia', 'https://i.pinimg.com/736x/c7/5c/c6/c75cc63a215b73686f2a2e41b886a453.jpg'),
(34, 'La historia del mundo en 100 objetos', 'Neil MacGregor', 'historia', 'https://i.pinimg.com/736x/c2/c5/87/c2c5876ffc40c3c00f245c8675c301e9.jpg'),
(35, 'Historia de la cultura', 'Alfred Weber', 'historia', 'https://i.pinimg.com/736x/d0/55/a9/d055a99d5db196cbd5fc36692929588f.jpg'),
(36, 'Después de 1177 a.C', 'Eric H. Cline', 'historia', 'https://imgs.search.brave.com/Au9_5F2tUSA99JryMYjJPtpGoNDV8Wmgkzr4l2MthRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2RuMi5idXNj/YWxpYnJlLmNvbS9m/aXQtaW4vMzYweDM2/MC81MC85ZC81MDlk/ZDA0MjI3ZDhlNGM4/ZDhlYTRjN2FlOGY2/M2RiMy5qcGc'),
(37, 'Cultura y personalidad', 'Ralph Linton', 'historia', 'https://imgs.search.brave.com/y6wUpIceBLKEGiyK-Gs7yK-V3OqDdLRNsb9zEDupaZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFhRElxWmxDS0wu/anBn'),
(38, 'El malestar en la cultura', 'Sigmund Freud', 'historia', 'https://imgs.search.brave.com/owfNdbmYoVacZhU7zv_ddqDjto2MOXH7NMWpSOLpJmg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZW5k/dWxvLmNvbS9pbWFn/ZW5lcy85Nzg4NDE4/Lzk3ODg0MTgyMzYx/NS5HSUY.gif'),
(39, 'El canon occidental', 'Harold Bloom', 'historia', 'https://i.pinimg.com/736x/43/8c/87/438c873eec02f997e5f0acbcb1c785fc.jpg'),
(40, 'Cómo funciona el miedo', 'Frank Furedi', 'historia', 'https://imgs.search.brave.com/iE-pA5bdiE_euwvlbH5oCQuIgWdVlarM7qyhy6gAcNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/Mi0yLWYuc2NyaWJk/YXNzZXRzLmNvbS9p/bWcvd29yZF9kb2N1/bWVudC81NjgyMjU3/Mjgvb3JpZ2luYWwv/MjE2eDI4Ny9kNTlk/NDZiMjM2LzE3NTIx/MTk4ODg_dj0x'),
(41, 'Introducción a la historia del arte', 'Carlos Alvar Ezquerra', 'arte', 'https://imgs.search.brave.com/F33R9kMCHVPMAqHSSW_vHXU5KKZSgvG-CmenQ0y3dI4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2RuMi5idXNj/YWxpYnJlLmNvbS9m/aXQtaW4vMzYweDM2/MC9jNS82ZC9jNTZk/ZGZlMWQ5YzQwYTUx/OTMxYjc3YjdmYWUz/MDg2Ny5qcGc'),
(42, 'Arte', 'Van Gogh', 'arte', 'https://i.pinimg.com/736x/df/a4/f8/dfa4f8494010acd845b8f0aeeae5b488.jpg'),
(43, 'El libro del arte', 'Cennino Cennini', 'arte', 'https://i.pinimg.com/736x/6e/87/4a/6e874a8e7fab99eaf4557f920f3f9fd2.jpg'),
(44, 'Breve historia del arte', 'Carlos Javier Taranilla de la Varga', 'arte', 'https://i.pinimg.com/1200x/11/2c/0d/112c0db36227a13365cfcb6254e219eb.jpg'),
(45, 'El complot del arte', 'Jean Baudrillard', 'arte', 'https://imgs.search.brave.com/vDzuIq86YLThqJ-VSNMr_3L_Q9-M9E2qrigTUzmTpYY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFjZW50cmFsLmNv/bS85Nzg4NDYxMDkw/MDM3LmpwZw'),
(46, 'Modernismo', 'Historia del Arte II', 'arte', 'https://i.pinimg.com/736x/9e/5a/4c/9e5a4ce7efae7c8b0395654bc5e6ec70.jpg'),
(47, 'Roba como un artista', 'Austin Kleon', 'arte', 'https://i.pinimg.com/736x/be/8f/96/be8f967c14cf446548ae3d1874b94be4.jpg'),
(48, 'El camino del artista', 'Julia Cameron', 'arte', 'https://i.pinimg.com/736x/65/b1/2f/65b12fa5b5c1ad692bf94e50315b7228.jpg'),
(49, 'El cerebro del artista', 'Mara Dierssen', 'arte', 'https://imgs.search.brave.com/e0JsO7tMzKlSo46Ykvu8I8E32rVLiXA3SPbhkVfWmow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWN0/dXJlcy5hYmVib29r/cy5jb20vaXNibi85/Nzg4NDE3ODIyMzc4/LWVzLmpwZw'),
(50, 'Pensar rápido, pensar despacio', 'Daniel Kahneman', 'arte', 'https://i.pinimg.com/1200x/da/0e/cf/da0ecfcf0b9e3b9385d8c05456b24a4b.jpg'),
(51, 'El arte de la guerra', 'Sun Tzu', 'arte', 'https://i.pinimg.com/736x/4e/ed/71/4eed719c3bb9642e3162300e4a1066e6.jpg'),
(52, 'El Elemento', 'Ken Robinson', 'arte', 'https://i.pinimg.com/736x/c8/69/3e/c8693e63f83acfb4452fa8ccd12516a2.jpg'),
(53, 'Los 7 hábitos de la gente altamente efectiva', 'Stephen R. Covey', 'desarrollo', 'https://i.pinimg.com/736x/a1/9e/93/a19e9311e98ad583c894d89221f22116.jpg'),
(55, 'Cómo ganar amigos e influir sobre las personas', 'Dale Carnegie', 'desarrollo', 'https://i.pinimg.com/736x/7f/b9/63/7fb9638f706cd2f74c5e7723f994454c.jpg'),
(56, 'El monje que vendió su Ferrari', 'Robin S. Sharma', 'desarrollo', 'https://i.pinimg.com/736x/54/6c/fb/546cfb5ca515ef9e2717604ed86009bc.jpg'),
(57, 'El hombre en busca de sentido', 'Viktor E. Frankl', 'desarrollo', 'https://i.pinimg.com/736x/b6/af/ba/b6afbafff3b6d316367d6a6b84a6dae0.jpg'),
(58, 'La teoría del amor', 'Love, Theoretically', 'desarrollo', 'https://imgs.search.brave.com/oXXS5qhSj9L5yEdeNuar2ZcU7jfbC0usx2SF2h0D2P4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YWdhcGVhLmNvbS9D/b250cmFsdXotRWRp/dG9yaWFsL0xhLXRl/b3JpYS1kZWwtYW1v/ci1pMW4yMzY5NjQ0/OC5qcGc'),
(59, 'Hábitos atómicos', 'James Clear', 'desarrollo', 'https://i.pinimg.com/736x/f8/e8/8e/f8e88eb5f0f3e81e76e0a1ee88e00fa9.jpg'),
(60, 'El club de las 5 de la mañana', 'Robin Sharma', 'desarrollo', 'https://i.pinimg.com/736x/17/cd/88/17cd883c3e5a9e0f70dd2ac204a5f7c4.jpg'),
(61, 'El éxito es una decisión', 'David Fischman', 'desarrollo', 'https://i.pinimg.com/736x/1f/84/33/1f8433883735b9d995bd10d1eb896f57.jpg'),
(62, 'El poder de los introvertidos', 'Susan Cain', 'desarrollo', 'https://i.pinimg.com/736x/f4/09/ad/f409ade5f1423b45868d2d33b960b876.jpg'),
(63, 'La actitud del éxito', 'Carol S. Dweck', 'desarrollo', 'https://imgs.search.brave.com/pMH1FacVcUGlQa3d96TCvUT6kbsqaoXvOM-jLMiC8pU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWN0/dXJlcy5hYmVib29r/cy5jb20vaXNibi85/Nzg4NDY2NjIxMDgz/LWVzLTMwMC5qcGc'),
(64, 'Despierta tu héroe interior', 'Víctor Hugo Manzanilla', 'desrrollo', 'https://imgs.search.brave.com/RWwUvymEv_Ajuw6Mfan06nHfGyZHCAXTD6zOwVq7ABw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2RuMy5idXNj/YWxpYnJlLmNvbS9m/aXQtaW4vMzYweDM2/MC9lOS8wZi9lOTBm/ZjM1NDM0ZWVlYjQ1/YTUxMTZlNGI3Zjgw/NmU2ZC5qcGc'),
(65, 'Crimen y castigo', 'Fiódor  Dostoyevski', 'Literatura', 'https://i.pinimg.com/1200x/75/08/5f/75085fb9d98edc3966c8f342efc816de.jpg'),
(66, 'Los miserables', 'Victor Hugo', 'Literatura', 'https://i.pinimg.com/1200x/f0/3a/58/f03a586e96ea6d78619186528ed48a31.jpg'),
(67, 'Matar a un ruiseñor', 'Harper Lee', 'Literatura', 'https://i.pinimg.com/1200x/cf/52/e4/cf52e4454864c76b1ad460be507a4e34.jpg'),
(68, '1984', 'George Orwell', 'Literatura', 'https://i.pinimg.com/1200x/17/1e/0c/171e0c8b35f4e2bb6f36cd2bdb374423.jpg'),
(69, 'Orgullo y prejuicio', 'Jane Austen', 'Literatura', 'https://i.pinimg.com/736x/f2/7a/6b/f27a6ba6da4e402b74917cb88b7ca321.jpg'),
(70, 'En busca del tiempo perdido', 'Marcel Proust', 'Literatura', 'https://i.pinimg.com/1200x/f9/45/47/f94547a7fec79d1bb308612915d44815.jpg'),
(71, 'El retrato de Dorian Gray', 'Oscar Wilde', 'Literatura', 'https://i.pinimg.com/1200x/29/a4/34/29a434195486169441134c842dfb7188.jpg'),
(72, 'El extranjero', 'Albert Camus', 'Literatura', 'https://i.pinimg.com/736x/11/a1/72/11a172636d4f27e38117090569be28ca.jpg'),
(73, 'Rayuela', 'Julio Cortázar', 'Literatura', 'https://i.pinimg.com/736x/2b/0b/42/2b0b42b17d3f6a1950af090b9a6fcc9b.jpg'),
(74, 'Fahrenheit 451', 'Ray Bradbury', 'Literatura', 'https://i.pinimg.com/1200x/46/d3/8a/46d38a1f04f4cb75058dc300686e4207.jpg'),
(75, 'el gen egoísta', 'Siddhartha Mukherjee', 'ciencia', 'https://i.pinimg.com/736x/04/2b/c9/042bc9feb8a7847990290eb893a0da38.jpg'),
(76, 'Breves respuestas a las grandes preguntas', 'Stephen Hawking', 'ciencia', 'https://i.pinimg.com/1200x/5c/9f/87/5c9f877c3eeea5ed881e3b10db3e700c.jpg'),
(77, 'El tejido del cosmos', 'Brian Greene', 'ciencia', 'https://i.pinimg.com/736x/20/04/ab/2004abefa4dc3aa2568d591bc2daeb49.jpg'),
(78, 'La música de las esferas', 'Jamie James', 'ciencia', 'https://i.pinimg.com/1200x/bf/81/e2/bf81e26a3a0dab9ec47be902f1b4545c.jpg'),
(79, 'El universo elegante', 'Brian Greene', 'ciencia', 'https://i.pinimg.com/736x/8a/54/68/8a5468c648a50523f060f1763cae5913.jpg'),
(80, 'Los sueños de Einstein', 'Alan Lightman', 'ciencia', 'https://i.pinimg.com/736x/68/a0/ef/68a0efcce1a97221041fce1d6475b823.jpg'),
(81, 'El orden del tiempo', 'Carlo Rovelli', 'ciencia', 'https://i.pinimg.com/1200x/9f/6b/fa/9f6bfa99f2096d8b3443f52c224a01c5.jpg'),
(82, 'La vida inmortal de Henrietta Lacks', 'Rebecca Skloot', 'ciencia', 'https://i.pinimg.com/736x/ca/7e/52/ca7e52fd1cf6879e63c3e36ddbc1d714.jpg'),
(83, 'La partícula divina', 'Leon Lederman', 'ciencia', 'https://i.pinimg.com/736x/5f/39/3b/5f393bede1d37a9f030fef493c5fd7f0.jpg'),
(84, 'el arte de pensar', 'Ellen Winner', 'arte', 'https://i.pinimg.com/736x/72/bd/ff/72bdff996ac2954bcf03e94904094230.jpg'),
(85, 'la proporción de el arte', 'Bruce Barnbaum', 'arte', 'https://i.pinimg.com/736x/5c/35/08/5c35086248e47cef8df7956088f4947e.jpg'),
(86, 'La estética de la creación verbal', 'Mijaíl Bajtín', 'arte', 'https://i.pinimg.com/1200x/5f/04/ae/5f04ae5d7c1cc9ed9a7f6fe899ef2e24.jpg'),
(87, 'El poder del ahora', 'Eckhart Tolle', 'desarrollo', 'https://i.pinimg.com/736x/2f/0b/e8/2f0be8050a06d4e8136b215b8024a090.jpg'),
(88, 'Los secretos de la mente millonaria', 'T. Harv Eker', 'desarrollo', 'https://i.pinimg.com/736x/3d/4e/f9/3d4ef9ba1c49cb4a90ff81a4995f885d.jpg'),
(89, 'Padre rico, padre pobre', 'Robert T. Kiyosaki', 'desarrollo', 'https://i.pinimg.com/736x/60/b0/f8/60b0f831af4c8c79cdb2d642193cb7af.jpg'),
(90, 'Los cuatro acuerdos', 'Miguel Ruiz', 'desarrollo', 'https://i.pinimg.com/736x/92/5f/58/925f5895b4308eb93ecd9c6869099da9.jpg'),
(91, 'La inteligencia emocional', 'Daniel Goleman', 'desarrollo', 'https://i.pinimg.com/736x/95/66/db/9566db77563ee15606f1e85242bf87cc.jpg'),
(92, 'La metamorfosis', 'Franz Kafka', 'literatura', 'https://i.pinimg.com/736x/08/04/9a/08049a678d26cfc3f863e20cfb38812b.jpg'),
(93, 'El amor en los tiempos del cólera', 'Gabriel García Márquez', 'literatura', 'https://i.pinimg.com/736x/73/30/17/733017e71fa57d5caf851ac9d0c3199c.jpg'),
(94, 'Pedro Páramo', 'Juan Rulfo', 'literatura', 'https://i.pinimg.com/736x/52/61/73/526173fe0a05604113e8a6d9a927d69c.jpg'),
(95, 'La casa de los espíritus', 'Isabel Allende', 'literatura', 'https://i.pinimg.com/736x/06/15/7a/06157a3f3f9ea6f7843c7d844c795c8c.jpg'),
(96, 'Los hermanos Karamázov', 'Fiódor Dostoyevski', 'literatura', 'https://i.pinimg.com/1200x/60/89/29/6089292f459d667551ae47decf99b42e.jpg'),
(97, 'Anna Karenina', 'León Tolstói', 'literatura', 'https://i.pinimg.com/736x/eb/c9/86/ebc9860fb8cb44925986e8dbd1ae2a54.jpg'),
(98, 'Guerra y paz', 'León Tolstói', 'literatura', 'https://i.pinimg.com/736x/dd/6f/4a/dd6f4a1eea527b18edd2e2f5117dfedc.jpg'),
(99, 'Madame Bovary', 'Gustave Flaubert', 'literatura', 'https://i.pinimg.com/736x/a7/9e/d5/a79ed53b5fe812ee0390a3eb42abcdfd.jpg'),
(100, 'El gran Gatsby', 'F. Scott Fitzgerald', 'literatura', 'https://i.pinimg.com/736x/2d/78/df/2d78df188c6eacb2200c7f8c0b2f6ce1.jpg'),
(101, 'Ulises', 'James Joyce', 'literatura', 'https://i.pinimg.com/736x/fb/02/82/fb02823bb751c14a949995bea5cbd166.jpg'),
(102, 'La náusea', 'Jean-Paul Sartre', 'literatura', 'https://i.pinimg.com/736x/08/5f/ad/085fadad16420e2dcb69105b2b9fd9b8.jpg'),
(103, 'La tregua', 'Mario Benedetti', 'literatura', 'https://i.pinimg.com/736x/0b/c0/cb/0bc0cb8f4a0af34ea9f8b01fd283790b.jpg'),
(104, 'Don Segundo Sombra', 'Ricardo Güiraldes', 'literatura', 'https://i.pinimg.com/736x/4f/22/40/4f2240716c20ce88c25d69d0891a02c8.jpg'),
(105, 'Doña Bárbara', 'Rómulo Gallegos', 'literatura', 'https://i.pinimg.com/736x/11/e9/20/11e920a141c710fa309bb90612c10d09.jpg'),
(106, 'La ciudad y los perros', 'Mario Vargas Llosa', 'literatura', 'https://i.pinimg.com/736x/97/4e/91/974e91ebe4c5e7b3915b19b52d80eb6b.jpg'),
(107, 'Conversación en La Catedral', 'Mario Vargas Llosa', 'literatura', 'https://i.pinimg.com/1200x/5e/3b/c1/5e3bc1908be5e1e4e00ee25318000776.jpg'),
(108, 'El túnel', 'Ernesto Sábato', 'literatura', 'https://i.pinimg.com/736x/ef/1a/6e/ef1a6e86a11bcc7599ed0b7c960826cb.jpg'),
(109, 'Sobre héroes y tumbas', 'Ernesto Sábato', 'literatura', 'https://i.pinimg.com/736x/50/1e/68/501e68e4a8e295cfbe51713c91dab98c.jpg'),
(110, '2666', 'Roberto Bolaño', 'literatura', 'https://i.pinimg.com/736x/70/b3/bd/70b3bdc1a88a79cf16686b47962d3cdc.jpg'),
(111, 'El coronel no tiene quien le escriba', 'Gabriel García Márquez', 'literatura', 'https://i.pinimg.com/736x/83/ea/0f/83ea0f9b4c7273cb25fd0d521cf03c01.jpg'),
(112, 'Bestiario', 'Julio Cortázar', 'literatura', 'https://i.pinimg.com/736x/cf/8a/bc/cf8abc45f9a35c52f736a347b3c4620d.jpg'),
(113, 'Final del juego', 'Julio Cortázar', 'literatura', 'https://i.pinimg.com/1200x/91/50/7e/91507e6c36c90202dbd50ef91a267c1a.jpg'),
(114, 'El Aleph', 'Jorge Luis Borges', 'literatura', 'https://i.pinimg.com/1200x/e9/d7/9b/e9d79bcb690bb48aebedfa666b86093d.jpg'),
(115, 'Ficciones', 'Jorge Luis Borges', 'literatura', 'https://i.pinimg.com/736x/2d/0e/8c/2d0e8ccf1b0517a7b23524f8db9c4676.jpg'),
(116, 'El cerebro y la inteligencia emocional', 'Daniel Goleman', 'ciencia', 'https://i.pinimg.com/736x/93/19/a3/9319a357fba30c286e09e393a331ac6e.jpg'),
(117, 'La vida secreta de la mente', 'Mariano Sigman', 'ciencia', 'https://i.pinimg.com/736x/d2/4c/b9/d24cb9d643c9acefb3d49f725e80ce82.jpg'),
(118, 'el cerebro de el líder', 'Stanislas Dehaene', 'ciencia', 'https://i.pinimg.com/736x/16/45/b7/1645b7342db10671e0b4da215734eac7.jpg'),
(119, 'El cerebro musical', 'Daniel Levitin', 'ciencia', 'https://i.pinimg.com/736x/28/6a/4c/286a4cda40b77157945de81f9aaee218.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `contraseña` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `contraseña`) VALUES
(1, 'Admin', '123456'),
(2, 'Liba', '123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
