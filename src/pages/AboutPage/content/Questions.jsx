import cls from './Questions.module.css'
import { Modal } from '../../../components/Modal'
import { useState, useEffect } from 'react'

export const Questions = () => {

    const handleClick = () =>{
        setIsModal(true)
    }

    const handleCloseModal = () =>{
        setIsModal(false);
    }

    const [isModal, setIsModal] = useState(false);


    return(
        <>
            <section className={cls.questionsWrapper}>
                <div className={cls.questionsContent}>
                    <div className={cls.title}>
                        <div>
                            <p>§4. Службы поддержки </p>
                            <h3>Задайте вопрос</h3>
                        </div>
                        <p>Отправьте  запрос удобным для вас способом – мы оперативно обработаем его и ответим на все ваши вопросы.</p>
                    </div>
                    <div className={cls.bottom}>
                        <div>
                            <a href="mailto:info@erdaholding.com" target='__blank'>info@erdaholding.com</a>
                            <a className={cls.btn}>
                                <p>Написать нам</p>
                            </a>
                        </div>
                        <div>
                            <a href="tel:+77005161616" target='__blank'>+7 700 516 16 16</a>
                            <a className={cls.btn} onClick={handleClick}>
                                <p>Перезвонить мне</p>
                            </a>
                        </div>
                        <div>
                            <p>Есть жалобы или предложения?</p>
                            <a href="mailto:info@erdaholding.com" target='__blank' className={cls.btn}>
                                <p>Написать запрос</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Modal isModal={isModal} closeModal={handleCloseModal}/>
        
        </>
    )
}