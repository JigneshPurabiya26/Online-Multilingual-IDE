let editor;

// document.getElementById('editor').style.fontSize='18px'; //to change the font size of the editor
window.onload = function () {  //configuring the editor
    editor = ace.edit("editor"); //giving the id of the div where we want our editor
    editor.setTheme("ace/theme/monokai"); //setting up the theme of the editor
    editor.session.setMode("ace/mode/c_cpp");
    editor.session.setUseWrapMode(true);    // this will allow wrap mode
    // editor.setReadOnly(true);

    // to set default code
    let defaultCode = `#include <stdio.h>\nint main() {\n\tprintf("Hello, World!");\n\treturn 0;\n}`;
    editor.setValue(defaultCode);
}

function changeLanguage() {

    let language = $("#languages").val(); //setting the mode of the editor using the id given in the html file for languages

    if (language == 'c') {
        editor.session.setMode("ace/mode/c_cpp");
        defaultCode = `#include <stdio.h>\nint main() {\n\tprintf("Hello, World!");\n\treturn 0;\n}`;
        editor.setValue(defaultCode);
    }
    else if (language == 'python') {
        editor.session.setMode("ace/mode/python");
        editor.setValue(`print("Hello World!");`);
    }
    else if (language == 'node') {
        editor.session.setMode("ace/mode/javascript");
        editor.setValue(`console.log("Hello World!");`);
    }
    else if (language == 'cpp') {
        editor.session.setMode("ace/mode/c_cpp");
        defaultCode = `#include<iostream>
        using namespace std;
        
        int main()
        {
            cout << "hello world agian" << endl;
            return 0 ;
        }`;
        editor.setValue(defaultCode);
    }
    else if (language == 'php') {
        editor.session.setMode("ace/mode/php");
        defaultCode = `<?php\necho "Hello World!";`;
        editor.setValue(defaultCode);
    }
}

function changeTheme() {
    let themes = $("#themes").val();
    let output = document.getElementById('output');

    if (themes == 'drake') {
        editor.setTheme("ace/theme/dracula");
        output.style.color = "white";
        output.style.backgroundColor = "#282a36";
    }
    else if (themes == 'mono') {
        editor.setTheme("ace/theme/monokai");
        output.style.backgroundColor = "#272822";
        output.style.color = "white";
        output.style.borderTopColor = "black";
    }
    else if (themes == 'ecl') {
        editor.setTheme("ace/theme/eclipse");
        output.style.backgroundColor = "white";
        output.style.color = "black";
        output.style.borderTopColor = "black";
    }
    else if (themes == 'tomD') {
        editor.setTheme("ace/theme/tomorrow_night_bright");
        output.style.backgroundColor = "black";
        output.style.color = "white";
        output.style.borderTopColor = "white";
    }
    else if (themes == 'tomB') {
        editor.setTheme("ace/theme/tomorrow_night_blue");
        output.style.backgroundColor = "rgb(0 36 81)";
        output.style.color = "white";
        output.style.borderTopColor = "black";
    }
    else if (themes == 'solD') {
        editor.setTheme("ace/theme/solarized_dark");
        output.style.backgroundColor = "#002b36";
        output.style.color = "white";
        output.style.borderTopColor = "black";
    }
}

let sizeText = document.getElementById("sizeText").defaultValue = "16";
function changeSizeText() {
    let sizes = $("#sizeText").val();
    document.getElementById('editor').style.fontSize = `${sizes}px`;
}

function formatText() {
    let beautiful = ace.require("ace/ext/beautify");
    beautiful.beautify(editor.session);
}

function undoButton() {
    editor.undo();
}
function redoButton() {
    editor.redo();
}


//sending the code to the server side php file
function executeCode() {

    $.ajax({

        url: "/CODEDITOR2/app/compiler.php",

        method: "POST",

        data: {
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },

        success: function (response) {
            $("#output").text(response)
        }
    })
}
