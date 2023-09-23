// onClick button Read More

const btnReadMore = document.getElementById('btnReadMore');
const certificatesContainer = document.getElementById('certificates');
const containerCertificates = document.getElementById('containerCertificates');

btnReadMore.onclick = () => {
    if(containerCertificates.hidden){
        containerCertificates.hidden = !containerCertificates.hidden;
        btnReadMore.innerText = 'Hide';
    }else {
        containerCertificates.hidden = !containerCertificates.hidden;

        //scroll smooth to the top of the page
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
        btnReadMore.innerText = 'Read More';
    }
    
}