let img = document.getElementById("download-image");

function imageDownloader() {
    let imagePath = img.getAttribute('src');
    let fileName = "Glitterz Business Card.png"
    saveAs(imagePath, fileName);
}
window.onload = imageDownloader;