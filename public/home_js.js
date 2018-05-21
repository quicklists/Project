/** Gets the users input and sends it to the server to add the list, if the server returns ok it updates the web page
 */
function addList() {
    var listName = prompt('please enter your lists name')
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/addList');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {

            var sbtn = document.getElementById('sendButton')
            console.log(sbtn);
            if (sbtn === null) {
                
            }


            var newListRadio = document.createElement('input');
            var newId = document.createTextNode(listName);
            newListRadio.setAttribute('type', 'radio');
            newListRadio.setAttribute('name', 'radioList');
            newListRadio.setAttribute('value', listName);
            newListRadio.setAttribute('id', listName)

            var newLabel = document.createElement('label');
            var newId = document.createTextNode(listName);
            newLabel.setAttribute('for', listName)
            newLabel.appendChild(newId);
            newLabel.appendChild(document.createElement('br'));

            var sendButton = document.getElementById('sendButton');
            var radioForm = document.getElementById('radioForm');

            radioForm.insertBefore(newListRadio, sendButton);
            radioForm.insertBefore(newLabel, sendButton);
        } else {
            swal('Error: change not saved, please try again.');
        }
    };
    xhr.send(JSON.stringify({
        name: listName,
        categories: []
    }));
}

/** Gets the users input and sends it to the server to delete the list, if the server returns ok it updates the web page
 */
function deleteList() {
	var listName = document.querySelector('input[name="radioList"]:checked').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/deleteList');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {

        var el = document.querySelector('input[name="radioList"]:checked');
        var labelEl = el.nextSibling;
        var br = labelEl.nextSibling;
        var parentNode = el.parentNode;
        parentNode.removeChild(el);
        parentNode.removeChild(labelEl);
        parentNode.removeChild(br);
        } else {
            swal('Error: change not saved, please try again.');
        }
    };
    xhr.send(JSON.stringify({
        list: listName
    }));
}

document.getElementById('addList').addEventListener('click', function() {
    addList();
});

document.getElementById('delList').addEventListener('click', function() {
	deleteList();
});