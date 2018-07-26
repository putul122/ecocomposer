import React from 'react'
// import ReactDOM from 'react-dom'
// import joint from 'jointjs/index'
import $ from 'jquery/dist/jquery'
// import _ from 'lodash'
import * as d3 from 'd3'
import './applicationModelComponent.scss'

// let colors = d3.scaleOrdinal(d3.schemeCategory10)
let width = 950
let height = 2000
// let nodeWidth = 100
// let nodeHeight = 50
// let circleRadius = 2
let diagramLayout
let simulation
// var divStyle = {
//     'margin-top': '-870px'
// }

function forceInitialize (graphData) {
    // container = svg.append("g")
    // function zoomed () {
    //     container.attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')')
    // }

    // let zoom = d3.behavior.zoom()
    // .scaleExtent([1, 10])
    // .on('zoom', zoomed)

    diagramLayout = d3.select('#diagramLayout')
      .attr('id', 'diagramLayout') // set id
      .attr('width', width) // set width
      .attr('height', height) // set height
      .call(d3.zoom().on('zoom', zoomed))
      .attr('display', 'block')
      // .attr('viewBox', '0 0 1200 800')
      .append('g')
      .attr('transform', 'translate(' + 20 + ',' + 20 + ')')
      // .call(zoom)

    function zoomed () {
        diagramLayout.attr('transform', d3.event.transform)
    }
    // markerRefx = 35
    console.log('diagramLayout', diagramLayout)

    simulation = d3.forceSimulation()
    // alphaMulti = 1
    simulation.force('link', d3.forceLink().id(function (d) {
        return d.id
      }).distance(100).strength(0))
      .force('charge', d3.forceManyBody().distanceMin(10).distanceMax(30))
      // .force('centre', d3.forceCenter(width / 2, height / 2))
      // .force("x", d3.forceX(55))
      // .force("y", d3.forceY(45))
      .force('collide', d3.forceCollide().radius(function (d) {
        return 60
      }).iterations(2))
    simulation.on('end', function () {
      simulation.force('link', d3.forceLink().id(function (d) {
          return d.id
        }).distance(10).strength(0.0).iterations(10))
        .force('x', d3.forceX().strength(0))
        .force('y', d3.forceX().strength(0))
    })

    force(graphData)
}

// Force Layout
function force (graphData) {
    var linkEnter = diagramLayout.selectAll('.links')
    linkEnter = linkEnter.data(graphData.links)
      .enter().append('g')
      .attr('class', 'links')
      // .attr('marker-end','url(#arrowhead)')

    linkEnter.append('title').text(function (d) { return d.label })
    var link = diagramLayout.selectAll('.edgepath')
        .data(graphData.links)
        .enter()
        .append('path')
        .attr('class', 'edgepath')
        .attr('fill-opacity', 0)
        .attr('stroke-opacity', 0.6)
        .attr('stroke', '#000')
        .attr('id', function (d, i) { return 'edgepath' + i })
        // .attrs({
        //     'class': 'edgepath',
        //     'fill-opacity': 0,
        //     'stroke-opacity': 0.6,
        //     'stroke': '#000',
        //     'id': function (d, i) { return 'edgepath' + i }
        // })
        // .style('pointer-events', 'none')

        var edgelabels = diagramLayout.selectAll('.edgelabel')
            .data(graphData.links)
            .enter()
            .append('text')
            .style('pointer-events', 'none')
            .attr('class', 'edgelabel')
            .attr('id', function (d, i) { return 'edgelabel' + i })
            .attr('font-size', 12)
            .attr('font-family', 'sans-serif')
            .attr('fill', '#000')
            // .attrs({
            //     'class': 'edgelabel',
            //     'id': function (d, i) { return 'edgelabel' + i },
            //     'font-size': 12,
            //     'font-family': 'sans-serif',
            //     'fill': '#000'
            // })

        edgelabels.append('textPath')
            .attr('xlink:href', function (d, i) { return '#edgepath' + i })
            .style('text-anchor', 'middle')
            .style('pointer-events', 'none')
            .attr('startOffset', '50%')
            .text(function (d) { return d.type })

    graphData.links.forEach(function (d) {
      if (d.direction === 'input') {
        diagramLayout.append('svg:defs').selectAll('marker') //
          .data(['start']) // Different link/path types can be defined here
          .enter().append('svg:marker') // This section adds in the arrows
          .attr('id', String)
          .attr('viewBox', '0 -5 10 10')
          .attr('refX', 0)
          .attr('refY', 0)
          .attr('markerWidth', 10)
          .attr('markerHeight', 10)
          .attr('orient', 'auto')
          .attr('stroke', '#000')
          .attr('fill', '#000')
          .append('svg:path')
          .attr('d', 'M0,-5L10,0L0,5')
          .style('stroke-width', '0.3px')
          .attr('transform', 'rotate(180,5, 0)')
      } else if (d.direction === 'output') {
        diagramLayout.append('svg:defs').selectAll('marker') //
          .data(['end']) // Different link/path types can be defined here
          .enter().append('svg:marker') // This section adds in the arrows
          .attr('id', String)
          .attr('viewBox', '0 -5 10 10')
          .attr('refX', 9)
          .attr('refY', 0)
          .attr('markerWidth', 10)
          .attr('markerHeight', 10)
          .attr('orient', 'auto')
          .attr('stroke', '#000')
          .attr('fill', '#000')
          .append('svg:path')
          .attr('d', 'M0,-5L10,0L0,5')
          .style('stroke-width', '0.3px')
      }
    })

    link.attr('marker-end', function (d) {
      if (d.direction === 'input') { return '' } else { return 'url(#end)' }
    })

    link.attr('marker-start', function (d) {
      if (d.direction === 'input') { return 'url(#start)' } else { return '' }
    })

    var node = diagramLayout.selectAll('.node')
    node = node.data(graphData.nodes)

    var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      // .attr("height", nodeHeight)
      // .attr("width", nodeWidth)

    nodeEnter.append('rect')
      // .attr("class", "rect")
      .attr('x', -20)
      .attr('y', -20)
      .attr('rx', 10)
      .attr('width', 90)
      .attr('height', 45)
      .attr('stroke-width', function (d) {
        return Math.sqrt(2)
      })
      .attr('stroke-opacity', '0.3')
      .attr('stroke', '#000')
      .attr('fill', 'steelblue')
      // .style('fill', function (d, i) { return colors(i) })

    nodeEnter.append('title')
      .text(function (d) { return d.title })

    nodeEnter.append('text')
          .attr('x', (90 / 2) - 20)
          .attr('y', (45 / 2) - 20)
          .attr('dy', '.25em')
          .attr('text-anchor', 'middle')
          .attr('font-size', 10)
          .attr('font-family', 'sans-serif')
        .text(function (d) { return d.name })
    // nodeIcon.call(d3.drag()
    //   .on("start", dragstarted)
    //   .on("drag", dragged)
    //   .on("end", dragended));

    simulation
      .nodes(graphData.nodes)
      .on('tick', ticked)

    // setTimeout(function tick() {
    //   simulation.tick();
    //   if (simulation.alpha() >= .005);
    //   setTimeout(tick, 0);
    // }, 0);

    simulation.force('link')
      .links(graphData.links)
    simulation.restart()

    function ticked (e) {
      link.attr('d', function (d) {
        var inter = pointOnRect(d.source.x, d.source.y,
          d.target.x - 20, d.target.y - 20,
          d.target.x + 20, d.target.y + 20)

        return 'M' + d.source.x + ',' + d.source.y + 'L' + inter.x + ',' + inter.y
      })

      nodeEnter.attr('transform', function (d) {
        d.fixed = true
        return 'translate(' + d.x + ',' + d.y + ')'
      })
    }
    // function dragstarted (d) {
    //   if (!d3.event.active) simulation.alphaTarget(0.3).restart()
    //   d.fx = d.x
    //   d.fy = d.y
    // }

    // function dragged (d) {
    //   d.fx = d3.event.x
    //   d.fy = d3.event.y
    // }

    // function dragended (d) {
    //   d3.select(this).classed('fixed', d.fixed = false)
    //   d3.selectAll('.node').fixed = true
    // }

    /**
     * Finds the intersection point between
     *     * the rectangle
     *       with parallel sides to the x and y axes
     *     * the half-line pointing towards (x,y)
     *       originating from the middle of the rectangle
     *
     * Note: the function works given min[XY] <= max[XY],
     *       even though minY may not be the "top" of the rectangle
     *       because the coordinate system is flipped.
     *
     * @param (x,y):Number point to build the line segment from
     * @param minX:Number the "left" side of the rectangle
     * @param minY:Number the "top" side of the rectangle
     * @param maxX:Number the "right" side of the rectangle
     * @param maxY:Number the "bottom" side of the rectangle
     * @param check:boolean (optional) whether to treat point inside the rect as error
     * @return an object with x and y members for the intersection
     * @throws if check == true and (x,y) is inside the rectangle
     * @author TWiStErRob
     * @see <a href="https://stackoverflow.com/a/31254199/253468">source</a>
     * @see <a href="https://stackoverflow.com/a/18292964/253468">based on</a>
     */
    function pointOnRect (x, y, minX, minY, maxX, maxY, check) {
      // assert minX <= maxX;
      // assert minY <= maxY;
      if (check && (minX <= x && x <= maxX) && (minY <= y && y <= maxY)) { throw new Error('Point ' + [x, y] + 'cannot be inside ' + 'the rectangle: ' + [minX, minY] + ' - ' + [maxX, maxY] + '.') }
      var midX = (minX + maxX) / 2
      var midY = (minY + maxY) / 2
      // if (midX - x == 0) -> m == ±Inf -> minYx/maxYx == x (because value / ±Inf = ±0)
      var m = (midY - y) / (midX - x)

      if (x <= midX) { // check "left" side
        var minXy = m * (minX - x) + y
        if (minY <= minXy && minXy <= maxY) {
        return {
                    x: minX,
                    y: minXy
                }
        }
      }

      if (x >= midX) { // check "right" side
        var maxXy = m * (maxX - x) + y
        if (minY <= maxXy && maxXy <= maxY) {
        return {
                    x: maxX,
                    y: maxXy
                }
        }
      }

      if (y <= midY) { // check "top" side
        var minYx = (minY - y) / m + x
        if (minX <= minYx && minYx <= maxX) {
        return {
                    x: minYx,
                    y: minY
                }
        }
      }

      if (y >= midY) { // check "bottom" side
        var maxYx = (maxY - y) / m + x
        if (minX <= maxYx && maxYx <= maxX) {
        return {
                    x: maxYx,
                    y: maxY
                }
        }
      }

      // Should never happen :) If it does, please tell me!
      throw new Error('Cannot find intersection for ' + [x, y] + ' inside rectangle ' + [minX, minY] + ' - ' + [maxX, maxY] + '.')
    }
}

class ApplicationModelComponent extends React.Component {
    construct (props) {}
    componentWillMount () {
        console.log('component will mount app model', this.props)
    }
    componentDidMount () {
        console.log('component did mount app model', this.props)
    }
    componentWillReceiveProps (nextProps) {
        console.log('component will receive props app model', nextProps)
        if (nextProps.componentConstraints !== this.props.componentConstraints) {
            console.log('inside if -------------------------------', nextProps.componentConstraints)
            let nodeData = nextProps.componentConstraints
            let leftCordinates = []
            let rightCordinates = []
            let topCordinates = []
            let downCordinates = []
            var linkArray = []
            var nodeArray = []
            let node = {}
            let graphData = {}
            // Setting first node
            node.id = 0
            node.name = nodeData[0].resource.component_type_name
            node.Title = nodeData[0].resource.component_type_name
            node.width = 100
            node.height = 50
            node.x = 400
            node.y = 450
            node.Attributes = ['']
            nodeArray.push(node)
            // end

            $.each(nodeData, function (index, data) {
                index++
                node = {}
                node.id = index
                node.name = data.resource.target_component_type_name
                node.Title = data.resource.target_component_type_name
                node.Attributes = ['']
                node.width = 100
                node.height = 50
                if (data.resource.constraint_type === 'Parent') {
                    if (data.resource.name.toLowerCase() === 'can be parent of') {
                        // set down target node
                        let downLength = downCordinates.length
                        if (downLength < 1) {
                        let cor = {
                            x: 200,
                            y: 900
                            }
                        downCordinates.push(cor)
                        node.x = cor.x
                        node.y = cor.y
                        } else {
                            let prevCor = downCordinates[downLength - 1]
                            if (typeof prevCor !== 'undefined') {
                                let cor = {
                                    x: prevCor.x + 200,
                                    y: 900
                                    }
                                downCordinates.push(cor)
                                node.x = cor.x
                                node.y = cor.y
                            }
                        }
                    } else if (data.resource.name.toLowerCase() === 'can be child of') {
                        // set top target node
                        let topLength = topCordinates.length
                        if (topLength < 1) {
                        let cor = {
                            x: 200,
                            y: 10
                            }
                        topCordinates.push(cor)
                        node.x = cor.x
                        node.y = cor.y
                        } else {
                            let prevCor = topCordinates[topLength - 1]
                            if (typeof prevCor !== 'undefined') {
                                let cor = {
                                    x: prevCor.x + 200,
                                    y: 10
                                    }
                                topCordinates.push(cor)
                                node.x = cor.x
                                node.y = cor.y
                            }
                        }
                    } else {
                        let rightLength = rightCordinates.length
                        if (rightLength < 1) {
                            let cor = {
                                x: 800,
                                y: 300
                                }
                            rightCordinates.push(cor)
                            node.x = cor.x
                            node.y = cor.y
                        } else {
                            let prevCor = rightCordinates[rightLength - 1]
                            if (typeof prevCor !== 'undefined') {
                                let cor = {
                                    x: 800,
                                    y: prevCor.y + 100
                                }
                                rightCordinates.push(cor)
                                node.x = cor.x
                                node.y = cor.y
                            }
                        }
                    }
                } else if (data.resource.constraint_type === 'Child') {  // down
                    if (data.resource.name.toLowerCase() === 'can be parent of') {
                        // set down target node
                        let downLength = downCordinates.length
                        if (downLength < 1) {
                        let cor = {
                            x: 200,
                            y: 900
                            }
                        downCordinates.push(cor)
                        node.x = cor.x
                        node.y = cor.y
                        } else {
                            let prevCor = downCordinates[downLength - 1]
                            if (typeof prevCor !== 'undefined') {
                                let cor = {
                                    x: prevCor.x + 200,
                                    y: 900
                                    }
                                downCordinates.push(cor)
                                node.x = cor.x
                                node.y = cor.y
                            }
                        }
                    } else if (data.resource.name.toLowerCase() === 'can be child of') {
                        // set top target node
                        let topLength = topCordinates.length
                        if (topLength < 1) {
                        let cor = {
                            x: 200,
                            y: 10
                            }
                        topCordinates.push(cor)
                        node.x = cor.x
                        node.y = cor.y
                        } else {
                            let prevCor = topCordinates[topLength - 1]
                            if (typeof prevCor !== 'undefined') {
                                let cor = {
                                    x: prevCor.x + 200,
                                    y: 10
                                    }
                                topCordinates.push(cor)
                                node.x = cor.x
                                node.y = cor.y
                            }
                        }
                    } else {
                        let rightLength = rightCordinates.length
                        if (rightLength < 1) {
                            let cor = {
                                x: 800,
                                y: 300
                                }
                            rightCordinates.push(cor)
                            node.x = cor.x
                            node.y = cor.y
                        } else {
                            let prevCor = rightCordinates[rightLength - 1]
                            if (typeof prevCor !== 'undefined') {
                                let cor = {
                                    x: 800,
                                    y: prevCor.y + 100
                                }
                                rightCordinates.push(cor)
                                node.x = cor.x
                                node.y = cor.y
                            }
                        }
                    }
                } else if (data.resource.constraint_type === 'ConnectFrom') {  // Left
                    // Left Side Cordinates
                    let leftLength = leftCordinates.length
                    if (leftLength < 1) {
                        let cor = {
                            x: 10,
                            y: 300
                            }
                        leftCordinates.push(cor)
                        node.x = cor.x
                        node.y = cor.y
                    } else {
                        let prevCor = leftCordinates[leftLength - 1]
                        if (typeof prevCor !== 'undefined') {
                            let cor = {
                                x: 10,
                                y: prevCor.y + 100
                                }
                            leftCordinates.push(cor)
                            node.x = cor.x
                            node.y = cor.y
                        }
                    }
                } else if (data.resource.constraint_type === 'ConnectTo') {  // Right
                    // Right Side Cordinates
                    let rightLength = rightCordinates.length
                    if (rightLength < 1) {
                        let cor = {
                            x: 800,
                            y: 300
                            }
                        rightCordinates.push(cor)
                        node.x = cor.x
                        node.y = cor.y
                    } else {
                        let prevCor = rightCordinates[rightLength - 1]
                        if (typeof prevCor !== 'undefined') {
                            let cor = {
                                x: 800,
                                y: prevCor.y + 100
                            }
                            rightCordinates.push(cor)
                            node.x = cor.x
                            node.y = cor.y
                        }
                    }
                }

                nodeArray.push(node)

                var link = {}
                // link.Id = data.resource.id;
                // link.Title = data.resource.name;
                link.type = data.resource.name
                link.direction = 'output'
                if (data.resource.constraint_type === 'Parent') {  // down
                    link.source = 0
                    link.target = index
                    link.direction = 'output'
                } else if (data.resource.constraint_type === 'Child') {  // down
                    link.source = 0
                    link.target = index
                    link.direction = 'output'
                } else if (data.resource.constraint_type === 'ConnectFrom') {  // Left
                    link.source = index
                    link.target = 0
                } else if (data.resource.constraint_type === 'ConnectTo') {  // Right
                    link.source = 0
                    link.target = index
                }

                linkArray.push(link)
                if (index === nodeData.length) {
                    // console.log('linkArray', linkArray)
                    // console.log('nodeArray', nodeArray)
                    graphData.nodes = nodeArray
                    graphData.links = linkArray
                    console.log('------------------', JSON.stringify(graphData))
                    // update(linkArray, nodeArray)
                    forceInitialize(graphData)
                    // console.log(forceInitialize)
                }
            })
        }
    }
    render () {
        // className={'margin-top: -390px'}
      return (
        <div id='mainScreen' >
          <svg id='diagramLayout' />
        </div>
      )
    }

    props: {
        componentConstraints: any
    }
}
export default ApplicationModelComponent
