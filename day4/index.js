import React from 'react';
import ReactDOM from 'react-dom/client';


/**
 * header
 * --logo
 * -- nav items -home, about, contact
 * body 
 * -- search bar
 * -- resturant container=> card(name, image, address)
 * footer
 * --copy right
 * --links
 * 
 * 
 */
const Header = ()=>{
    return (
        <div className = "header">
            <div className = "logoContainer">
                <img className='logo' src='https://as1.ftcdn.net/v2/jpg/02/41/30/72/1000_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg'></img>
            </div>
            <div className = "navItems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}



const data = {"restaurants": [
                  {
                    "info": {
                      "id": "544886",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/0e68aaf8-220c-431b-99a5-f8b5fec75f38_544886.JPG",
                      "locality": "Magnum Mall",
                      "areaName": "Payyanur",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.2,
                      "parentId": "721",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1.4K+",
                      "sla": {
                        "deliveryTime": 44,
                        "lastMileTravel": 10.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "10.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-31 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹200 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4bfb860d-543b-4e02-ae96-a74140ea0ab5"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kasaragod/pizza-hut-magnum-mall-payyanur-rest544886",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "493480",
                      "name": "Dasa Dine Premium Veg Restaurant",
                      "cloudinaryImageId": "w3z1nb2jaonhgfmaywjd",
                      "locality": "Isha Tower",
                      "areaName": "Main Road",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Indian",
                        "South Indian",
                        "Chinese",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "296099",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "828",
                      "sla": {
                        "deliveryTime": 45,
                        "lastMileTravel": 10.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "10.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-31 21:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4bfb860d-543b-4e02-ae96-a74140ea0ab5"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kasaragod/dasa-dine-premium-veg-restaurant-isha-tower-main-road-rest493480",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "585206",
                      "name": "K K Residency",
                      "cloudinaryImageId": "grcnf0cmld4q9kfbvccj",
                      "locality": "Payyanur Road",
                      "areaName": "Old Bustand",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Seafood",
                        "Indian",
                        "Salads"
                      ],
                      "avgRating": 4.3,
                      "parentId": "350308",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "843",
                      "sla": {
                        "deliveryTime": 63,
                        "lastMileTravel": 12.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "60-65 mins",
                        "lastMileTravelString": "12.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-31 22:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4bfb860d-543b-4e02-ae96-a74140ea0ab5"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kasaragod/k-k-residency-payyanur-road-old-bustand-rest585206",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "532919",
                      "name": "Palooda",
                      "cloudinaryImageId": "ujquykjbb5lgglaajjec",
                      "areaName": "Payyanur",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "320709",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "174",
                      "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 10.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "10.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-31 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4bfb860d-543b-4e02-ae96-a74140ea0ab5"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kasaragod/palooda-payyanur-rest532919",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "532876",
                      "name": "Burger Dude",
                      "cloudinaryImageId": "d6092dca559a0dbb4cf39a88df0f6c0e",
                      "areaName": "Perumba",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Burgers",
                        "Snacks",
                        "Beverages",
                        "American"
                      ],
                      "avgRating": 4.6,
                      "parentId": "320698",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "621",
                      "sla": {
                        "deliveryTime": 45,
                        "lastMileTravel": 10,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "10.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-31 22:55:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4bfb860d-543b-4e02-ae96-a74140ea0ab5"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kasaragod/burger-dude-perumba-rest532876",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "502699",
                      "name": "Ruwai Fried Chicken",
                      "cloudinaryImageId": "a1x5hxm8r43nlsiybqru",
                      "locality": "Payyanur Road",
                      "areaName": "Perumba",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Fast Food",
                        "Burgers",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "301180",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "487",
                      "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 10.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "10.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-31 22:30:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹300 OFF",
                        "subHeader": "ABOVE ₹1999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4bfb860d-543b-4e02-ae96-a74140ea0ab5"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kasaragod/ruwai-fried-chicken-payyanur-road-perumba-rest502699",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "501294",
                      "name": "Helu Cool & Bake",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/24/65a1476b-63b8-425f-b7a4-da487d3a881d_501294.jpg",
                      "locality": "Payyanur Road",
                      "areaName": "Old Busstand",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Beverages",
                        "Fast Food",
                        "Burgers",
                        "sandwich"
                      ],
                      "avgRating": 4.3,
                      "parentId": "300429",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "428",
                      "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 11.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "11.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-31 20:45:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4bfb860d-543b-4e02-ae96-a74140ea0ab5"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kasaragod/helu-cool-and-bake-payyanur-road-old-busstand-rest501294",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "614725",
                      "name": "Casa Cucina",
                      "cloudinaryImageId": "kpva3j0kpm3vazumw8ox",
                      "locality": "Payyanur Road",
                      "areaName": "Payyanur",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Indian",
                        "Biryani",
                        "Snacks"
                      ],
                      "avgRating": 4.2,
                      "parentId": "366632",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "931",
                      "sla": {
                        "deliveryTime": 51,
                        "lastMileTravel": 11.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "11.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-31 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4bfb860d-543b-4e02-ae96-a74140ea0ab5"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kasaragod/casa-cucina-road-payyanur-rest614725",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "780804",
                      "name": "Unicorn Bakes & Treats",
                      "cloudinaryImageId": "76d7292c5985bae936d8249a660ab36b",
                      "locality": "Kannur",
                      "areaName": "Payyanur",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "parentId": "558123",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "171",
                      "sla": {
                        "deliveryTime": 38,
                        "lastMileTravel": 11.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "11.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-31 21:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4bfb860d-543b-4e02-ae96-a74140ea0ab5"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kasaragod/unicorn-bakes-and-treats-kannur-payyanur-rest780804",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "652942",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/fddcbe00-44a6-4398-b550-bb710dccd22d_652942.JPG",
                      "locality": "ESTPI Arcade",
                      "areaName": "Payyannur",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.4,
                      "parentId": "547",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "2.4K+",
                      "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 10.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "10.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-31 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4bfb860d-543b-4e02-ae96-a74140ea0ab5"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kasaragod/kfc-estpi-arcade-payyannur-rest652942",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "826645",
                      "name": "Pastas By Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/09e6e7e2-9e09-4d04-a0c2-2f13e32734b7_826645.JPG",
                      "locality": "Magnum Mall",
                      "areaName": "Payyanur",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pastas"
                      ],
                      "avgRating": 3.6,
                      "parentId": "306806",
                      "avgRatingString": "3.6",
                      "totalRatingsString": "101",
                      "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 10.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "10.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-31 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4bfb860d-543b-4e02-ae96-a74140ea0ab5"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kasaragod/pastas-by-pizza-hut-magnum-mall-payyanur-rest826645",
                      "type": "WEBLINK"
                    }
                  }
                ]}




               
    

const ResturantCard = ({name, cloudinaryImageId,cuisines, locality,avgRating} ) => {
    return (
        <>
        {console.log("list",data.restaurants[0].info.name)}
        <div className='resturantCard'>
            <img className='cardImage' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{name} </h3>
            <p>{locality} </p>
            <p>{cuisines.join(", ")}</p>
            <p> Rating: 💛{avgRating} </p>
        </div>
        </>
        
    )
}

const Body = ()  =>{
    return (
        <div className='body'>
            <div className='searchBar'>
                <input type='text' placeholder='Search...' />
            </div>

        <div className='resturantContainer'>
            <div className='resturantList'>
                {data.restaurants.map((restaurant) => {
                    console.log("restaurant", restaurant.info)
                    return <ResturantCard {...restaurant.info} key={restaurant.info.id} />
                })}
                </div>
            
        </div>
        </div>

    )
}

const Footer = ()=>{
    return(
        <div className='footer'>
            <h3>Footer</h3>
            <p>current time: {new Date().toLocaleTimeString()}</p>
            <p>Contact us: <a href="mailto:support@foodapp.com">support@foodapp.com</a></p>
            <p>© 2025 Food Delivery App</p>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
const AppLayout = () => {
    return(
        <div className = "app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}


root.render(<AppLayout />);