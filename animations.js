let waypoints = []

INTERVALS.forEach(function (yr){
    let date = yr.from.toString();
    console.log(typeof yr.animTriggered);
    setTimeout(function(){
        if (typeof yr.animTriggered === 'string' || yr.animTriggered instanceof String) {
            console.log('I MADE THE LOOP');
            console.log(date);     
            
            waypoints.push({
                waypoint: 
                    new Waypoint({
                    element: document.getElementById(date),
                    handler: function(direction) {
                        triggerFX[yr.animTriggered].call();
                        console.log(triggerFX[yr.animTriggered].call())
                    },
                    horizontal: true
                })
            })
        
    
        }
    
    
    },200);
    

    triggerFX = {
        rain: function() {
            demo.init();
            document.body.style.background = '#34495e';
            
        }
    }
})

