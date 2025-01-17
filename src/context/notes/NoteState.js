
import NoteContext from "./NoteContext";
export default function NoteState(props, children) {
    // const [state, setState] = useState('linght');
    const state = {
        "name": "aman",
        "class": "k3"
    }
    return (
        <NoteState>
            <NoteContext.Provider value={state}>
                {props.children}
            </NoteContext.Provider>
        </NoteState>

    )
}