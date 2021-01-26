let img = document.getElementById("download-image");

function imageDownloader() {
    let imagePath = img.getAttribute('src');
    let fileName = "The Glitterz.png"
    saveAs(imagePath, fileName);
}
window.onload = imageDownloader;