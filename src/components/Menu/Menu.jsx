import cls from './Menu.module.css'

export const Menu = ({type}) =>{

    const projectsMenuLinks = [
        {
            label: "БЦ Icon",
            link: "icon"
        },
        {
            label: "БЦ Lumior",
            link: "luminor"
        },
        {
            label: "БЦ Norex",
            link: "norex"
        }
    ];

    const mainMenuLinks = [
        {
            label: "Главная",
            link: "/"
        },
        {
            label: "Планировки",
            link: "/plans"
        },
        {
            label: "О Холдинге",
            link: "/about"
        },
        {
            label: "Контакты",
            link: "/contacts"
        },
        {
            label: "Скачать буклет",
            link: "/"
        }
    ]

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
                projectsMenuLinks.map((projectMenu, index)=>{
                    return(
                        <li key={index}>
                            <a href={`/projects/${projectMenu.link}`}>
                                {projectMenu.label}
                            </a>
                        </li>
                    )
                })
            :
            type == "mainMenu"? 
                mainMenuLinks.map((menuItem, index)=>{
                    return(
                        <li key={index}>
                            <a href={menuItem.link}>{menuItem.label}</a>
                        </li>
                    )
                }):       
            null}
        </ul>
    )
}