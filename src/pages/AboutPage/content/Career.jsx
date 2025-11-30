import cls from './Career.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper/modules";

export const Career = () =>{

    const vacancyList = [
        {
            job: "Офис-менеджер",
            salary: "от 450 000 ₸",
            languages: "Казахский, русский",
            experience: "от 2х лет",
            workTime: "С офиса, с 9:00 до 18:00, 5 дней"
        },
        {
            job: "Менеджер по закупу",
            salary: "от 450 000 ₸",
            languages: "Казахский, русский",
            experience: "от 2х лет",
            workTime: "С офиса, с 9:00 до 18:00, 5 дней"
        },
        {
            job: "Офис-менеджер",
            salary: "от 450 000 ₸",
            languages: "Казахский, русский",
            experience: "от 2х лет",
            workTime: "С офиса, с 9:00 до 18:00, 5 дней"
        },
        {
            job: "Менеджер по продажам",
            salary: "от 450 000 ₸",
            languages: "Казахский, русский",
            experience: "от 2х лет",
            workTime: "С офиса, с 9:00 до 18:00, 5 дней"
        }
    ]


    return(
        <section className={cls.careerWrapper}>
            <div className={cls.careerContent}>
                <div className={cls.careerTitle}>
                    <h3>Карьера</h3>
                    <p>ERDA Holding приглашает талантливых и амбициозных специалистов стать частью нашей команды. Мы постоянно ищем увлечённых профессионалов, готовых развиваться вместе с компанией.</p>
                </div>
                <div className={cls.careerList}>
                    <Swiper
                        slidesPerView={3.6}
                        spaceBetween={64}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.3,
                                spaceBetween: 48
                            },
                            960:{
                                slidesPerView: 3.6,
                                spaceBetween: 64
                            }
                        }}
                    >
                        {
                            vacancyList.map((vacancy, index)=>{
                                return(
                                    <SwiperSlide>
                                        <div className={cls.vacancyCard}>
                                            <p>{vacancy.job}</p>
                                            <ul className={cls.description}>
                                                <li>
                                                    <p>Зарплата в месяц</p>
                                                    <p>{vacancy.salary}</p>
                                                </li>
                                                <li>
                                                    <p>Опыт работы</p>
                                                    <p>{vacancy.experience}</p>
                                                </li>
                                                <li>
                                                    <p>Знание языков</p>
                                                    <p>{vacancy.languages}</p>
                                                </li>
                                                <li>
                                                    <p>График работы</p>
                                                    <p>{vacancy.workTime}</p>
                                                </li>
                                            </ul>
                                            <div className={cls.vacancyButtons}>
                                                <button>
                                                    <p>Подробнее</p>
                                                </button>
                                                <button>
                                                    <p>На hh.kz</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M4 12L12 4M12 4V9.33333M12 4H6.66667" stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>    
                                )
                            })
                        }

                    </Swiper>                    
                </div>
            </div>
        </section>
    )
}