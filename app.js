console.log("hello world");

// this program uses open ai api to generate images , as open ai api is paid now so without credit in
// account this program doesn't work and will throw error

const generateForm = document.querySelector(".generate-form");
const imgGalarry = document.querySelector(".img-galarry");
const OPENAI_API_KEY = "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";

const genaerteAiImg =  async(prmt , qnt) =>{
    try {
        // sending request to openai api to generate images based on user inputs 
        const res  = await fetch("https://api.openai.com/v1/images/generations",{
            method : "POST",
            header : {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body : JSON.stringify({
                promt : prmt,
                n : parseInt(qnt),
                size : "512x512",
                response_format : "b64_json"
            })
        });
        if(!res.ok){
            throw new Error("API credit ended! Need to buy more credits in OpenAi account by the author");
        }

        // get data from the response 
        const {data} = await respose.json();
        console.log(data);
    }catch (error){
        console.log(error.message);
        alert(error.message);
        
    }
}

const handleFromSubmission = (e) =>{
    e.preventDefault();
    console.log(typeof e);
    console.log(typeof e.srcElement);
    // getting the promt from the user and number of img to generate 
    const userPromt = e.srcElement[0].value;
    const imgQ = e.srcElement[1].value;
    console.log(e.srcElement[0]);
    console.log(e.srcElement[1]);
    console.log(userPromt , imgQ);
    console.log(userPromt , imgQ);
    // making html markup from user image quatity 
    const imgCardMarkup = Array.from({length : imgQ} , ()=>
        `   
        <div class="img loading">
            <img src="img/loader.svg" alt="">
            <a class="d-btn" href=""> <img src="img/download.svg" alt=""> </a>
        </div>
        `
    ).join("");
    console.log(typeof imgCardMarkup);
    imgGalarry.innerHTML = imgCardMarkup;
    genaerteAiImg(userPromt , imgQ);
}

generateForm.addEventListener("submit" , handleFromSubmission);