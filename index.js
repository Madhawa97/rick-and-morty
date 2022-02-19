const url = "https://rickandmortyapi.com/api/character"

const get_comment = async() => {
    const response = await fetch (url);  //create response object
    const data = await response.json();

    const {info, results} = data;

    for (result of results) {
        
        const {id,name,image} = result; //destructure


        const div = document.createElement('div')
        div.id = id; 
        div.className = 'w3-card-4';
        div.style.width = '25%'

        // <div class="w3-container">
        // <h2>Photo Card</h2>

        // <div class="w3-card-4" style="width:50%">
        //     <img src="img_snowtops.jpg" alt="Alps" style="width:100%">
        //     <div class="w3-container w3-center">
        //     <p>The Italian / Austrian Alps</p>
        //     </div>
        // </div>
        // </div>

        const img = document.createElement('img')
        img.src = result.image;
        img.style.width = '100%';

        const div2 = document.createElement('div');
        div2.className = 'w3-container w3-center';

        const p = document.createElement("h1");
        p.innerHTML = name;

        // append childs
        div.appendChild(div2);
        div.appendChild(img);
        div2.appendChild(p);

        document.getElementById('root').appendChild(div);

    }
}

get_comment()