import PlayButton from './PlayButton'


function SeriesPamplet(prop) {
    return (

        <div className="SeriesPamplet" id={prop.id}>
            <p className="SeriesPamplet-title"  >
                <p>{prop.name}</p>
                <PlayButton />
            </p>
        </div>
    );
}

export default SeriesPamplet