import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import cls from './ContactsPage.module.css'
import { useRef, useState } from 'react';

export const ContactsPage = () =>{

const [infoCity, setinfoCity] = useState(
        {
            label: "Алматы",
            value: "Алматы",
            country: "Республика Казахстан",
            address: "ул. Радлова 48/49",
            phone: "+7 700 516 16 16",
            email: "info@erdaholding.com",
            instagram: "erdaholding"
        }
);

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: 43.2405897,  
    lng: 76.9674184,
  };

  const markerPosition = {
    lat: 43.2405897,  
    lng: 76.9674184,
  };


const customMapStyles = [
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
        "elementType": "all",
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
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "0"
            },
            {
                "color": "#333331"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "color": "#3b3b32"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
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
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#52524e"
            },
            {
                "lightness": "28"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#333331"
            },
            {
                "lightness": "-1"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "color": "#52524e"
            },
            {
                "lightness": "1"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "1"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#52524e"
            },
            {
                "lightness": "1"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#52524e"
            },
            {
                "lightness": "-23"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
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
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#626e7d"
            },
            {
                "lightness": "1"
            }
        ]
    }
]


  const zoomBtnStyle = {
    width: '52px',
    height: '52px',
    fontSize: '20px',
    borderRadius: '8px',
    border: 'none',
    background: '#4C4D52',
    color: 'white',
    cursor: 'pointer',
  };
  
const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
});

    const mapRef = useRef(null);
    const [zoom, setZoom] = useState(15);
  
  
    const handleZoomIn = () => {
        if (mapRef.current) {
          const newZoom = zoom + 1;
          mapRef.current.setZoom(newZoom);
          setZoom(newZoom);
        }
      };
    
    const handleZoomOut = () => {
        if (mapRef.current) {
          const newZoom = zoom - 1;
          mapRef.current.setZoom(newZoom);
          setZoom(newZoom);
        }
    };
    
      const onLoad = (map) => {
        mapRef.current = map;
      };
    
    if (!isLoaded) return <div>Загрузка карты...</div>;
    
    
    const citiesList = [
        {
            label: "Алматы",
            value: "Алматы",
            country: "Республика Казахстан",
            address: "ул. Радлова 48/49",
            phone: "+7 700 516 16 16",
            email: "info@erdaholding.com",
            instagram: "erdaholding"
        },
        {
            label: "Стамбул",
            value: "Стамбул",
            country: "Турецкая Республика",
            address: "ул. Кабанбай Батыра, стр. 5",
            phone: "+7 727 320 51 36",
            email: "info@erdaholding.com",
            instagram: "erdaholding"
        },
        {
            label: "Абу-Даби",
            value: "Абу-Даби",
            country: "ОАЭ",
            address: "ул. Кабанбай Батыра, стр. 5",
            phone: "+7 727 320 51 36",
            email: "info@erdaholding.com",
            instagram: "erdaholding"
        },
        {
            label: "Лондон",
            value: "Лондон",
            country: "Великобритания",
            address: "ул. Кабанбай Батыра, стр. 5",
            phone: "+7 727 320 51 36",
            email: "info@erdaholding.com",
            instagram: "erdaholding"
        }
    ]

    return(
        <section className={cls.contactsPageWrapper}>
            <div className={cls.mapContactsPage}>
  
    
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    options={{ styles: customMapStyles }}
                    zoom={zoom}
                    onLoad={onLoad}
                >
                <div className="zoom-control-wrapper" style={{
                    position: 'absolute',
                    bottom: '50%',
                    marginTop: -57,
                    right: 48,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    zIndex: 10
                }}>
                    <button onClick={handleZoomIn} className="mapZoomBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M13.9994 5.83447V22.1678M5.83276 14.0011H22.1661" stroke="#EBE9E1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button onClick={handleZoomOut} className="mapZoomBtn" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M5.83301 14.0003H22.1663" stroke="#EBE9E1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                    <Marker 
                        position={markerPosition} 
                        icon = {{
                            url: '/assets/img/sales.svg',
                            scaledSize: new google.maps.Size(
                                203,
                                38),
                            size: new google.maps.Size(
                                203,
                                38),
                            anchor: new google.maps.Point(
                                203,
                                38)
                
                        }}
                    />
                </GoogleMap>
                <div className={cls.infoContacts}>
                    <div className={cls.citiesTabs}>
                        <div>
                            {citiesList.map((city, index)=>{
                                return(
                                    <button 
                                        key={index}
                                        onClick={()=>setinfoCity(city)}
                                        style={{
                                            background: city.value == infoCity.value ? "#1D1D1B": ""
                                        }}
                                    > 
                                        <p
                                            style={{
                                                opacity: city.value == infoCity.value ? "1": ".5"
                                            }}
                                        >{city.value}</p>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className={cls.activeLocation}>
                        <p>{infoCity.value}</p>
                        <p>{infoCity.country}</p>
                    </div>
                    <ul className={cls.details}>
                        <li>
                            <p>Адрес</p>
                            <span></span>
                            <p>{infoCity.address}</p>
                        </li>
                        <li>
                            <p>Телефон</p>
                            <span></span>
                            <a href={`tel:${infoCity.phone}`} target='__blank'>{infoCity.phone}</a>
                        </li>
                        <li>
                            <p>Email</p>
                            <span></span>
                            <a href={`mailto:${infoCity.email}`} target='__blank'>{infoCity.email}</a>
                        </li>
                        <li>
                            <p>Instagram</p>
                            <span></span>
                            <a href={`https://instagram.com/${infoCity.instagram}`} target='__blank' className={cls.instaLink}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <g clipPath="url(#clip0_191_12006)">
                                    <path d="M13.453 7.00002C13.4517 7.5755 13.4452 8.151 13.4373 8.72645C13.4278 9.42073 13.417 10.1153 13.2429 10.7977C13.0603 11.5133 12.7002 12.1304 12.14 12.5873C11.5496 13.0688 10.8359 13.3219 10.0657 13.3687C9.04416 13.4308 8.02217 13.4554 7.0002 13.453C5.9782 13.4554 4.9562 13.4308 3.93467 13.3687C3.16445 13.3219 2.45084 13.0688 1.86043 12.5873C1.30016 12.1304 0.940046 11.5133 0.757445 10.7977C0.583321 10.1153 0.572602 9.42073 0.563114 8.72645C0.555239 8.151 0.548703 7.5755 0.547363 7.00002C0.548703 6.42455 0.555239 5.84905 0.563114 5.2736C0.572602 4.57931 0.583321 3.88473 0.757445 3.20234C0.940046 2.48676 1.30016 1.86961 1.86043 1.41273C2.45084 0.931259 3.16445 0.678193 3.93467 0.631353C4.9562 0.569228 5.9782 0.544673 7.0002 0.54708C8.02217 0.544673 9.04416 0.569228 10.0657 0.631353C10.8359 0.678193 11.5496 0.931259 12.14 1.41273C12.7002 1.86961 13.0603 2.48676 13.2429 3.20234C13.417 3.88473 13.4278 4.57931 13.4373 5.2736C13.4452 5.84905 13.4517 6.42455 13.453 7.00002Z" stroke="#E6E3DA" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9.84373 7.00001C9.84373 8.58567 8.55831 9.87109 6.97265 9.87109C5.38699 9.87109 4.10156 8.58567 4.10156 7.00001C4.10156 5.41435 5.38699 4.12892 6.97265 4.12892C8.55831 4.12892 9.84373 5.41435 9.84373 7.00001Z" stroke="#E6E3DA" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11.5937 3.3086C11.5937 3.76163 11.2265 4.12891 10.7734 4.12891C10.3204 4.12891 9.95312 3.76163 9.95312 3.3086C9.95312 2.85557 10.3204 2.48829 10.7734 2.48829C11.2265 2.48829 11.5937 2.85557 11.5937 3.3086Z" fill="#E6E3DA"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_191_12006">
                                    <rect width="14" height="14" fill="white"/>
                                    </clipPath>
                                </defs>
                                </svg>                                {infoCity.instagram}
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}