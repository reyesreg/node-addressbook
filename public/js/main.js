var counter = 0;
var x = document.getElementsByClassName('btnEdit');

for (var i = 0; i < x.length; i++) {
    x[i].onclick = function () { editBtnClick(this.id); };
}

document.getElementById('closeEditButton').onclick = function () { editCloseBtnClick(); };

//document.getElementsByClassName('btnEdit')[0].onclick = function () { editBtnClick(); };

function editBtnClick(evt) {
    if (counter % 2 === 0) {
        counter++;
        document.getElementById('editDiv').classList.toggle('show');

        document.getElementById('nameEdit').value = document.getElementById('name_' + evt).value;
        document.getElementById('emailEdit').value = document.getElementById('email_' + evt).value;
        document.getElementById('contactEdit').value = document.getElementById('contact_' + evt).value;
        document.getElementById('addressEdit').value = $('#address_' + evt).text();

        document.getElementById('contactEditID').value = evt;
    }
}

function editCloseBtnClick() {
    if (counter % 2 !== 0) {
        counter++;
        document.getElementById('editDiv').classList.toggle('show');
    }
}