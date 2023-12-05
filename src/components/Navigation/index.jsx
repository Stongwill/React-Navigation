import { useEffect, useState } from 'react';
import './navigation.scss';
import { NavLink } from 'react-router-dom';
import NavigationService from '../../service/NavigationService';


export const Navigation = () => {
    const [navMenu, setNavMenu] = useState([]);

    const loadNavMenu = async () => {
        const data = await NavigationService.getNavigation();
        setNavMenu(data)
    }

    useEffect(() => {
        loadNavMenu()
    }, [])

return <aside className="block-nav__sidebar">
        <ul className="block-nav__list">
            {navMenu?.map(({id, path, page, icon}) => {
                   return <li className="block-nav__item" key={id}>
                        <NavLink to={path}>{page}</NavLink>
                        {icon}
                    </li>
                })
            }
        </ul>
    </aside>
}