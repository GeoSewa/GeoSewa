import MapContainer from "@Components/common/MapLibreComponents/MapContainer";
import { useMapLibreGLMap } from "@Components/common/MapLibreComponents";
import BaseLayerSwitcher from "@Components/common/MapLibreComponents/BaseLayerSwitcher";

export default function ContactMap() {
  const { map, isMapLoaded } = useMapLibreGLMap({
    mapOptions: {
      zoom: 4,
      center: [80.0711, 28.994],
      maxZoom: 19,
    },
  });
  return (
    <MapContainer
      map={map}
      isMapLoaded={isMapLoaded}
      style={{ width: "100%", height: "560px" }}
    >
      <BaseLayerSwitcher />
    </MapContainer>
  );
}
