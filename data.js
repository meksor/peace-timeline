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
    }, {
        label: 'Siege of Belgrade',
        description: 'The Ottoman Empire suffered several major defeats at war with the Holy League which significantly contributed to development of the crisis which resulted with the deposition of sultan Mehmed IV to advance into Ottoman territory. The Holy League decided to use this crisis to attack the Ottoman Empire. One of the main goals was the capture of Belgrade, the strongest Ottoman strongholds in Europe at that time.',
        type: Timeline.TYPE.POINT,
        at: "1688-07-30",
        icon: CANNON_ICON
    }, {
        label: 'Siege of Belgrade',
        description: 'In 1690 the Ottomans recaptured Niš and by October 6, they had reached Belgrade. The siege lasted only for 6 days as the Austrians were forced to surrender when their main powder magazine was hit by a Turkish shell and exploded.',
        type: Timeline.TYPE.POINT,
        at: "1690-10-06",
        icon: CANNON_ICON
    }, {
        label: 'Landing at Barcelona',
        description: 'When King Charles II of Spain died without an heir in November 1700, he was succeeded in Madrid by the French prince Philip V. This successor was contested by England, the Dutch Republic, the Holy Roman Empire and Portugal which favored Austrian prince Charles III as new King, leading to the War of the Spanish Succession.',
        type: Timeline.TYPE.POINT,
        at: "1704-03-27",
        icon: CANNON_ICON
    }, {
        label: 'Siege of Barcelona',
        description: 'Following the outbreak of the war, Catalonia had been regarded as a base of support by the Allies in their campaign to put Archduke Charles on the Spanish throne in opposition to the rival French candidate Philip V. Barcelona was recommended as a potential target by the region\'s former Governor Prince George of Hesse-Darmstadt.',
        type: Timeline.TYPE.POINT,
        at: "1705-09-14",
        icon: CANNON_ICON
    }, {
        label: 'Siege of Barcelona',
        description: 'The Siege of Barcelona took place between 3 and 27 April 1706 during the War of the Spanish Succession when a Franco-Spanish army led by Philip V laid siege to Barcelona in an attempt to recapture it following its fall to an English-led Allied army the previous year. The siege was abandoned, following the appearance of a large English fleet under the command of John Leake carrying reinforcements.',
        type: Timeline.TYPE.POINT,
        at: "1706-03-04",
        icon: CANNON_ICON
    }, {
        label: 'Siege of Belgrade',
        description: 'While the situation was rather worrying for the imperial troops, on August 14, Belgrade was suddenly shaken by a powerful explosion: a mortar shell struck the powder magazine inside the fortress and 3,000 defenders were killed in the explosion. At this time, Eugene ordered an attack on the Ottomans for the next day: at midnight, the attack began with infantry in the center and cavalry on the wings.',
        type: Timeline.TYPE.POINT,
        at: "1717-07-16",
        icon: CANNON_ICON
    }, {
        label: 'Siege of Belgrade',
        description: 'After a siege of 51 days Count Wallis, the Austrian commander, ordered the burning of the Danubean fleet under his command and sued for peace. Changing the borders during the peace talks caused no big problem: Austria agreed to cede territories to the Ottoman side.',
        type: Timeline.TYPE.POINT,
        at: "1739-07-16",
        icon: CANNON_ICON
    }, {
        label: 'Siege of Brussels',
        description: 'A French army under the overall command of Maurice de Saxe, in a bold and innovative winter campaign besieged and captured the city of Brussels, which was then the capital of the Austrian Netherlands, from its Austrian garrison.',
        type: Timeline.TYPE.POINT,
        at: "1746-01-01",
        icon: CANNON_ICON
    }, {
        label: 'Siege of Ancona',
        description: 'An Austrian force commanded by Austrian Major General Menrad Freiherr von Geppert besieged Ancona. The French lost 500 men to the Anglo-Austrian bombardment before they ultimately surrendered.',
        type: Timeline.TYPE.POINT,
        at: "1815-03-05",
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
        label: 'War of the Austrian Succession',
        type: Timeline.TYPE.INTERVAL,
        from: "1740-09-01",
        to: "1748-10-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }, {
        label: 'Eighth Austrian-Turk War',
        type: Timeline.TYPE.INTERVAL,
        from: "1787-01-01",
        to: "1792-01-01",
        color: DEFAULT_COLOR,
        overlap: 1
    }
]