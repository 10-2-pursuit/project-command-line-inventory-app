import fs from "fs";

export default async function dbFileCheck() {
    if (fs.existsSync("addData.js")){
        console.log("File Exists");
        exit(1);
    }
}
