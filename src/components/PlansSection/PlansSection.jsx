import { useEffect, useState } from 'react'
import { EyeBrow } from '../EyeBrow'
import { Title } from '../Title'
import cls from './PlansSection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "./pagination-edited.css"


export const PlansSection = () =>{


    const [propertyType, setPropertyType] = useState("all");
    const [dealType, setDealType] = useState("all");
    const [minSquare, setMinSquare] = useState(96.7);
    const [maxSquare, setMaxSquare] = useState(1680.3);
    const [isOpenBC, setIsOpenBC] = useState(false);
    const [businessCenter, setBusinessCenter] = useState("Все бизнес центры")

    useEffect(() => {
    }, [propertyType, dealType, minSquare, maxSquare, businessCenter]);

    

    const propertyFilters  = [
        {
            label: "Все", 
            value: "all" 
        },
        {
            label: "Коммерция", 
            value: "commercy" 
        },
        {
            label: "Офисы", 
            value: "offices" 
        },
    
    ]

    const dealFilters = [
        {
            label: "Все",
            value: 'all'
        },
        {
            label: "Покупка",
            value: 'sale'
        },
        {
            label: "Аренда",
            value: 'rent'
        },
    ]

    const businessCenterFilter = [
        {
            key: "Все бизнес-центры",
            value: "Все бизнес-центры"
        },
        {
            key: "Icon",
            value: "Icon"
        },
        {
            key: "Luminor",
            value: "Luminor"
        },
        {
            key: "Norex",
            value: "Norex"
        }
    ]

    const plansData = [
        {
            "id": 103696,
            "project": "БЦ Luminor",
            "floor": "4 из 12",
            "height": 4.5,
            "dealType": "Продажа и аренда",
            "propertyType": "Офис",
            "block": 3,
            "square": 160.3,
            "plan": "/assets/img/plans/160-3.svg"
        }  ,
        {
            "id": 103697,
            "project": "Icon",
            "floor": "2 из 8",
            "height": 4.5,
            "dealType": "Продажа и аренда",
            "propertyType": "Коммерция",
            "block": 3,
            "square": 220.4,
            "plan": "/assets/img/plans/220-4.svg"
        } ,
            {
            "id": 103696,
            "project": "БЦ Luminor",
            "floor": "4 из 12",
            "height": 4.5,
            "dealType": "Продажа и аренда",
            "propertyType": "Офис",
            "block": 3,
            "square": 160.3,
            "plan": "/assets/img/plans/160-3.svg"
        }  ,
        {
            "id": 103697,
            "project": "Icon",
            "floor": "2 из 8",
            "height": 4.5,
            "dealType": "Продажа и аренда",
            "propertyType": "Коммерция",
            "block": 3,
            "square": 220.4,
            "plan": "/assets/img/plans/220-4.svg"
        }   ,
        {
            "id": 103696,
            "project": "БЦ Luminor",
            "floor": "4 из 12",
            "height": 4.5,
            "dealType": "Продажа и аренда",
            "propertyType": "Офис",
            "block": 3,
            "square": 160.3,
            "plan": "/assets/img/plans/160-3.svg"
        }  ,
        {
            "id": 103697,
            "project": "Icon",
            "floor": "2 из 8",
            "height": 4.5,
            "dealType": "Продажа и аренда",
            "propertyType": "Коммерция",
            "block": 3,
            "square": 220.4,
            "plan": "/assets/img/plans/220-4.svg"
        }     

    ]


    return(
        <section className={cls.plansWrapper}>
            <div className={cls.plansInner}>
                <div className={cls.plansTitleBlock}>
                    <EyeBrow>
                        §4. Планировки
                    </EyeBrow>
                    <Title>
                        пространства<br/>для любого масштаба
                    </Title>
                </div>
                <div className={cls.plansContent}>
                    <div className={cls.plansSectionFilters}>
                        <div 
                            className={`${cls.filter} ${cls.businessFilter} ${isOpenBC? cls.opened : ""}`}
                            onClick={()=>setIsOpenBC(!isOpenBC)}
                        >
                            <EyeBrow>
                                Бизнес-центр
                            </EyeBrow>
                            <button className={cls.bcSelect}
                            >
                                <p>{businessCenter}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                    <path d="M10.8002 1.20007L6.0002 4.80007L1.2002 1.20007" stroke="#1D1D1B" strokeWidth="1.48" strokeLinejoin="bevel"/>
                                </svg>
                            </button>
                            <div className={`${cls.businessCenter}  ${isOpenBC? cls.opened : ""}`}>
                                {businessCenterFilter.map((item, index)=>{
                                    return(
                                        <li 
                                            key={index}
                                            onClick={()=>setBusinessCenter(item.value)}
                                        >
                                            {item.value}
                                            {businessCenter == item.value && 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M16.6668 5L7.50016 14.1667L3.3335 10" stroke="#E6E3DA" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            }
                                        </li>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={cls.filter}>
                            <EyeBrow>
                                Тип помещения
                            </EyeBrow>
                            <div className={cls.filterTabs}>
                                {propertyFilters.map((filter, index)=>{
                                    return(
                                        <button 
                                            className={`${cls.filterTab} ${propertyType === filter.value ? cls.active:   ""}`} 
                                            key={index}
                                            onClick={()=>setPropertyType(filter.value)}
                                        >
                                            <p>{filter.label}</p>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={cls.filter}>
                            <EyeBrow>
                                Реализация
                            </EyeBrow>
                            <div className={cls.filterTabs}>
                                {
                                    dealFilters.map((deal, index)=>{
                                        return(
                                            <button
                                                key={index}
                                                className={`${cls.filterTab} ${dealType == deal.value? cls.active : ""} `}
                                                onClick={()=>setDealType(deal.value)}
                                            >
                                                <p>{deal.label}</p>
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={cls.filter}>
                            <EyeBrow>
                                Квадратура
                            </EyeBrow>
                            <div>
                                <p>{minSquare} м²</p>
                                <span></span>
                                <p>{maxSquare} м²</p>
                                <input 
                                    type="range" 
                                    name="min" 
                                    id=""  
                                    min={96.7} 
                                    max={1680.3}
                                    step={0.1}
                                    value={minSquare}
                                    onChange={(e)=>setMinSquare(e.target.value)}
                                />
                                <input 
                                    type="range" 
                                    name="max" 
                                    id=""  
                                    min={96.7} 
                                    max={1680.3}
                                    step={0.1}
                                    value={maxSquare}
                                    onChange={(e)=>setMaxSquare(e.target.value)}
                                />
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className={cls.plansList}>
                        <Swiper
                            modules={[Pagination, Navigation]}
                            slidesPerView={4.3}
                            spaceBetween={32}
                            pagination={true}
                            navigation={{
                                prevEl: '.prev',
                                nextEl: '.next',
                            }}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 24
                                },
                                960: {
                                    slidesPerView: 4.3, 
                                    spaceBetween: 32   
                                }
                            }}
                        >
                            {plansData.map((plan,index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <div className={cls.planItemCard}>
                                            <div className={cls.planItemImg}>
                                                <img src={plan.plan} alt="planImg"/>
                                            </div>
                                            <div className={cls.planItemDescription}>
                                                <div className={cls.squareWrapper}>
                                                    <p>{plan.square} м²</p>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <span>Тип</span>
                                                        <span>{plan.propertyType}</span>
                                                    </li>
                                                    <li>
                                                        <span>БЦ</span>
                                                        <span>{plan.project}</span>
                                                    </li>
                                                    <li>
                                                        <span>Блок</span>
                                                        <span>{plan.block}</span>
                                                    </li>
                                                    <li>
                                                        <span>Этаж</span>
                                                        <span>{plan.floor}</span>
                                                    </li>
                                                    <li>
                                                        <span>Реализация</span>
                                                        <span>{plan.dealType}</span>
                                                    </li>

                                                </ul>
                                            </div>
                                            <a href="/" className={cls.planLink}>
                                                Подробнее
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div className={cls.plansSliderControl}>
                            <button className="prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <g opacity="0.5">
                                        <path d="M17.1667 8L0.500082 8M0.500082 8L4.50008 4M0.500082 8L4.50008 12" stroke="#EBE9E1" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                </svg>
                            </button>
                            <button className="next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path d="M0.5 8L17.1667 8M17.1667 8L13.1667 4M17.1667 8L13.1667 12" stroke="#EBE9E1" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>

                        </div>
                    </div>
                    <a href='/plans' className={cls.plansShowMoreBtn}>
                        <p>Смотреть все пространства</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
                            <path d="M0.5 4.5L17.1667 4.5M17.1667 4.5L13.1667 0.499999M17.1667 4.5L13.1667 8.5" stroke="#EBE9E1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}