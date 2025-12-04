import cls from './Modal.module.css'
import { Spinner } from '../Spinner'
import { useState, useEffect } from 'react'
import { useMask } from '@react-input/mask'
import { useUTM } from '../../hooks/useUTM'

export const Modal = ({isModal, closeModal, isSupport}) =>{

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
            name: isSupport=="isSupport"? document.querySelector('.isSupportName').value : document.querySelector('.inputName').value,
            phoneNumber: isSupport=="isSupport"? document.querySelector('.isSupportPhone').value : document.querySelector('.inputPhone').value
        };
        const inputData = { // Собираем данные из формы
            name: isSupport=="isSupport"? document.querySelector('.isSupportName'): document.querySelector('.inputName'),
            phoneNumber: isSupport=="isSupport"? document.querySelector('.isSupportPhone'):document.querySelector('.inputPhone') ,
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
            <div className={cls.modalWrapper}
                style={{
                    display: isModal? "flex": "none"
                }}
                onClick={closeModal}
            >
                <div className={cls.modalContent}
                    style={{
                        gap: isSend? "0px" : null
                    }}
                    onClick={(e)=>e.stopPropagation()}
                >
                    <div className={cls.modalTitleBlock}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" onClick={closeModal}>
                                <path d="M24 8L8 24M8 8L24 24" stroke="#1D1D1B" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div 
                            style={{
                                display: isSend? "none" : null
                            }}
                        >
                            <h3>Обратный звонок</h3>
                            <p>Оставьте заявку — персональный менеджер свяжется с вами, расскажет об условиях и подберёт офис, достойный вашего статуса.</p>
                        </div>
                    </div>
                    <form className={cls.inputsBlock}
                        style={{
                            display: isSend?"none": ""
                        }}
                    >
                        <div>
                            <input 
                                type="text" 
                                name='name' 
                                placeholder='Как к вам обратиться?' 
                                className={isSupport=="isSupport"?"isSupportName" :"inputName"}
                                id={isSupport=="isSupport"? "isSupportName": ""}
                            />
                            <input 
                                type="text" 
                                name='phone' 
                                className={isSupport=="isSupport"?"isSupportPhone":"inputPhone"} 
                                placeholder='Номер телефона' 
                                ref={phoneMask}
                                id={isSupport=="isSupport"? "isSupportPhone": ""}
                            />
                        </div>
                        <div className={cls.bottom}>
                            <button onClick={(e)=>{handleSubmit(e)}}>
                                <p>Заказать звонок</p>
                            </button>
                            <p>Нажимая кнопку «Заказать звонок» вы соглашаетесь <br/>с Политикой обработки персональных данных</p>
                        </div>
                    </form>
                    {isSend? 
                    <div className={cls.resultBlock}>
                        <h3>Спасибо!</h3>
                        <p>Мы свяжемся с вами в течении дня <br/>по указанному номеру.</p>
                    </div>

                    : null}
                </div>
            </div>
            {isDataSend? <Spinner />: null}

        
        </>
    )
}