const { writeJSONFile, readJSONFile } = require("./src/helpers/fs-helpers");
const { 
    create,
    index,
    show, 
    destroy, 
    updateOrder,
    total,
    emptyCart,
    filterByPrice 
    } = require("./src/warehouse-controller")



    function run() {
        const action = process.argv[2];
        const order = process.argv[3];
        let orders = readJSONFile("./data", "orders.json");

        let writeToFile = false;
        let updatedOrders = [];

        switch (action) {
          case "index":
            const ordersView = index(orders);
            console.log(ordersView);
            break;

          case "create":
            updatedOrders = create(orders, order);
            writeToFile = true;
            break;

          case "show":
            const orderView = show(orders, order);
            console.log(orderView);
            break;

          case "destroy":
            updatedOrders = destroy(orders, order);
            writeToFile = true;
          break;

          case "updateOrder":
            updatedOrders = updateOrder(orders, order, process.argv[4]);
            writeToFile = true;
            break;
            
          case "total":
            console.log(total(orders))
            break;

          case "emptyCart":
            updatedOrders = emptyCart(orders);
            writeToFile = true;
            break;

          default:
            console.log("There was an error.");
        }
        if (writeToFile) {
          writeJSONFile("data", "orders.json", updatedOrders);
        }
      }
      
      run()