export interface IMenuDish {
    name: string;
    price: number;
    description: string;
}

export interface IMenuCategory {
    name: string;
    image: string;
    dishes: IMenuDish[];
}