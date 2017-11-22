const yearMs = (1000 * 60 * 60 * 24 * 365);

class Timeline {
    constructor(element, INTERVALS, EVENTS) {
        element.classList.add('timeline');
        INTERVALS = this.computeOverlap(INTERVALS);

        const minDt = new Date(0);
        minDt.setFullYear(0);
        const maxDt = new Date();

        const years = ((maxDt - minDt) / yearMs) -2; // milliseconds
        const w = (years * 12), // 3px / month
              h = vhToPx(44.72);
            
        const axisY = vhToPx(37)

        const x = d3.scaleTime()
            .range([0, w])
            .domain([minDt, maxDt]);

        const svgContainer = d3.select(element)
            .append('svg:svg')
            .attr('width' , w + 200)
            .attr('height' , h);
        
        const svg = svgContainer
            .append('svg:svg')
            .attr('width' , w)
            .attr('height' , h)
            .attr('translate' , 'transform(100, 0)');

        // fake axis
        for (var i=0; i<(years); i++) {
            if (i%100==0) {
                let factor = 1
                if (i+100 > years){
                    factor = (years - i) / 100

                    svg.append('svg:text')
                        .text(Math.round(years))
                        .attr('class' , 'x axis-text')
                        .attr('x' , ((12) * years))
                        .attr('y' , (axisY + 8));
                }

                svg.append('svg:rect' )
                    .attr('class' , 'x axis' )
                    .attr('width' , (12 * 10 * 10 * factor) - 60)
                    .attr('height' , 3)
                    .attr('x' , ((12) * i) + 30) // magic numbers are magical
                    .attr('y' , axisY);

                svg.append('svg:text')
                    .text(i)
                    .attr('class' , 'x axis-text' )
                    .attr('x' , ((12) * i)) // magic numbers are magical
                    .attr('y' , (axisY + 8));

                    //.attr(' transform' , ' translate('  + (((12 ) * i) + 25 + ((i)*-0.0111)) + ' ,'  + (axisY + 13) + ' )' )
            }
        }

        // intervals
        svg.selectAll('rect #intervals')
            .data(INTERVALS)
            .enter()
            .append('rect')
            .attr('height', '2vh')
            .attr('class', 'interval')
            .attr('fill', d => (d.color))
            .attr('transform', d => (`translate(${this.date(d.from)}, ${axisY -(vhToPx(4) + (vhToPx(2)*d.overlap))})`))
            .attr('width', d => {return this.date(d.to) - this.date(d.from)})

        svg.selectAll('rect #intervals')
            .data(INTERVALS)
            .enter()
            .append('svg:text')
            .text(d => (d.label))
            .attr('class', 'interval-label interval-text')
            .attr('fill', d => (d.color))
            .attr('transform' , d => {console.log((d.from)); return `translate(${this.date(d.from)}, ${axisY - (vhToPx(10.6) + (vhToPx(4)*d.overlap))})`});
        
        svg.selectAll('rect #intervals' )
            .data(INTERVALS)
            .enter()
            .append('svg:text')
            .text(d => (this.yearString(d.from) + ' - ' + this.yearString(d.to)))
            .attr('class', 'interval-label interval-years')
            .attr('fill', 'white')
            .attr('transform' , d => {return `translate(${this.date(d.from)}, ${axisY - (vhToPx(12.6) + (vhToPx(4)*d.overlap))})`});

        const eventLabel = d3.select("body")
            .append("div")
            .attr("id", "tooltip")
            .attr('width', '64px')
            .attr('height', '64px')
            .style('opacity', 0)

        // events
        const showEventLabel = (d) => {
            const x = this.date(d.at);
            const y = h/2 + 20;
            console.log('over')

            eventLabel.attr('transform', `translate(${x} ,${y})`)
                .attr('fill', 'white')
                .text(d.label)
        
            eventLabel.transition()
                .duration(200)
                .style('opacity', 1)
        }

        const hideEventLabel = (d) => {
            eventLabel.transition()
                .duration(200)
                .style('opacity', 0)
        }

        svg.selectAll('rect #events' )
            .data(EVENTS)
            .enter()
            .append('rect')
            .attr('height', 10)
            .attr('width', 4)
            .attr('class', 'event')
            .attr('fill', 'white')
            .attr('transform', d => (`translate(${this.date(d.at)}, ${axisY})`))

        svg.selectAll('rect #events' )
            .data(EVENTS)
            .enter()
            .append('svg:image')
            .attr('xlink:href', d => (d.icon))
            .attr('fill', 'white')
            .attr('height', '1.3vh')
            .attr('transform' , d => (`translate(${this.date(d.at) - 12}, ${axisY + 15})`))
            .on('mouseover', showEventLabel)
            .on('mouseout', hideEventLabel);

        /*
            .append('svg:text')
            .text(d => (d.label))
            .attr('width', 10)
            .attr('class', 'event-label')
            .attr('fill', d => (d.color))
        */
    }
    computeOverlap(data) {
        const context = this
        data.forEach(function(dataItem, index) {
            let offset = 1
            let comparedItem = data[index + offset];
            
            if(!comparedItem) { return data }
            while(context.date(comparedItem.from) < context.date(dataItem.to)) {
                data[index + offset].overlap++;
                offset ++;
                comparedItem = data[index + offset];

                if(!comparedItem) { return data }
            }
        });
        return data;
    }
    yearString(d) {
        return parseInt(d.split('-')[0]).toString()
    }
    date(d) {
        return (((new Date(d) / yearMs) * 12 ) + ((new Date(0).setFullYear(1, 0, 0) / yearMs) * 12 ) * -1)
    }
    getPointMinDt(p) {
        return p.type === Timeline.TYPE.POINT ? new Date(p.at) : new Date(p.from);
    }
    getPointMaxDt(p) {
        return p.type === Timeline.TYPE.POINT ? new Date(p.at) : new Date(p.to);
    }
    onVizChange(fn) {
        this.onVizChangeFn = fn;
        return this;
    }
}

Timeline.TYPE = {
    POINT: Symbol(),
    INTERVAL: Symbol()
};

 function vhToPx(value) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = (y*value)/100;
    return result;
  }