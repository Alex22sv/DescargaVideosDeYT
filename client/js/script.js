var downloadMp4Btn = document.querySelector('.download-button-mp4');
var downloadMp3Btn = document.querySelector('.download-button-mp3');
var cooldownStarted = document.querySelector('.cooldownStarted');
var cooldownOver = document.querySelector('.cooldownOver');
var URLinput = document.querySelector('.URL-input');
var serverURL = 'http://localhost:4000/';

downloadMp4Btn.addEventListener('click', () => {
    // console.log(`URL del video: ${URLinput.value}`);
    downloadMp4Btn.setAttribute('disabled', '');
    cooldownStarted.style.display = 'block';
    var format = 'mp4';
    sendURL(URLinput.value, format);
    setTimeout(function(){
        downloadMp4Btn.removeAttribute('disabled', '')
        cooldownStarted.style.display = 'none';
        cooldownOver.style.display = 'block';
        setTimeout(function(){ 
            cooldownOver.style.display = 'none';
        },18000)
    },300000);
});
downloadMp3Btn.addEventListener('click', () => {
    // console.log(`URL del audio: ${URLinput.value}`);
    downloadMp3Btn.setAttribute('disabled', '');
    cooldownStarted.style.display = 'block';
    var format = 'mp3';
    sendURL(URLinput.value, format);
    setTimeout(function(){
        downloadMp3Btn.removeAttribute('disabled', '')
        cooldownStarted.style.display = 'none';
        cooldownOver.style.display = 'block';
        setTimeout(function(){ 
            cooldownOver.style.display = 'none';
        },18000)
    },300000);

});
function sendURL(URL, format) {
    window.location.href = `${serverURL}download${format}?URL=${URL}`;
}   
