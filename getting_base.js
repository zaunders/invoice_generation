

function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

// Usage
toDataURL('https://raw.githubusercontent.com/darksoil-studio/media/main/images/shiitakelogo.jpg', function(dataUrl) {
    console.log('RESULT:', dataUrl)
})