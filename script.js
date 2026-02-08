const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.getElementById('question-container');
const responseContainer = document.getElementById('response-container');

let noClickCount = 0;
const noMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely sure?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;("
];

noBtn.addEventListener('click', () => {
    noClickCount++;
    
    // Update No button text
    if (noClickCount < noMessages.length) {
        noBtn.innerText = noMessages[noClickCount];
    } else {
        noBtn.innerText = noMessages[noMessages.length - 1];
    }

    // Make Yes button bigger
    const currentYesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentYesSize * 1.5) + 'px';
    yesBtn.style.padding = (parseFloat(window.getComputedStyle(yesBtn).paddingTop) * 1.5) + 'px ' + (parseFloat(window.getComputedStyle(yesBtn).paddingLeft) * 1.5) + 'px';

    // Make No button smaller
    const currentNoSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    if (currentNoSize > 5) {
        noBtn.style.fontSize = (currentNoSize * 0.8) + 'px';
    }
});

yesBtn.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    responseContainer.classList.remove('hidden');
});