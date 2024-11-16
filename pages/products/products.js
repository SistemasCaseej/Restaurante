const container = document.getElementById("container");

let dishes = [
    {
        photo: "../../assets/images/image-waffle-mobile.jpg",
        dish: "Waffle",
        description: "Waffle with Berries",
        price: "$6.50"
    },
    {
        photo : "../../assets/images/image-creme-brulee-mobile.jpg",
        dish : "Crème Brulée",
        description : "Vanilla Bean Crème Brûlée",
        price : "$7.00"
    },
    {
        photo : "../../assets/images/image-macaron-mobile.jpg",
        dish : "Macaron",
        description : "Macaron Mix of Five",
        price : "$8.00"
    },
    {
        photo : "../../assets/images/image-tiramisu-mobile.jpg",
        dish : "Tiramisu",
        description : "Classic Tiramisu",
        price : "$5.50"
    },
    {
        photo : "../../assets/images/image-baklava-mobile.jpg",
        dish : "Baklava",
        description : "Pistachio Baklava",
        price : "$4.00"
    },
    {
        photo : "../../assets/images/image-meringue-mobile.jpg",
        dish : "Pie",
        description : "Lemon Meringue Pie",
        price : "$5.00"
    },
    {
        photo : "../../assets/images/image-cake-mobile.jpg",
        dish : "Cake",
        description : "Red Velvet Cake",
        price : "$4.50"
    },
    {
        photo : "../../assets/images/image-brownie-mobile.jpg",
        dish : "Brownie",
        description : "Salted Caramel Brownie",
        price : "$5.50"
    }, 
    {
        photo : "../../assets/images/image-panna-cotta-mobile.jpg",
        dish : "Panna Cota",
        description : "Vanilla Panna Cotta",
        price : "$6.50"
    }
    

];

dishes.forEach((element) => {

    console.log(element)
    // Criando o elemento section para cada prato
    let section = document.createElement("section");
    let image = document.createElement("img")

    // Criando a imagem do prato
    image.setAttribute("src", element.photo)
    image.classList.add("image");

    // Criando o título do prato
    let title = document.createElement("p");
    title.textContent = element.dish;
    title.classList.add("title");

    // Criando a descrição do prato
    let description = document.createElement("span");
    description.textContent = element.description;
    description.classList.add("description");

    // Criando o preço do prato
    let price = document.createElement("p");
    price.classList.add("price")
    price.textContent = element.price;

    // Adicionando todos os elementos dentro da section
    section.appendChild(image)
    section.appendChild(title);
    section.appendChild(description);
    section.appendChild(price);

    // Adicionando a section ao container
    container.appendChild(section);
});
