'use strict';


d3.csv("data/foreignAssistance.csv", function (data) {
    
    data.forEach(function (d) {
        d.amount = +d.amount;
    });

    var facts = crossfilter(data);

    var totalGroup = facts.groupAll().reduce(
        function (p, v) {
            p += +v.amount;
            return p;
        },
        function (p, v) {
            p -= +v.amount;
            return p;
        },
        function () { return 0 }
    );

    var billion = 1000000000;

    dc.numberDisplay("#dc-chart-total")
        .group(totalGroup)
        .valueAccessor(function (d) {
            return d / billion; 
        })
        .formatNumber( function (d) { return Math.round(d) + " Billion"; });
    
    var fiscalYearDim = facts.dimension(dc.pluck('fiscalYear'));
    var fiscalYearGroupSum = fiscalYearDim.group().reduce(
        function (p, v) {
            p[v.appropriationType] = (p[v.appropriationType] || 0) + v.amount;
            return p;
        },
        function (p, v) {
            p[v.appropriationType] = (p[v.appropriationType] || 0) - v.amount;
            return p;
        },
        function () { return {}; }
    );

    var bar = dc.barChart("#dc-chart-fiscalYear")
        .width(650) // bootstrap default is 1170
        .height(200).margins({ top: 10, right: 30, bottom: 20, left: 50 })
        .dimension(fiscalYearDim)
        .group(fiscalYearGroupSum, "Base").valueAccessor(function (d) { return d.value["Base"]; })
        .stack(fiscalYearGroupSum, "Supplemental", function (d) { return d.value["Supplemental"]; })
        .stack(fiscalYearGroupSum, "Request", function (d) { return d.value["Request"]; })
        .transitionDuration(500)
        .legend(dc.legend().x(60).y(20))
        .centerBar(true)
        .gap(10)  // Gap between bars
        .filter([2005.5, 2015.5]) 
        .x(d3.scale.linear().domain([2005.5, 2015.5]))
        .elasticY(true);

    bar.xAxis().tickFormat(d3.format("d"));
    bar.yAxis().tickFormat(function (v) { return v / billion + " B"; });

    var appropriationTypeDim = facts.dimension(dc.pluck('appropriationType'));
    var appropriationTypeGroupSum = appropriationTypeDim.group().reduceSum(function (fact) { return fact.amount; });
    dc.pieChart("#dc-chart-appropriationType")
        .width(200)
        .height(200)
        .radius(80)
        .dimension(appropriationTypeDim)    
        .group(appropriationTypeGroupSum);

    new RowChart(facts, "operatingUnit", 300, 100);
    new RowChart(facts, "agency", 300, 10);
    new RowChart(facts, "category", 300, 10);
    new RowChart(facts, "sector", 300, 50);
    new RowChart(facts, "account", 300, 50);

    dc.renderAll();
});


var RowChart = function (facts, attribute, width, maxItems) {
    this.dim = facts.dimension(dc.pluck(attribute));
    this.group = this.dim.group().reduceSum(function (d) { return d.amount; });

    dc.rowChart("#dc-chart-" + attribute)
        .dimension(this.dim)
        .group(this.group)
        .data(function(measure) { return measure.top(maxItems); })
        .width(width)
        .height(maxItems * 22)
        .margins({ top: 0, right: 10, bottom: 20, left: 20 })
        .elasticX(true)
        .ordinalColors(['#9ecae1'])
        .labelOffsetX(5)
        .xAxis().ticks(4).tickFormat(d3.format(".2s"));
}