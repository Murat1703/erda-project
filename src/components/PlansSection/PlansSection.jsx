import { useEffect, useState } from 'react'
import { EyeBrow } from '../EyeBrow'
import { Title } from '../Title'
import cls from './PlansSection.module.css'

export const PlansSection = () =>{


    const [propertyType, setPropertyType] = useState("all");
    const [dealType, setDealType] = useState("");

    useEffect(() => {
    }, [propertyType, dealType]);

    

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
                        <div className={cls.filter}>
                            <EyeBrow>
                                Бизнес-центр
                            </EyeBrow>
                            <button className={cls.bcSelect}
                            >
                                <p>Все бизнес-центры</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                    <path d="M10.8002 1.20007L6.0002 4.80007L1.2002 1.20007" stroke="#1D1D1B" strokeWidth="1.48" strokeLinejoin="bevel"/>
                                </svg>
                            </button>
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
                                                className={`${cls.filterTab} ${dealType == deal.value? cls.active : ""} `}
                                                onClick={()=>setDealType(deal.value)}
                                            >
                                                <p>{deal.label}</p>
                                            </button>
                                        )
                                    })
                                }
                                <button className={cls.filterTab}>
                                    <p>Все</p>
                                </button>
                                <button className={cls.filterTab}>
                                    <p>Покупка</p>
                                </button>
                                <button className={cls.filterTab}>
                                    <p>Аренда</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}