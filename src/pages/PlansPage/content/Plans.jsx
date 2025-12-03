import cls from './Plans.module.css'
import { useState, useEffect } from 'react'


export const Plans = ({isPage}) =>{

    const [propertyType, setPropertyType] = useState("all");
    const [dealType, setDealType] = useState("all");
    const [minSquare, setMinSquare] = useState(96.7);
    const [maxSquare, setMaxSquare] = useState(1680.3);
    const [isOpenBC, setIsOpenBC] = useState(false);
    const [businessCenter, setBusinessCenter] = useState("Все бизнес центры");
    const [totalCount, setTotalCount] = useState(8);

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
        <div className={cls.plansWrapper}>
            <div className={cls.plansTitleBlock}>
                {isPage? 
                    <p></p>: null
                }
                <h2>Планировки</h2>
            </div>
            <div className={cls.plansListWrapper}>
                <div className={cls.filtersRow}>
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
                </div>
                <div className={cls.plansList}></div>
                <button className={cls.showMorePlansBtn}><p>Показать еще</p> </button>
            </div>
        </div>
    )
}