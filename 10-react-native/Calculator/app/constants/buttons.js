export const buttonTypes = {
    number: {
        canDisable: false
    },
    letter: {
        canDisable: true
    },
    control: {
        style: {
            backgroundColor: '#83CBFF',
            marginRight: 10
        },
        canDisable: false
    },
    operation: {
        style: {
            backgroundColor: '#FFF9C0',
        },
        canDisable: false
    }
};

export const valueButtons = [
    [
        {
        title: '1',
        type: buttonTypes.number,
        },
        {
            title: '2',
            type: buttonTypes.number,
        },
        {
            title: '3',
            type: buttonTypes.number,
        },
        {
            title: '4',
            type: buttonTypes.number,
        }
    ],
    [
        {
            title: '5',
            type: buttonTypes.number,
        },
        {
            title: '6',
            type: buttonTypes.number,
        },
        {
            title: '7',
            type: buttonTypes.number,
        },
        {
            title: '8',
            type: buttonTypes.number,
        },
    ],
    [
        {
            title: '9',
            type: buttonTypes.number,
        },
        {
            title: '0',
            type: buttonTypes.number,
        },
        {
            title: 'A',
            type: buttonTypes.letter,
        },
        {
            title: 'B',
            type: buttonTypes.letter,
        },
    ],
    [
        {
            title: 'C',
            type: buttonTypes.letter,
        },
        {
            title: 'D',
            type: buttonTypes.letter,
        },
        {
            title: 'E',
            type: buttonTypes.letter,
        },
        {
            title: 'F',
            type: buttonTypes.letter,
        },
    ]
];

export const operationButtons = [
    {
        title: '+',
        type: buttonTypes.operation,
    },
    {
        title: '-',
        type: buttonTypes.operation,
    },
    {
        title: '*',
        type: buttonTypes.operation,
    },
    {
        title: '/',
        type: buttonTypes.operation,
    },
];

export const controlButtons = [
    {
        title: 'AC',
        type: buttonTypes.control,
    },
    {
        title: '=',
        type: buttonTypes.control,
    }
];
