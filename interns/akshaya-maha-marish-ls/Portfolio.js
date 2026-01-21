

function downloadpdf(){
    const link=document.createElement('a');
    link.href='Akshaya Maha Marish L S Student At PSGiTech (3).pdf';
    link.download="Ak'sCV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById('emailButton').addEventListener('click',function(){
    window.location.href='mailto:22b104@psgitech.ac.in?subject=Hello&body=I%20would%20like%20to%20reach%20out.';
})

const themeButton = document.getElementsByClassName("theme-toggle")[0];
console.log("themeButton", themeButton);

themeButton.addEventListener("click", () => {
    document.body.classList.toggle('bright-mode');
    if(document.body.classList.contains('bright-mode')){
      themeButton.innerText='🌙'
    }
    else{
      themeButton.innerText='☀️'
    }
})


function openpdf(link){
    window.open(link,"_blank");
}