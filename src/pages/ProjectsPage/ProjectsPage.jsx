import cls from './ProjectsPage.module.css'
import { Link, useParams } from 'react-router-dom'
import { projects } from './projects';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useRef, useState } from 'react';
import { CustomMarker } from './CustomMarker';
import { Plans } from '../PlansPage/content';
import { ConsultationSection } from '../../components/СoncultationSection';
import { AdvantagesSection } from './content';
import {SupportSection} from '../../components/SupportSection'

export const ProjectsPage = () =>{

    const id = useParams();
    // console.log('id  = ',id)
    const project = projects.find(item => item.id === id.projectID);


const containerStyle = {
    width: '100%',
    height: '100%'
  };
let center={};
project.id==="luminor"?   center = {
    lat: 43.229590, 
    lng: 76.931260,
  }: 
project.id==="icon"? center = {
    lat: 43.248252, 
    lng: 76.956433,
  }: 
  center = {
    lat: 43.239576,  
    lng: 76.9585483,
  }

let markerPosition = {};

 project.id == "luminor" ?  markerPosition = {
    lat: 43.230993,  
    lng: 76.934475,
  }: project.id == "icon" ? markerPosition = {
    lat: 43.2525696, 
    lng: 76.9614163,
  }: project.id == "norex" ? markerPosition = {
    lat: 43.239576,  
    lng: 76.9585483,
  }: null;



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

    return(
        <>
            <section className={cls.projectsPageWrapper}>
                <div className={cls.projectsPageContent}>
                    <div className={cls.top}>
                        <div className={cls.title}>
                            <div className={cls.projectTitle}>
                                <div>
                                    <p>{project.id}</p>
                                    <p>{`${project.id} /  发光体  /  لومينور  /   ल्यूमिनेर `}</p>
                                </div>
                                <div>
                                    <p>{`/${project.index}`}</p>
                                    <p>Бизнес центр</p>
                                </div>
                            </div>
                            <Link to={`/`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="97" height="9" viewBox="0 0 97 9" fill="none">
                                    <path d="M96.5 4.5L0.499997 4.5M0.499997 4.5L4.47241 8.5M0.499997 4.5L4.47241 0.499996" stroke="#1D1D1B" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                            <div className={cls.projectBottom}>
                                <p>
                                    {project.address}
                                </p>
                                <p>«Искусство <br/>быть особенным»</p>
                                <p>{`Срок сдачи `}<br/>{project.isReady}</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.projectImgWrapper}>
                        <img src={project.img} alt='project-img'/> 
                    </div>
                    <div className={cls.projectDescription}>
                        <div className={cls.aboutProjectDescription}>
                            <p>О проекте</p>
                            <p>{project.about}</p>
                        </div>
                        <div className={cls.descriptionContent}>
                            <div>
                                <div className={cls.descriptionItem}>
                                    <p>{project.commercy}</p>
                                    <p>коммерческие помещения для флагманской <br/>коммерции и ритейла.</p>
                                </div>
                                <div className={cls.descriptionItem}>
                                    <p>{project.offices}</p>
                                    <p>офисные пространства с гибкой системой планировок<br/>с возможностью объединения этажей.</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className={cls.descriptionItem}>
                                        <p>{project.squareRange}</p>
                                        <p>квадратуры планировок</p>
                                    </div>
                                    <div className={cls.descriptionItem}>
                                        <p>{project.height}</p>
                                        <p>Высота потолков</p>
                                    </div>
                                    <div className={cls.descriptionItem}>
                                        <p>{project.isReady}</p>
                                        <p>сдача проекта в эксплуатацию</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cls.projectLocation}>
                <div className={cls.projectLocationContent}>
                    <div className={cls.projectLocationContentTitle}>
                        <h2>Локация</h2>
                        <div>
                            <p>БЦ расположен в престижнейшей локации Бостандыкского района в деловом сердце города:</p><span>{project.address}</span>
                        </div>
                    </div>
                    <div className={cls.mapWrapper}>
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
      <a className={cls.linkLocation} href={project.id=="icon"?"https://2gis.kz/almaty/directions/points/%7C77.065355%2C43.329819%3B9430047375054553?m=76.954132%2C43.218941%2F10.77" : project.id=="luminor"? "https://2gis.kz/almaty/directions/points/%7C76.934341%2C43.231397%3B9430150454183347?m=76.934317%2C43.231199%2F15.8" : project.id=="norex"? "https://2gis.kz/almaty/directions/points/%7C76.961096%2C43.239735%3B9430150454184055?m=76.96213%2C43.241139%2F17.31" : null} target='__blank'>
        <p >Построить маршрут в 2GIS</p>
      </a>
      <CustomMarker position={markerPosition} id={project.id}/>

        {/* <Marker 
            position={markerPosition} 
            icon = {{
                url: '/images/address_icon.webp',
                scaledSize: new google.maps.Size(
                    90,
                    132),
                size: new google.maps.Size(
                    90,
                    132),
                anchor: new google.maps.Point(
                    90,
                    132)
    
            }}
        /> */}
      </GoogleMap>
                    </div>
                </div>

            </section>
            <Plans />
            <ConsultationSection />
            <AdvantagesSection />
            <SupportSection isProjectPage={true}/>
        </>

    )
}