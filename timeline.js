const yearMs = (1000 * 60 * 60 * 24 * 365);

class Timeline {
    constructor(element, INTERVALS, EVENTS) {
        element.classList.add('timeline');
        
        const minDt = new Date(0);
        minDt.setFullYear(0);
        const maxDt = new Date();

        const years = ((maxDt - minDt) / yearMs) -2; // milliseconds
        const w = (years * 12 * 3), // 3px / month
              h = window.innerHeight;

        const x = d3.scaleTime()
            .range([0, w])
            .domain([minDt, maxDt]);

        const xAxis = d3.axisBottom(x).ticks(years/10).tickFormat(function (d) {
            if (d.getFullYear() % 10 == 0) {
                return d.getFullYear()
            } else {
                return ''
            }
        })

        const svg = d3.select(element).append("svg:svg")
            .attr("width", w+1)
            .attr("height", h-20);
      
        for (var i=0; i<(years); i++) {
            if ((Math.ceil(years/10) * 10) - i == 10) {
                svg.append("svg:rect")
                    .attr("class", "x axis")
                    .attr("width", ((12 * 3 * (years - i)) - 25))
                    .attr("height", 5)
                    .attr("transform", "translate(" + (((12 * 3) * i) + 25 + ((i)*-0.0111)) + "," + ((h/2) + 10) + ")")

                /*svg.append("svg:text")
                    .text(i.toString())
                    .attr("transform", "translate(" + (((12 * 3) * i) - 25) + "," + ((h/2) + 10) + ")");*/

                break;
            } else if (i%10==0) {
                svg.append("svg:rect")
                    .attr("class", "x axis")
                    .attr("width", (12 * 3 * 10) - 50)
                    .attr("height", 5)
                    .attr("transform", "translate(" + (((12 * 3) * i) + 25 + ((i)*-0.0111)) + "," + ((h/2) + 10) + ")")

                /*svg.append("svg:text")
                    .text(i.toString())
                    .attr('x', (((12 * 3) * i) - 25) )
                    .attr('y', ((h/2) + 10))
                    .style("font", "14px arial")
                    .style("font-weight", "bold")
                    .attr("transform", "translate(" + (((12 * 3) * i) - 25) + "," + ((h/2) + 10) + ")");*/


            }
        }


        svg.append("svg:g")
            .attr("class", "x")
            .attr("transform", "translate(0," + (h/2) + ")")
            .attr('fill', 'rgba(0,0,0,0)')
            .call(xAxis);

   /*         
            .attr("width", 10)
            .attr("transform", "translate(-10,0)")
            .attr("height", 5)
            .attr("fill", "black");

        svg.selectAll("text")
            .style("text-anchor", "end")
            .attr("dy", "-2.5");*/

        let intervalContainer = svg.append('rect') 
            .attr('id', 'intervals');

        svg.selectAll("rect #intervals")
            .data(INTERVALS)
            .enter()
            .append('rect')
            .attr('height', 5)
            .attr('class', 'item')
            .attr('fill', d => (d.color))
            .attr('transform', d => (`translate(${this.date(d.from)}, ${h/2 - 20})`))
            .attr('width', d => {console.log(this.date(d.to) - this.date(d.from)); return this.date(d.to) - this.date(d.from)});
        
        svg.selectAll("rect #intervals")
            .data(INTERVALS)
            .enter()
            .append('svg:text')
            .text(d => (d.label))
            .attr('class', 'label')
            .attr('fill', d => (d.color))
            .attr("transform", d => (`translate(${this.date(d.from) + ((this.date(d.to) - this.date(d.from))/2)}, ${h/2 - 40})`));

    }
    date(d) {
        return (((new Date(d) / yearMs) * 12 * 3) + ((new Date(0).setFullYear(1, 0, 0) / yearMs) * 12 * 3) * -1)
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
