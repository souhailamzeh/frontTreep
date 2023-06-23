import { Lottie } from '../components';
import React from 'react';
import images from '../index';

export const Swiperdata = [
  {
    key: 's1',
    text: 'Swiperfirst',
    title: "Swipertitle",
    animation: <Lottie
      source={images.First_Swiper}
    />,

  },
  {
    key: 's2',
    text: 'SwiperFirstTwo',
    title: 'SwiperTitleTwo',
    animation: <Lottie
      source={images.Two_Swiper}
    />,
  },
  {
    key: 's3',
    text: 'SwiperFirstThree',
    title: 'Swipertitlethree',
    animation: <Lottie
      source={images.Three_Swiper}
    />,
    backgroundColor: 'transparent',
  },

]

export const Faqdataset = [
  {
    "id": 1,
    "paymentparegraph": "FAQ_paregraph_One",
    "smalltext": 'FAQ_paregraph_Two',
  },
  {
    "id": 2,
    "paymentparegraph": "FAQ_paregraph_Three",
    "smalltext": 'FAQ_paregraph_Four',
  },
  {
    "id": 3,
    "paymentparegraph": "FAQ_paregraph_Five",
    "smalltext": 'FAQ_paregraph_Six',
  },
  {
    "id": 4,
    "paymentparegraph": "FAQ_Paregraph_Saven",
    "smalltext": 'FAQ_Paregraph_Aeight',
  },
  {
    "id": 5,
    "paymentparegraph": "FAQ_Paregraph_Nine",
    "smalltext": 'FAQ_Paregraph_Ten',
  },
  {
    "id": 6,
    "paymentparegraph": "FAQ_Paregraph_Eleven",
    "smalltext": 'FAQ_One',
  },
  {
    "id": 7,
    "paymentparegraph": "FAQ_Two",
    "smalltext": 'FAQ_Three',
  },
  {
    "id": 8,
    "paymentparegraph": "FAQ_Four",
    "smalltext": 'FAQ_Five',
  },
]

export const categoryData = [
  {
    id: 1,
    bannerImg: images.categoryIcon_1,
    categoryName: "All"
  },
  {
    id: 1,
    bannerImg: images.categoryIcon_1,
    categoryName: "Wow"
  },
  {
    id: 1,
    bannerImg: images.categoryIcon_2,
    categoryName: "Forest"
  },
  {
    id: 1,
    bannerImg: images.categoryIcon_3,
    categoryName: "Mountain"
  },
  {
    id: 1,
    bannerImg: images.categoryIcon_4,
    categoryName: "Beach"
  },
  {
    id: 1,
    bannerImg: images.categoryIcon_5,
    categoryName: "Cabins"
  },

]

export const PopularNearbyData = [
  {
    id: 1,
    dishbannerIMG: images.Travel_Place_1,
    Price: "1100",
    DisPrice: "140",
    starRateNumber: 4.5,
    ReviewNumber: "(33)",
    placeName: "PlaceName_1",
    Location: "Location_1",
    DisTag: "DisTag_1"
  },
  {
    id: 2,
    dishbannerIMG: images.Travel_Place_2,
    Price: "1250",
    DisPrice: "90",
    starRateNumber: 4.5,
    ReviewNumber: "(63)",
    placeName: "PlaceName_2",
    Location: "Location_2",
    DisTag: "DisTag_2"

  },
  {
    id: 3,
    dishbannerIMG: images.Travel_Place_3,
    Price: "1310",
    DisPrice: "130",
    starRateNumber: 3.9,
    ReviewNumber: "(43)",
    placeName: "PlaceName_3",
    Location: "Location_3",
    DisTag: "DisTag_3"
  },
]

export const MostLikeData = [
  {
    id: 1,
    dishbannerIMG: images.Travel_Place_4,
    Price: "1630",
    DisPrice: "130",
    starRateNumber: 4.6,
    ReviewNumber: "(65)",
    placeName: "PlaceName_4",
    Location: "Location_4",
    DisTag: "DisTag_4"
  },
  {
    id: 2,
    dishbannerIMG: images.Travel_Place_13,
    Price: "1530",
    DisPrice: "100",
    starRateNumber: 4.8,
    ReviewNumber: "(43)",
    placeName: "PlaceName_13",
    Location: "Location_13",
    DisTag: "DisTag_13"

  },
  {
    id: 3,
    dishbannerIMG: images.Travel_Place_6,
    Price: "1930",
    DisPrice: "240",
    starRateNumber: 4.8,
    ReviewNumber: "(79)",
    placeName: "PlaceName_6",
    Location: "Location_6",
    DisTag: "DisTag_6"
  },
]


export const RecommendationData = [
  {
    id: 1,
    dishbannerIMG: images.Travel_Place_7,
    Price: "990",
    DisPrice: "130",
    starRateNumber: 3.8,
    ReviewNumber: "(98)",
    placeName: "PlaceName_7",
    Location: "Location_7",
    DisTag: "DisTag_7"
  },
  {
    id: 2,
    dishbannerIMG: images.Travel_Place_8,
    Price: "1360",
    DisPrice: "182",
    starRateNumber: 3.8,
    ReviewNumber: "(82)",
    placeName: "PlaceName_8",
    Location: "Location_8",
    DisTag: "DisTag_8"
  },
  {
    id: 3,
    dishbannerIMG: images.Travel_Place_9,
    Price: "1620",
    DisPrice: "320",
    starRateNumber: 3.8,
    ReviewNumber: "(33)",
    placeName: "PlaceName_9",
    Location: "Location_9",
    DisTag: "DisTag_9"
  },
  {
    id: 4,
    dishbannerIMG: images.Travel_Place_13,
    Price: "1260",
    DisPrice: "212",
    starRateNumber: 4.8,
    ReviewNumber: "(93)",
    placeName: "PlaceName_13",
    Location: "Location_13",
    DisTag: "DisTag_13"
  },
  {
    id: 5,
    dishbannerIMG: images.Travel_Place_11,
    Price: "6200",
    DisPrice: "325",
    starRateNumber: 4.6,
    ReviewNumber: "(47)",
    placeName: "PlaceName_11",
    Location: "Location_11",
    DisTag: "DisTag_11"
  },
]

export const NearbyData = [
  {
    id: 1,
    dishbannerIMG: images.Travel_Place_2,
    Price: "6330",
    DisPrice: "335",
    starRateNumber: 4.3,
    ReviewNumber: "(29)",
    placeName: "PlaceName_2",
    Location: "Location_2",
    DisTag: "DisTag_2"
  },
  {
    id: 2,
    dishbannerIMG: images.Travel_Place_9,
    Price: "6240",
    DisPrice: "240",
    starRateNumber: 4.5,
    ReviewNumber: "(65)",
    placeName: "PlaceName_9",
    Location: "Location_9",
    DisTag: "DisTag_9"
  },
  {
    id: 3,
    dishbannerIMG: images.Travel_Place_1,
    Price: "5320",
    DisPrice: "316",
    starRateNumber: 4.5,
    ReviewNumber: "(33)",
    placeName: "PlaceName_1",
    Location: "Location_1",
    DisTag: "DisTag_1"
  },
  {
    id: 4,
    dishbannerIMG: images.Travel_Place_13,
    Price: "7600",
    DisPrice: "275",
    starRateNumber: 4.3,
    ReviewNumber: "(59)",
    placeName: "PlaceName_13",
    Location: "Location_13",
    DisTag: "DisTag_13"
  },
  {
    id: 5,
    dishbannerIMG: images.popular_5,
    Price: "6530",
    DisPrice: "345",
    starRateNumber: 4.1,
    ReviewNumber: "(65)",
    placeName: "PlaceName_5",
    Location: "Location_5",
    DisTag: "DisTag_5"
  },
]

export const tripActivityData = [
  {
    id: 1,
    dishbannerIMG: images.Travel_Place_3,
  },
  {
    id: 2,
    dishbannerIMG: images.popular_1,
  },
  {
    id: 3,
    dishbannerIMG: images.popular_3,
  },
  {
    id: 4,
    dishbannerIMG: images.popular_5,
  },
]

export const exploreData = [
  {
    id: 1,
    dishbannerIMG: images.Travel_Place_1,
    Price: "1320",
    DisPrice: "242",
    starRateNumber: 4.5,
    ReviewNumber: "(65)",
    placeName: "PlaceName_1",
    Location: "Location_1",
    DisTag: "DisTag_1"
  },
  {
    id: 2,
    dishbannerIMG: images.Travel_Place_3,
    Price: "2310",
    DisPrice: "215",
    starRateNumber: 3.9,
    ReviewNumber: "(83)",
    placeName: "PlaceName_3",
    Location: "Location_3",
    DisTag: "DisTag_3"

  },
  {
    id: 3,
    dishbannerIMG: images.Travel_Place_5,
    Price: "3210",
    DisPrice: "375",
    starRateNumber: 4.3,
    ReviewNumber: "(64)",
    placeName: "PlaceName_5",
    Location: "Location_5",
    DisTag: "DisTag_5"
  },
  {
    id: 4,
    dishbannerIMG: images.Travel_Place_6,
    Price: "1230",
    DisPrice: "121",
    starRateNumber: 4.8,
    ReviewNumber: "(64)",
    placeName: "PlaceName_6",
    Location: "Location_6",
    DisTag: "DisTag_6"
  },
  {
    id: 5,
    dishbannerIMG: images.Travel_Place_7,
    Price: "1320",
    DisPrice: "139",
    starRateNumber: 3.8,
    ReviewNumber: "(53)",
    placeName: "PlaceName_7",
    Location: "Location_7",
    DisTag: "DisTag_7"
  },
  {
    id: 6,
    dishbannerIMG: images.Travel_Place_8,
    Price: "1230",
    DisPrice: "120",
    starRateNumber: 3.1,
    ReviewNumber: "(43)",
    placeName: "PlaceName_8",
    Location: "Location_8",
    DisTag: "DisTag_8"
  },
  {
    id: 7,
    dishbannerIMG: images.Travel_Place_9,
    Price: "2630",
    DisPrice: "150",
    starRateNumber: 4.8,
    ReviewNumber: "(51)",
    placeName: "PlaceName_9",
    Location: "Location_9",
    DisTag: "DisTag_9"
  },
  {
    id: 8,
    dishbannerIMG: images.Travel_Place_10,
    Price: "5560",
    DisPrice: "162",
    starRateNumber: 3.6,
    ReviewNumber: "(54)",
    placeName: "PlaceName_10",
    Location: "Location_10",
    DisTag: "DisTag_10"
  },
  {
    id: 9,
    dishbannerIMG: images.Travel_Place_11,
    Price: "5595",
    DisPrice: "262",
    starRateNumber: 3.9,
    ReviewNumber: "(64)",
    placeName: "PlaceName_11",
    Location: "Location_11",
    DisTag: "DisTag_11"
  },
  {
    id: 9,
    dishbannerIMG: images.Travel_Place_1,
    Price: "9426",
    DisPrice: "360",
    starRateNumber: 5.0,
    ReviewNumber: "(64)",
    placeName: "PlaceName_1",
    Location: "Location_1",
    DisTag: "DisTag_1"
  },
]

export const explorPlaceData = [
  {
    id: 1,
    exsplorePlaceName: "Location_5"
  },
  {
    id: 2,
    exsplorePlaceName: "exsplorePlaceName_2"
  },
  {
    id: 3,
    exsplorePlaceName: "Location_4"
  },
  {
    id: 4,
    exsplorePlaceName: "Location_8"
  },
  {
    id: 5,
    exsplorePlaceName: "PlaceName_12"
  },
  {
    id: 6,
    exsplorePlaceName: "Location_2"
  }
]

export const nearbyData = [
  {
    id: 1,
    dishbannerIMG: images.Travel_Place_2,
    Price: "2610",
    DisPrice: "421",
    starRateNumber: 4.9,
    ReviewNumber: "(65)",
    placeName: "PlaceName_2",
    Location: "Location_2",
    DisTag: "DisTag_2"
  },
  {
    id: 2,
    dishbannerIMG: images.Travel_Place_4,
    Price: "4610",
    DisPrice: "610",
    starRateNumber: 3.7,
    ReviewNumber: "(54)",
    placeName: "PlaceName_4",
    Location: "Location_4",
    DisTag: "DisTag_4"
  },
  {
    id: 3,
    dishbannerIMG: images.Travel_Place_6,
    Price: "1530",
    DisPrice: "130",
    starRateNumber: 4.6,
    ReviewNumber: "(64)",
    placeName: "PlaceName_6",
    Location: "Location_6",
    DisTag: "DisTag_6"
  },
  {
    id: 4,
    dishbannerIMG: images.Travel_Place_8,
    Price: "5520",
    DisPrice: "320",
    starRateNumber: 4.8,
    ReviewNumber: "(6)",
    placeName: "PlaceName_8",
    Location: "Location_8",
    DisTag: "DisTag_8"

  },
  {
    id: 5,
    dishbannerIMG: images.Travel_Place_10,
    Price: "4562",
    DisPrice: "560",
    starRateNumber: 4.3,
    ReviewNumber: "(65)",
    placeName: "PlaceName_10",
    Location: "Location_10",
    DisTag: "DisTag_10"
  },
  {
    id: 6,
    dishbannerIMG: images.Travel_Place_11,
    Price: "6620",
    DisPrice: "662",
    starRateNumber: 4.8,
    ReviewNumber: "(96)",
    placeName: "PlaceName_11",
    Location: "Location_11",
    DisTag: "DisTag_11"
  },
  {
    id: 7,
    dishbannerIMG: images.Travel_Place_1,
    Price: "6562",
    DisPrice: "120",
    starRateNumber: 4.9,
    ReviewNumber: "(64)",
    placeName: "PlaceName_1",
    Location: "Location_1",
    DisTag: "DisTag_1"
  },
]

export const FavouriteData = [
  {
    id: 1,
    dishbannerIMG: images.Travel_Place_1,
    Price: "5640",
    DisPrice: "416",
    starRateNumber: 4.1,
    ReviewNumber: "(93)",
    placeName: "PlaceName_1",
    Location: "Location_1",
    DisTag: "DisTag_1"
  },
  {
    id: 2,
    dishbannerIMG: images.Travel_Place_11,
    Price: "5160",
    DisPrice: "160",
    starRateNumber: 3.4,
    ReviewNumber: "(64)",
    placeName: "PlaceName_11",
    Location: "Location_11",
    DisTag: "DisTag_11"

  },
  {
    id: 3,
    dishbannerIMG: images.Travel_Place_10,
    Price: "5025",
    DisPrice: "440",
    starRateNumber: 4.8,
    ReviewNumber: "(64)",
    placeName: "PlaceName_10",
    Location: "Location_10",
    DisTag: "DisTag_10"
  },
  {
    id: 4,
    dishbannerIMG: images.Travel_Place_9,
    Price: "6441",
    DisPrice: "420",
    starRateNumber: 4.7,
    ReviewNumber: "(61)",
    placeName: "PlaceName_9",
    Location: "Location_9",
    DisTag: "DisTag_9"

  },
  {
    id: 5,
    dishbannerIMG: images.Travel_Place_8,
    Price: "2160",
    DisPrice: "230",
    starRateNumber: 4.1,
    ReviewNumber: "(64)",
    placeName: "PlaceName_8",
    Location: "Location_8",
    DisTag: "DisTag_8"
  },
  {
    id: 6,
    dishbannerIMG: images.Travel_Place_7,
    Price: "6250",
    DisPrice: "1630",
    starRateNumber: 3.7,
    ReviewNumber: "(43)",
    placeName: "PlaceName_7",
    Location: "Location_7",
    DisTag: "DisTag_7"
  },
  {
    id: 7,
    dishbannerIMG: images.Travel_Place_6,
    Price: "6320",
    DisPrice: "330",
    starRateNumber: 4.7,
    ReviewNumber: "(59)",
    placeName: "PlaceName_6",
    Location: "Location_6",
    DisTag: "DisTag_6"
  },
]

export const FilterData = [
  {
    id: 1,
    FilterTabStyle: "FilterTabStyle_1"
  },
  {
    id: 2,
    FilterTabStyle: "FilterTabStyle_2"
  },
  {
    id: 3,
    FilterTabStyle: "FilterTabStyle_3"
  },
  {
    id: 4,
    FilterTabStyle: "FilterTabStyle_4"
  },
  {
    id: 5,
    FilterTabStyle: "FilterTabStyle_5"
  },
  {
    id: 6,
    FilterTabStyle: "FilterTabStyle_6"
  }
]

export const startRateData = [
  {
    id: 1,
    startNumber: 1,
  },
  {
    id: 2,
    startNumber: 2,
  },
  {
    id: 3,
    startNumber: 3,
  },
  {
    id: 4,
    startNumber: 4,
  },
  {
    id: 5,
    startNumber: 5,
  }
]

export const packagesData = [
  {
    id: 1,
    packageInfo: "7DaysPackege",
    packageDate: "packageDate_1"
  },
  {
    id: 2,
    packageInfo: "10DaysPackege",
    packageDate: "packageDate_2"
  },
  {
    id: 3,
    packageInfo: "15DaysPackege",
    packageDate: "packageDate_3"
  },
]

export const DataofDropdown = [
  { label: "English_Label", value: 'en' },
  { label: "Arabic_Label", value: 'ara' },
  { label: "Spanish_Label", value: 'Spa' },
  { label: "French_Label", value: 'Fr' },
];