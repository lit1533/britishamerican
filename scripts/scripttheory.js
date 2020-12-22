let titleHistory = document.querySelector('.title-history');
let textHistory = document.querySelector('.text-history');
let titleTheory = document.querySelector('.title-theory');
let textTheory = document.querySelector('.text-theory');

textHistory.style.display = 'none';
textTheory.style.display = 'none';

let textHistoryOpen = false;

titleHistory.addEventListener('click', function() {
    if (textHistoryOpen){
        textHistory.style.display = 'none';
        textHistoryOpen = false
    }
    else{
        textHistory.style.display = 'block';
        textHistoryOpen = true
    }

    
});

let textTheoryOpen = false;

titleTheory.addEventListener('click', function() {
    if (textTheoryOpen){
        textTheory.style.display = 'none';
        textTheoryOpen = false
    }
    else{
        textTheory.style.display = 'block';
        textTheoryOpen = true
    }

    
});
