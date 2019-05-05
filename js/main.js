; (function () {
    let bDiv = document.getElementsByClassName('ba-show'),
        textArea = document.getElementsByClassName('ba-textarea');

    document.body.addEventListener('keydown', show);
    function show(i) {
        console.log(i);
        // switch (i) {
        //     case edit:
        //         if (i.keyCode == 69 && i.ctrlKey) {
        //             i.preventDefault();
        //             bDiv.style.display = 'none';
        //             textArea.style.display = 'block';
        //             textArea.value = bDiv.innerHTML;
        //             textArea.focus();
        //         }
        //         break;
        //     case save:
        //         if (i.keyCode == 83 && i.ctrlKey) {
        //             i.preventDefault();
        //             bDiv.style.display = 'block';
        //             textArea.style.display = 'none';
        //             bDiv.innerHTML = textArea.value;
        //         }
        //         break;
        //     case escape:
        //         if (i.keyCode == 27) {
        //             i.preventDefault();
        //             bDiv.style.display = 'none';
        //             textArea.style.display = 'block';
        //         }
        //         break;
        // }




        // if (i.keyCode == 69 && i.ctrlKey) {
        //     i.preventDefault();
        //     bDiv.hidden = false;
        //     textArea.hidden = true;
        //     textArea.value = bDiv.innerHTML;
        //     textArea.focus();
        // }
        // if (i.keyCode == 83 && i.ctrlKey) {
        //     i.preventDefault();
        //     bDiv.hidden = true;
        //     textArea.hidden = false;
        //     bDiv.innerHTML = textArea.value;
        // }
        // if(i.keyCode == 27){
        //     i.preventDefault();
        //     bDiv.hidden = false;
        //     textArea.hidden = true;
        // }


        if (i.keyCode == 69 && i.ctrlKey) {
            i.preventDefault();
            textArea.style.display = 'block';
            bDiv.style.display = 'none';
            textArea.value = bDiv.innerHTML;
            textArea.focus();
        }
        if (i.keyCode == 83 && i.ctrlKey) {
            i.preventDefault();
            textArea.style.display = 'none';
            bDiv.style.display = 'block';
            bDiv.innerHTML = textArea.value;
        }
        if (i.keyCode == 27) {
            i.preventDefault();
            textArea.style.display = 'block';
            bDiv.style.display = 'none';
        }
    }


}());