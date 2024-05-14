var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: "台南市市區界圖",
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> 台南市市區界圖'
            });

    var projection__1 = ol.proj.get('EPSG:3857');
    var projectionExtent__1 = projection__1.getExtent();
    var size__1 = ol.extent.getWidth(projectionExtent__1) / 256;
    var resolutions__1 = new Array(14);
    var matrixIds__1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions__1[z] = size__1 / Math.pow(2, z);
        matrixIds__1[z] = z;
    }
    var lyr__1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://maps.nlsc.gov.tw/S_Maps/wmts",
    attributions: ' ',
                                "layer": "LUIMAP",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection__1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent__1),
                resolutions: resolutions__1,
                matrixIds: matrixIds__1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "國土利用現況調查成果圖",
                            opacity: 1.0,
                            
                            
                          });

    var projection__2 = ol.proj.get('EPSG:3857');
    var projectionExtent__2 = projection__2.getExtent();
    var size__2 = ol.extent.getWidth(projectionExtent__2) / 256;
    var resolutions__2 = new Array(14);
    var matrixIds__2 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions__2[z] = size__2 / Math.pow(2, z);
        matrixIds__2[z] = z;
    }
    var lyr__2 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://maps.nlsc.gov.tw/S_Maps/wmts",
    attributions: ' ',
                                "layer": "CITY",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection__2,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent__2),
                resolutions: resolutions__2,
                matrixIds: matrixIds__2
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "縣市界",
                            opacity: 1.0,
                            
                            
                          });
var format_2f2f1a2984ed40f090c23cd5eb765e4a_3 = new ol.format.GeoJSON();
var features_2f2f1a2984ed40f090c23cd5eb765e4a_3 = format_2f2f1a2984ed40f090c23cd5eb765e4a_3.readFeatures(json_2f2f1a2984ed40f090c23cd5eb765e4a_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2f2f1a2984ed40f090c23cd5eb765e4a_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2f2f1a2984ed40f090c23cd5eb765e4a_3.addFeatures(features_2f2f1a2984ed40f090c23cd5eb765e4a_3);
var lyr_2f2f1a2984ed40f090c23cd5eb765e4a_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2f2f1a2984ed40f090c23cd5eb765e4a_3, 
                style: style_2f2f1a2984ed40f090c23cd5eb765e4a_3,
                popuplayertitle: "2f2f1a29-84ed-40f0-90c2-3cd5eb765e4a",
                interactive: true,
                title: '<img src="styles/legend/2f2f1a2984ed40f090c23cd5eb765e4a_3.png" /> 2f2f1a29-84ed-40f0-90c2-3cd5eb765e4a'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr_2f2f1a2984ed40f090c23cd5eb765e4a_3.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr_2f2f1a2984ed40f090c23cd5eb765e4a_3];
lyr__0.set('fieldAliases', {'TOWNID': 'TOWNID', 'TOWNCODE': 'TOWNCODE', 'COUNTYNAME': 'COUNTYNAME', 'TOWNNAME': 'TOWNNAME', 'TOWNENG': 'TOWNENG', 'COUNTYID': 'COUNTYID', 'COUNTYCODE': 'COUNTYCODE', '人口數': '人口數', '道路寬�': '道路寬�', });
lyr_2f2f1a2984ed40f090c23cd5eb765e4a_3.set('fieldAliases', {'確診日': '確診日', '行政區域代碼': '行政區域代碼', '里別': '里別', '經度': '經度', '緯度': '緯度', });
lyr__0.set('fieldImages', {'TOWNID': 'TextEdit', 'TOWNCODE': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'TOWNNAME': 'TextEdit', 'TOWNENG': 'TextEdit', 'COUNTYID': 'TextEdit', 'COUNTYCODE': 'TextEdit', '人口數': 'TextEdit', '道路寬�': 'TextEdit', });
lyr_2f2f1a2984ed40f090c23cd5eb765e4a_3.set('fieldImages', {'確診日': 'Range', '行政區域代碼': 'Range', '里別': 'TextEdit', '經度': 'TextEdit', '緯度': 'TextEdit', });
lyr__0.set('fieldLabels', {'TOWNID': 'no label', 'TOWNCODE': 'no label', 'COUNTYNAME': 'no label', 'TOWNNAME': 'no label', 'TOWNENG': 'no label', 'COUNTYID': 'no label', 'COUNTYCODE': 'no label', '人口數': 'no label', '道路寬�': 'no label', });
lyr_2f2f1a2984ed40f090c23cd5eb765e4a_3.set('fieldLabels', {'確診日': 'no label', '行政區域代碼': 'no label', '里別': 'no label', '經度': 'no label', '緯度': 'no label', });
lyr_2f2f1a2984ed40f090c23cd5eb765e4a_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});