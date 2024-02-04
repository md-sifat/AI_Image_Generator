console.log("hello world");

const generateForm = document.querySelector(".generate-form");
const imgGalarry = document.querySelector(".img-galarry");

const handleFromSubmission = (e) =>{
    e.preventDefault();
    // getting the promt from the user and number of img to generate 
    const userPromt = e.srcElement[0].value;
    const imgQ = e.srcElement[1].value;
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