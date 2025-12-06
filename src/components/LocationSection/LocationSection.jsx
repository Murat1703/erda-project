import {  useEffect, useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import cls from './LocationSection.module.css'
import './Map.css'
import { projects } from '../../pages/ProjectsPage/projects';
import { CustomMarker } from '../../pages/ProjectsPage/CustomMarker';
import { useMediaQuery } from 'react-responsive';




export const LocationSection = () =>{

    const containerStyle = {
        width: '100%',
        height: '100%'
    };
  
    let center = {
        lat: 43.241499, 
        lng: 76.934457,
    };
    const isMobile = useMediaQuery({ query: "(max-width: 960px)" });    
    {isMobile ? center = {
        lat: 43.241699, 
        lng: 76.946957,
    }: center = {
        lat: 43.241499, 
        lng: 76.934457,
    }; }

    // const markerPosition = {
    //     lat: 43.188536,  
    //     lng: 76.916803,
    // };

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
    const [zoom, setZoom] = useState(14);
    {isMobile?()=> setZoom(13): ()=>setZoom(14)}
  
  
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


    const iconPosition = {
        lat: 43.2525696, 
        lng: 76.9614163,
    }
    const norexPosition ={
        lat: 43.239576,  
        lng: 76.9585483,
    }

    const luminorPosition = {
        lat: 43.230993,  
        lng: 76.934475,
    }

    const [activeProject, setActiveProject] = useState("icon")

    const handleSetActiveProject = (item) =>{
        setActiveProject(item)
    }
    useEffect(()=>{
        console.log(activeProject)
    }, [activeProject])
        
    if (!isLoaded) return <div>Загрузка карты...</div>;

    const project = projects.find(item => item.id === activeProject);
    return(
        <section className={cls.locationWrapper}>
            <div className={cls.map}>
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
                    <CustomMarker position={iconPosition} id="icon" isActive={project.id}/>
                    <CustomMarker position={norexPosition} id="norex" isActive={project.id}/>
                    <CustomMarker position={luminorPosition} id="luminor" isActive={project.id}/>

                    {/* <CustomMarker position={markerPosition} id="luminor"/>
                    <CustomMarker position={markerPosition} id="norex"/> */}
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
                    <div className={cls.projectInformation}>
                        <div className={cls.projectInformationTop}>
                            <div className={cls.projectTabs}>
                                {projects.map((item, index)=>{
                                    return(
                                        <button key={index}
                                            onClick={()=>{handleSetActiveProject(item.id); }}
                                            style={{
                                                background: item.id==activeProject? "#222121ff": null,
                                                opacity: item.id==activeProject? "1": ".5"
                                            }}
                                        >
                                            <p>                             {item.id.toLocaleUpperCase()}
                                            </p>
                                        </button>
                                    )
                                })}
                            </div>
                            <img src={project.img} alt="projectImg"/>
                        </div>
                        <div className={cls.prjectInfoTitleBlock}>
                            <p>
                                {project.id.toUpperCase()}
                            </p>
                            <p>
                                {project.address}
                            </p>
                        </div>
                        <div className={cls.projectsCharactersistics}>
                            <ul>
                                <li>
                                    <p>Площадь планировок</p>
                                    <p>{project.squareRange}</p>
                                </li>
                                <li>
                                    <p>Тип покупки</p>
                                    <p>Только продажа</p>
                                </li>
                                <li>
                                    <p>Этажность</p>
                                    <p>{project.floorCount}</p>
                                </li>
                                <li>
                                    <p>Сдача проекта</p>
                                    <p>{project.isReady}</p>
                                </li>


                            </ul>
                            <div className={cls.projectItemsLinks}>
                                <a href={`/projects/${project.id}`}><p>О бизнес-центре</p></a>
                                <a href={`/plans`}>
                                    <p>Планировки</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M3.5 10.5L10.5 3.5M10.5 3.5V8.16667M10.5 3.5H5.83333" stroke="#D8D3BF" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

        </section>
    )
}