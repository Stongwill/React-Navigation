import { ReactComponent as Img1} from "../images/icons/1.svg";
import { ReactComponent as Img2} from "../images/icons/2.svg";
import { ReactComponent as Img3} from "../images/icons/3.svg";
import { ReactComponent as Img4} from "../images/icons/4.svg";
import { ReactComponent as Img5} from "../images/icons/5.svg";
import { ReactComponent as Img6} from "../images/icons/6.svg";
import { ReactComponent as Img7} from "../images/icons/7.svg";
import { ReactComponent as Img8} from "../images/icons/8.svg";
import { ReactComponent as Img9} from "../images/icons/9.svg";
import { ReactComponent as Img10} from "../images/icons/10.svg";

class NavigationService {

    static instance;
    static getInstance() {
        if (!NavigationService.instance) {
            NavigationService.instance = new NavigationService();
        }

        return NavigationService.instance;
    }

    async getNavigation(){
        return [
            {
                id:1,
                page: 'Продукты',
                path: '/products',
                icon: <Img1 />
            },
            {
                id:2,
                page: 'Пользователи',
                path: '/clients',
                icon: <Img2 />
            },
            {
                id:3,
                page: 'Категории',
                path: '/categories',
                icon: <Img3 />
            },
            {
                id:4,
                page: 'Города',
                path: '/cities',
                icon: <Img4 />
            },
            {
                id:5,
                page: 'Бренды',
                path: '/brands',
                icon: <Img5 />
            },
            {
                id:6,
                page: 'Протоколы',
                path: '/protocols',
                icon: <Img6 />
            },
            {
                id:7,
                page: 'Заказы',
                path: '/orders',
                icon: <Img7 />
            },
            {
                id:8,
                page: 'Баннеры',
                path: '/banners',
                icon: <Img8 />
            },
            {
                id:9,
                page: 'Семинары',
                path: '/seminars',
                icon: <Img9 />
            },
            {
                id:10,
                page: 'Промокоды',
                path: '/promocode',
                icon: <Img10 />
            },
        ]
    }

}

export default NavigationService.getInstance();
