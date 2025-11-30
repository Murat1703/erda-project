import cls from './Directions.module.css'

export const Directions = ()=>{
    return(
        <section className={cls.directionsWrapper}>
            <div className={cls.directionsInner}>
                <div className={cls.directionsTitleBlock}>
                    <div>
                        <div>
                            <h3>Ключевые</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0_254_34739)">
                                <path d="M29.4998 5.59205V0.937988H24.8457" stroke="#E6E3DA" strokeMiterlimit="10"/>
                                <path d="M29.4998 0.937988L26.067 4.3708C22.8754 7.56244 19.0863 10.0942 14.9163 11.8215C10.7462 13.5488 6.27672 14.4378 1.76306 14.4378H1.56263M0 31.062H32M23.8745 31.0629V12.0495H29.4998V31.0629M13.1873 31.062V17.4865H18.8127V31.062M2.50019 31.062V22.9244H8.1255V31.062" stroke="#E6E3DA" strokeMiterlimit="10"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_254_34739">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                            <h3>направления</h3>
                        </div>
                        <p>Мы тесно сотрудничаем с лучшими местными и международными брендами. Основной принцип компании — признание разнообразия инновационных и уникальных проектов.</p>
                    </div>
                </div>
                <div className={cls.directionsList}>
                    <ul className={cls.directionsRow}>
                        <li><p>Девелопмент</p> </li>
                        <li><p>Инвестиции <br/>в недвижимость </p></li>
                        <li><p>Строительство </p></li>
                    </ul>
                    <ul className={cls.directionsRow}>
                        <li><p>Гостиничный бизнес<br/>и управление отелями</p> </li>
                        <li><p>Инвестиционное <br/>консультирование </p></li>
                        <li><p>Управление <br/>активами </p></li>
                    </ul>
                    <ul className={cls.directionsRow}>
                        <li><p>Частный капитал</p> </li>
                        <li><p>Венчурный капитал </p></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}