import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
const { Children, cloneElement, forwardRef } = React;
const MapContainer = forwardRef(({ children, map, isMapLoaded, ...rest }, ref) => {
    const childrenCount = Children.count(children);
    const props = {
        map,
        isMapLoaded,
    };
    return (_jsx("div", { 
        // ref={ref}
        id: "maplibre-gl-map", ...rest, children: childrenCount < 1 ? (_jsx(_Fragment, {})) : childrenCount > 1 ? (Children.map(children, child => child ? cloneElement(child, { ...props }) : _jsx(_Fragment, {}))) : (cloneElement(children, { ...props })) }));
});
export default MapContainer;
