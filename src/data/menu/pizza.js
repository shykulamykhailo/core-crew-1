import pizzaStracietella from './pizza-straccietella.jpg';
import pizzaAsparagus from './pizza-asparagus.jpg';
import pizzaFigs from './pizza-figs-and-prosciutto.jpg';
import pizzaFungi from './pizza-fungi.jpg';
import pizzaMargherita from './pizza-margherita.jpg';
import pizzaNduja from './pizza-nduja.jpg';
import pizzaProsciutto from './pizza-prosciutto.jpg';
import pizzaCalzone from './pizza-calzone.jpg';

export const PIZZAS_LIST = [
    {
        name: 'Pizza Margherita',
        price: 4.0,
        photo: pizzaMargherita,
        ingridients: [
            {
                ingridient: 'Pizza dough',
                count: 0.3,
            },
            {
                ingridient: 'Tomato Sauce',
                count: 0.06,
            },
            {
                ingridient: 'Cheese mozarella',
                count: 0.1,
            },
            {
                ingridient: 'Cheese parmesan',
                count: 0.02,
            },
            {
                ingridient: 'Basil',
                count: 0.01,
            },
            {
                ingridient: 'Olive oil',
                count: 0.02,
            },
        ],
    },
    {
        name: 'Pizza Prosciutto',
        price: 5.5,
        photo: pizzaProsciutto,
        ingridients: [
            {
                ingridient: 'Pizza dough',
                count: 0.3,
            },
            {
                ingridient: 'Tomato Sauce',
                count: 0.06,
            },
            {
                ingridient: 'Cheese mozarella',
                count: 0.05,
            },
            {
                ingridient: 'Cheese parmesan',
                count: 0.02,
            },
            {
                ingridient: 'Arugula',
                count: 0.02,
            },
            {
                ingridient: 'Prosciutto',
                count: 0.04,
            },
            {
                ingridient: 'Capers',
                count: 0.01,
            },
        ],
    },
    {
        name: 'Pizza Fungi',
        price: 5.5,
        photo: pizzaFungi,
        ingridients: [
            {
                ingridient: 'Pizza dough',
                count: 0.3,
            },
            {
                ingridient: 'Cream Sauce',
                count: 0.06,
            },
            {
                ingridient: 'Cheese mozarella',
                count: 0.1,
            },
            {
                ingridient: 'Cheese parmesan',
                count: 0.02,
            },
            {
                ingridient: 'Green onion',
                count: 0.01,
            },
            {
                ingridient: 'Mashroom - Champignon',
                count: 0.04,
            },
            {
                ingridient: 'Olives',
                count: 0.04,
            },
            {
                ingridient: 'Olive oil',
                count: 0.02,
            },
        ],
    },
    {
        name: 'Pizza Figs & Prosciutto',
        price: 6.5,
        photo: pizzaFigs,
        ingridients: [
            {
                ingridient: 'Pizza dough',
                count: 0.3,
            },
            {
                ingridient: 'Cream Sauce',
                count: 0.06,
            },
            {
                ingridient: 'Cheese mozarella',
                count: 0.06,
            },
            {
                ingridient: 'Cheese camambert',
                count: 0.04,
            },
            {
                ingridient: 'Figs',
                count: 0.03,
            },
            {
                ingridient: 'Basil',
                count: 0.01,
            },
            {
                ingridient: 'Olive oil',
                count: 0.02,
            },
            {
                ingridient: 'Prosciutto',
                count: 0.04,
            },
        ],
    },
    {
        name: 'Calzone',
        price: 4.0,
        photo: pizzaCalzone,
        ingridients: [
            {
                ingridient: 'Pizza dough',
                count: 0.3,
            },
            {
                ingridient: 'Tomato Sauce',
                count: 0.03,
            },
            {
                ingridient: 'Cream Sauce',
                count: 0.03,
            },
            {
                ingridient: 'Cheese mozarella',
                count: 0.05,
            },
            {
                ingridient: 'Cheese parmesan',
                count: 0.02,
            },
            {
                ingridient: 'Basil',
                count: 0.01,
            },
            {
                ingridient: 'Olive oil',
                count: 0.02,
            },
            {
                ingridient: 'Mortadella',
                count: 0.06,
            },
            {
                ingridient: 'Sun-dried tomatoes',
                count: 0.03,
            },
        ],
    },
    {
        name: 'Pizza Asparagus',
        price: 4.0,
        photo: pizzaAsparagus,
        ingridients: [
            {
                ingridient: 'Pizza dough',
                count: 0.3,
            },
            {
                ingridient: 'Cream Sauce',
                count: 0.06,
            },
            {
                ingridient: 'Cheese mozarella',
                count: 0.05,
            },
            {
                ingridient: 'Cheese parmesan',
                count: 0.02,
            },
            {
                ingridient: 'Basil',
                count: 0.01,
            },
            {
                ingridient: 'Olive oil',
                count: 0.02,
            },
            {
                ingridient: 'Sun-dried tomatoes',
                count: 0.03,
            },
            {
                ingridient: 'Aspargus',
                count: 0.05,
            },
            {
                ingridient: 'Blue-violet potato',
                count: 0.05,
            },
        ],
    },
    {
        name: 'Pizza nduja',
        price: 6.5,
        photo: pizzaNduja,
        ingridients: [
            {
                ingridient: 'Pizza dough',
                count: 0.3,
            },
            {
                ingridient: 'Tomato Sauce',
                count: 0.06,
            },
            {
                ingridient: 'Cheese mozarella',
                count: 0.06,
            },
            {
                ingridient: 'Nduja',
                count: 0.06,
            },

            {
                ingridient: 'Basil',
                count: 0.01,
            },

            {
                ingridient: 'Chili',
                count: 0.01,
            },
        ],
    },
    {
        name: 'Stracietella',
        price: 6.5,
        photo: pizzaStracietella,
        ingridients: [
            {
                ingridient: 'Pizza dough',
                count: 0.3,
            },
            {
                ingridient: 'Tomato sauce',
                count: 0.06,
            },
            {
                ingridient: 'Cheese mozarella',
                count: 0.06,
            },
            {
                ingridient: 'Cheese stracietella',
                count: 0.04,
            },
            {
                ingridient: 'Sun-dried tomatoes',
                count: 0.02,
            },
            {
                ingridient: 'Basil',
                count: 0.01,
            },
            {
                ingridient: 'Olive oil',
                count: 0.02,
            },
            {
                ingridient: 'Chili',
                count: 0.01,
            },
        ],
    },
];
