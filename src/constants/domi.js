
export const HomeCardData = [
    {
        id: 1,
        title: 'Application Status',
        circles: true,
        circle1: '10',
        circle1info: 'All',
        circle1border: ' 2px solid #1B1464',
        circle1textcolor: "#222",
        circle2: '6',
        circle2info: 'Available',
        circle2bgcolor: '#24C977',
        circle3: '4',
        circle3info: 'Critical',
        circle3bgcolor: '#FF4343F7',
    },
    {
        id: 2,
        title: 'Server',
        circles: true,
        circle1: '4',
        circle1info: 'All',
        circle1textcolor: "#222",
        circle1border: ' 2px solid #1B1464',
        circle2: '2',
        circle2info: 'Active',
        circle2bgcolor: '#24C977',
        circle3: '2',
        circle3info: 'inactive',
        circle3bgcolor: '#E0B237',

    },
    {
        id: 3,
        title: 'Health Check Counts',
        circles: false,
        count: '60'
    }
]

export const TableHeader = ['s/n', 'application', 'servers mapped', 'last scan date', 'status', 'action', ""];
export const TableBody = [
    {
        sn: "20",
        appName: 'APPLICATION',
        online: true,
        servers: [
            {
                name: 'server 1'
            },
            {
                name: 'server 2'
            },
            {
                name: 'server 3'
            }
        ],
        date: new Date(2016, 6, 12).toISOString().substring(0, 10),
        status: 'Healthy'
    },
    {
        sn: "30",
        appName: 'APPLICATION 2',
        online: false,
        servers: [
            {
                name: 'server 1'
            },
            {
                name: 'server 2'
            },
            {
                name: 'server 3'
            }
        ],
        date: new Date(2018, 7, 17).toISOString().substring(0, 10),
        status: 'Unhealthy'
    },
    {
        sn: 3,
        appName: 'APPLICATION 3',
        servers: [
            {
                name: 'server 1'
            },
            {
                name: 'server 2'
            },
            {
                name: 'server 3'
            }
        ],
        date: new Date(2018, 7, 17).toISOString().substring(0, 10),
        status: 'Healthy'
    },
    {
        sn: 4,
        appName: 'APPLICATION 4',
        servers: [
            {
                name: 'server 1'
            },
            {
                name: 'server 2'
            },
            {
                name: 'server 3'
            }
        ],
        date: new Date(2018, 7, 17).toISOString().substring(0, 10),
        status: 'Healthy'
    }
]


export const ServerTableHeader = ['s/n', 'server name', 'ip address', 'cpu(%)', 'memory(%)', 'storage(%)', 'action']

export const ServerTableBody = [
    {
        sn: 1,
        serverName: 'Server 1',
        online: true,
        ipAddress: 'IP ADDRESS',
        cpu: '85.6',
        memory: '73.9',
        storage: '50',


    },
    {
        sn: 2,
        serverName: 'Server 2',
        online: true,
        ipAddress: 'IP ADDRESS',
        cpu: '84.6',
        memory: '72.4',
        storage: '70',


    },
    {
        sn: 3,
        serverName: 'Server 3',
        online: true,
        ipAddress: 'IP ADDRESS',
        cpu: '82.6',
        memory: '71.8',
        storage: '60',


    },
    {
        sn: 4,
        serverName: 'Server 4',
        online: false,
        ipAddress: 'IP ADDRESS',
        cpu: '84.4',
        memory: '76.8',
        storage: '40',


    },

]

export const CREATE_FORM = [
    {
        name: 'server Name',
        label: 'server Name',
        type: "text",
        required: false,
        className: " mx-lg-3 w-100 py-4",
        disabled: false,
        className: 'ant-col-lg-24 ant-col-20',
        message: "",
    },
    {
        name: 'server IP',
        type: "text",
        label: 'server IP',
        required: false,
        className: " mx-lg-3 w-100 py-4",
        disabled: false,
        className: 'ant-col-lg-24 ant-col-20',
        message: "",
    },
    {
        name: 'CPU',
        type: "text",
        label: 'Cpu',
        required: false,
        className: " mx-lg-3 w-100 py-4",
        disabled: false,
        className: 'ant-col-lg-24 ant-col-20',
        message: "",
    },
    {
        name: 'storage',
        type: "text",
        label: 'storage',
        required: false,
        className: " mx-lg-3 w-100 py-4",
        disabled: false,
        className: 'ant-col-lg-24 ant-col-20',
        message: "",
    }
]
