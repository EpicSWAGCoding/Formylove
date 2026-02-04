/**
 * ==========================================
 * КОНФИГУРАЦИЯ ТАЙМЛАЙНА - КОНСТРУКТОР
 * ==========================================
 * 
 * Здесь вы можете легко добавить свои фото и музыку к каждому событию.
 * 
 * КАК ДОБАВИТЬ ФОТО:
 * 1. Положите фото в папку /public/photos/
 * 2. Укажите путь в поле "image": "/photos/ваше-фото.jpg"
 * 
 * КАК ДОБАВИТЬ МУЗЫКУ:
 * 1. Положите mp3 файл в папку /public/music/
 * 2. Укажите путь в поле "music": "/music/ваша-музыка.mp3"
 * 
 * ПРИМЕР:
 * {
 *   date: "08.10",
 *   year: "2018",
 *   title: "Официально начали встречаться",
 *   highlight: true,
 *   image: "/photos/first-date.jpg",     // <-- Ваше фото
 *   music: "/music/our-song.mp3"         // <-- Ваша музыка
 * }
 * 
 * ПОДДЕРЖИВАЕМЫЕ ФОРМАТЫ:
 * - Фото: jpg, jpeg, png, webp, gif (любое разрешение - автоматически подгонится)
 * - Музыка: mp3, wav, ogg
 */

export interface TimelineEvent {
  /** Дата в формате ДД.ММ */
  date: string
  /** Год события */
  year: string
  /** Название/описание события */
  title: string
  /** Выделить событие как особенное? */
  highlight?: boolean
  /** 
   * Путь к фото (опционально)
   * Пример: "/photos/my-photo.jpg" 
   */
  image?: string
  /** 
   * Путь к музыке (опционально)
   * Пример: "/music/my-song.mp3" 
   */
  music?: string
  /**
   * Подпись к фото (опционально)
   */
  imageCaption?: string
}

/**
 * ==========================================
 * ВАШИ СОБЫТИЯ - РЕДАКТИРУЙТЕ ЗДЕСЬ!
 * ==========================================
 */
export const timelineEvents: TimelineEvent[] = [
  // ========== 2018 ==========
  { 
    date: "26.04", 
    year: "2018", 
    title: "Милая прогулка когда увидели огромную тучу и покушали в GoodFood",
    // Добавьте сюда:
    image: "/photos/goodfood.jpeg",
    // music: "/music/background.mp3",
  },
  { 
    date: "14.05", 
    year: "2018", 
    title: "Улыбка при помощи картошки фри",
    image: "/photos/fries-smile.jpg",
  },
  { 
    date: "27.05", 
    year: "2018", 
    title: "Поели горелых нагетсов и покурили кальян",
    image: "/photos/hookah.jpg",
  },
  { 
    date: "02.09", 
    year: "2018", 
    title: "Милая фотка с первого звонка 11 класса",
    image: "/photos/school.jpeg",
  },
  { 
    date: "08.10", 
    year: "2018", 
    title: "Официально начали встречаться", 
    highlight: true,
    image: "/photos/together.png",
    // music: "/music/our-song.mp3",
  },
  { 
    date: "14.10", 
    year: "2018", 
    title: "Милые прогулки, теплые посиделки, локальные истории про НЛО",
    image: "/photos/walks.jpg",
  },
  { 
    date: "20.10", 
    year: "2018", 
    title: "Взяли за ручки", 
    highlight: true,
    image: "/photos/holding-hands.jpg",
    // music: "/music/romantic.mp3",
  },
  { 
    date: "22.10", 
    year: "2018", 
    title: "Первое свидание с Синабонами",
    image: "/photos/sinabon.jpg",
  },
  { 
    date: "04.11", 
    year: "2018", 
    title: "Первый поцелуй", 
    highlight: true,
    image: "/photos/first-kiss.jpg",
    // music: "/music/first-kiss.mp3",
  },
  { 
    date: "23.11", 
    year: "2018", 
    title: "Первая совместная фотка",
    image: "/photos/first-photo.jpg",
  },
  {
    date: "31.12",
    year: "2018",
    title: "Первый Новый год вместе",
    image: "/photos/happynewyear.jpg"
  },

  // ========== 2019 ==========
  { 
    date: "08.01", 
    year: "2019", 
    title: "Поехали в Москву",
    image: "/photos/moscow.jpg",
    // music: "/music/travel.mp3",
  },
  {
    date: "20.01",
    year: "2019",
    title: "Поработали вместе в Атланте",
    image: "/photos/atlant.jpg"
  },
  { 
    date: "11.02", 
    year: "2019", 
    title: "Совместная поездка в Санкт-Петербург",
    image: "/photos/spb.jpg",
  },
  { 
    date: "14.02", 
    year: "2019", 
    title: "День святого Валентина", 
    highlight: true,
    image: "/photos/valentines.jpg",
    // music: "/music/love.mp3",
  },
  { 
    date: "07.04", 
    year: "2019", 
    title: "Опять в Москву",
    image: "/photos/moscow2.jpg",
  },
  { 
    date: "10.04", 
    year: "2019", 
    title: "Поспал в тундре",
    image: "/photos/tundra.jpg",
  },
  { 
    date: "12.05", 
    year: "2019", 
    title: "Нарвали сирени",
    image: "/photos/lilac.jpg",
  },
  { 
    date: "24.05", 
    year: "2019", 
    title: "Последний звонок, вальс",
    image: "/photos/waltz.jpg",
    // music: "/music/waltz.mp3",
  },
  { 
    date: "01.06", 
    year: "2019", 
    title: "Купюра в сто рублей с надписью обещанием",
    image: "/photos/100rub.jpg",
  },
  { 
    date: "05.06", 
    year: "2019", 
    title: "Зарубились в Уно",
    image: "/photos/uno.jpg",
  },
  {
    date: "16.06",
    year: "2019",
    title: "Ну а что, много капусты ел",
    image: "/photos/smile.jpg"
  },
  {
    date: "24.06",
    year: "2019",
    title: "Выпускной, выпускной, выпускной",
    image: "/photos/vipysk.jpg"
  },
  {
    date: "03.07",
    year: "2019",
    title: "Впервые затащила меня поплавать",
    image: "/photos/swiminng.jpg"
  },
  {
    date: "21.07",
    year: "2019",
    title: "Поехали на Оку",
    image: "/photos/oka.jpeg"
  },
  {
    date: "22.07",
    year: "2019",
    title: "Ну не мог не добавить сердечко",
    image: "/photos/hearthends.jpg"
  },
  { 
    date: "03.08", 
    year: "2019", 
    title: "Прыгнул с парашюта",
    image: "/photos/parachute.png",
  },
  {
    date: "18.06",
    year: "2019",
    title: "Тусим перед жесткой учебой",
    image: "/photos/universe.jpg"
  },
  {
    date: "22.09",
    year: "2019",
    title: "Любовь на растроянии(",
    image: "/photos/lovefar.jpg"
  },
  { 
    date: "06.10", 
    year: "2019", 
    title: "Мне сделали крутой подарок своими руками",
    image: "/photos/handmade-gift.jpg",
  },
  {
    date: "04.10",
    year: "2019",
    title: "Почему я тебя хочу съесть?)",
    image: "/photos/girleat.jpg"
  },
  { 
    date: "10.10", 
    year: "2019", 
    title: "Первая годовщина и в костюме со светоотражателями",
    image: "/photos/costume.jpg",
  },
  {
    date: "16.10",
    year: "2019",
    title: "Устали и сняли квартиру и провели вечер вместе",
    image: "/photos/sadandnosed.jpg"
  },
  {
    date: "02.11",
    year: "2019",
    title: "Тигрица, остановимся и полюбуемся",
    image: "/photos/cutegirlcute.jpg"
  },
  {
    date: "05.11",
    year: "2019",
    title: "Загрустила милая девочка",
    image: "/photos/sadgirls.jpg"
  },
  {
    date: "17.11",
    year: "2019",
    title: "Самая красивая и любимая",
    image: "/photos/cutecutegirl.jpg"
  },
  { 
    date: "01.12", 
    year: "2019", 
    title: "Едем домой с концерта Маркула",
    image: "/photos/markul.jpg",
    // music: "/music/markul.mp3",
  },
  {
    date: "09.12",
    year: "2019",
    title: "Наши 3D аватары",
    image: "/photos/3davatar.png"
  },

  // ========== 2020 ==========
  {
    date: "13.03",
    year: "2020",
    title: "VETEMENTS - это же круто",
    image: "/photos/vetements.jpg"
  },
  {
    date: "02.04",
    year: "2020",
    title: "Свидание на расстоянии, кто-то спит",
    image: "/photos/sleepgirl.jpg"
  },
  {
    date: "04.04",
    year: "2020",
    title: "Комочек счастья, ути-пути-пути",
    image: "/photos/utipyti.jpg"
  },
  {
    date: "12.04",
    year: "2020",
    title: "pov: мы сейчас, хи-хи",
    image: "/photos/reallife.jpg"
  },
  {
    date: "28.04",
    year: "2020",
    title: "Боже мой сколько же можно любоваться на эту кросотку?",
    image: "/photos/bozemoi.jpg"
  },
  {
    date: "11.06",
    year: "2020",
    title: "Бьюти процедуры вместе",
    image: "/photos/buytytogesher.jpg"
  },
  {
    date: "18.06",
    year: "2020",
    title: "Комочек счастья держит комочек счастья",
    image: "/photos/bozemoi2x.jpg"
  },
  { 
    date: "08.10", 
    year: "2020", 
    title: "Милая прогулка по Владимиру",
    image: "/photos/vladimir.jpg",
  },

  // ========== 2021 ==========

  {
    date: "21.02",
    year: "2021",
    title: "Русалка на ветвях застряла",
    image: "/photos/rusalka.jpg"
  },
  {
    date: "12.03",
    year: "2021",
    title: "Внезапный фак ю, хи-хи-хи",
    image: "/photos/fucku.jpg"
  },
  {
    date: "04.05",
    year: "2021",
    title: "Типо крутые перцы",
    image: "/photos/superperchi.jpg"
  },
  {
    date: "10.05",
    year: "2021",
    title: "Самая красивая, лучшая, прекрасная, бомбезная",
    image: "/photos/supercute.jpeg"
  },
  {
    date: "11.10",
    year: "2021",
    title: "Вкусно покушали и повеселились",
    image: "/photos/vladbeef.jpg"
  },
  {
    date: "05.12",
    year: "2021",
    title: "Самая неудачная фотка, но на ней ты все равно самая красиваая",
    image: "/photos/samaycute.jpg"
  },
  {
    date: "20.12",
    year: "2021",
    title: "Совместный шопинг, мы что-нибудь купили?",
    image: "/photos/shopping.jpg"
  },
  {
    date: "23.12",
    year: "2021",
    title: "Встань туда, я тебя щас щелкну",
    image: "/photos/photoschelk.jpg"
  },

  // ========== 2022 ==========
  {
    date: "27.01",
    year: "2022",
    title: "Что, подсматриваешь, да?",
    image: "/photos/podsmotrel.jpg"
  },
  {
    date: "04.02",
    year: "2022",
    title: "На колесе обозрения, красиво там наверху",
    image: "/photos/koleso.jpg"
  },
  {
    date: "14.02",
    year: "2022",
    title: "Мини-свидание на день влюбленных",
    image: "/photos/svidaniena.jpg"
  },
  {
    date: "02.03",
    year: "2022",
    title: "Пришли на масленицу и увидели как чучело горит",
    image: "/photos/maslenicha.jpg"
  },
  {
    date: "11.05",
    year: "2022",
    title: "Лягушка путешествиница",
    image: "/photos/lygyshka.jpg"
  },
  { 
    date: "14.06", 
    year: "2022", 
    title: "Отдых в массажном кресле",
    image: "/photos/massage.jpg",
  },
  {
    date: "30.06",
    year: "2022",
    title: "Букет на 10000000000000 доларов",
    image: "/photos/flowers.jpg"
  },
  { 
    date: "17.08", 
    year: "2022", 
    title: "Кормили уток",
    image: "/photos/ducks.png",
  },
  { 
    date: "08.10", 
    year: "2022", 
    title: "Кушали бенто тортик",
    image: "/photos/bento.jpg",
  },
  { 
    date: "12.11", 
    year: "2022", 
    title: "Купили Лилу", 
    highlight: true,
    image: "/photos/lila.jpg",
    // music: "/music/pet.mp3",
  },

  // ========== 2023 ==========
  {
    date: "21.01",
    year: "2023",
    title: "Просто супер пупер довольная",
    image: "/photos/dovolniay.jpg"
  },
  {
    date: "26.02",
    year: "2023",
    title: "Люблю тебя очень сильно",
    image: "/photos/lovevery.jpg"
  },
  {
    date: "09.03",
    year: "2023",
    title: "Ну не мог не вставить, ну самая красивая",
    image: "/photos/samayaejeraz.jpg"
  },
  {
    date: "09.03",
    year: "2023",
    title: "Поехали в Суздаль вместе с Купинами",
    image: "/photos/suzdal.jpg"
  },
  {
    date: "13.05",
    year: "2023",
    title: "Вот вам поцелуйчики, муа муа",
    image: "/photos/kisskiss.jpg"
  },
  { 
    date: "25.06", 
    year: "2023", 
    title: "Купили Сельвану", 
    highlight: true,
    image: "/photos/selvana.jpg",
  },
  {
    date: "26.06",
    year: "2023",
    title: "Суперская прогулка с Сельваной",
    image: "/photos/walkadog.jpg"
  },
  { 
    date: "05.08", 
    year: "2023", 
    title: "Нижний новгород, там и правду очень много фоток", 
    image: "/photos/pre-wedding.jpg",
    // music: "/music/wedding-prep.mp3",
  },
  { 
    date: "08.08", 
    year: "2023", 
    title: "Поженились, УРААААААААААААА", 
    highlight: true,
    image: "/photos/wedding.jpg",
    // music: "/music/wedding.mp3",
  },
  {
    date: "04.02",
    year: "2026",
    title: "Нв этом все, прости пожалуйста, что не сделал полноценный подарок, я очень хочу спать, я надеюсь что тебе это путешествие понравилось, со всей любовью пишу сейчас тебе, очень рад что я связал свою жизнь с тобой, очень благодарен тем за все трудные моменты пройденные, и очень очень очень сильно люблю тебя, С ДНЕМ РОЖДЕНИЯ МОЯ ЛЮБИМАЯ ДЕВУШКА/ЖЕНА/МАМА",
  },
]

/**
 * ==========================================
 * ГЛОБАЛЬНАЯ МУЗЫКА (опционально)
 * ==========================================
 * Если хотите одну фоновую музыку для всего сайта:
 */
export const globalBackgroundMusic: string | null = null
// Пример: export const globalBackgroundMusic = "/music/background.mp3"
