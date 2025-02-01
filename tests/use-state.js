const states = [];

export default function useState(initialData) {
    const component = useState.caller;

    let componentState = states.find((state) => state.component === component);

    if(componentState) {
        componentState.data = initialData;
    }else {
        componentState = {
            data: initialData,
            component
        }

        states.push(componentState);
    }

    return [initialData, setState];

    function setState(data) {
        componentState.data = data;
        component()
    }
}