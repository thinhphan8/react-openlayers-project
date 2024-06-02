import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from 'ol/source/OSM.js';
import React, {useEffect, useRef} from "react";
import {defaults as olControlDefaults, FullScreen} from "ol/control";
import {layers} from "../constants/Layers";

const MapComponent = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        if (mapContainerRef.current) {
            const map = new Map({
                target: mapContainerRef.current,
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    }),
                    layers[0]
                ],
                view: new View({
                    projection: "EPSG:4326",
                    center: [94.9125, 27.4705],
                    zoom: 10,
                }),
                controls: olControlDefaults().extend([new FullScreen()]),
            });

            return () => {
                map.setTarget(null);
            };
        }
    }, []);

    return (
        <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
    );
};

export default MapComponent;
