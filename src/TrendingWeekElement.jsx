import PlayButton from "./PlayButton";


function TrendingWeekElement() {

    return (
        <div id="TrendingWeekElement-cover">

            <div id="TrendingWeekElement">
                <div id="TrendingWeekElement-desc-and-play">
                    <div id="TrendingWeekElement-desc">
                        <div id="TrendingWeekElement-desc-title"> Deamon Slayer: </div>
                        <div id="TrendingWeekElement-desc-text">Tanjiro Kamado, a boy who trains to become a demon slayer to avenge his family's murder and cure his sister, Nezuko, who is slowly turning into a demon.</div>
                    </div>
                    <div id="TrendingWeekElement-play">
                    <PlayButton id="TrendingWeekElement-play-button"/>
                        {/* <button >
                            <a href="../play/deamonSlayer.html" target="_BLANK">Play</a>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TrendingWeekElement