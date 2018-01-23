const COLORS = [
    '#6BD1CF',
    '#6B6BCE',
    '#EA4949'
]
const DEFAULT_COLOR = COLORS[0]

const CANNON_ICON = 'assets/cannon.svg'

const EVENTS = [
    {
        label: 'Battle of Wogastisburg',
        description: 'Fatal loss of the Franconians against the slav ruler Samo',
        type: Timeline.TYPE.POINT,
        at: "0631-06-15",
        icon: CANNON_ICON
    }, {
        label: 'Battle of Pressburg',
        description: 'Hungary triumphs over Bavaria',
        type: Timeline.TYPE.POINT,
        at: "0907-06-05",
        icon: CANNON_ICON
    }, {
        label: 'Battle at the Lechfeld',
        description: 'Otto the great beats the Hungarians. End of the Hungarian invasions.',
        type: Timeline.TYPE.POINT,
        at: "0955-07-24",
        icon: CANNON_ICON
    }, {
        label: 'Ita von Formbach-Ratelnberg joins the crusade.',
        description: 'Ita von Formbach-Ratelnberg, mother of Margrave Leopold III, joins the first crusade. She never returns.',
        type: Timeline.TYPE.POINT,
        at: "1098-01-01",
        icon: CANNON_ICON
    }, {
        label: 'Heinrich II. Jasomirgott and his brother Otto von Freising join the crusade.',
        description: 'Heinrich II. Jasomirgott and his brother Otato von Freising join the second crusade. Heinrich later marries a byzantine princess.',
        type: Timeline.TYPE.POINT,
        at: "1147-01-01",
        icon: CANNON_ICON
    }, {
        label: 'Herzog Leopold V. takes command of the entire german forces.',
        description: 'Herzog Leopold V. leads the austrian part of the crusade. After Emperor Friedrich dies in Anatolia, Herzog Leopold takes command of the entire german forces.',
        type: Timeline.TYPE.POINT,
        at: "1190-01-01",
        icon: CANNON_ICON
    }, {
        label: 'Battle at the Leitha',
        description: 'Friedrich II beats the Hungarians and their allies.',
        type: Timeline.TYPE.POINT,
        at: "1246-06-15",
        icon: CANNON_ICON
    }, {
        label: 'Battle of Leitzersdorf',
        description: 'Hungarians defeat Emperor Friedrich III.',
        type: Timeline.TYPE.POINT,
        at: "1484-04-11",
        icon: CANNON_ICON
    }, {
        label: 'Battle of Bicocca',
        description: 'The Habsburgs defeat France.',
        type: Timeline.TYPE.POINT,
        at: "1522-04-29",
        icon: CANNON_ICON
    }, {
        label: 'Battle of Pavia',
        description: 'The Habsburgs defeat France.',
        type: Timeline.TYPE.POINT,
        at: "1525-02-24",
        icon: CANNON_ICON
    }, {
        label: 'Battle of Gravelines',
        description: 'The Habsburgs defeat France.',
        type: Timeline.TYPE.POINT,
        at: "1558-07-13",
        icon: CANNON_ICON
    }, {
        label: 'Battle of Sissek',
        description: 'Austria defeats the Turks.', 
        type: Timeline.TYPE.POINT,
        at: "1593-06-22",
        icon: CANNON_ICON
    }, {
        label: 'Battle of Mezökeresztes',
        description: 'Turkey defeats the Austrians',
        type: Timeline.TYPE.POINT,
        at: "1596-10-23",
        icon: CANNON_ICON
    }
];

const INTERVALS = [{
        label: 'Hungarian Wars',
        type: Timeline.TYPE.INTERVAL,
        from: "0907-01-01",
        to: "0970-01-01",
        color: DEFAULT_COLOR,
        overlap: 1,
        animTriggered: 'rain'
    }, {
        label: 'The First Crusade',
        type: Timeline.TYPE.INTERVAL,
        from: "1096-01-01",
        to: "1099-01-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }, {
        label: 'The Second Crusade',
        type: Timeline.TYPE.INTERVAL,
        from: "1146-01-01",
        to: "1149-01-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }, {
        label: 'The Third Crusade',
        type: Timeline.TYPE.INTERVAL,
        from: "1189-01-01",
        to: "1192-01-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }, {
        label: 'Italy Wars',
        type: Timeline.TYPE.INTERVAL,
        from: "1494-01-01",
        to: "1559-01-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }, {
        label: 'First Austrian-Turk War',
        type: Timeline.TYPE.INTERVAL,
        from: "1526-01-01",
        to: "1555-01-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }, {
        label: 'Second Austrian-Turk War',
        type: Timeline.TYPE.INTERVAL,
        from: "1566-01-01",
        to: "1568-01-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }, {
        label: 'Third Austrian-Turk War',
        type: Timeline.TYPE.INTERVAL,
        from: "1593-01-01",
        to: "1606-01-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }, {
        label: 'Fourth Austrian-Turk War',
        type: Timeline.TYPE.INTERVAL,
        from: "1663-01-01",
        to: "1664-01-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }, {
        label: 'Fifth Austrian-Turk War',
        type: Timeline.TYPE.INTERVAL,
        from: "1683-01-01",
        to: "1699-01-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }, {
        label: 'Sixth Austrian-Turk War',
        type: Timeline.TYPE.INTERVAL,
        from: "1714-01-01",
        to: "1718-01-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }, {
        label: 'Seventh Austrian-Turk War',
        type: Timeline.TYPE.INTERVAL,
        from: "1735-01-01",
        to: "1769-01-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }, {
        label: 'Eighth Austrian-Turk War',
        type: Timeline.TYPE.INTERVAL,
        from: "1787-01-01",
        to: "1792-01-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }]