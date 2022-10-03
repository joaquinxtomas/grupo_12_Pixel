let productos = [
    {
        id: 1,
        categoria: 'COMPUTADORES',
        titulo: 'Computador',
        descripcionCorta: 'Computador de escritorio',
        descripcionDetallada: 'Nam si pericula sunt in mari, pericula sunt in terra, et pericula in falsis fratribus. ',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'pc1.jpg'
    },
    {
        id: 2,
        categoria: 'COMPUTADORES',
        titulo: 'Computador',
        descripcionCorta: 'Computador de escritorio',
        descripcionDetallada: 'La laptop HP 245 sigue el ritmo de estilos de trabajo móviles gracias a un diseño delgado y ligero. La hermosa pantalla con su angosto borde y relación de pantalla y cuerpo grande brinda amplio espacio para trabajar o reproducir contenido.',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'pc2.jpg'
    },
    {
        id: 3,
        categoria: 'COMPUTADORES',
        titulo: 'Computador',
        descripcionCorta: 'Computador de escritorio',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'pc3.jpg'
    },
    {
        id: 4,
        categoria: 'COMPUTADORES',
        titulo: 'Computador',
        descripcionCorta: 'Computador de escritorio',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'pc4.jpg'
    },
    {
        id: 5,
        categoria: 'NOTEBOOKS',
        titulo: 'Laptop',
        descripcionCorta: 'Notebook',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'asus.jpg'
    },
    {
        id: 6,
        categoria: 'NOTEBOOKS',
        titulo: 'Laptop',
        descripcionCorta: 'Notebook',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'bangho.jpg'
    },
    {
        id: 7,
        categoria: 'NOTEBOOKS',
        titulo: 'Laptop',
        descripcionCorta: 'Notebook',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'hp.jpg'
    },
    {
        id: 8,
        categoria: 'NOTEBOOKS',
        titulo: 'Laptop',
        descripcionCorta: 'Notebook',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'lenovo.jpg'
    },
    {
        id: 9,
        categoria: 'NOTEBOOKS',
        titulo: 'Laptop',
        descripcionCorta: 'Notebook',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'macbook.jpg'
    },
    {
        id: 10,
        categoria: 'MOUSE',
        titulo: 'Mouse',
        descripcionCorta: 'Mouse económico',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'mouse1.jpg'
    },
    {
        id: 11,
        categoria: 'MOUSE',
        titulo: 'Mouse',
        descripcionCorta: 'Mouse económico',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'mouse2.jpg'
    },
    {
        id: 12,
        categoria: 'MOUSE',
        titulo: 'Mouse',
        descripcionCorta: 'Mouse económico',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'mouse3.jpg'
    },
    {
        id: 13,
        categoria: 'MOUSE',
        titulo: 'Mouse',
        descripcionCorta: 'Mouse económico',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'mouse4.png'
    },
    {
        id: 14,
        categoria: 'TECLADO',
        titulo: 'Teclado',
        descripcionCorta: 'Teclado gamer',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'teclado1.jpg'
    },
    {
        id: 15,
        categoria: 'TECLADO',
        titulo: 'Teclado',
        descripcionCorta: 'Teclado gamer',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'teclado2.png'
    },
    {
        id: 16,
        categoria: 'TECLADO',
        titulo: 'Teclado',
        descripcionCorta: 'Teclado gamer',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'teclado3.png'
    },
    {
        id: 17,
        categoria: 'TECLADO',
        titulo: 'Teclado',
        descripcionCorta: 'Teclado gamer',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'teclado4.png'
    },
    {
        id: 18,
        categoria: 'MONITOR',
        titulo: 'Monitor',
        descripcionCorta: 'Monitor LED',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'monitor1.jpg'
    },
    {
        id: 19,
        categoria: 'MONITOR',
        titulo: 'Monitor',
        descripcionCorta: 'Monitor LED',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'monitor2.jpg'
    },
    {
        id: 20,
        categoria: 'MONITOR',
        titulo: 'Monitor',
        descripcionCorta: 'Monitor LED',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'monitor3.png'
    },
    {
        id: 21,
        categoria: 'MONITOR',
        titulo: 'Monitor',
        descripcionCorta: 'Monitor LED',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '$154.699',
        descuento: '25% off',
        valorFinal: '116.000',
        img: 'monitor4.png'
    },

]

const mainControllers = {
    
    index: (req,res) => {
        return res.render('index', { productos });
    }
};

module.exports = mainControllers;