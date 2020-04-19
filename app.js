// const multiplicar = require('./multiplicar/multiplicar') (a esta se le llamaría como multiplicar.crearArchivo())
const { crearArchivo } = require("./multiplicar/multiplicar");

const argv = require("yargs")
    .command("listar", "Imprime en consola la tabla de n", {
        base: {
            demand: true,
            alias: "b",
        },
        limite: {
            default: "10",
            alias: "l",
        },
    })
    .help().argv;

let comando = argv._[0];

switch (comando) {
    case "listar":
        console.log("listar");
        break;

    case "crear":
        crearArchivo(argv.base)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`))
            .catch((error) => {
                console.log(error);
            });
        break;

    default:
        console.log("Comando no reconocido");
}
