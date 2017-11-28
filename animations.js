let waypoints = []
INTERVALS.forEach(function (yr){
    // var date = parseInt(yr.from.split('-')[0]).toString()
    let date = yr.from
    if (typeof yr.animTriggered === 'string' || yr.animTriggered instanceof String) {
        console.log('I MADE THE LOOP')
        console.log(date)        
        waypoints.push({
            waypoint: 
                new Waypoint({
                element: document.getElementById(date),
                handler: function(direction) {
                  console.log('Scrolled to waypoint!')
            }
        })
        })
    }
})

