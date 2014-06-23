

d3.csv("data/foreignAssistance.csv", function (data) {
    data.forEach(function (d) {
        d.amount = +d.amount; // cast to numbers
    });
    // put data in crossfilter
    var facts = crossfilter(data);

    // one group for grand total
    var totalGroup = facts.groupAll().reduce(
        function (p, v) {
            return p += v.amount;
        },
        function (p, v) {
            return p -= v.amount;
        },
        function () { return 0 }
    );
    // or use convenience function 
    //var totalGroup = facts.groupAll().reduceSum(dc.pluck("amount"));

    var billion = 1000000000;
    dc.numberDisplay("#dc-chart-total")
        .group(totalGroup)
        .valueAccessor(function (d) {
            return d / billion; 
        })
        .formatNumber(function (d) { return Math.round(d) + " Billion"; });

    var appropriationTypeColors =
         ["#74C365", // light green 
         "#006600",  // dark green 
         "#007BA7"]; // blue
        
    var appropriationTypeDim = facts.dimension(dc.pluck('appropriationType'));
    var appropriationTypeGroupSum =
        appropriationTypeDim.group().reduceSum(dc.pluck("amount"));
    var pie = dc.pieChart("#dc-chart-appropriationType")
        .dimension(appropriationTypeDim)
        .group(appropriationTypeGroupSum)
        .width(200)
        .height(200)
        .radius(80)
        .ordinalColors(appropriationTypeColors)
      
    var fiscalYearDim = facts.dimension(dc.pluck('fiscalYear'));
    var fiscalYearGroupSum = fiscalYearDim.group().reduce(
        function (p, v) {
            p[v.appropriationType] = (p[v.appropriationType] || 0) + +v.amount;
            return p;
        },
        function (p, v) {
            p[v.appropriationType] = (p[v.appropriationType] || 0) - +v.amount;
            return p;
        },
        function () { return {"Base": 0, "Supplemental": 0, "Request": 0 }; }
    );

    var bar = dc.barChart("#dc-chart-fiscalYear")
        .dimension(fiscalYearDim)
        .group(fiscalYearGroupSum, "Base").valueAccessor(function (d) { return d.value.Base; })
        .stack(fiscalYearGroupSum, "Supplemental", function (d) { return d.value.Supplemental; })
        .stack(fiscalYearGroupSum, "Request", function (d) { return d.value.Request; })
        .width(650) 
        .height(200).margins({ top: 10, right: 30, bottom: 20, left: 50 })
        .legend(dc.legend().x(60).y(20))
        .gap(10)  // space between bars
        .centerBar(true)
        .filter([2005.5, 2015.5])
        .x(d3.scale.linear().domain([2005.5, 2015.5]))
        .elasticY(true)
        .ordinalColors(appropriationTypeColors);

    // These don't return the chart, so can't chain them 
    bar.xAxis().tickFormat(d3.format("d")); // need "2005" not "2,005" 
    bar.yAxis().tickFormat(function (v) { return v / billion + " B"; });

    new RowChart(facts, "operatingUnit", 300, 100);
    new RowChart(facts, "agency", 300, 10);
    new RowChart(facts, "category", 300, 10);
    new RowChart(facts, "sector", 300, 50);
    new RowChart(facts, "account", 300, 50);

    dc.renderAll();
});

var RowChart = function (facts, attribute, width, maxItems) {
    this.dim = facts.dimension(dc.pluck(attribute));
    dc.rowChart("#dc-chart-" + attribute)
        .dimension(this.dim)
        .group(this.dim.group().reduceSum(dc.pluck("amount")))
        .data(function(d) { return d.top(maxItems); })
        .width(width)
        .height(maxItems * 22)
        .margins({ top: 0, right: 10, bottom: 20, left: 20 })
        .elasticX(true)
        .ordinalColors(['#9ecae1']) // light blue
        .labelOffsetX(5)
        .xAxis().ticks(4).tickFormat(d3.format(".2s"));
}



