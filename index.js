const { inquirerMenu, pausa, readInput } = require("./helpers/inquirer.js");
const Searches = require("./models/searches.js");

const main = async () => {

    const searches = new Searches();

    let opt;
    do {

        opt = await inquirerMenu();
        
        switch (opt) {
            case 1:
                // to show message
                const place = await readInput('City: ');
                console.log(place);
                // look for the places

                //select the place

                //to show results
                console.log(`\nCity information\n`.green);
                console.log(`City:`,);
                console.log(`Lat:`,);
                console.log(`Lng:`,);
                console.log(`Temp:`,);
                console.log(`Min:`,);
                console.log(`Max:`,);
            break;
        }


        if (opt !== 0) await pausa();


    } while (opt !== 0)
}
main();