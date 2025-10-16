var vg_1 = "map_population.vg.json";
var vg_2 = "bar_population.vg.json";
var vg_3 = "brush_return.vg.json";
var vg_4 = "smallmultiple_asset_return.vg.json"


vegaEmbed("#map_vis", vg_1).then(function(result) {
    // Access the Vega View instance as result.view
}).catch(console.error);

vegaEmbed("#bar_vis", vg_2).then(function(result) {
    // Access the Vega View instance as result.view
}).catch(console.error);

vegaEmbed("#brush_vis", vg_3).then(function(result) {
    // Access the Vega View instance as result.view
}).catch(console.error);

vegaEmbed("#smallmultiple_vis", vg_4).then(function(result) {
    // Access the Vega View instance as result.view
}).catch(console.error);