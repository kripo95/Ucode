function* hiGenerator(word){
    let textInner = word.toLowerCase();

    if(textInner === 'Hi' || textInner === 'Hello' || textInner === 'Darov' || textInner === 'privet'){
        for (let i = 0; i < 5; i++){
            yield i;
        }
    }
}