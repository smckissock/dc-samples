'use strict';

d3.csv("data/foreignAssistance.csv", function (data) {

    data.forEach(function (d) {
        d.amount = +d.amount;

        if (d.category == "NULL")
            d.category = "Unspecified";
        if (d.sector == "NULL")
            d.sector = "Unspecified";
    });
    var facts = crossfilter(data);
   
    var lightBlue = ['#9ecae1'];
    
    var fiscalYearDim = facts.dimension(function (d) { return d.fiscalYear; });
    var fiscalYearGroupSum = fiscalYearDim.group().reduceSum(function (fact) { return fact.amount; });
                   
    dc.barChart("#dc-chart-fiscalYear")
        .width(700) // bootstrap default is 1170
        .height(200).margins({ top: 10, right: 10, bottom: 20, left: 100 })
        .dimension(fiscalYearDim)
        .group(fiscalYearGroupSum)
        .transitionDuration(500)
        .centerBar(true)
        .gap(10)  // Gap between bars
        .filter([2005.5, 2015.5]) // Preset filter to 2013
        .x(d3.scale.linear().domain([2005.5, 2015.5]))
        .elasticY(true)
        .xAxis().tickFormat(d3.format("d")); // No commas for thousands

    var appropriationTypeDim = facts.dimension(function (d) {
        if (d.fiscalYearType.indexOf("Base") != -1)
            return "Base";
        if (d.fiscalYearType.indexOf("Supp") != -1)
            return "Supplemental";
        return "Request";
    });

    var appropriationTypeGroupSum = appropriationTypeDim.group().reduceSum(function (fact) { return fact.amount; });

    dc.pieChart("#dc-chart-appropriationType")
        .width(200)
        .height(200)
        .radius(80)
        .innerRadius(20) // for donut
        .dimension(appropriationTypeDim)
        .group(appropriationTypeGroupSum);

    new RowChart(facts, "operatingUnit", "amount", 250, 10);
    new RowChart(facts, "agency", "amount", 250, 10);
    new RowChart(facts, "category", "amount", 250, 10);
    new RowChart(facts, "sector", "amount", 250, 10);

    dc.renderAll();
});


var RowChart = function (facts, attribute, measure, width, maxItems) {
    this.dim = facts.dimension(dc.pluck(attribute));
    this.group = this.dim.group().reduceSum(function (d) { return d.amount; });

    dc.rowChart("#dc-chart-" + attribute)
        .dimension(this.dim)
        .group(this.group)
        .data(function (measure) { return measure.top(maxItems); })
        .width(width)
        .height(maxItems * 30)
        .margins({ top: 0, right: 10, bottom: 20, left: 10 })
        .elasticX(true)
        .ordinalColors(['#9ecae1'])
        .labelOffsetX(5)
        //.label(function (d) { return "!!"; }) // return dashboard.label(d, that.chart, dashboard.all, lookupDimension); })
        //.title(function (d) { return "!!"; }) //dashboard.title(d, that.chart, dashboard.all, lookupDimension); })
        .xAxis().ticks(4).tickFormat(d3.format(".2s"));
    debugger;
}