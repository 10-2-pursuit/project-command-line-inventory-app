/*import fs from "fs";


export default async function queryDB(externalFunction) {
try {
    let info = [];
    
    if (fs.existsSync("db.json.")) {
        await fs.readFile("db.json", function (error, data){
            if(error) {
                console.log("Reading File Failed", error);
                return;
            }

        console.log(data.toString());

            info = JSON.parse(data.toString());
            console.log(info);
            
            if (externalFunction && !error) {
                externalFunction(info);
                return;
            }
        });

    } else {
        if (externalFunction){
            externalFunction(info);
            return;
        }
    }
}
catch (error) {
    console.log("Something went wrong!", error);
    }
}
*/
import fs from "fs";

export default async function queryDB(externalFunction) {
  try {
    let info = [];

    if (fs.existsSync("db.json")) {
      await fs.readFile("db.json", function (err, data) {
        info = JSON.parse(data.toString());
        console.log(info);

        if (err) {
          console.log(err);
          return;
        }

        if (externalFunction && !err) {
          externalFunction(info);
          return;
        }
      });
    } else {
      if (externalFunction) {
        externalFunction(info);
        return;
      }
    }
  } catch (error) {
    console.error(`Something Happened: ${error.message}`);
  }
}