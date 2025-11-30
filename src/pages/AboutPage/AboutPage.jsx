import cls from './AboutPage.module.css'
import img from './images/33.png'
import mapImg from './images/map.svg'
import ala from './images/ala.svg'
import abu from './images/abu.svg'
import ist from './images/ist.svg'
import lon from './images/lon.svg'
import { Target, Directions, Team, Partners, Career, Questions  } from './content'

export const AboutPage = () =>{
    return(
        <>
            <section className={cls.aboutPageWrapper}>
                <div className={cls.aboutPageInner}>
                    <div className={cls.developerAbout}>
                        <div>
                            <div className={cls.imgWrapper}>
                                <img src={img} alt='img'/>
                            </div>
                            <div className={cls.aboutPageTitleBlock}>
                                <div className={cls.top}>
                                    <p>О Компании</p>
                                    <h3>erda holding —</h3>
                                </div>
                                <div className={cls.bottom}>
                                    <p>
                                        Молодой бренд, основанный в 2022 году и базирующийся в Алматы, Казахстан. Несмотря на недавнее образование, компания унаследовала богатый опыт своей материнской структуры, зарегистрированной в Лондоне и успешно работающей с 2003 года.
                                    </p>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M8 0.5V17.1667M8 17.1667L12 13.1667M8 17.1667L4 13.1667" stroke="#E6E3DA" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cls.aboutPageWrapper}>
                <div className={cls.aboutMap}>
                    <div className={cls.mapWrapper}>
                        <img src={mapImg} alt='map'/>
                        <img src={ala} className={cls.locationIcon} alt='ala'/>
                        <img src={abu} className={cls.locationIcon} alt='abu'/>
                        <img src={ist} className={cls.locationIcon} alt='ist'/>
                        <img src={lon} className={cls.locationIcon} alt='lon'/>
                    </div>
                    <div className={cls.mapAboutText}>
                        <p>Регионы влияния</p>
                        <p>Компании, входящие в группу ERDA Holding, ведут деятельность в Великобритании, Турции, Объединённых Арабских Эмиратах и Казахстане. Управление региональными проектами и партнёрскими инициативами осуществляется из международного офиса в Лондоне. <br/><br/>Команда ERDA Holding обладает всеми необходимыми компетенциями для устойчивого роста и создания новых возможностей как на рынке Казахстана, так и за его пределами.</p>
                    </div>
                </div>
            </section>
            <Directions />
            <Target />
            <Team />
            <Partners />
            <Career />
            <Questions />
        </>
    )
}