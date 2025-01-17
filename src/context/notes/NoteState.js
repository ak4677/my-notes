
import NoteContext from "./noteContext";


export default function NoteState(props) {
    // const [state, setState] = useState('linght');
    const state = {
        "name": "aman",
        "class": "k3"
    }
    return (
            <NoteContext.Provider value={state}>
                {props.children}
            </NoteContext.Provider>

    )
}