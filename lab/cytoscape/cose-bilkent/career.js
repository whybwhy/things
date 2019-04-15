fetch("career.json", {mode: "no-cors"})
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        var cy = window.cy = cytoscape({
            container: document.getElementById("cy"),

            boxSelectionEnabled: false,
            autounselectify: true,

            layout: {
                name: "cose-bilkent",
                animate: false
            },

            style: [
                {
                    selector: "node",
                    style: {
                        "background-color": "#ccc",
                        "label": "data(label)",
                        "color" : "red",
                        "text-valign": "center",
                        "text-halign": "center"

                    }
                },

                {
                    selector: "edge",
                    style: {
                        "width": 1,
                        "line-color": "#ccc",

                        "source-distance-from-node" : 1,
                        "target-distance-from-node" : 1
                    }
                }
            ],

            elements: data
        });
    });
