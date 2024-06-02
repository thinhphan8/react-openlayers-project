import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {Fill, Stroke, Style, Text} from 'ol/style';

// Định nghĩa extent
const extent = [-180, -90, 180, 90];

// Tạo các lớp
export const layers = [
    new VectorLayer({
        source: new VectorSource({
            url: 'http://localhost:8080/geoserver/dibrugarh/ows?service=WFS&' +
                'version=1.1.0&request=GetFeature&typename=dibrugarh:muncipalbndry&' +
                'outputFormat=application/json&srsname=EPSG:4326&' +
                'bbox=' + extent.join(',') + ',EPSG:4326',
            format: new GeoJSON()
        }),
        style: new Style({
            fill: new Fill({
                color: 'rgba(159, 218, 244, 0.6)'
            }),
            stroke: new Stroke({
                color: 'rgba(0, 0, 0, 1)',
                width: 1
            }),
            text: new Text({
                font: 'Roboto Regular',
                size: 15,
                offsetX: 0,
                offsetY: 0,
                placement: 'point',
                allowOverlap: true,
                text: '{name}',
                fill: new Fill({
                    color: '#000'
                }),
                stroke: new Stroke({
                    color: 'white',
                    width: 2,
                    blur: 1
                })
            })
        })
    })
];
