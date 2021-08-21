interface Sale {
    key: string,
    title: string,
    image: string,
    sale: string,
    oldCost: string,
    newCost: string
}

var bigsale: Sale[] = [
    {
        key: '1',
        title: 'Lẩu ếch',
        image: 'https://i.pinimg.com/564x/6a/4e/8e/6a4e8e24caeb4b3b69b06466c5d45d94.jpg',
        sale: '-20%',
        oldCost: '399.000 VND',
        newCost: '329.000 VND'
    },
    {
        key: '2',
        title: 'Bò nướng',
        image: 'https://i.pinimg.com/564x/b0/b2/b7/b0b2b7ff7ba3d896bb59e9a3bd83bb49.jpg',
        sale: '-15%',
        oldCost: '499.000 VND',
        newCost: '424.000 VND'
    },
    {
        key: '3',
        title: 'Sườn nướng',
        image: 'https://i.pinimg.com/564x/15/ca/37/15ca37a5f0eaca64a6cb2dd4b7e70274.jpg',
        sale: '-10%',
        oldCost: '120.000 VND',
        newCost: '108.000 VND'
    },
    {
        key: '4',
        title: 'Lẩu hải sản',
        image: 'https://i.pinimg.com/564x/b9/5f/fa/b95ffae87ddfdeb4dc1509dcc3281a3c.jpg',
        sale: '-10%',
        oldCost: '399.000 VND',
        newCost: '359.000 VND'
    },
    {
        key: '5',
        title: 'Tôm hùm',
        image: 'https://i.pinimg.com/564x/fa/c7/b1/fac7b167345843672c05a8965d920ff7.jpg',
        sale: '-5%',
        oldCost: '259.000 VND',
        newCost: '251.000 VND'
    },
    {
        key: '6',
        title: 'Bò Mỹ',
        image: 'https://i.pinimg.com/564x/82/96/52/82965267effee3932be638c8e60fa953.jpg',
        sale: '-5%',
        oldCost: '99.000 VND',
        newCost: '94.000 VND'
    },

];
export default bigsale;