const yearMs = (1000 * 60 * 60 * 24 * 365);

class Timeline {
    constructor(element, data, textColor) {
        element.classList.add('timeline');
        
        const minDt = new Date(0);
        minDt.setFullYear(0);
        const maxDt = new Date();

        const years = ((maxDt - minDt) / yearMs) -2; // milliseconds
        const w = (years * 12 * 3), // 3px / month
              h = window.innerHeight;
            
        console.log(maxDt)
        console.log(minDt)
        console.log(maxDt - minDt)
        console.log(years)

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
                    .attr("width", ((12 * 3 * (years - i)) - 20))
                    .attr("height", 5)
                    .attr("transform", "translate(" + (((12 * 3) * i) + 25 + ((i)*-0.0111)) + "," + ((h/2) + 10) + ")")

                svg.append("svg:text")
                    .text(i.toString())
                    .attr("transform", "translate(" + (((12 * 3) * i) - 25) + "," + ((h/2) + 10) + ")")
                    .attr("fill", textColor);
                break;
            } else if (i%10==0) {
            svg.append("svg:rect")
                .attr("class", "x axis")
                .attr("width", (12 * 3 * 10) - 50)
                .attr("height", 5)
                .attr("transform", "translate(" + (((12 * 3) * i) + 25 + ((i)*-0.0111)) + "," + ((h/2) + 10) + ")")

            svg.append("svg:text")
                .text(i.toString())
                .attr("transform", "translate(" + (((12 * 3) * i) - 25) + "," + ((h/2) + 10) + ")")
                .attr("fill", textColor);                

            }
        }


        svg.append("svg:g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + (h/2) + ")")
            .call(xAxis);

      svg.selectAll(".tick")
        .style("font", "14px arial")
        .style("font-weight", "bold")     
        .style("color", textColor)           
        

   /*         
            .attr("width", 10)
            .attr("transform", "translate(-10,0)")
            .attr("height", 5)
            .attr("fill", "black");

        svg.selectAll("text")
            .style("text-anchor", "end")
            .attr("dy", "-2.5");*/

        let intervalData = data.filter(_ => _.type === Timeline.TYPE.INTERVAL);

        let intervals = svg.append("svg:rect")
            .data(intervalData)
            .enter()
            .append('svg:rect')
            .attr('height', 5)
            .attr('fill', d => {return d.color})
            .attr('class', 'item')
            .attr("transform", d => {return `translate(${this.date(d.from)}, ${h-30})`})
            .attr('width', d => (this.date(d.to) - this.date(d.from)));


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
