var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PerbandinganPenduduk_0 = new ol.format.GeoJSON();
var features_PerbandinganPenduduk_0 = format_PerbandinganPenduduk_0.readFeatures(json_PerbandinganPenduduk_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerbandinganPenduduk_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PerbandinganPenduduk_0.addFeatures(features_PerbandinganPenduduk_0);var lyr_PerbandinganPenduduk_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PerbandinganPenduduk_0, 
                style: style_PerbandinganPenduduk_0,
    title: 'Perbandingan Penduduk<br />\
    <img src="styles/legend/PerbandinganPenduduk_0_0.png" /> Sangat sedikit<br />\
    <img src="styles/legend/PerbandinganPenduduk_0_1.png" /> Sedikit<br />\
    <img src="styles/legend/PerbandinganPenduduk_0_2.png" /> Sedang<br />\
    <img src="styles/legend/PerbandinganPenduduk_0_3.png" /> Banyak<br />\
    <img src="styles/legend/PerbandinganPenduduk_0_4.png" /> Sangat Banyak<br />'
        });var format_PerbandinganKPM_1 = new ol.format.GeoJSON();
var features_PerbandinganKPM_1 = format_PerbandinganKPM_1.readFeatures(json_PerbandinganKPM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerbandinganKPM_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PerbandinganKPM_1.addFeatures(features_PerbandinganKPM_1);var lyr_PerbandinganKPM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PerbandinganKPM_1, 
                style: style_PerbandinganKPM_1,
    title: 'Perbandingan KPM<br />\
    <img src="styles/legend/PerbandinganKPM_1_0.png" /> Sangat sedikit<br />\
    <img src="styles/legend/PerbandinganKPM_1_1.png" /> Sedikit<br />\
    <img src="styles/legend/PerbandinganKPM_1_2.png" /> Sedang<br />\
    <img src="styles/legend/PerbandinganKPM_1_3.png" /> Banyak<br />\
    <img src="styles/legend/PerbandinganKPM_1_4.png" /> Sangat Banyak<br />'
        });

lyr_PerbandinganPenduduk_0.setVisible(true);lyr_PerbandinganKPM_1.setVisible(true);
var layersList = [baseLayer,lyr_PerbandinganPenduduk_0,lyr_PerbandinganKPM_1];
lyr_PerbandinganPenduduk_0.set('fieldAliases', {'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUASWLYH': 'LUASWLYH', 'JMLHPDDK': 'JMLHPDDK', 'JMLHKPM': 'JMLHKPM', });
lyr_PerbandinganKPM_1.set('fieldAliases', {'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUASWLYH': 'LUASWLYH', 'JMLHPDDK': 'JMLHPDDK', 'JMLHKPM': 'JMLHKPM', });
lyr_PerbandinganPenduduk_0.set('fieldImages', {'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUASWLYH': 'TextEdit', 'JMLHPDDK': 'TextEdit', 'JMLHKPM': 'TextEdit', });
lyr_PerbandinganKPM_1.set('fieldImages', {'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUASWLYH': 'TextEdit', 'JMLHPDDK': 'TextEdit', 'JMLHKPM': 'TextEdit', });
lyr_PerbandinganPenduduk_0.set('fieldLabels', {'WADMKD': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'LUASWLYH': 'inline label', 'JMLHPDDK': 'inline label', 'JMLHKPM': 'inline label', });
lyr_PerbandinganKPM_1.set('fieldLabels', {'WADMKD': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'LUASWLYH': 'inline label', 'JMLHPDDK': 'inline label', 'JMLHKPM': 'inline label', });
lyr_PerbandinganKPM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});