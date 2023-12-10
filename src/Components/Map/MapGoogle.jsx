import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps"

export const MapGoogle = ({ position }) => {

    return (
        <>
            <APIProvider apiKey="AIzaSyBoeOmaBVCseYe9IuG2QMLUBPKZROMdZ1A">
                <div className="map_container">
                    <Map
                        zoom={13}
                        center={position}
                        mapId={"ffb4d973e19b2769"}>
                        <AdvancedMarker position={position}></AdvancedMarker>
                    </Map>
                </div>
            </APIProvider>

        </>
    )
}
