class Timeline {
    constructor(element, data) {
        element.classList.add('timeline');
        
        const minDt = new Date(0)
        const maxDt = new Date()
        minDt.setFullYear(1, 0, 0)

        const years = ((maxDt - minDt) / (1000 * 60 * 60 * 24 * 365)) // milliseconds

        const w = (years * 12 * 3), // 3px / month
              h = 500;

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
            .attr("width", w)
            .attr("height", h+50);
      
        for (var i=0; i<(years/10); i++) {
            svg.append("svg:rect")
                .attr("class", "x axis")
                .attr("width", (12 * 3 * 10))
                .attr("height", 5)
                .attr("transform", "translate(" + (12 * 3 * 10) * i + "," + h + ")");
        }


        svg.append("svg:g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + h + ")")
            .call(xAxis);

          svg.selectAll(".tick")
            .append("defs")
            .append("mask")
            .append("rect")
            
            .attr("width", 10)
            .attr("transform", "translate(-10,0)")
            .attr("height", 5)
            .attr("fill", "black");
        
          svg.selectAll("text")
            .style("text-anchor", "end")
            .attr("dy", "-2.5");

        let intervalData = data.filter(_ => _.type === Timeline.TYPE.INTERVAL)

        let intervals = svg.selectAll("rect")
            .data(intervalData)
            .enter()
            .append('svg:rect')
            .attr('height', 5)
            .attr('fill', d => {return d.color})
            .attr('class', 'item')
            .attr("transform", d => {return `translate(${this.date(d.from)}, ${h-20})`})
            .attr('width', d => (this.date(d.to) - this.date(d.from)));

        console.log ("drawing");

    }
    date(d) {
        let res = ((new Date(d) / (1000 * 60 * 60 * 24 * 365)) * 12 * 3)+ (new Date(0).setFullYear(1, 0, 0) * -1)
        console.log(res)
        return (((new Date(d) / (1000 * 60 * 60 * 24 * 365)) * 12 * 3) + ((new Date(0).setFullYear(1, 0, 0) / (1000 * 60 * 60 * 24 * 365)) * 12 * 3) * -1)
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
