import { getCommandsFromFile } from "./fileReader";


async function run() {
    const file = process.argv[2]; 

    if (!file) {
        console.error("Error: You must pass a filename with commands to execute");
        process.exit(1);  
    }

    await getCommandsFromFile(file);
    process.exit(0);  
}


run(); 