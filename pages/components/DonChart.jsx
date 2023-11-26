import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import * as d3 from 'd3';

const DonChart = () => {
  const pieData = [
    {name: 'Angel Investor', value: 48, color: '#CBB2FF'},
    {name: 'VC Fund', value: 26, color: '#0288D1'},
    {name: 'Family Office', value: 7, color: '#BF360C'},
    {name: 'Syndicate', value: 13, color: '#F4511E'},
    {name: 'Other', value: 19, color: '#F9A825'},
  ];
  

  useEffect(() => {
    bakeDonut(pieData);

function bakeDonut(d) {
  let activeSegment;
  const data = d.sort( (a, b) => b['value'] - a['value']),
        viewWidth = 500,
        viewHeight = 300,
        svgWidth = viewHeight,
        svgHeight = viewHeight,
        thickness = 40,
        colorArray = data.map(k => k.color),
        el = d3.select('.card-2'),
        radius = Math.min(svgWidth, svgHeight) / 2,
        color = d3.scaleOrdinal()
          .range(colorArray);

      const max = d3.max(data, (maxData) => maxData.value );

      const svg = el.append('svg')
      .attr('viewBox', `0 0 ${viewWidth + thickness} ${viewHeight + thickness}`)
      .attr('class', 'pie')
      .attr('width', viewWidth)
      .attr('height', svgHeight);

      const g = svg.append('g')
      .attr('transform', `translate( ${ (svgWidth / 2) + (thickness / 2) }, ${ (svgHeight / 2) + (thickness / 2)})`);

      const arc = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius);

      const arcHover = d3.arc()
      .innerRadius(radius - ( thickness + 5 ))
      .outerRadius(radius + 8);

      const pie = d3.pie()
      .value(function(pieData) { return pieData.value; })
      .sort(null);


      const path = g.selectAll('path')
      .attr('class', 'data-path')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'data-group')
      .each(function(pathData, i) {
        const group = d3.select(this)

        group.append('text')
          .text(`${pathData.data.value}`)
          .attr('class', 'data-text data-text__value')
          .attr('text-anchor', 'middle')
          .attr('dy', '1rem')

        group.append('text')
          .text(`${pathData.data.name}`)
          .attr('class', 'data-text data-text__name')
          .attr('text-anchor', 'middle')
          .attr('dy', '3.5rem')

        // Set default active segment
        if (pathData.value === max) {
          const textVal = d3.select(this).select('.data-text__value')
          .classed('data-text--show', true);

          const textName = d3.select(this).select('.data-text__name')
          .classed('data-text--show', true);
        }

      })
      .append('path')
      .attr('d', arc)
      .attr('fill', (fillData, i) => color(fillData.data.name))
      .attr('class', 'data-path')
      .on('mouseover', function() {
        const _thisPath = this,
              parentNode = _thisPath.parentNode;

        if (_thisPath !== activeSegment) {

          activeSegment = _thisPath;

          const dataTexts = d3.selectAll('.data-text')
          .classed('data-text--show', false);

          const paths = d3.selectAll('.data-path')
          .transition()
          .duration(250)
          .attr('d', arc);

          d3.select(_thisPath)
            .transition()
            .duration(250)
            .attr('d', arcHover);

          const thisDataValue = d3.select(parentNode).select('.data-text__value')
          .classed('data-text--show', true);
          const thisDataText = d3.select(parentNode).select('.data-text__name')
          .classed('data-text--show', true);
        }


      })
      .each(function(v, i) {
        if (v.value === max) {
          const maxArc = d3.select(this)
          .attr('d', arcHover);
          activeSegment = this;
        }
        this._current = i;
      });

      const legendRectSize = 15;
      const legendSpacing = 10;

      const legend = svg.selectAll('.legend')
      .data(color.domain())
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', function(legendData, i) {
        const itemHeight =    legendRectSize + legendSpacing;
        const offset =        legendRectSize * color.domain().length;
        const horz =          svgWidth + 80;
        const vert =          (i * itemHeight) + legendRectSize + (svgHeight - offset) / 2;
        return `translate(${horz}, ${vert})`;
      });

      legend.append('circle')
        .attr('r', legendRectSize / 2)
        .style('fill', color);

      legend.append('text')
        .attr('x', legendRectSize + legendSpacing)
        .attr('y', legendRectSize - legendSpacing)
        .attr('class', 'legend-text')
        .text( (legendData) => legendData )
    }

  }, []); // Empty dependency array ensures this effect runs once on mount and once on unmount

};

export default DonChart;
