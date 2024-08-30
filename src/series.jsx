import SeriesPamplet from "./SeriesPamplet";

function Series() {

    return (
        <div className="anime">
            <SeriesPamplet name="Dragon Ball Z" id="DBZ" />
            <SeriesPamplet name="Deamon Slayer" id="DS"/>
            <SeriesPamplet name="One Piece"  id="OP"/>
            <SeriesPamplet name="Bleach"  id="BL"/>
            <SeriesPamplet name="Naruto" id="NA" />
        </div>
    );

}


export default Series