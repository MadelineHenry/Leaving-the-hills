const textarea = document.querySelector('textarea');
const transcription = document.querySelector('.body_editor_partRight_translation');
let text;

textarea.addEventListener('keyup', function() {
    let translate = textarea.value;
    markdownToHtml(translate);
    transcription.innerHTML = text;
})


const markdownToHtml = (translate) =>{
    console.log(translate);
    text = translate
    /*titre */
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
	.replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    
	.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
	.replace(/\*(.*)\*/gim, '<i>$1</i>')
	.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
	.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
    .replace(/\n$/gim, '<br />')
    /*blockquote*/
    .replace(/^\> (.*)$/gim, '<blockquote>$1</blockquote>')
    /*mettre en italique et en gras*/
    .replace(/\*{2}(.*)\*{2}/gim, '<strong>$1</strong>')
    .replace(/\_{2}(.*)\_{2}/gim, '<strong>$1</strong>')
    .replace(/\*{1}(.*)\*{2}/gim, '<em>$1</em>')
    .replace(/\_{1}(.*)\_{1}/gim, '<em>$1</em>')
    .replace(/\~{2}(.*)\~{2}/gim, '<s>$1</s>')
    /*Horizontal Rules*/
    .replace()
    /* */
    

	return text.trim();
}



