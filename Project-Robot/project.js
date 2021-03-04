const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
    //grap = "from" : [to, to , to] etc
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            //it exists already so just add
            graph[from].push(to);
        }
    }
    // each iteration map returns an array of 2 strings splitted by "-"
    // from and to are available eventhough they are in arr?
    for (let [from, to] of edges.map(r => r.split("-"))) {
        // it 2 ways so both need to be added
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
    // example parcels looks like this where address is the delivery destination:
    //0: { place: "Alice's House", address: "Town Hall" }
    //1: { place: "Farm", address: "Alice's House" }
    //2: { place: "Bob's House", address: "Town Hall" }
    //3: { place: "Ernie's House", address: "Daria's House" }
    //4: { place: "Alice's House", address: "Town Hall" }
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    move(destination) {
        //checks whether there is a road going from the current place to the destination,
        //and if not, it returns
        //the old state since this is not a valid move so arr.includes(destination)
        // for place "Post Office" and destination "Alice's H" it executes else
        //
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            // moving
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return { place: destination, address: p.address };
                // deliver
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

//let first = new VillageState(
//    "Post Office",
//    [{ place: "Post Office", address: "Alice's House" }]
//);
//let next = first.move("Alice's House");
//console.log(next.place);
//// → Alice's House
//console.log(next.parcels);
//// → []
//console.log(first.place);
//// → Post Office

function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

// if we pass "Post Office" we pass to randomPick an array roadGraph["Post Office"]
function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({ place, address });
    }
    return new VillageState("Post Office", parcels);
};

runRobot(VillageState.random(), randomRobot);