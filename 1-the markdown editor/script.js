const textarea = document.querySelector('textarea');
const transcription = document.querySelector('.body_editor_partRight_translation');
const button = document.querySelector('button')
let text;

button.addEventListener('click', function() {
    convertMD(textarea)
    
    function convertMD(textarea){
        let translated = textarea.value;
        markdownToHtml(translated);
        transcription.innerHTML = text;
    }
})

const markdownToHtml = (translate) =>{
    console.log(translate);
    text = translate
    /*titles */
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
	.replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    /*Mettre un saut de ligne */
    .replace(/\n$/gim, '<br/>')
    /*blockquote*/
    .replace(/^\> (.*)$/gim, '<blockquote>$1</blockquote>')
    /*texte qui se différencie du texte principal*/
    /*anciennement gras*/ 
	.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
    /*anciennement italic*/
    .replace(/\*(.*)\*/gim, '<i>$1</i>')
    /*mettre en italique et en gras*/
    .replace(/\*{2}(.*)\*{2}/gim, '<strong>$1</strong>')
    .replace(/\_{2}(.*)\_{2}/gim, '<strong>$1</strong>')
    .replace(/\*{1}(.*)\*{2}/gim, '<em>$1</em>')
    .replace(/\_{1}(.*)\_{1}/gim, '<em>$1</em>')
    .replace(/\~{2}(.*)\~{2}/gim, '<s>$1</s>')
    /*links */
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
	.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
    /*Horizontal Rules*/
    
    /* */
    
	return text.trim();
}