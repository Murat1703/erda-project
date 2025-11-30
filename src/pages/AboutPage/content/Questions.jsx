import cls from './Questions.module.css'

export const Questions = () => {
    return(
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
                        <a href="mailto:info@erdaholding.com" target='__blank'>mailto:info@erdaholding.com</a>
                        <a className={cls.btn}>
                            <p>Написать нам</p>
                        </a>
                    </div>
                    <div>
                        <a href="tel:+7 727 320 5136" target='__blank'>+7 727 320 5136</a>
                        <a className={cls.btn}>
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
    )
}