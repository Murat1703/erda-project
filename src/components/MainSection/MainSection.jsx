import { Button } from '../Button'
import cls from './MainSection.module.css'
import img1 from './images/ca3838f118c56703133177f24bb1c3523af6d9ae.png'
import img2 from './images/2c607706eddfebcddb119930448dbd061279aa40.jpg'
import img3 from './images/f3553da3a3f5284be1699962b8e628b2d175c08f.jpg'


export const MainSection = () =>{

    const handleClick = () =>{
        console.log('clicked')
    }

    return(
        <div className={cls.mainSection}>
            <div className={cls.mainTitleBlock}>
                <div className={cls.titleRow}>
                    <p>создаем деловое</p>
                    <div className={cls.titleImg}>
                        <img src={img1} alt="img" />
                    </div>
                </div>
                <div className={cls.titleRow}>
                    <p>пространство</p>
                    <div className={cls.classType}>
                        <p>А</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                                <path d="M11.55 0L14.2766 8.40325H23.1L15.9617 13.5968L18.6883 22L11.55 16.8065L4.4117 22L7.1383 13.5968L0 8.40325H8.82342L11.55 0Z" fill="#1D1D1B"/>
                            </svg>
                        </span>
                    </div>
                    <p>класса</p>
                </div>
                <div className={cls.titleRow}>
                    <p>для</p>
                    <div className={cls.titleImg}>
                        <img src={img2} alt="img" />
                    </div>
                    <p>комфортной</p>
                </div>
                <div className={cls.titleRow}>
                    <p>и продуктивной</p>
                </div>
                <div className={cls.titleRow}>
                    <p>работы</p>
                    <div className={cls.titleImg}>
                        <img src={img3} alt="img" />
                    </div>
                </div>
            </div>
            <div className={cls.mainSectionBottom}>
                <p>
                    Продажа и аренда офисных пространств в собственных БЦ в Алматы любого масштаба и уровня. Сервис 5* и современное High End оборудование.
                </p>
                <div className={cls.bottomBtns}>
                    <Button type="callBtn">
                        <p>Позвонить</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10.0002 1.33334V2.26668C10.0002 2.64005 10.0002 2.82673 9.9275 2.96934C9.86359 3.09478 9.7616 3.19677 9.63616 3.26068C9.49355 3.33334 9.30686 3.33334 8.9335 3.33334H7.06683C6.69346 3.33334 6.50678 3.33334 6.36417 3.26068C6.23873 3.19677 6.13674 3.09478 6.07283 2.96934C6.00016 2.82673 6.00016 2.64005 6.00016 2.26668V1.33334M5.46683 14.6667H10.5335C11.2802 14.6667 11.6536 14.6667 11.9388 14.5214C12.1897 14.3935 12.3937 14.1895 12.5215 13.9387C12.6668 13.6534 12.6668 13.2801 12.6668 12.5333V3.46668C12.6668 2.71994 12.6668 2.34657 12.5215 2.06136C12.3937 1.81047 12.1897 1.6065 11.9388 1.47867C11.6536 1.33334 11.2802 1.33334 10.5335 1.33334H5.46683C4.72009 1.33334 4.34672 1.33334 4.06151 1.47867C3.81063 1.6065 3.60665 1.81047 3.47882 2.06136C3.3335 2.34657 3.3335 2.71994 3.3335 3.46668V12.5333C3.3335 13.2801 3.3335 13.6534 3.47882 13.9387C3.60665 14.1895 3.81063 14.3935 4.06151 14.5214C4.34672 14.6667 4.72009 14.6667 5.46683 14.6667Z" stroke="#EBE9E1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                    <Button type="mainBtn" onClick={handleClick}>
                        <p>Позвонить</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}