var vis = require("vis");
var options, nodes, edges, network;
function drawGraph() {
    nodes = new vis.DataSet([]);
    edges = new vis.DataSet([]);
    var container = document.getElementById("my-network");
    var data = {
        nodes: nodes,
        edges: edges
    };
    options = {
        configure: {
            enabled: false,
        },
        edges: {
            arrows: {
                to: {
                    enabled: true,
                    scaleFactor: 0.6
                },
                middle: false,
                from: false,
            },
            color: "#0097A7",
            hoverWidth: 0,
            physics: false,
            selectionWidth: 0,
            shadow: true,
            smooth: {
                enabled: true,
                type: "cubicBezier",
                forceDirection: "horizontal",
                roundness: 1
            },
            width: 3,
        },
        groups: {},
        interaction: {
            dragNodes: false,
            dragView: true,
            hideEdgesOnDrag: false,
            hideNodesOnDrag: false,
            hover: true,
            hoverConnectedEdges: false,
            keyboard: {
                enabled: false,
                speed: { x: 10, y: 10, zoom: 0.02 },
                bindToWindow: true
            },
            multiselect: false,
            navigationButtons: false,
            selectable: true,
            selectConnectedEdges: false,
            tooltipDelay: 300,
            zoomView: false,
        },
        layout: {
            randomSeed: 1,
            improvedLayout: true,
        },
        manipulation: {
            enabled: false,
            initiallyActive: false,
            addNode: true,
            addEdge: true,
            editEdge: true,
            deleteNode: true,
            deleteEdge: true,
            controlNodeStyle: {
                shape: "dot",
                size: 6,
                color: {
                    background: "#0097A7",
                    border: "#0097A7",
                    highlight: {
                        background: "#07f968",
                        border: "#3c3c3c"
                    }
                },
                borderWidth: 2,
                borderWidthSelected: 2,
            }
        },
        nodes: {
            borderWidth: 8,
            borderWidthSelected: 8,
            color: {
                border: "#0097A7",
                background: "#FFF",
                highlight: {
                    border: "#FF0",
                    background: "#FFF"
                },
                hover: {
                    border: "#F00",
                    background: "#FFF"
                },
            },
            shadow: true,
        },
        physics: {
            enabled: false,
        },
    };
    network = new vis.Network(container, data, options);
    var repository = "tmp";
    getAllCommits(repository, function (commits) {
        populateCommits(commits);
    });
    network.moveTo({
        position: { x: 0, y: 200 },
        offset: { x: 0, y: 0 }
    });
}
false;
;