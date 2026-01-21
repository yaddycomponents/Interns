const msgButton = document.getElementsByClassName('msg')[0];

msgButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'mailto:janardhaniit474@gmail.com';
});

const projectsCard = document.getElementsByClassName('projects')[0];

projectsCard.addEventListener('click', function(e) {
    e.preventDefault();
    downloadFile('ArrayList in Java.pdf');
});

const publicationsCard = document.getElementsByClassName('Publications')[0];

publicationsCard.addEventListener('click', function(e) {
    e.preventDefault();
    downloadFile('ArrayList in Java.pdf');
});

const educationCard = document.getElementsByClassName('Education')[0];

educationCard.addEventListener('click', function(e) {
    e.preventDefault();
    downloadFile('ArrayList in Java.pdf');
});

function downloadFile(filename) {
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}