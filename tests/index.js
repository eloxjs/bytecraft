// import useState from "./use-state.js";

// const navbar = () => {
//     const [name, setName] = useState('narsing');

//     console.log(name);

//     window.addEventListener('click', () => {
//         setName(Math.random().toString());
//     })
// }

// navbar();

function Foo() {
     
    // This will print 'Bar'
        console.log(Foo.caller);
    }
     
    // Parent function
    function Bar() {
    Foo();
    }
     
    Bar();