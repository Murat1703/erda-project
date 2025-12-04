import cls from './ConsultationSection.module.css'
import { useMask } from '@react-input/mask'
import { useRef, useState, useEffect } from 'react';
import { useUTM } from '../../hooks/useUTM';
import { Spinner } from '../Spinner';


export const ConsultationSection = () =>{

    const utm = useUTM();

    const phoneMask = useMask({
        mask: '+7 (___) ___-__-__',
        replacement: { _: /\d/ },
    });

    const [isDataSend, setDataSend] = useState(false);
    const [isSend, setSend] = useState(false);



    useEffect(() => {
        // console.log('isSend: ', isSend);
    }, [isSend, isDataSend]);

    function handleSubmit(e){
        e.preventDefault();

        const modalData = { // Собираем данные из формы
            name: document.querySelector('.consultationName').value,
            phoneNumber: document.querySelector('.consultationPhone').value
        };
        const inputData = { // Собираем данные из формы
            name:  document.querySelector('.consultationName'),
            phoneNumber: document.querySelector('.consultationPhone')
        };

        if (inputData.name.value=='') inputData.name.style.borderBottom = `1px solid red`; else inputData.name.style.borderBottom = ``;
        if ((inputData.phoneNumber.value=='')) inputData.phoneNumber.style.borderBottom = `1px solid red`; else inputData.phoneNumber.style.borderBottom = ``;
        if (inputData.phoneNumber.value.length<18)inputData.phoneNumber.style.borderBottom = `1px solid red`; else inputData.phoneNumber.style.borderBottom = ``;
        if ((modalData.name!="")&&(modalData.phoneNumber!="")&&(modalData.phoneNumber.length>=18)){
            sendData(modalData);
            setDataSend(true);
            setTimeout(hideSpinner, 2000)
        }
        
    }

    function sendData(modalData){

        let formData = new FormData(this);
        formData.append('name', modalData.name);
        formData.append('phone', modalData.phoneNumber);
        for (let key in utm) {
            if (utm[key]) { // чтобы пустые значения не шли
                formData.append(key, utm[key]);
            }
        }


        fetch(`/send.php`, {
          method: 'POST',
          body: formData
        })
        .then(response => {
            // fbq('track', 'SubmitApplication');  
            if (response.status==200) {
            setTimeout(()=>{setSend(true)}, 2000); };} )
        // .then(data => {console.log(data); if (data.includes('успешно')) { console.log(response.text); ()=>setDataSend(true)}})
        .catch(error => {alert(`Ошибка - ${error}. Ошибка отправки формы. Попробуйте позже.`);})
    }

    function hideSpinner(){
        setDataSend(false)
    }



    return(
        <>
            <section className={cls.consultationWrapper}>
                <div className={cls.consultationInnner}>
                    <div className={cls.left}>
                        <div className={cls.consultationTitle}>
                            <h3>Получить</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M18.3254 5.51146L28.3627 12.0357C28.7174 12.2663 28.8947 12.3815 29.0232 12.5353C29.137 12.6714 29.2224 12.8288 29.2745 12.9984C29.3334 13.1899 29.3334 13.4014 29.3334 13.8244V23.6C29.3334 25.8402 29.3334 26.9603 28.8974 27.816C28.5139 28.5686 27.902 29.1806 27.1494 29.5641C26.2937 30 25.1736 30 22.9334 30H9.06675C6.82654 30 5.70643 30 4.85079 29.5641C4.09814 29.1806 3.48622 28.5686 3.10272 27.816C2.66675 26.9603 2.66675 25.8402 2.66675 23.6V13.8244C2.66675 13.4014 2.66675 13.1899 2.72564 12.9984C2.77777 12.8288 2.86321 12.6714 2.97695 12.5353C3.10543 12.3815 3.28277 12.2663 3.63744 12.0357L13.6748 5.51146M18.3254 5.51146C17.4837 4.96438 17.0629 4.69084 16.6095 4.58441C16.2087 4.49034 15.7915 4.49034 15.3907 4.58441C14.9373 4.69084 14.5165 4.96438 13.6748 5.51146M18.3254 5.51146L26.5816 10.878C27.4987 11.4741 27.9573 11.7722 28.1161 12.1502C28.2549 12.4805 28.2549 12.8528 28.1161 13.1832C27.9573 13.5612 27.4987 13.8592 26.5816 14.4554L18.3254 19.8219C17.4837 20.369 17.0629 20.6425 16.6095 20.749C16.2087 20.843 15.7915 20.843 15.3907 20.749C14.9373 20.6425 14.5165 20.369 13.6748 19.8219L5.41856 14.4554C4.50143 13.8592 4.04287 13.5612 3.88405 13.1832C3.74525 12.8528 3.74525 12.4805 3.88405 12.1502C4.04287 11.7722 4.50143 11.4741 5.41856 10.878L13.6748 5.51146M28.6667 27.3334L19.8097 19.3334M12.1905 19.3334L3.33341 27.3334" stroke="#1D1D1B" strokeMiterlimit="10" strokeLinecap="round"/>
                            </svg>
                            <h3>консультацию</h3>
                        </div>
                        <p>Хотите стать резидентом бизнес-центра ультра-класса? Оставьте заявку — персональный менеджер свяжется с вами, расскажет об условиях и подберёт офис, достойный вашего статуса.</p>
                    </div>
                    {isSend? null : 
                        <form className={cls.right} onSubmit={(e)=>handleSubmit(e)}>
                            <div className={cls.inputItems}>
                                <input type="text" name='name' className="consultationName" placeholder='Как к вам обратиться?'/>
                                <input type="text" name='phone' ref={phoneMask} placeholder='Номер телефона' className="consultationPhone"/>
                            </div>
                            <div className={cls.bottom}>
                                <p>
                                    Нажимая кнопку «Оставить заявку», вы соглашаетесь <br/>с Политикой обработки персональных данных
                                </p>
                                <button type='submit' onClick={(e)=>handleSubmit(e)}>Заказать обратный звонок</button>
                            </div>
                        </form>
                    }
                    {isSend? 
                    <div className={cls.resultBlock}>
                        <h2>Cпасибо!</h2>
                        <p>Наши менеджеры свяжутся с вами в ближайшее время</p>
                    </div>
                    :null}
                </div>
            </section>
            {isDataSend ? <Spinner /> : null}
        </>
    )
}