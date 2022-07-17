
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
        sn:"20",
        appName:'APPLICATION',
        online:true,
        servers:[
            {
            name:'server 1'
        },
        {
            name:'server 2'
        },
        {
            name:'server 3'
        }
    ],
        date:new Date(2016 , 6, 12).toISOString().substring(0, 10),
        status:'good'
    },
    {
        sn:"30",
        appName:'APPLICATION 2',
        online:false,
        servers:[
        {
            name:'server 1'
        },
        {
            name:'server 2'
        },
        {
            name:'server 3'
        }
    ],
        date:new Date(2018 , 7 , 17).toISOString().substring(0, 10),
        status:'bad'
    }
]


