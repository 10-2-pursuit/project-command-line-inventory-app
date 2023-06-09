




function run() {
    const action = process.argv[2];
    const animal = process.argv[3];
    switch (action) {
      case "index":
        inform(action);
        break;
      case "create":
        inform(action, animal);
        break;
      case "show":
        inform(action, animal);
        break;
      case "update":
        inform(action, animal);
        break;
      case "destroy":
        inform(action, animal);
        break;
      case "score":
        inform(action);
        break;
      default:
        inform("There was an error.");
    }
  }
  run();