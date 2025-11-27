import cls from './Button.module.css'

export const Button = ({type, children, onClick}) =>{
    return(
        <button 
            className={`${cls.btn} ${type === "mainBtn" ? cls.mainBtn : type==="callBtn"? cls.callBtn : ""}` }
            onClick={onClick}
        >
            {children}
        </button>
    )
}