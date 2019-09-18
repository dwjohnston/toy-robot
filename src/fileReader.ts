import {readFile as fsReadFile} from "fs"; 


async function readFile(path: string) : Promise<string> {
    return new Promise ((res, rej) => {
        fsReadFile(path, 'utf8', function(err, data) {
            if (err) rej(err); 
            console.log(data); 
            res(data); 
        });     
    });  
}

export async function getCommandsFromFile(path: string) {
    const data = await readFile(path); 
    console.log(data); 
}