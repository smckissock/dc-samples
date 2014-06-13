'use strict';

d3.csv("data/foreignAssistance.csv", function (data) {

    data.forEach(function (d) {
        d.amount = +d.amount;

        if (d.category == "NULL")
            d.category = "Unspecified";
        if (d.sector == "NULL")
            d.sector = "Unspecified";
    });
    console.log(data);

    var facts = crossfilter(data);
    console.log(facts);

    var fiscalYearDim = facts.dimension(function (d) { return d.fiscalYear; });
    var fiscalYearGroupSum = fiscalYearDim.group().reduceSum(function (fact) { return fact.amount; });

    var operatingUnitDim = facts.dimension(function (d) { return d.operatingUnit; });
    var operatingUnitGroupSum = operatingUnitDim.group().reduceSum(function (fact) { return fact.amount; });

    var agencyDim = facts.dimension(function (d) { return d.agency; });
    var agencyGroupSum = agencyDim.group().reduceSum(function (fact) { return fact.amount; });

    var categoryDim = facts.dimension(function (d) { return d.category; });
    var categoryGroupSum = categoryDim.group().reduceSum(function (fact) { return fact.amount; });

    var sectorDim = facts.dimension(function (d) { return d.sector; });
    var sectorGroupSum = sectorDim.group().reduceSum(function (fact) { return fact.amount; });

    var appropriationTypeDim = facts.dimension(function (d) {
        if (d.fiscalYearType.indexOf("Base") != -1)
            return "Base";
        if (d.fiscalYearType.indexOf("Supp") != -1)
            return "Supplemental";
        return "Request";
    });
    var appropriationTypeGroupSum = appropriationTypeDim.group().reduceSum(function (fact) { return fact.amount; });

    var lightBlue = ['#9ecae1'];


    var operatingUnitChart = dc.rowChart("#dc-operating-unit-row-chart");
    var agencyChart = dc.rowChart("#dc-agency-row-chart");
    var categoryChart = dc.rowChart("#dc-category-row-chart");
    var sectorChart = dc.rowChart("#dc-sector-row-chart");
    var appropriationTypeChart = dc.pieChart("#dc-appropriation-type-pie-chart");

    dc.barChart("#dc-fiscal-year-bar-chart")
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

    appropriationTypeChart
        .width(200)
        .height(200)
        .radius(80)
        .innerRadius(20) // for donut
        .dimension(appropriationTypeDim)
        .group(appropriationTypeGroupSum);

    operatingUnitChart
        .width(250)
        .height(1000).margins({ top: 0, right: 10, bottom: 20, left: 10 })
        .dimension(operatingUnitDim)
        .group(operatingUnitGroupSum)
        .transitionDuration(500)
        .data(function (measure) { return operatingUnitGroupSum.top(40); })
        .ordinalColors(lightBlue)
        .elasticX(true)
        .xAxis().tickFormat(d3.format(".2s")); // Billioms

    agencyChart
        .width(250)
        .height(200).margins({ top: 0, right: 10, bottom: 20, left: 10 })
        .dimension(agencyDim)
        .group(agencyGroupSum)
        .transitionDuration(500)
        .data(function (measure) { return agencyGroupSum.top(40); })
        .ordinalColors(lightBlue)
        .elasticX(true)
        .xAxis().tickFormat(d3.format(".2s"));

    categoryChart
        .width(250)
        .height(300).margins({ top: 0, right: 10, bottom: 20, left: 10 })
        .dimension(categoryDim)
        .group(categoryGroupSum)
        .transitionDuration(500)
        .data(function (measure) { return categoryGroupSum.top(40); })
        .ordinalColors(lightBlue)
        .elasticX(true)
        .xAxis().tickFormat(d3.format(".2s"));

    sectorChart
        .width(250)
        .height(1000).margins({ top: 0, right: 10, bottom: 20, left: 10 })
        .dimension(sectorDim)
        .group(sectorGroupSum)
        .transitionDuration(500)
        .data(function (measure) { return sectorGroupSum.top(40); })
        .ordinalColors(lightBlue)
        .elasticX(true)
        .xAxis().tickFormat(d3.format(".2s"));

    dc.renderAll();
});