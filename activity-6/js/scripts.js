//var messages = [];

//GETTING LARGE CONTAINER ELEMENTS
var section = document.getElementById('message-container');
var main = document.querySelector('main');

//SETTING TITLE OF THE PAGE
var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Activity 6 - Chat App ');
h1.appendChild(h1Text);
main.insertBefore(h1, section);

//GETTING BUTTON ELEMENTS FROM HTML
var sendBtn = document.getElementById('send-button');
var replyBtn = document.getElementById('reply-button');

//ADDING "ADDMESSAGEHANDLER" EVENT LISTENER
sendBtn.addEventListener('click', addMessageHandler);
replyBtn.addEventListener('click', addMessageHandler);

//MESSAGEHANDLER FUNCTION
function addMessageHandler(e){
    //PARTS OF THE MESSAGE TO BE CONCATENATED
    var user;
    var input = document.getElementById('message-input').value;

    //THE DIV WILL BE THE PART ACTUALLY INJECTED INTO THE HTML
    var div = document.createElement('div');

    //SWITCH TO DETERMINE ID OF BUTTON PRESSED
    switch (e.target.id) {
        case 'send-button':
            user = 'Cayde';
            div.className = 'in-message';
            //console.log(1);
            break;
        case 'reply-button':
            user = 'Ikora'
            div.className = 'out-message';
            //console.log(2);
            break;
        default:
            alert('Error in function buttonClicked');
            break;
    }

    //MESSAGE CONSTRUCTOR 
    var messageConstructor = document.createTextNode(user+': '+input);

    //INSERTING MESSAGE INTO HTML DOC AND THEN CLEARING THE INPUT
    div.appendChild(messageConstructor);
    main.insertBefore(div, section);
    //input.textContent = '';
    document.getElementById('message-input').value = '';
}


