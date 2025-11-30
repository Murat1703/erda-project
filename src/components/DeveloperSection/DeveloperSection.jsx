import cls from './DeveloperSection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from './images/1.svg'
import img2 from './images/2.svg'
import img3 from './images/3.svg'
import img4 from './images/4.svg'
import img5 from './images/5.svg'
import img6 from './images/6.svg'

export const DeveloperSection = () =>{
    return(
        <section className={cls.developerSection}>
            <div className={cls.developerSectionInner}>
                <div className={cls.top}>
                    <div className={cls.titleWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="32" viewBox="0 0 37 32" fill="none">
                            <path d="M27.6201 0L36.8262 15.999L27.6201 32H9.20703L0 15.999L9.20703 0H27.6201ZM17.9121 16.5586L17.7539 16.8643H17.7461L10.6943 30.4863H10.7021L10.5439 30.793H26.9258L27.0137 30.6396L34.8535 17.0176L35.1162 16.5586H17.9121ZM1.38867 15.999L1.42578 16.0645L1.47559 16.1523L9.24707 29.6562L9.52637 30.1406L16.7969 16.0957L16.8701 15.9561L9.52734 1.85742L1.38867 15.999ZM16.1807 15.9561L9.49707 28.8652L9.49316 28.8584L16.1729 15.9561L9.49609 3.13574L9.50098 3.12891L16.1807 15.9561ZM10.5469 1.20801L10.7061 1.51367H10.6982L17.7451 15.0449H17.7529L17.9121 15.3506H35.0645L27.0137 1.36133L26.9258 1.20801H10.5469Z" fill="#1D1D1B"/>
                        </svg>
                        <h2>О девелопере —</h2>
                    </div>
                    <div className={cls.developerInfo}>
                        <p>
                            ERDA Holding – казахстанская девелоперская компания с более чем 20-летним опытом в строительстве коммерческой недвижимости.
                        </p>
                        <p>
                            В портфеле ERDA десятки реализованных проектов и три новых бизнес-центра в Алматы. ERDA предлагает инфраструктуру, соответствующую запросам современного бизнеса
                        </p>
                        <a href="/about" className={cls.developerBtn}>
                            <p>Узнать больше</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                <path d="M0.5 8L17.1667 8M17.1667 8L13.1667 4M17.1667 8L13.1667 12" stroke="#EBE9E1" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={cls.bottom}>
                    <Swiper
                        slidesPerView={5.4}
                        loop={true}
                        spaceBetween={108}
                        breakpoints={{
                            0: {
                                slidesPerView: 2.4,
                                spaceBetween: 56
                            }
                        }}
                    >  
                        <SwiperSlide>
                            <img src={img1} alt='img'/>                       
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                             <img src={img4} alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img5} alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img6} alt="img" />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </section>
    )
}