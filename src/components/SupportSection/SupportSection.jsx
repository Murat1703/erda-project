import { EyeBrow } from '../EyeBrow'
import { Title } from '../Title'
import { SupportCard } from './SupportCard'
import cls from './SupportSection.module.css'
import { Modal } from '../Modal'
import { useState } from 'react'

export const SupportSection = ({isProjectPage}) =>{

    const handleClick = () =>{
        setIsModal(true)
    }

    const handleCloseModal = () =>{
        setIsModal(false);
    }

    const [isModal, setIsModal] = useState(false);



    return(
        <>
            <section className={cls.supportSection}>
                <div className={cls.supportSectionInner}>
                    <div className={cls.supportSectionTop}>
                        <div>
                            {isProjectPage?
                            <EyeBrow>
                                §4. Службы поддержки
                            </EyeBrow>:
                            <EyeBrow>
                                §5. Службы поддержки
                            </EyeBrow>
                            }
                            <Title>
                                задайте вопрос
                            </Title>
                        </div>
                        <p>Отправьте  запрос удобным для вас способом – мы оперативно обработаем его и ответим на все ваши вопросы.</p>
                    </div>
                    <div className={cls.supportSectionBottom}>
                        <SupportCard>
                            <a>Вакансии в ERDA Holding</a>
                            <a className={`${cls.vacancyBtn} ${cls.btn}`} >Узнать больше</a>
                        </SupportCard>
                        <SupportCard>
                            <a href='tel:+7005161616' target='__blank'>+7 700 516 1616</a>
                            <a className={`${cls.callBtn} ${cls.btn}`} onClick={handleClick}>Перезвонить мне</a>
                        </SupportCard>
                        <SupportCard>
                            <a >Есть жалобы или предложения?</a>
                            <a href='mailto:info@erda.kz' target='__blank' className={`${cls.callBtn} ${cls.btn}`}>Написать на почту</a>
                        </SupportCard>

                    </div>
                </div>
            </section>
            <Modal isModal={isModal} closeModal={handleCloseModal} isSupport={"isSupport"}/>
        </>
    )
}