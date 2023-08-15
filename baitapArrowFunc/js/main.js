const colorList = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar",
  ];
  
  let renderListColor = (list) => {
    let content = "";
    list.forEach((color, index) => {
      content += `<button class="color-button ${color}" onclick="changColorHouse('${color}',${index})"></button>`;
    });
    document.getElementById("colorContainer").innerHTML = content;
    document.querySelector('.pallet').classList.add('active');
  
  };
  renderListColor(colorList);
  
  let changColorHouse = (color, index) => {
    let active = document.querySelector('.active')
    active && active.classList.remove('active')
  
    let buttonNode = document.querySelectorAll("#colorContainer button");
 
    buttonNode[index].classList.add('active');
  
  
  
  
    document.getElementById("house").className = `house ${color}`;
  };
  