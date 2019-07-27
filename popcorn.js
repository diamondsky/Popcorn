//Kiana Slimak 04.02.18

function getName(name) {
    var xhr;
    // Get the object for all browsers except IE5 and IE6
    if (window.XMLHttpRequest)
        xhr = new XMLHttpRequest();
    // Otherwise get the object for IE5 and IE6
    else
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    // Register the embedded receiver function as the handler
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            //var name = request.responseText;
            if (document.getElementById("street").value == "")
                document.getElementById("street").value = result;
        }
    }
    xhr.open("GET", "getAddress.php?name=" + name);
    xhr.send(null);
}