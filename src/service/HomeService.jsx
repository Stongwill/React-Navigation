
class HomeService {

    static instance;
    static getInstance() {
        if (!HomeService.instance) {
            HomeService.instance = new HomeService();
        }

        return HomeService.instance;
    }

    async getShares(){
        return {
            shares: [
            {
                id:1,
                category: 'Эстетический уход',
                subCategory: 'Очищение',
                brand: '-',
                goods: '-',
                cashback: '20%'
            },
            {
                id:2,
                category: 'Эстетический уход',
                subCategory: 'Скрабы',
                brand: 'Academie',
                goods: 'Гоммаж с кремом и витамином У, 50мл',
                cashback: '10%'
            }
        ],
        per_page: [10, 20, 30, 40, 50],
        page: 1,
        pages: 3
    }
    }
}

export default HomeService.getInstance();
