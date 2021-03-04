const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

//const table = document.getElementById('mountains');

//MOUNTAINS.forEach(mountain => {
//    let tr = document.createElement("tr");
//    let td1 = document.createElement("td");
//    let td2 = document.createElement("td");
//    let td3 = document.createElement("td");
//    td1.innerHTML = mountain.name;
//    td2.innerHTML = mountain.height;
//    td3.innerHTML = mountain.place;
//    tr.insertAdjacentElement('beforeend', td1);
//    tr.insertAdjacentElement('beforeend', td2);
//    tr.insertAdjacentElement('beforeend', td3);
//    table.insertAdjacentElement('beforeend', tr);

//    //table.appendChild(td1)

//});



function buildTable(data) {
    let table = document.createElement("table");

    let fields = Object.keys(data[0]);
    console.log(fields);
    let headRow = document.createElement("tr");
    fields.forEach(function (field) {
        let headCell = document.createElement("th");
        headCell.appendChild(document.createTextNode(field));
        headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function (object) {
        let row = document.createElement("tr");
        fields.forEach(function (field) {
            let cell = document.createElement("td");
            cell.appendChild(document.createTextNode(object[field]));
            if (typeof object[field] == "number") {
                cell.style.textAlign = "right";
            }
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    return table;
}

document.querySelector("#mountains")
    .appendChild(buildTable(MOUNTAINS));



//Elements by tag name
function byTagName(node, tagName) {
    let nodes = [];
    tagName = tagName.toLowerCase();

    function addMatchingChildNodes(node) {
        node.childNodes.forEach(n => {
            if (n.nodeName.toLowerCase() == tagName) {
                nodes.push(n);
            }
            addMatchingChildNodes(n);
        });
    }

    addMatchingChildNodes(node);

    return nodes;
}

console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
let para = document.querySelector("p");
console.log(byTagName(para, "span").length);
  // → 2




//The Cat's Hat
//Math.cos and Math.sin measure angles in radians, where a full circle is 2π.
//For a given angle, you can get the opposite angle by adding half of this,
//one - time Math.PI.This can be useful for putting the hat on the opposite side of the orbit.
//https://developer.mozilla.org/pl/docs/Web/API/Window/requestAnimationFrame

let cat = document.querySelector("#face");
let hat = document.querySelector("#pear");

let angle = 0;
let lastTime = null;
function animate(time) {
    if (lastTime != null) angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 40 + 40) + "px";
    cat.style.left = (Math.cos(angle) * 200 + 230) + "px";
    hat.style.top = (Math.sin(angle + Math.PI) * 40 + 40) + "px";
    hat.style.left = (Math.cos(angle + Math.PI) * 200 + 230) + "px";

    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

