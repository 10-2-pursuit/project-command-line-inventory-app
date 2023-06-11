import fs from "fs";

fs.readFile("dbFileCheck.js", function(error, data){
    if (error) {
        console.log("Something went wrong!", error);
        exit(1);
    }


    console.log(data.toString());
})