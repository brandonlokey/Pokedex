var pokemon = "pikachu";
var link = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

fetch(link)
.then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    document.getElementById("name").innerHTML = myJson.name.charAt(0).toUpperCase() + myJson.name.slice(1);
    document.getElementById("img_url").src = myJson.sprites.front_default;
    document.getElementById("height").innerHTML = myJson.height;
    document.getElementById("weight").innerHTML = myJson.weight;
    
    var typeArr = myJson.types.map(x => x.type.name);
    var typeArrStr = typeArr.join(', ');
    document.getElementById("types").innerHTML = typeArrStr;
    document.getElementById("types").style.textTransform = "capitalize";

    document.getElementById("speed").innerHTML = myJson.stats[0].base_stat;
    document.getElementById("spec_def").innerHTML = myJson.stats[1].base_stat;
    document.getElementById("spec_atk").innerHTML = myJson.stats[2].base_stat;
    document.getElementById("def").innerHTML = myJson.stats[3].base_stat;
    document.getElementById("atk").innerHTML = myJson.stats[4].base_stat;
    document.getElementById("hp").innerHTML = myJson.stats[5].base_stat;

    for (let i = 0; i < myJson.moves.length; i++) {
      let atkButton = document.createElement("BUTTON");
      atkButton.innerHTML= myJson.moves[i].move.name.toString();
      let moveURL = myJson.moves[i].move.url.toString();
      atkButton.addEventListener("click", () => getAtkInfo(moveURL));
      document.getElementById("attacks").appendChild(atkButton);
    }
  });

function getPoke(event) {
  event.preventDefault();
  var input = document.getElementById("searchBar").value;
  pokemon = input.toLowerCase();
  var link = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  fetch(link)
.then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    document.getElementById("name").innerHTML = myJson.name.charAt(0).toUpperCase() + myJson.name.slice(1);
    document.getElementById("img_url").src = myJson.sprites.front_default;
    document.getElementById("height").innerHTML = myJson.height;
    document.getElementById("weight").innerHTML = myJson.weight;
    
    var typeArr = myJson.types.map(x => x.type.name);
    var typeArrStr = typeArr.join(', ');
    document.getElementById("types").innerHTML = typeArrStr;
    document.getElementById("types").style.textTransform = "capitalize";

    document.getElementById("speed").innerHTML = myJson.stats[0].base_stat;
    document.getElementById("spec_def").innerHTML = myJson.stats[1].base_stat;
    document.getElementById("spec_atk").innerHTML = myJson.stats[2].base_stat;
    document.getElementById("def").innerHTML = myJson.stats[3].base_stat;
    document.getElementById("atk").innerHTML = myJson.stats[4].base_stat;
    document.getElementById("hp").innerHTML = myJson.stats[5].base_stat;

    for (let i = 0; i < myJson.moves.length; i++) {
      let atkButton = document.createElement("BUTTON");
      atkButton.innerHTML= myJson.moves[i].move.name.toString();
      let moveURL = myJson.moves[i].move.url.toString();
      atkButton.addEventListener("click", () => getAtkInfo(moveURL));
      document.getElementById("attacks").appendChild(atkButton);
    }
  });
}

function getAtkInfo(moveURL) {
  console.log("click");
  fetch(moveURL)
  .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
      document.getElementById("atkname").innerHTML = myJson.name.charAt(0).toUpperCase() + myJson.name.slice(1);
      document.getElementById("accuracy").innerHTML = myJson.accuracy;
      document.getElementById("pp").innerHTML = myJson.pp;
      document.getElementById("power").innerHTML = myJson.power;
      document.getElementById("atktype").innerHTML = myJson.type.name.charAt(0).toUpperCase() + myJson.type.name.slice(1);
      document.getElementById("flavor").innerHTML = myJson.flavor_text_entries[2].flavor_text.toString();
    });
}