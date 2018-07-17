import React from 'react'
import ReactDOM from 'react-dom'
import joint from 'jointjs/index'
import $ from 'jquery/dist/jquery'
// import _ from 'lodash'
import styles from './applicationModelComponent.scss'

    var Shape = joint.dia.Element.define('graph.Shape', {
    size: {
        width: 100,
        height: 40
    },
    attrs: {
        rect: {
            refWidth: '100%',
            refHeight: '100%',
            fill: 'white',
            stroke: 'rgb(0, 0, 0)',
            strokeWidth: 1,
            strokeOpacity: 0.75,
            rx: 5,
            ry: 5
        },
        text: {
            refX: '50%',
            refY: '50%',
            yAlignment: 'middle',
            xAlignment: 'middle',
            'text-anchor': 'middle',
            fontSize: 10
        }
    }
    }, {
    markup: '<rect/><title/><text/>',
    setTitle: function (title) {
        return this.attr('title/text', title || '')
    },
    setText: function (text) {
        return this.attr('text/text', text || '')
    },
    setCSSClasses: function (cssClasses) {
        if (cssClasses) {
            var shape = this
            $.each(cssClasses, function (index, cssClass) {
                shape.attr('rect/class', (shape.attr('rect/class') || '') + ' ' + cssClass)
                shape.attr('text/class', (shape.attr('text/class') || '') + ' ' + cssClass)
                // shape.attr('image/class', (shape.attr('image/class') || '') + ' ' + cssClass);
            })
        }
    }
    })

    var Link = joint.dia.Link.define('graph.Link', {
    attrs: {
        '.connection': {
            stroke: 'black',
            strokeWidth: 1,
            cursor: 'pointer',
            // pointerEvents: 'none',
            targetMarker: {
                type: 'path',
                fill: 'gray',
                stroke: 'none',
                d: 'M 8 -8 0 0 8 8 z'
            }
        },
        defaultLabel: {
            attrs: { text: { text: '*' } }
        }
    },
    wrapper: {
        connection: true,
        strokeWidth: 10,
        strokeLinejoin: 'round'
    },
    z: -1,
    weight: 1,
    minLen: 1,
    labels: [{
        markup: '<text/>',
        position: {
            distance: 0.5,
            offset: {
                x: 10,
                y: -5
            }
        },
        attrs: {
            text: {
                fill: 'black',
                textAnchor: 'middle',
                refY: 5,
                refY2: '-60%',
                fontSize: 10,
                cursor: 'pointer',
                fontFamily: 'sans-serif'
            }
        },
        size: {
            width: 120, height: 20
        }
    }]

    }, {
    markup: '<path class="connection"/><g class="labels"/>',

    connect: function (sourceId, targetId) {
        return this.set({
            source: { id: sourceId },
            target: { id: targetId }
        })
    },

    setTitle: function (title) {
        return this.attr('text/text', title || '')
    },

    setLabelText: function (text) {
        return this.prop('labels/0/attrs/text/text', text || '')
    },
    setLinkId: function (id) {
        return this.attr('linkid/id', id || '')
    }
    })

    var LayoutControls = joint.mvc.View.extend({

    events: {
        change: 'layout',
        input: 'layout'
    },

    options: {
        padding: 50
    },

    init: function () {
        var options = this.options

        options.cells = this.buildGraph(options.nodes, options.connections, options.centerNode)

        // if (options.adjacencyList) {
        //     options.cells = this.buildGraphFromAdjacencyList(options.adjacencyList);
        // }

        this.listenTo(options.paper.model, 'change', function (cell, opt) {
            if (opt.layout) {
                this.layout()
            }
        })
    },

    layout: function () {
        var paper = this.options.paper
        var graph = paper.model
        var cells = this.options.cells
        joint.layout.DirectedGraph.layout(cells, this.getLayoutOptions())

        if (graph.getCells().length === 0) {
            // The graph could be empty at the beginning to avoid cells rendering
            // and their subsequent update when elements are translated
            graph.resetCells(cells)
        }

        paper.fitToContent({
            padding: this.options.padding,
            gridWidth: 10,
            gridHeight: 10,
            allowNewOrigin: 'any'
        })

        this.trigger('layout')
    },

    getLayoutOptions: function () {
        return {
            setVertices: false,
            setLabels: true,
            ranker: 'network-simplex',
            rankDir: 'LR',
            align: '',
            rankSep: 100,
            edgeSep: 70,
            nodeSep: 40
        }
    },

    buildGraph: function (nodes, connections, centerNode) {
        var elements = []
        var links = []
        console.log('center', centerNode)
        if (nodes) {
            $.each(nodes, function (index, node) {
                var shape = new Shape({ id: node.Id })
                console.log('node', node)
                if (node.Id === centerNode) {
                    shape.position(0, 0)
                    shape.resize(200, 100)
                    // shape.prop('fillColor', ['yellow'])
                    shape.attr({rect: {fill: 'yellow'}})
                    // shape.attr({'fill': 'yellow'})
                    console.log('fill color')
                }

                if (node.Id === 3) {
                    shape.prop('fillColor', ['blue'])
                }

                shape.setText(node.Name)

                if (node.Title) { shape.setTitle(node.Title) }
                // if (node.Attributes) { shape.setCSSClasses(node.Attributes); }
                shape.setCSSClasses(node.Attributes)
                elements.push(shape)
            })
        }

        if (connections) {
            $.each(connections, function (index, connection) {
                var link = new Link().connect(connection.StartComponentId, connection.EndComponentId)

                if (connection.Title) { link.setTitle(connection.Title) }

                link.setLinkId(connection.Id)
                links.push(link)
            })
        }
        // Links must be added after all the elements. This is because when the links
        // are added to the graph, link source/target
        // elements must be in the graph already.
        return elements.concat(links)
    }

    })

    var LinkControls = joint.mvc.View.extend({

        highlighter: {
            name: 'stroke',
            options: {
                attrs: {
                    'stroke': 'lightcoral',
                    'stroke-width': 4
                }
            }
        },
        events: {
            change: 'updateLink',
            input: 'updateLink'
        },
        init: function () {
            this.highlight()
            this.updateControls()
        },
        onRemove: function () {
            this.unhighlight()
        },
        highlight: function () {
          // console.log('highlited');
          // cellView.highlight();
            this.options.cellView.highlight('rect', { highlighter: this.highlighter })
        },
        unhighlight: function () {
            this.options.cellView.unhighlight('rect', { highlighter: this.highlighter })
        }
    }, {
        remove: function () {
            if (this.instance) {
                this.instance.remove()
                this.instance = null
            }
        },
        refresh: function () {
            if (this.instance) {
                this.instance.unhighlight()
                this.instance.highlight()
            }
        },
        instance: null,
        template: ''// document.getElementById('link-controls-template').content
    })

class ApplicationModelComponent extends React.Component {
    construct (props) {}
    componentWillMount () {}
    componentDidMount () {}
    componentWillReceiveProps (nextProps) {
        if (nextProps.componentConstraints !== this.props.componentConstraints) {
            let nodeData = nextProps.componentConstraints
            let firstNodeSet = false
            let nodeArray = []
            let linkArray = []
            let that = this

            if (typeof (nodeData) !== 'undefined') {
                nodeData.forEach(function (data, index) {
                    var node = {}
                if (!firstNodeSet) {
                    node.Id = nodeData.length + 1
                    node.Name = data.resource.component_type_name
                    node.Title = data.resource.component_type_name
                    node.Attributes = ['']
                    nodeArray.push(node)
                    firstNodeSet = true
                }
                node = {}
                node.Id = data.resource.id
                node.Name = data.resource.target_component_type_name
                node.Title = data.resource.target_component_type_name
                node.Attributes = ['']
                nodeArray.push(node)
                let link = {}
                link.Id = data.resource.id
                link.Title = data.resource.name
                if (data.resource.constraint_type === 'Child') {
                    link.StartComponentId = nodeData.length + 1
                    link.EndComponentId = data.resource.id
                } else if (data.resource.constraint_type === 'ConnectFrom') {
                    link.StartComponentId = nodeData.length + 1
                    link.EndComponentId = data.resource.id
                } else if (data.resource.constraint_type === 'ConnectTo') {
                    link.StartComponentId = data.resource.id
                    link.EndComponentId = nodeData.length + 1
                }
                linkArray.push(link)
                if (index === nodeData.length - 1) {
                    let controls = new LayoutControls({
                        paper: new joint.dia.Paper({
                            el: ReactDOM.findDOMNode(that.refs.placeholder),
                            gridSize: 1,
                            height: 300,
                            width: 500,
                            interactive: function (cellView) {
                                // linkMove: false
                                // return cellView.model.isElement();
                            }
                        }),
                        nodes: nodeArray,
                        connections: linkArray,
                        centerNode: nodeArray.length
                    }).on({
                        'layout': LinkControls.refresh
                    }, LinkControls)
                    controls.layout()
                }
                })
            }
        }
    }
    render () {
      return (
        <div id='playground' className={styles.paper} ref='placeholder' />
      )
    }

    props: {
        componentConstraints: any
    }
}
export default ApplicationModelComponent
