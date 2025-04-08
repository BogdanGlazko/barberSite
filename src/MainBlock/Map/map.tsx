import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import s from "./map.module.scss"
import img1 from "../../assets/mainLogoImages/noBackgr.png";
import GradientSeparatorPage from "../../AdditionalComponents/GradientEffect/GradientSeparator.tsx";
// Пример стилей для карты
const mapStyles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "-54"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": "-89"
            },
            {
                "lightness": "-55"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "-51"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
];

const mapContainerStyle = {
    width: "100%",
    height: "50vh",
};

const center = { lat: 53.65329846978811,  lng: 23.850121490947583 };

const Map: React.FC = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string, // Ваш ключ API
    });

    if (loadError) return <p>Ошибка загрузки карты</p>;
    if (!isLoaded) return <p>Загрузка карты...</p>;

    return (
        <>
            <header>Наши контакты</header>
            <div className={s.mapWrapper}>
                <div className={` ${s.headerAdress} ${s.unboundFont}`}>АДРЕС</div>

                <div className={s.container}>

                    <div className={s.contact}>
                        <div className={` ${s.headerContacts} ${s.unboundFont}`}>Г.Гродно Ул Янки Купалы, 10</div>
                        <p><strong>Телефон:</strong> <a href="tel:18446367288">1-844-636-7288</a></p>
                        <p><strong>Email:</strong> <a href="mailto:support@capellis.com">support@capellis.com</a></p>
                        <p className={s.italic}>Барбершоп КартБланш — это больше, чем просто стрижка. Мы создаем стиль, подчеркивая твою индивидуальность. Заходи, чтобы обновить образ и зарядиться уверенностью!
                        </p>
                    </div>

                    <div className={s.hours}>
                        <div className={`${s.headerContacts} ${s.unboundFont}`}>Часы работы</div>
                        <ul>
                            <li><span>Понедельник</span> <span>9 – 20</span></li>
                            <li><span>Вторник</span> <span>9 – 20</span></li>
                            <li><span>Среда</span> <span>9 – 20</span></li>
                            <li><span>Четверг</span> <span>9 – 20</span></li>
                            <li><span>Пятница</span> <span>9 – 20</span></li>
                            <li><span>Суббота</span> <span>9 – 19</span></li>
                            <li><span>Воскресенье</span> <span>10 – 18</span></li>
                        </ul>
                    </div>
                </div>




            </div>
            <div className={s.mapWidthWrapper}>
                {/*<div className={s.mapHeader}>Карта</div>*/}
                <div className={s.gMapWrapper}>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={15}
                    center={center}
                    options={{
                        styles: mapStyles, // Применение стилей карты
                    }}
                >
                    <Marker
                        position={center}
                        title="Барбершоп здесь!"
                        icon={{
                            url: img1, // Ссылка на изображение иконки
                            scaledSize: new window.google.maps.Size(90, 40), // Масштабирование иконки
                            anchor: new window.google.maps.Point(50, 40), // Точка привязки иконки (центр)
                        }}
                    />
                </GoogleMap>
                </div>
            </div>
        </>


    )
        ;
};

export default Map;
