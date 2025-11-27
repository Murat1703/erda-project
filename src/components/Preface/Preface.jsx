import { EyeBrow } from "../EyeBrow"
import cls from './Preface.module.css'

export const Preface = () =>{
    return(
        <section className={cls.prefaceWrapper}>
            <div className={cls.prefaceInner}>
                <EyeBrow>
                   §1.Предисловие 
                </EyeBrow>
                <div className={cls.prefaceRows}>
                    <div className={cls.prefaceRow}>
                        <p>Основанная на принципах</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M19.414 16.947H0.585938V5.05315H19.414V16.947Z" stroke="#1D1D1B" strokeWidth="0.68" strokeMiterlimit="10"/>
                            <path d="M19.414 9.73056H11.2695V5.05315H8.73044V9.73056H0.585938V12.2696H8.73044V16.947H11.2695V12.2696H19.414V9.73056Z" stroke="#1D1D1B" strokeWidth="0.68" strokeMiterlimit="10"/>
                            <path d="M0.585938 5.05306L8.73044 9.73047" stroke="#1D1D1B" strokeWidth="0.68" strokeMiterlimit="10"/>
                            <path d="M11.2695 9.73047L19.414 5.05306" stroke="#1D1D1B" strokeWidth="0.68" strokeMiterlimit="10"/>
                            <path d="M11.2695 12.2696L19.414 16.947" stroke="#1D1D1B" strokeWidth="0.68" strokeMiterlimit="10"/>
                            <path d="M8.73044 12.2696L0.585938 16.947" stroke="#1D1D1B" strokeWidth="0.68" strokeMiterlimit="10"/>
                        </svg>
                        <p>британской</p>
                    </div>
                    <p>архитектурной школы и казахстанской инженерной практике, мы создаем</p>
                    <div className={cls.prefaceRow}>
                        <p>коммерческую</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_110_250)">
                            <path d="M19.4135 18.6847H0.58551V4.80524H19.4135V18.6847Z" stroke="#1D1D1B" strokeWidth="0.8" strokeMiterlimit="10"/>
                            <path d="M0.585571 4.80523V10.658C0.585571 12.2158 1.84842 13.4786 3.40623 13.4786H16.5929C18.1508 13.4786 19.4136 12.2158 19.4136 10.658V4.80523" stroke="#1D1D1B" strokeWidth="0.8" strokeMiterlimit="10"/>
                            <path d="M9.99954 15.6589C9.30455 15.6589 8.74115 15.0955 8.74115 14.4005V11.2984H11.2579V14.4005C11.2579 15.0955 10.6945 15.6589 9.99954 15.6589Z" stroke="#1D1D1B" strokeWidth="0.8" strokeMiterlimit="10"/>
                            <path d="M13.9924 4.80518V1.31511H6.00659V4.80518" stroke="#1D1D1B" strokeWidth="0.8" strokeMiterlimit="10"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_110_250">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                        <p>недвижимость нового</p>
                    </div>
                    <p style={{
                        alignSelf: "stretch"
                    }}>
                        уровня — с выразительной архитектурой,
                    </p>
                </div>
            </div>
        </section>
    )
}