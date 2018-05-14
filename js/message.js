function createMessage(title, body, span) {
    var container = document.createElement('div');

    container.innerHTML = '<div class="message"> \
    <div class="message-title">'+title+'</div> \
    <div class="message-body">'+body+'</div> \
    <span class="message-span">'+span+'</span> \
    <input class="message-ok" type="button" value="OK"/> \
    </div>';

    return container.firstChild
}
function positionMessage(elem) {
    elem.style.position = 'absolute';
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    elem.style.top = scroll + 200 + 'px';
    elem.style.left = Math.floor(document.body.clientWidth/2) - 170 + 'px';
}
function addCloseOnClick(messageElem) {
    var input = messageElem.getElementsByTagName('INPUT')[0];
    input.onclick = function() {
        messageElem.parentNode.removeChild(messageElem)
    }
}
function setupMessageButton(title, body, span) {
    var messageElem = createMessage(title, body, span);
    positionMessage(messageElem);
    addCloseOnClick(messageElem);
    document.body.appendChild(messageElem);
}
