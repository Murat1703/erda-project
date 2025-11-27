import cls from './Menu.module.css'

export const Menu = ({type}) =>{

    const projectsMenu = ["БЦ Icon", "БЦ Lumior", "БЦ Norex"];
    const mainMenu = ["Главная", "Планировки", "О Холдинге", "Контакты", "Скачать буклет"]

    return(
        <ul 
            className={cls.menuWrapper} 
            style={{
            left: type==="projectsMenu" ? "192px" : type==="mainMenu" ? "48px":  null,
            width: type==="projectsMenu" ? "200px" : type==="mainMenu" ? "252px" : null
            }}
            onClick={(e)=>e.stopPropagation()}
        > 

            {type == "projectsMenu"? 
                projectsMenu.map((projectMenu, index)=>{
                    return(
                        <li key={index}>{projectMenu}</li>
                    )
                })
            :
            type == "mainMenu"? 
                mainMenu.map((menuItem, index)=>{
                    return(
                        <li key={index}>{menuItem}</li>
                    )
                }):

            
            null}
        </ul>
    )
}