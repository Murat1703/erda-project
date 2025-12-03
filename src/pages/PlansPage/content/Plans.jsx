import cls from './Plans.module.css'
import { useState, useEffect } from 'react'
import { projects } from '../../ProjectsPage/projects';
import { plansData } from '../../../components/PlansSection/plansData';


export const Plans = ({isPage}) =>{

    const [propertyType, setPropertyType] = useState("all");
    const [dealType, setDealType] = useState("all");
    const [minSquare, setMinSquare] = useState(96.7);
    const [maxSquare, setMaxSquare] = useState(1680.3);
    const [minFloor, setMinFloor] = useState(1);
    const [maxFloor, setMaxFloor] = useState(12);

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
                                <p>{minSquare}</p>
                                <div></div>
                                <p>{maxSquare}</p>
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
                    {plansData.map((item, index)=>{
                        return(
                            <div className={cls.planItemCard} key={index}>
                                <div className={cls.planItemImg}>
                                    <img src={item.plan} alt='planImg'/>
                                    <a className={cls.detailsBtn}>Подробнее</a>
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
                                            <p>{item.floor}</p>
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
                </div>
                <button className={cls.showMorePlansBtn}><p>Показать еще планировки</p> 
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path d="M0.5 8L17.1667 8M17.1667 8L13.1667 4M17.1667 8L13.1667 12" stroke="#EBE9E1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> */}
            </button>
            </div>
        </div>
    )
}