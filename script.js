document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newTask input').value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskName">
                    ${(document.querySelector('#newTask input').value)}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
    }
}