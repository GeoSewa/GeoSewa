import { useEffect, useState } from 'react';
import { Map } from 'maplibre-gl';
export default function useMapLibreGLMap({ mapOptions, enable3D = false, disableRotation = false, }) {
    const [map, setMap] = useState(null);
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    // setup map instance
    useEffect(() => {
        const mapInstance = new Map({
            container: 'maplibre-gl-map',
            style: { version: 8, sources: {}, layers: [] },
            center: [0, 0],
            zoom: 1,
            attributionControl: false,
            ...mapOptions,
        });
        setMap(mapInstance);
        // return () => mapInstance.setTarget(undefined);
    }, []); // eslint-disable-line
    // add terrain source for 3D
    useEffect(() => {
        if (!map)
            return;
        map.on('load', () => {
            map.addSource('terrainSource', {
                type: 'raster-dem',
                tiles: ['https://vtc-cdn.maptoolkit.net/terrainrgb/{z}/{x}/{y}.webp'],
                encoding: 'mapbox',
                maxzoom: 14,
                minzoom: 4,
            });
            setIsMapLoaded(true);
        });
    }, [map]);
    // add 3D terrain
    useEffect(() => {
        if (!map || !isMapLoaded)
            return;
        if (enable3D) {
            map.setTerrain({ source: 'terrainSource', exaggeration: 0.6 });
        }
        else {
            // @ts-ignore
            map.setTerrain();
        }
    }, [map, isMapLoaded, enable3D]);
    // disable map pane rotation
    useEffect(() => {
        if (!map || !disableRotation)
            return;
        map.dragRotate.disable();
        map.touchZoomRotate.disableRotation();
    }, [map, disableRotation]);
    return { map, isMapLoaded };
}
