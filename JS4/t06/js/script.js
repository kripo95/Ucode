function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}
let gen = generateSequence(0, 4);

function answerJarvis(word){
    const phrases = ['Hello, I am J.A.R.V.I.S.', 'I believe I\'ve already said it, but, sure, hello again!', 'You are malfunctioning.', 'I believe your intentions to be hostile.', 'I will not respond to that.'];
    if(word === 'hi' || word === 'hello' || word === 'privet' || word === 'zdorov' || word === 'hey'){
        const numberPrase = phrases[gen.next().value];
        return numberPrase === undefined ? 'Error': numberPrase;
    } else {
         return `I don't understand`;
    }
}
const sendMessage = document.getElementById('sendMessage');
const chat = document.getElementById('chat');
sendMessage.addEventListener('click', function (){
    const textField = document.getElementById('textField');
    let inputText = textField.value;
    if(textField.value){
        let div = document.createElement('div');
        div.classList.add('messageContainMe');
        div.innerHTML = `<span class="messageMe">${inputText}</span>`
        chat.prepend(div);
        setTimeout(function (){
            let div = document.createElement('div');
            div.classList.add('messageContainJar');
            div.innerHTML = `<span class="messageJar">${answerJarvis(inputText)}</span>`
            chat.prepend(div)
        }, 500);
    }
    textField.value = '';
})