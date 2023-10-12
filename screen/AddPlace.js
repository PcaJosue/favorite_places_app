import PlaceForm from "../components/places/PlaceForm";
import { insertPlace } from "../components/util/database";

function AddPlace({navigation}){

    async function createPlaneHandler(place){

        await insertPlace(place);
        navigation.navigate('AllPlaces')
    }

    return <PlaceForm onCreatePlace={createPlaneHandler}/>
}

export default AddPlace;