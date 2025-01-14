USE [master]
GO
/****** Object:  Database [DB_Obat]    Script Date: 18/07/2024 11:58:43 ******/
CREATE DATABASE [DB_Obat]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DB_Obat', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\DB_Obat.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DB_Obat_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\DB_Obat_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [DB_Obat] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DB_Obat].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DB_Obat] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DB_Obat] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DB_Obat] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DB_Obat] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DB_Obat] SET ARITHABORT OFF 
GO
ALTER DATABASE [DB_Obat] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DB_Obat] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DB_Obat] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DB_Obat] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DB_Obat] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DB_Obat] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DB_Obat] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DB_Obat] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DB_Obat] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DB_Obat] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DB_Obat] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DB_Obat] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DB_Obat] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DB_Obat] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DB_Obat] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DB_Obat] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DB_Obat] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DB_Obat] SET RECOVERY FULL 
GO
ALTER DATABASE [DB_Obat] SET  MULTI_USER 
GO
ALTER DATABASE [DB_Obat] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DB_Obat] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DB_Obat] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DB_Obat] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DB_Obat] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DB_Obat] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'DB_Obat', N'ON'
GO
ALTER DATABASE [DB_Obat] SET QUERY_STORE = OFF
GO
USE [DB_Obat]
GO
/****** Object:  Table [dbo].[msobat]    Script Date: 18/07/2024 11:58:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[msobat](
	[IdObat] [int] IDENTITY(1,1) NOT NULL,
	[NamaObat] [varchar](100) NOT NULL,
	[TipeObat] [int] NOT NULL,
	[indikasi] [varchar](100) NOT NULL,
	[Stok] [int] NOT NULL,
	[StokMin] [int] NOT NULL,
	[HargaObat] [decimal](18, 0) NOT NULL,
	[StatusObat] [int] NOT NULL,
 CONSTRAINT [PK_msobat] PRIMARY KEY CLUSTERED 
(
	[IdObat] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[trpenjualanobat]    Script Date: 18/07/2024 11:58:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[trpenjualanobat](
	[IdTransaksi] [int] IDENTITY(1,1) NOT NULL,
	[IdObat] [int] NOT NULL,
	[Tanggal] [date] NOT NULL,
	[QtyObat] [int] NOT NULL,
	[HargaTotal] [decimal](18, 0) NOT NULL,
 CONSTRAINT [PK_trpenjualanobat] PRIMARY KEY CLUSTERED 
(
	[IdTransaksi] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[msobat] ON 

INSERT [dbo].[msobat] ([IdObat], [NamaObat], [TipeObat], [indikasi], [Stok], [StokMin], [HargaObat], [StatusObat]) VALUES (1, N'Bodrex', 1, N'Tidak tahu', 2, 1, CAST(2000 AS Decimal(18, 0)), 0)
INSERT [dbo].[msobat] ([IdObat], [NamaObat], [TipeObat], [indikasi], [Stok], [StokMin], [HargaObat], [StatusObat]) VALUES (2, N'Panadol', 2, N'Mual', 17, 10, CAST(3000 AS Decimal(18, 0)), 1)
INSERT [dbo].[msobat] ([IdObat], [NamaObat], [TipeObat], [indikasi], [Stok], [StokMin], [HargaObat], [StatusObat]) VALUES (3, N'Tramadol', 2, N'sadsasa', 12, 1, CAST(2000 AS Decimal(18, 0)), 1)
INSERT [dbo].[msobat] ([IdObat], [NamaObat], [TipeObat], [indikasi], [Stok], [StokMin], [HargaObat], [StatusObat]) VALUES (4, N'Bodre', 1, N'pusing dan mual', 10, 1, CAST(20000 AS Decimal(18, 0)), 0)
SET IDENTITY_INSERT [dbo].[msobat] OFF
GO
SET IDENTITY_INSERT [dbo].[trpenjualanobat] ON 

INSERT [dbo].[trpenjualanobat] ([IdTransaksi], [IdObat], [Tanggal], [QtyObat], [HargaTotal]) VALUES (1, 1, CAST(N'2024-03-20' AS Date), 2, CAST(5000 AS Decimal(18, 0)))
INSERT [dbo].[trpenjualanobat] ([IdTransaksi], [IdObat], [Tanggal], [QtyObat], [HargaTotal]) VALUES (2, 2, CAST(N'2024-07-18' AS Date), 1, CAST(3000 AS Decimal(18, 0)))
INSERT [dbo].[trpenjualanobat] ([IdTransaksi], [IdObat], [Tanggal], [QtyObat], [HargaTotal]) VALUES (3, 1, CAST(N'2024-07-18' AS Date), 3, CAST(6000 AS Decimal(18, 0)))
INSERT [dbo].[trpenjualanobat] ([IdTransaksi], [IdObat], [Tanggal], [QtyObat], [HargaTotal]) VALUES (4, 2, CAST(N'2024-07-18' AS Date), 10, CAST(30000 AS Decimal(18, 0)))
INSERT [dbo].[trpenjualanobat] ([IdTransaksi], [IdObat], [Tanggal], [QtyObat], [HargaTotal]) VALUES (5, 2, CAST(N'2024-07-18' AS Date), 1, CAST(3000 AS Decimal(18, 0)))
INSERT [dbo].[trpenjualanobat] ([IdTransaksi], [IdObat], [Tanggal], [QtyObat], [HargaTotal]) VALUES (6, 2, CAST(N'2024-07-18' AS Date), 1, CAST(3000 AS Decimal(18, 0)))
INSERT [dbo].[trpenjualanobat] ([IdTransaksi], [IdObat], [Tanggal], [QtyObat], [HargaTotal]) VALUES (7, 2, CAST(N'2024-07-18' AS Date), 2, CAST(6000 AS Decimal(18, 0)))
SET IDENTITY_INSERT [dbo].[trpenjualanobat] OFF
GO
USE [master]
GO
ALTER DATABASE [DB_Obat] SET  READ_WRITE 
GO
