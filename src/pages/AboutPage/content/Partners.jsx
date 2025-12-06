import cls from './Partners.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper/modules";
import img1 from './images/1.svg'
import img2 from './images/2.svg'
import img3 from './images/3.svg'
import img4 from './images/4.svg'
import img5 from './images/5.svg'
import img6 from './images/6.svg'

export const Partners = () =>{
    return(
        <section className={cls.partnersWrapper}>   
            <div className={cls.partnersInner}>
                <div className={cls.partnersTitle}>
                    <div className={cls.titleRow}>
                        <h3>Партнёры и</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                        <g clipPath="url(#clip0_254_34817)">
                            <path d="M4.34521 0.939453H24.454" stroke="#E6E3DA" strokeMiterlimit="10"/>
                            <path d="M1.22021 5.05508L7.70782 12.2969L14.3997 5.3134L4.34527 0.938346L1.22021 5.05508Z" stroke="#E6E3DA" strokeMiterlimit="10"/>
                            <path d="M27.5794 5.05508L21.0918 12.2969L14.3999 5.3134L24.4543 0.938346L27.5794 5.05508Z" stroke="#E6E3DA" strokeMiterlimit="10"/>
                            <path d="M17.318 11.7207H11.7953L10.4561 9.40127L14.4 5.31297L18.344 9.40127L17.318 11.7207Z" stroke="#E6E3DA" strokeMiterlimit="10"/>
                            <path d="M18.9345 25.8638L14.3736 31.0625L9.85596 25.8638L11.8118 11.7204H17.3345L18.9345 25.8638Z" stroke="#E6E3DA" strokeMiterlimit="10"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_254_34817">
                            <rect width="28.8" height="32" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                        <h3>рекомендации</h3>
                    </div>
                    <div>
                        <p>
                            Опираясь на более чем 20-летний опыт, ERDA Holding выстраивает сотрудничество с ведущими мировыми брендами для реализации новых проектов.
                        </p>
                        <p>
                            Наш надёжный партнёрский пул включает ведущие компании и международные корпорации.
                        </p>
                    </div>

                </div>
                <div className={cls.partnersList}>
                    <Swiper
                        slidesPerView={5.6}
                        spaceBetween={108}
                        loop={true}
                        breakpoints={{
                            0:{
                                slidesPerView: 2.4,
                                spaceBetween: 64
                            },
                            960:{
                                slidesPerView: 5.6,
                                spaceBetween: 108
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className={cls.sliderItem}>
                                <img src={img1} alt='logo'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.sliderItem}>
                                <img src={img2} alt='logo'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.sliderItem}>
                                <img src={img3} alt='logo'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.sliderItem}>
                                <img src={img4} alt='logo'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.sliderItem}>
                                <img src={img5} alt='logo'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.sliderItem}>
                                <img src={img6} alt='logo'/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}