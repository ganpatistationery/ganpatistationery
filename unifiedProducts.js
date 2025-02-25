// unifiedProducts.js
const productsData = [
  {
    "id": "p324",
    "name": "POKEMON CARDS",
    "image": "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/991289/1.jpg?0207",
    "category": "gifts",
    "price": 150
  },
  {
    "id": "p325",
    "name": "NARUTO CARDS",
    "image": "https://m.media-amazon.com/images/I/81iWmNuAPaL.jpg",
    "category": "gifts",
    "price": 10
  },
  
  {
    "id": "p326",
    "name": "SMALL POKEMON CARDS",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcp64Ki2vmPlL-RpreHS8JXn4Gr_IDWUAhzg&s",
    "category": "gifts",
    "price": 10
  },
  {
    "id": "p327",
    "name": "UNICORN BANDS",
    "image": "https://m.media-amazon.com/images/I/71x2zlLxgvL.jpg",
    "category": "gifts",
    "price": 50
  },
  {
    "id": "p328",
    "name": "FRIDGE MAGNET",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVpTk1OQI83pDfHJdO91QOmwiAR1wos3lWw&s",
    "category": "gifts",
    "price": 80
  },
  {
    "id": "p329",
    "name": "STICKERS",
    "image": "https://www.fomostore.in/cdn/shop/files/Brothers-Innovation-Sticker_Packs-Pack_of_20-20_Travel_Stickers_in_Pack_1-Image-1_1e6647a1-946e-4f87-86e3-a0db3a6bc60a.jpg?v=1719587379&width=2048",
    "category": "gifts",
    "price": 3
  },
  {
    "id": "p330",
    "name": "WHITE PENCIL SET",
    "image": "https://m.media-amazon.com/images/I/515oS8RZRKS.jpg",
    "category": "gifts",
    "price": 40
  },
  {
    "id": "p331",
    "name": "DESIGNER STICK NOTES",
    "image": "https://m.media-amazon.com/images/I/51ZTYVQNIUL.jpg",
    "category": "gifts",
    "price": 30
  },
  {
    "id": "p332",
    "name": "CARTOON PACKING PAPERS",
    "image": "https://images-cdn.ubuy.co.in/633ffc394cca9407567aee5d-birthday-wrapping-paper-for-boys-girls.jpg",
    "category": "gifts",
    "price": 10
  },
  {
    "id": "p333",
    "name": "COLORFULL ICE CREAM STICKS",
    "image": "https://m.media-amazon.com/images/I/718FGHcFz7L.jpg",
    "category": "gifts",
    "price": 40
  },{
    "id": "p334",
    "name": "STONES",
    "image": "https://m.media-amazon.com/images/I/81JfiKPCHWL._AC_UF894,1000_QL80_.jpg",
    "category": "gifts",
    "price": 20
  },{
    "id": "p335",
    "name": "PHOTO FRAME SET",
    "image": "https://rukminim1.flixcart.com/image/400/400/jbfe7ww0-1/normal-photo-frame/u/p/q/photo-wall-pictures-collage-hanging-string-bedroom-with-glow-original-imafysc9ysgehypt.jpeg?q=90",
    "category": "gifts",
    "price": 250
  },{
    "id": "p336",
    "name": "PREMIUM TAPE SET",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxvG9dXK8sDtMRBt0H9_RkqWPbwqleU12ag&s",
    "category": "gifts",
    "price": 20
  },
  {
    "id": "p337",
    "name": "DOMS ALL IN ONE KIT",
    "image": "https://images.meesho.com/images/products/438180397/fdhm8_512.webp",
    "category": "gifts",
    "price": 350
  },{
    "id": "p338",
    "name": "DOMS UNICORN THEME KIT",
    "image": "https://m.media-amazon.com/images/I/71Ny5mBjALL._AC_UF350,350_QL80_.jpg",
    "category": "gifts",
    "price": 150
  },
  {
    "id": "p1",
    "name": "CLUTCH ERASER",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.29.58_0435068c.jpg",
    "category": "eraser",
    "price": 40
  },
  {
    "id": "p2",
    "name": "MULTICOLOR BOX",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.29.58_2f69a767.jpg",
    "category": "color",
    "price": 800
  },
  {
    "id": "p3",
    "name": "COLOR SET",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.29.58_a1eb90d3.jpg",
    "category": "color",
    "price": 250
  },
  {
    "id": "p4",
    "name": "PIGGY BANK",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.29.59_0144dc07.jpg",
    "category": "money-bank",
    "price": 250
  },  
  {
    "id": "p6",
    "name": "FOLDER",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.29.59_6cdcdbfb.jpg",
    "category": "folders",
    "price": 150
  },
  {
    "id": "p19",
    "name": "BAGS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.04_996b83bd.jpg",
    "category": "gifts",
    "price": 250
  },
  {
    "id": "p20",
    "name": "SPACE PIGGY BANK ",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.04_e41620d4.jpg",
    "category": "money-bank",
    "price": 600
  },
  {
    "id": "p21",
    "name": "UNICORN SHARPNER",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.04_f645d919.jpg",
    "category": "sharpners",
    "price": 250
  },
  {
    "id": "p22",
    "name": "UNICORN KIT",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.06_9d7a52f3.jpg",
    "category": "kits",
    "price": 200
  },
  // {
  //   "id": "p23",
  //   "name": "GIFTING COMBO",
  //   "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.07_41ba978a.jpg",
  //   "category": "gifts",
  //   "price": 30
  // },
  {
    "id": "p24",
    "name": "AVENGERS KIT",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.07_56e510ec.jpg",
    "category": "kits",
    "price": 200
  },
  {
    "id": "p26",
    "name": "IVY DOUBLE SIDED TAPE",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.08_afcf9d53.jpg",
    "category": "gifts",
    "price": 70
  },
  {
    "id": "p30",
    "name": "SMALL UNICORN KIT",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.09_734c581f.jpg",
    "category": "kits",
    "price": 160
  },
  {
    "id": "p31",
    "name": "PENCIL BOX WITH LOCK",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.10_90d9aa94.jpg",
    "category": "kits",
    "price": 300
  },
  {
    "id": "p34",
    "name": "PENCIL BOX",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.13_1a368bfc.jpg",
    "category": "kits",
    "price": 100
  },
  {
    "id": "p35",
    "name": "PENCIL BOX WITH LED SLATE",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.13_7ad46caf.jpg",
    "category": "kits",
    "price": 100
  },
  {
    "id": "p44",
    "name": "JUMPING ROPE",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.18_4b04f263.jpg",
    "category": "gifts",
    "price": 200
  },
  {
    "id": "p45",
    "name": "SMALL UNICORN KIT",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.18_8f52ba20.jpg",
    "category": "kits",
    "price": 150
  },
  {
    "id": "p46",
    "name": "UNICORN KIT",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.19_0b9e6edb.jpg",
    "category": "kits",
    "price": 200
  },
  {
    "id": "p47",
    "name": "SMALL SPACE KIT",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.19_dccfb156.jpg",
    "category": "kits",
    "price": 170
  },
  {
    "id": "p48",
    "name": "DESIGNER TAPE",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.20_11c95559.jpg",
    "category": "gifts",
    "price": 80/10
  },
  {
    "id": "p51",
    "name": "MARKER SET",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.32_1d833ac9.jpg",
    "category": "color",
    "price": 200
  },
  {
    "id": "p55",
    "name": "DESIGNER KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.34_43f11ba3.jpg",
    "category": "kits",
    "price": 200
  },
  {
    "id": "p59",
    "name": "MURMAID KIT",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.35_89133c5a.jpg",
    "category": "kits",
    "price": 200
  },
  {
    "id": "p61",
    "name": "PENCIL BOX WITH BUTTONS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.36_abf06d1d.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p62",
    "name": "SMALL SPACE KIT",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.36_d5ac38f2.jpg",
    "category": "kits",
    "price": 150
  },
  // {
  //   "id": "p66",
  //   "name": "WATER BOTTLE",
  //   "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.38_0253e212.jpg",
  //   "category": "gifts",
  //   "price": 150
  // },
  {
    "id": "p67",
    "name": "FOLDER WITH SECTIONS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.38_0cb22546.jpg",
    "category": "folders",
    "price": 250
  },
  {
    "id": "p70",
    "name": "DOREMON PENCIL BOX",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.40_28017543.jpg",
    "category": "kits",
    "price": 200
  },
  {
    "id": "p71",
    "name": "UNIQUE PENCIL BOXES",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.40_9b79a403.jpg",
    "category": "kits",
    "price": 200
  },
  {
    "id": "p72",
    "name": "ETERNAL PENCILS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.41_40bcc885.jpg",
    "category": "pencils",
    "price": 120
  },
  {
    "id": "p78",
    "name": "UNICORN PENS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.43_8b6fd2c6.jpg",
    "category": "pen",
    "price": 20
  },
  {
    "id": "p79",
    "name": "UNICORN FOLDERS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.44_5f21e748.jpg",
    "category": "folders",
    "price": 90
  },
  {
    "id": "p81",
    "name": "ARTIST SET",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.44_ff83ea7e.jpg",
    "category": "color",
    "price": 600
  },
  {
    "id": "p82",
    "name": "FOLDER",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.45_23f964a5.jpg",
    "category": "folders",
    "price": 90
  },
  {
    "id": "p83",
    "name": "12 SHADES DOUBLE SIDED BRUSH PENS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.45_2430035e.jpg",
    "category": "color",
    "price": 120
  },
  {
    "id": "p85",
    "name": "CUTE DIARIES",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.46_0d2c15f8.jpg",
    "category": "diary",
    "price": 200
  },
  {
    "id": "p86",
    "name": "TATTOO KIT",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.30.46_1255ad0d.jpg",
    "category": "activity_sets",
    "price": 80
  },
  {
    "id": "p87",
    "name": "CUTE DIARIES",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.25_62290edc.jpg",
    "category": "diary",
    "price": 180
  },
  {
    "id": "p88",
    "name": "CUTE DIARIES",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.25_ef491a38.jpg",
    "category": "diary",
    "price": 180
  },
  {
    "id": "p90",
    "name": "CUTE DIARIES",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.26_21273095.jpg",
    "category": "diary",
    "price": 200
  },
  {
    "id": "p95",
    "name": "UNICORN CARRY BAGS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.28_15609796.jpg",
    "category": "carry_bags",
    "price": 30
  },
  // {
  //   "id": "p96",
  //   "name": "KITS",
  //   "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.28_9eac073a.jpg",
  //   "category": "gifts",
  //   "price": 250
  // },
  {
    "id": "p97",
    "name": "PENCIL BOX WITH WHITE BOARD",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.28_e23c0bf3.jpg",
    "category": "kits",
    "price": 250
  },
  // {
  //   "id": "p100",
  //   "name": "GIFTING COMBO",
  //   "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.29_9b0d5f86.jpg",
  //   "category": "gifts",
  //   "price": 100
  // },
  {
    "id": "p102",
    "name": "60 SHADES DOUBLE SIDED BRUSH PENS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.30_7472cf7b.jpg",
    "category": "color",
    "price": 550
  },
  // {
  //   "id": "p103",
  //   "name": "UNICORN POUCHES FOR GIRLS",
  //   "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.30_9172668c.jpg",
  //   "category": "gifts",
  //   "price": 150
  // },
  {
    "id": "p107",
    "name": "AVENGERS BANDS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.31_aa2f2c3c.jpg",
    "category": "gifts",
    "price": 50
  },
  {
    "id": "p113",
    "name": "PREMIUM DESIGNER TAPES",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.34_1bfaa35c.jpg",
    "category": "gifts",
    "price": 10
  },
  {
    "id": "p114",
    "name": "NAIL ART KIT",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.34_97c275e1.jpg",
    "category": "activity_sets",
    "price": 100
  },
  {
    "id": "p115",
    "name": "GLITTER SHEETS ",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.34_db075b03.jpg",
    "category": "gifts",
    "price": 80
  },
  {
    "id": "p122",
    "name": "CUTE PEN STANDS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.37_876b2dbb.jpg",
    "category": "gifts",
    "price": 150
  },
  {
    "id": "p131",
    "name": "GLUE PENS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.41_77dbe6a0.jpg",
    "category": "gifts",
    "price": 150
  },
  {
    "id": "p136",
    "name": "NARUTO PENS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.42_6a945e5f.jpg",
    "category": "pen",
    "price": 50
  },
  {
    "id": "p138",
    "name": "BUS SHAPED PENCIL BOX",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.43_73629fab.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p144",
    "name": "SMILE ERASERS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.45_709c7226.jpg",
    "category": "eraser",
    "price": 5
  },
  {
    "id": "p146",
    "name": "PREMIUM BLACK PEN",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.46_3f170dca.jpg",
    "category": "pen",
    "price": 30
  },
  {
    "id": "p147",
    "name": "MAHADEV PENS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.46_7d6dc75e.jpg",
    "category": "pen",
    "price": 20
  },
  {
    "id": "p158",
    "name": "PENS WITH DIARY ATTACHED",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.54_827e0acb.jpg",
    "category": "pen",
    "price": 20
  },
  {
    "id": "p159",
    "name": "COLOURFUL PENS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.54_ebba7954.jpg",
    "category": "pen",
    "price": 20
  },
  {
    "id": "p164",
    "name": "PENCIL WITH GAME",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.56_d4e82e03.jpg",
    "category": "pencils",
    "price": 20
  },
  {
    "id": "p165",
    "name": "PENCIL BOX",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.57_2abae819.jpg",
    "category": "kits",
    "price": 100
  },
  {
    "id": "p172",
    "name": "ELECTRIC SHARPNER",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.34.59_e3953e0c.jpg",
    "category": "sharpners",
    "price": 250
  },
  {
    "id": "p173",
    "name": "CARTOON STYLED SHARPNER",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.35.00_35d01573.jpg",
    "category": "sharpners",
    "price": 30
  },
  {
    "id": "p176",
    "name": "ELECTRIC SHAPNER",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.35.00_f00f109a.jpg",
    "category": "sharpners",
    "price": 250
  },
  {
    "id": "p177",
    "name": "CAMERA SHAPED SHARPNER",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.35.01_18c2cd63.jpg",
    "category": "sharpners",
    "price": 40
  },
  {
    "id": "p178",
    "name": "HEART DIARY",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.35.01_9a3c142c.jpg",
    "category": "diary",
    "price": 200
  },
  {
    "id": "p180",
    "name": "MAGNET COMBO",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.35.02_900ecd91.jpg",
    "category": "magnets",
    "price": 60
  },
  {
    "id": "p181",
    "name": "CHOCLATE DIARY",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.35.02_aa3b1aee.jpg",
    "category": "diary",
    "price": 100
  },
  {
    "id": "p187",
    "name": "DESIGN CUTTING SCISSORS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.35.04_d9663803.jpg",
    "category": "gifts",
    "price": 50
  },
  {
    "id": "p189",
    "name": "SMALL KIT",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.35.05_9e1d5b76.jpg",
    "category": "kits",
    "price": 150
  },
  {
    "id": "p190",
    "name": "SOAP",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.35.05_d6162d2e.jpg",
    "category": "gifts",
    "price": 30
  },
  {
    "id": "p205",
    "name": "STICKERS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.37.51_5cc3492a.jpg",
    "category": "gifts",
    "price": 10
  },
  {
    "id": "p226",
    "name": "STYLISH KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.05_458c9f39.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p227",
    "name": "STYLISH KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.05_48add5fa.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p228",
    "name": "ROLLER CRAYONS SET 12 SHADES",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.05_d99a79b3.jpg",
    "category": "color",
    "price": 120
  },
  {
    "id": "p229",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.06_3d2e4838.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p232",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.06_ab3c19b2.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p233",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.07_0b7cfd02.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p234",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.07_74ffe287.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p235",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.07_751d0c85.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p236",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.08_44b7bef7.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p237",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.08_593aee22.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p238",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.08_689e86b1.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p239",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.08_884b0fb7.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p240",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.10_8ac48eda.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p241",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.10_c1ca75a2.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p242",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.10_ecf3c98e.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p244",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.11_df59f9db.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p245",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.12_adf5a322.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p246",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.13_8b8829ef.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p247",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.13_d64f149d.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p248",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.13_de8d9154.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p249",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.14_2955d9fe.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p250",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.15_28262565.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p251",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.15_8696070c.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p252",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.16_70e5562f.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p253",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.16_aba9aff6.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p254",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.16_de9b4914.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p255",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.17_6494ce57.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p256",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.18_912bcfac.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p257",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.19_6db42d21.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p258",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.20_351c9644.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p259",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.20_3d5046b2.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p260",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.20_4cfe75d3.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p261",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.21_4964009b.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p262",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.22_f86e7907.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p263",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.23_4af95988.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p264",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.23_97803f0b.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p265",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.24_008a0de5.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p266",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.24_10a69250.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p267",
    "name": "UNIQUE KITS",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.24_ab8e78c8.jpg",
    "category": "kits",
    "price": 250
  },
  {
    "id": "p281",
    "name": "MAGIC WATER BOOK",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.32_c823f703.jpg",
    "category": "gifts",
    "price": 1000
  },
  {
    "id": "p282",
    "name": "WATER BOTTLE",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.33_b551dd9f.jpg",
    "category": "gifts",
    "price": 150
  },
  {
    "id": "p286",
    "name": "SOAP",
    "image": "./product_images/WhatsApp Image 2025-02-18 at 21.38.34_c62f7ef0.jpg",
    "category": "gifts",
    "price": 40
  },
  {
    "id": "p302",
    "name": "SPINNER",
    "image": "https://m.media-amazon.com/images/I/51vbmpncddL.jpg",
    "category": "spinners",
    "price": 150
  }
  ,
  {
    "id": "p303",
    "name": "SPINNER",
    "image": "https://m.media-amazon.com/images/I/51nCabfCyEL._SY300_SX300_QL70_FMwebp_.jpg",
    "category": "spinners",
    "price": 150
  }
  ,
  {
    "id": "p304",
    "name": "SPINNER",
    "image": "https://m.media-amazon.com/images/I/61bJFway1oL._SY450_.jpg",
    "category": "spinners",
    "price": 150
  },
  {
    "id": "p305",
    "name": "Slime",
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/583x720/18545377a.webp",
    "category": "slime",
    "price": 150
  },
  {
    "id": "p306",
    "name": "Clay",
    "image": "https://images-cdn.ubuy.qa/644494fabb7602395348ccae-ciaraq-air-dry-clay-for-kids-24-colors.jpg",
    "category": "slime",
    "price": 50
  },
  {
    "id": "p307",
    "name": "Clay",
    "image": "https://m.media-amazon.com/images/I/41OcyDsGm0L._SY300_SX300_QL70_FMwebp_.jpg",
    "category": "slime",
    "price": 100
  },
  {
    "id": "p308",
    "name": "Clay",
    "image": "https://m.media-amazon.com/images/I/51jk3V7lKDL._SX569_.jpg",
    "category": "slime",
    "price": 300
  },
  {
    "id": "p309",
    "name": "Electric Eraser",
    "image": "https://m.media-amazon.com/images/I/41QEA51nL4L._SX466_.jpg",
    "category": "eraser",
    "price": 100
  }
  ,
  {
    "id": "p310",
    "name": "Small Diary",
    "image": "https://rukminim2.flixcart.com/image/850/1000/ktd9mkw0/school-set/e/f/y/set-of-4-unicorn-diary-with-pen-for-kids-small-cute-size-kidz-original-imag6q38ahzkzqtf.jpeg?q=20&crop=false",
    "category": "diary",
    "price": 40
  },
  {
    "id": "p311",
    "name": "Wipes",
    "image": "https://m.media-amazon.com/images/I/41MTOK6dUVL._SX300_SY300_QL70_FMwebp_.jpg",
    "category": "gifts",
    "price": 50
  }
  ,
  // {
  //   "id": "p312",
  //   "name": "DESIGNER CLIPS",
  //   "image": "https://nestasia.in/cdn/shop/products/PictureHangingClipspack.png?v=1603185840&width=600",
  //   "category": "gifts",
  //   "price": 70
  // }
  ,
  {
    "id": "p313",
    "name": "TETRA TOWER",
    "image": "https://down-id.img.susercontent.com/file/fb34dab3c1baeffde74eeee3428170cc",
    "category": "games",
    "price": 200
  }
  ,
  {
    "id": "p314",
    "name": "PUZZLES",
    "image": "https://m.media-amazon.com/images/I/510kcB5Da7S._SY300_SX300_QL70_FMwebp_.jpg",
    "category": "games",
    "price": 250
  }
  ,
  {
    "id": "p315",
    "name": "MOON BALL",
    "image": "https://paperquirks.in/cdn/shop/files/moonball.jpg?v=1722777225&width=1024",
    "category": "games",
    "price": 70
  }
  ,
  {
    "id": "p316",
    "name": "RUBBER KEY CHAIN",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1FMI7E7g9RzQtxe9JIxoJhFvYWcSalMWBQ&s",
    "category": "keychains",
    "price": 40
  },
  {
    "id": "p317",
    "name": "METAL KEY CHAINS",
    "image": "https://s.alicdn.com/@sc04/kf/H73bc3ac590aa414084c4b329056ef553v.jpg_720x720q50.jpg",
    "category": "keychains",
    "price": 150
  },
  {
    "id": "p318",
    "name": "ROTATING KEY CHAINS",
    "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/key-chain/o/6/q/ronaldo-7-football-player-360-degree-rotate-premium-metal-mik-1-original-imagzgt5uugku8br.jpeg?q=90&crop=false",
    "category": "keychains",
    "price": 120
  },
  {
    "id": "p319",
    "name": "UNIQUE KEY CHAIN",
    "image": "https://5.imimg.com/data5/IOS/Default/2023/10/353464394/KP/AO/AM/69820690/product-jpeg-500x500.png",
    "category": "keychains",
    "price": 120
  },
  {
    "id": "p320",
    "name": "BIG RUBBER KEY CHAIN",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVJgbjNmoqrmHZkEw6gh6Sjbq_2ZsPGsFiQ&s",
    "category": "keychains",
    "price": 80
  },
  {
    "id": "p321",
    "name": "AVENGERS KEY CHAIN",
    "image": "https://m.media-amazon.com/images/I/61cHlVN8lKL.jpg",
    "category": "keychains",
    "price": 80
  },
  {
    "id": "p322",
    "name": "PAPER CARRY BAGS",
    "image": "https://scoffco.com/cdn/shop/files/WhatsAppImage2023-12-11at4.29.07PM_2.jpg?v=1702293280",
    "category": "carry_bags",
    "price": 30
  },
  {
    "id": "p323",
    "name": "PAPER CARRY BAGS",
    "image": "https://m.media-amazon.com/images/I/71jvQv+QPyL._AC_UL480_FMwebp_QL65_.jpg",
    "category": "carry_bags",
    "price": 30
  }
]
