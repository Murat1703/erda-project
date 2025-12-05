import cls from './Plans.module.css'
import { useState, useEffect, useMemo } from 'react'
import { plansData } from '../../../components/PlansSection/plansData';
// import { EyeBrow } from '../../../components/EyeBrow';
import { useMediaQuery } from 'react-responsive';

export const Plans = ({isPage}) =>{

    const [propertyType, setPropertyType] = useState("all");
    const [dealType, setDealType] = useState("all");
    const [minSquare, setMinSquare] = useState(96.7);
    const [maxSquare, setMaxSquare] = useState(1680.3);
    const [minFloor, setMinFloor] = useState(1);
    const [maxFloor, setMaxFloor] = useState(12);

    const [isOpenBC, setIsOpenBC] = useState(false);
    const [businessCenter, setBusinessCenter] = useState("Все бизнес-центры");
    const [totalCount, setTotalCount] = useState(4);
    const isMobile = useMediaQuery({ query: "(max-width: 960px)" });

    const showAllPlans = () =>{
        setTotalCount(filtered.length)
    }

    useEffect(() => {
    }, [propertyType, dealType, minSquare, maxSquare, businessCenter, minFloor, maxFloor]);

    

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

    // const plansData = [
    //     {
    //         "id": 103696,
    //         "project": "БЦ Luminor",
    //         "floor": "4 из 12",
    //         "height": 4.5,
    //         "dealType": "Продажа и аренда",
    //         "propertyType": "Офис",
    //         "block": 3,
    //         "square": 160.3,
    //         "plan": "/assets/img/plans/160-3.svg"
    //     }  ,
    //     {
    //         "id": 103697,
    //         "project": "Icon",
    //         "floor": "2 из 8",
    //         "height": 4.5,
    //         "dealType": "Продажа и аренда",
    //         "propertyType": "Коммерция",
    //         "block": 3,
    //         "square": 220.4,
    //         "plan": "/assets/img/plans/220-4.svg"
    //     } ,
    //         {
    //         "id": 103696,
    //         "project": "БЦ Luminor",
    //         "floor": "4 из 12",
    //         "height": 4.5,
    //         "dealType": "Продажа и аренда",
    //         "propertyType": "Офис",
    //         "block": 3,
    //         "square": 160.3,
    //         "plan": "/assets/img/plans/160-3.svg"
    //     }  ,
    //     {
    //         "id": 103697,
    //         "project": "Icon",
    //         "floor": "2 из 8",
    //         "height": 4.5,
    //         "dealType": "Продажа и аренда",
    //         "propertyType": "Коммерция",
    //         "block": 3,
    //         "square": 220.4,
    //         "plan": "/assets/img/plans/220-4.svg"
    //     }   ,
    //     {
    //         "id": 103696,
    //         "project": "БЦ Luminor",
    //         "floor": "4 из 12",
    //         "height": 4.5,
    //         "dealType": "Продажа и аренда",
    //         "propertyType": "Офис",
    //         "block": 3,
    //         "square": 160.3,
    //         "plan": "/assets/img/plans/160-3.svg"
    //     }  ,
    //     {
    //         "id": 103697,
    //         "project": "Icon",
    //         "floor": "2 из 8",
    //         "height": 4.5,
    //         "dealType": "Продажа и аренда",
    //         "propertyType": "Коммерция",
    //         "block": 3,
    //         "square": 220.4,
    //         "plan": "/assets/img/plans/220-4.svg"
    //     }     

    // ]

    const filtered = useMemo(() => {
        return plansData.filter((item) => {
        // Бизнес-центр
        if (
            businessCenter !== "Все бизнес-центры" &&
            item.businessCenter !== businessCenter.toLowerCase()
        ) {
            return false;
        }

        // Тип помещения
        if (propertyType !== "all") {
            const map = {
            commercy: "Коммерция",
            offices: "Офис",
            };

            if (item.propertyType !== map[propertyType]) {
            return false;
            }
        }

        // Реализация
        if (dealType !== "all") {
            const deal = item.dealType.toLowerCase();

            if (dealType === "sale" && !deal.includes("продажа")) {
            return false;
            }
            if (dealType === "rent" && !deal.includes("аренда")) {
            return false;
            }
        }

        // Площадь
        if (item.square < minSquare || item.square > maxSquare) {
            return false;
        }

        if (item.current_floor < minFloor || item.floor_max > maxFloor){
            return false;
        }

        return true;
        });
    }, [businessCenter, propertyType, dealType, minSquare, maxSquare, minFloor, maxFloor]);

    const [mobileFilters, setMobileFilters] = useState(false);

    const handleShowMobileFilters = () =>{
        setMobileFilters(true)
    }


    return(
        <div className={cls.plansWrapper}>
            <div className={cls.plansTitleBlock}>
                {isPage? 
                    <p>
                        <a href="/">Главная</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M4.5 9L7.5 6L4.5 3" stroke="#1D1D1B" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="bevel"/>
                        </svg>
                        <a href="/plans">Планировки</a>
                    </p>: null
                }
                <h2>Планировки</h2>
            </div>
            <div className={cls.plansListWrapper}>
                <div className={cls.filtersRow}>
                    <div 
                    className={`${cls.filterItem} ${cls.businessFilter} ${isOpenBC ? cls.opened : ""}`}
                    onClick={() => setIsOpenBC(!isOpenBC)}
                    >
                    <p>
                        Бизнес-центр
                    </p>
                    <div className={cls.filterTabs}>
                        <p>{businessCenter}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                        <path d="M10.8002 1.20007L6.0002 4.80007L1.2002 1.20007" stroke="#1D1D1B" strokeWidth="1.48" strokeLinejoin="bevel"/>
                        </svg>
                    </div>
                    <div className={`${cls.businessCenter}  ${isOpenBC ? cls.opened : ""}`}>
                        {businessCenterFilter.map((item, index) => (
                        <li 
                            key={index}
                            onClick={(e) => {
                            e.stopPropagation();
                            setBusinessCenter(item.value);
                            setIsOpenBC(false);
                            }}
                        >
                            {item.value}
                            {businessCenter === item.value && 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6668 5L7.50016 14.1667L3.3335 10" stroke="#E6E3DA" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            }
                        </li>
                        ))}
                    </div>
                    </div>
                    {isMobile && 
                        <button 
                            className={cls.mobileFilterBtn}
                            onClick={handleShowMobileFilters}
                        >
                            <p>Фильтры</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                            <path d="M10.7778 10.1528C11.6982 10.1528 12.4444 9.40662 12.4444 8.48614C12.4444 7.56567 11.6982 6.81947 10.7778 6.81947C9.85728 6.81947 9.11108 7.56567 9.11108 8.48614C9.11108 9.40662 9.85728 10.1528 10.7778 10.1528Z" stroke="#EBE9E1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.62501 3.83333C4.54548 3.83333 5.29168 3.08714 5.29168 2.16667C5.29168 1.24619 4.54548 0.5 3.62501 0.5C2.70454 0.5 1.95834 1.24619 1.95834 2.16667C1.95834 3.08714 2.70454 3.83333 3.62501 3.83333Z" stroke="#EBE9E1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.0833 8.65968H12.7917" stroke="#EBE9E1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M0.5 2.34032H1.95833" stroke="#EBE9E1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.11112 8.65968H0.5" stroke="#EBE9E1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.63889 2.34032H15.0833" stroke="#EBE9E1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                    }
                    <div className={cls.filterItem}>
                        <p>Тип помещения</p>
                        <div className={cls.filterTabs}>
                            {propertyFilters.map((item, index)=>{
                                return (
                                <button 
                                    key={index}
                                    className={item.value == propertyType?`${cls.activeTab}`:null}
                                    onClick={()=>setPropertyType(item.value)}
                                >
                                    {item.label}
                                </button>)
                            })}
                        </div>
                    </div>
                    <div className={cls.filterItem}>
                        <p>Реализация</p>
                        <div className={cls.filterTabs}>
                            {dealFilters.map((item, index)=>{
                                return (
                                <button 
                                    key={index}
                                    className={item.value == dealType?`${cls.activeTab}`:null}
                                    onClick={()=>setDealType(item.value)}
                                >
                                    {item.label}
                                </button>)
                            })}
                        </div>
                    </div>
                    <div className={cls.filterItem}>
                        <p>Этаж</p>
                        <div className={cls.filterTabs}>
                            <div className={cls.filterSliderWrapper}>
                                <p>{minFloor}</p>
                                <div></div>
                                <p>{maxFloor}</p>
                                <div className={cls.line}></div>
                                <input 
                                    type="range"  
                                    name='floor'
                                    value={minFloor}
                                    max={12}
                                    min={1}
                                    step={1}
                                    onChange={(e)=>setMinFloor(e.target.value)}
                                />
                                <input 
                                    type="range"  
                                    name='floor'
                                    value={maxFloor}
                                    max={12}
                                    min={1}
                                    step={1}
                                    onChange={(e)=>setMaxFloor(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cls.filterItem}>
                        <p>Квадратура</p>
                        <div className={cls.filterTabs}>
                            <div className={cls.filterSliderWrapper}>
                                <p>{minSquare}м²</p>
                                <div></div>
                                <p>{maxSquare}м²</p>
                                <div className={cls.line}></div>
                                <input 
                                    type="range"  
                                    name='square'
                                    value={minSquare}
                                    max={1680.3}
                                    min={96.7}
                                    step={0.1}
                                    onChange={(e)=>setMinSquare(e.target.value)}
                                />
                                <input 
                                    type="range"  
                                    name='square'
                                    value={maxSquare}
                                    max={1680.3}
                                    min={96.7}
                                    step={0.1}
                                    onChange={(e)=>setMaxSquare(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.plansList}>
                    {filtered.slice(0, totalCount).map((item, index)=>{
                        return(
                            <div className={cls.planItemCard} key={index}>
                                <div className={cls.planItemImg}>
                                    <img src={item.plan} alt='planImg'/>
                                    <a href={`/plans/${item.id}`} className={cls.detailsBtn}>Подробнее</a>
                                </div>
                                <div className={cls.planItemDescription}>
                                    <p>{item.square} м²</p>
                                    <ul className={cls.planItemDescInfo}>
                                        <li>
                                            <p>Тип</p>
                                            <p>{item.propertyType}</p>
                                        </li>
                                        <li>
                                            <p>БЦ</p>
                                            <p>{item.project}</p>
                                        </li>
                                        <li>
                                            <p>Блок</p>
                                            <p>{item.block}</p>
                                        </li>
                                        <li>
                                            <p>Этаж</p>
                                            <p>{item.current_floor} из {item.floor_max}</p>
                                        </li>
                                        <li>
                                            <p>Реализация</p>
                                            <p>{item.dealType}</p>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        )
                    })}
                    {filtered.length==0&& <p className={cls.nothingText}>Ничего не найдено</p>}
                </div>
                <button 
                    className={cls.showMorePlansBtn}
                    onClick={showAllPlans}
                    style={{
                        display: totalCount >= filtered.length ? "none": ""
                    }}
                ><p>Показать еще планировки</p> 
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path d="M0.5 8L17.1667 8M17.1667 8L13.1667 4M17.1667 8L13.1667 12" stroke="#EBE9E1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> */}
            </button>
            </div>
            {mobileFilters&&
                <div className={cls.mobileFiltersWrapper} onClick={()=>setMobileFilters(false)}>
                    <div className={cls.mobileFiltersContent} onClick={(e)=>{e.stopPropagation()}}>
                        <div className={cls.mobileFiltersTitle}>
                            <h3>Фильтры</h3>
                            <button onClick={()=>{setMobileFilters(false)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <path d="M4 4L12 12" stroke="#1D1D1B" stroke-linecap="round" strokeLinejoin="round"/>
                                <path d="M12 4L4 12" stroke="#1D1D1B" stroke-linecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className={cls.mobileFiltersList}>
                            <div className={cls.filterItem}>
                                <p>Тип помещения</p>
                                <div className={cls.filterTabs}>
                                    {propertyFilters.map((item, index)=>{
                                        return (
                                        <button 
                                            key={index}
                                            className={item.value == propertyType?`${cls.activeTab}`:null}
                                            onClick={()=>setPropertyType(item.value)}
                                        >
                                            {item.label}
                                        </button>)
                                    })}
                                </div>
                            </div>
                            <div className={cls.filterItem}>
                                <p>Реализация</p>
                                <div className={cls.filterTabs}>
                                    {dealFilters.map((item, index)=>{
                                        return (
                                        <button 
                                            key={index}
                                            className={item.value == dealType?`${cls.activeTab}`:null}
                                            onClick={()=>setDealType(item.value)}
                                        >
                                            {item.label}
                                        </button>)
                                    })}
                                </div>
                            </div>
                            <div className={cls.filterItem}>
                                <p>Этаж</p>
                                <div className={cls.filterTabs}>
                                    <div className={cls.filterSliderWrapper}>
                                        <p>{minFloor}</p>
                                        <div></div>
                                        <p>{maxFloor}</p>
                                        <div className={cls.line}></div>
                                        <input 
                                            type="range"  
                                            name='floor'
                                            value={minFloor}
                                            max={12}
                                            min={1}
                                            step={1}
                                            onChange={(e)=>setMinFloor(e.target.value)}
                                        />
                                        <input 
                                            type="range"  
                                            name='floor'
                                            value={maxFloor}
                                            max={12}
                                            min={1}
                                            step={1}
                                            onChange={(e)=>setMaxFloor(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cls.filterItem}>
                                <p>Квадратура</p>
                                <div className={cls.filterTabs}>
                                    <div className={cls.filterSliderWrapper}>
                                        <p>{minSquare}м²</p>
                                        <div></div>
                                        <p>{maxSquare}м²</p>
                                        <div className={cls.line}></div>
                                        <input 
                                            type="range"  
                                            name='square'
                                            value={minSquare}
                                            max={1680.3}
                                            min={96.7}
                                            step={0.1}
                                            onChange={(e)=>setMinSquare(e.target.value)}
                                        />
                                        <input 
                                            type="range"  
                                            name='square'
                                            value={maxSquare}
                                            max={1680.3}
                                            min={96.7}
                                            step={0.1}
                                            onChange={(e)=>setMaxSquare(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button 
                            className={cls.mobileFiltersSubmitBtn}
                            onClick={()=>{setMobileFilters(false)}}
                        >   
                            <p>Применить</p>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}