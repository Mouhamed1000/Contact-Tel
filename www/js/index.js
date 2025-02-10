document.addEventListener('deviceready', getContacts, false);

function getContacts() {
    let options = new ContactFindOptions();
    options.multiple = true;
    options.hasPhoneNumber = true;
    let fields = ['*'];

    navigator.contacts.find(fields, showContacts, onError, options);

}

function showContacts(contacts) {
    const contactList = document.getElementById('contactList');

    let htmlCode = ``;

    for(const contact of contacts) {
        htmlCode += `
            <li>
                <img src="img/contact.png"/>
                <h1>${contact.name.formatted}</h1>
                <p>${contact.phoneNumbers[0].value} (${contact.phoneNumbers[0].type})</p>
            </li>
        `;

        contactList.innerHTML = htmlCode;
        $(contactList).listview('refresh');
    }

}

function onError(error) {

}