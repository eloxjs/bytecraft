const inputFiles = [
    {
        path: "./dist/index.js",
        filename: "index"
    },
    {
        path: "./dist/dom/index.js",
        filename: "dom"
    },
    {
        path: "./dist/utils/template-engine.js",
        filename: "template-engine"
    },
    {
        path: "./dist/hooks/index.js",
        filename: "hooks"
    }
];

export default inputFiles.map(inputFile => {
    return [
        {
            input: inputFile.path,
            output: {
                file: `./cjs/${inputFile.filename}.cjs`,
                format: 'cjs',
                esModule: false
            }
        },
        {
            input: inputFile.path,
            output: {
                file: `./esm/${inputFile.filename}.js`,
                format: 'esm',
                esModule: false
            }
        }
    ]
}).flat(1)