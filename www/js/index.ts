export class CordovaApp {
    constructor() {
        document.getElementById('findContactButton').addEventListener('click', this.onfindContactButtonClick);
        const populateContactsButton = document.getElementById('populateContactsButton');
        if (populateContactsButton) {
            populateContactsButton.addEventListener('click', this.onpopulateContactsButtonClick);
        }
    }

    onpopulateContactsButtonClick() {
        var newContacts = ['Teresita Luse', 'Augustine Rayner', 'Shondra Brockington', 'Krysten Drozd', 'Andrew Feltner', 'Charlotte Windham', 'Danika Gartner', 'Suk Blouin', 'Jeremiah Alberti', 'Kirk Cuffee', 'Roseline Lipton', 'Zulema Luechtefeld', 'Aimee Holguin', 'Treena Done', 'Cinthia Wooster', 'Ceola Veasley', 'Patty Kennison', 'Basilia Pennywell', 'Isela Carbo', 'Melvina Urick', 'Lourie Dusenberry', 'Daniella Forness', 'Thersa Tevis', 'Marcelo Whipkey', 'Kiesha Villanveva', 'Denisse Storck', 'Yolanda Hurley', 'Benjamin Winer', 'Emerita Gendreau', 'Marchelle Heyne', 'Francis Wehrle', 'Britt Swinford', 'Isidro Garner', 'Santos Perea', 'Eun Friedman', 'Libbie Goodloe', 'Alyssa Portman', 'Neomi Amerine', 'Andree Manderscheid', 'Carmela Gaitan', 'Willetta Hixon', 'Lise Bath', 'Floretta Carlsen', 'Ying Kiely', 'Wayne Coit', 'Birgit Mckeel', 'Elizbeth Mohler', 'Armanda Cawley', 'Trina Meszaros', 'Carmen Marriner'];
        newContacts.forEach((newContactName) => {
            navigator.contacts.create({
                'displayName': newContactName
            }).save((contact) => {
                console.log(contact.displayName + ' created');
            }, (error) => {
                alert(error);
            });
        });
    }

    onfindContactButtonClick() {
        const searchText = (<HTMLInputElement>document.getElementById('searchText')).value;
        let fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
        navigator.contacts.find(fields, (contacts) => {
            let ul = document.getElementById('contacts');
            contacts.forEach((contact) => {
                let li = document.createElement('li');
                li.className = 'collection-item';
                li.innerText = contact.displayName;
                ul.appendChild(li);
            });
        }, (error) => {
            alert(error);
        }, {
                filter: searchText, multiple: true,
                desiredFields: [navigator.contacts.fieldType.displayName]
            });
        return false;        
    }
}

let instance = new CordovaApp();