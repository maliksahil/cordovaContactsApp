"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CordovaApp = (function () {
    function CordovaApp() {
        document.getElementById('findContactButton').addEventListener('click', this.onfindContactButtonClick);
        var populateContactsButton = document.getElementById('populateContactsButton');
        if (populateContactsButton) {
            populateContactsButton.addEventListener('click', this.onpopulateContactsButtonClick);
        }
    }
    CordovaApp.prototype.onpopulateContactsButtonClick = function () {
        var newContacts = ['Teresita Luse', 'Augustine Rayner', 'Shondra Brockington', 'Krysten Drozd', 'Andrew Feltner', 'Charlotte Windham', 'Danika Gartner', 'Suk Blouin', 'Jeremiah Alberti', 'Kirk Cuffee', 'Roseline Lipton', 'Zulema Luechtefeld', 'Aimee Holguin', 'Treena Done', 'Cinthia Wooster', 'Ceola Veasley', 'Patty Kennison', 'Basilia Pennywell', 'Isela Carbo', 'Melvina Urick', 'Lourie Dusenberry', 'Daniella Forness', 'Thersa Tevis', 'Marcelo Whipkey', 'Kiesha Villanveva', 'Denisse Storck', 'Yolanda Hurley', 'Benjamin Winer', 'Emerita Gendreau', 'Marchelle Heyne', 'Francis Wehrle', 'Britt Swinford', 'Isidro Garner', 'Santos Perea', 'Eun Friedman', 'Libbie Goodloe', 'Alyssa Portman', 'Neomi Amerine', 'Andree Manderscheid', 'Carmela Gaitan', 'Willetta Hixon', 'Lise Bath', 'Floretta Carlsen', 'Ying Kiely', 'Wayne Coit', 'Birgit Mckeel', 'Elizbeth Mohler', 'Armanda Cawley', 'Trina Meszaros', 'Carmen Marriner'];
        newContacts.forEach(function (newContactName) {
            navigator.contacts.create({
                'displayName': newContactName
            }).save(function (contact) {
                console.log(contact.displayName + ' created');
            }, function (error) {
                alert(error);
            });
        });
    };
    CordovaApp.prototype.onfindContactButtonClick = function () {
        var searchText = document.getElementById('searchText').value;
        var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
        navigator.contacts.find(fields, function (contacts) {
            var ul = document.getElementById('contacts');
            contacts.forEach(function (contact) {
                var li = document.createElement('li');
                li.className = 'collection-item';
                li.innerText = contact.displayName;
                ul.appendChild(li);
            });
        }, function (error) {
            alert(error);
        }, {
            filter: searchText, multiple: true,
            desiredFields: [navigator.contacts.fieldType.displayName]
        });
        return false;
    };
    return CordovaApp;
}());
exports.CordovaApp = CordovaApp;
var instance = new CordovaApp();
//# sourceMappingURL=index.js.map