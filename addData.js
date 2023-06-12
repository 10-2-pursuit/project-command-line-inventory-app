import inquirer from "inquirer";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import queryDB from "./queryDB.js";

export default async function addData(info) {
    try {
       const answer = await inquirer.prompt([
            {type: "input", name: "name", message:"Please enter your name:"}
            {type: "phone", name: "number", message:"Please enter your Phone #:"}
            {type: "input", name: "age", message:"Are you an Adult?:"}
            {type: "List", 
            name:"Age",
            message:"Please Are You An Adult",
            choices: [
            {name:"Y", value: "Adult"}
            {name:"N", value: "Minor"}
            ]
        ])
        const data ={
            id: uuidv4(),
            name: answer.name,
            phone: answer.phone,
            Adult: answer.age
        };
        info.push(data);

        if (fs.existSync("db.json")){
            addDetails();
            
        } else {
            fs.appendFile("db.json","[]", function(error) {
                if (error) {
                    console.log("Creating file Unsuccessful");
                }

                console.log("db.json file Created Successfully");
                addDetails();
            })
        }
    } catch (error) {
        Console.log("Something went wrong!")
    }
}


async function addDetails(info) {
    await fs.writeFile("db.json", JSON.stringify(info, function(error)){
        if (error){
            console.log("Error Writing To The Database");
        }
        console.log("Data added Successfully")
    })
}

queryDB(addData)