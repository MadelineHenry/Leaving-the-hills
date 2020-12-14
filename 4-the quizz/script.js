const mainDiv = document.querySelector('main');

/*introduire l'url API qui est le questionnaire  */
fetch('https://opentdb.com/api.php?amount=5&category=25&difficulty=easy&type=multiple')
    .then((resp) => resp.json())
    .then((object) => {
        /* */
        console.log(object);
        console.log(object.results);

        for (let elem of object.results) {
            
            let array05 = [];
            let correct_answer = elem.correct_answer;
            let answer = (elem.incorrect_answers);
            answer.push(correct_answer);

            const questions = document.createElement('div');
            questions.innerHTML = elem.question;
            const listAnwers = document.createElement('ul');
            

            for (let elements of answer) {
                const bulletPoints = document.createElement('input');
                bulletPoints.type = 'radio';
                bulletPoints.name = 'name';

                const multipleChoiceLabel = document.createElement('label');
                multipleChoiceLabel.innerHTML = elements;
                listAnwers.appendChild(bulletPoints);
                listAnwers.appendChild(multipleChoiceLabel);

                mainDiv.appendChild(questions);
                mainDiv.appendChild(listAnwers);
                
                let labelsQuestions = document.querySelectorAll('label');
/* créer un évenement qui selectionne des réponses */
                bulletPoints.addEventListener('click', function(){
/* effacer le nom de la classe à chaque nouveau click */                    
                    for(let elements of labelsQuestions){
                        elements.classList.remove('green');
                        elements.classList.remove('red');
                    }
/* ajouter un nom de class lorsque c'est la bonne(green) ou la mauvaise(red) réponse */                   
                    if (multipleChoiceLabel.innerHTML == correct_answer) {
                        multipleChoiceLabel.classList.add('green');
                    } else {
                        multipleChoiceLabel.classList.add('red');
                    }
                })

            }
        }
    })
    .catch(error => {
        console.log('there was an error', error);
    })

