const url = "https://rickandmortyapi.com/api/character"

const get_comment = async() => {
    const response = await fetch (url);  //create response object
    const data = await response.json();

    const {info, results} = data;

    for (result of results) {
        
        const {id,name,image} = result; //destructure

        console.log("====================================");
        console.log(name);
        console.log("====================================");


        const div = document.createElement('div')
        div.id = id; 

        const h1 = document.createElement('h1')
        h1.innerHTML = name;

        const img = document.createElement('img')
        img.src = result.image;

        div.appendChild(h1);
        div.appendChild(img);

        document.getElementById('root').appendChild(div);

    }
}

get_comment()