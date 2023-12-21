import { APIProvider, Map, AdvancedMarker} from "@vis.gl/react-google-maps"

export const MapGoogle = ({ position }) => {
    const apiMapKey = import.meta.env.VITE_GoogleMapApiKey;
    const apiMapID = import.meta.env.VITE_GoogleMapID

    return (
        <>
            <APIProvider apiKey={apiMapKey}>
                <div className="map_container">
                    <Map
                        zoom={13}
                        center={position}
                        mapId={apiMapID}>
                        <AdvancedMarker position={position}></AdvancedMarker>
                    </Map>
                </div>
            </APIProvider>

        </>
    )
}
