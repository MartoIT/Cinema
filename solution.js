function solve() {


    let buton = document.querySelector('container, button');
    buton.addEventListener('click', onclick)

    function onclick(ev) {
        ev.preventDefault();

        let movieInput = document.querySelectorAll('#container input')
        let nameInput = movieInput[0];
        let hallInput = movieInput[1];
        let priceInput = movieInput[2];

        let name = nameInput.value;
        let hall = hallInput.value;
        let price = Number(priceInput.value).toFixed(2);

        let li = document.createElement('li');
        let nameSpan = document.createElement('span');
        nameSpan.textContent = name;

        let hallStrong = document.createElement('strong');
        hallStrong.textContent = `Hall: ${hall}`;

        let rightSectionDiv = document.createElement('div');
        let priceStrong = document.createElement('strong');
        priceStrong.textContent = price;

        let ticketsSoldInput = document.createElement('input');
        ticketsSoldInput.setAttribute('placeholder', 'Tickets Sold');

        let archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';

        rightSectionDiv.appendChild(priceStrong);
        rightSectionDiv.appendChild(ticketsSoldInput);
        rightSectionDiv.appendChild(archiveButton);

        li.appendChild(nameSpan);
        li.appendChild(hallStrong);
        li.appendChild(rightSectionDiv);

        let moviesUl = document.querySelector('#movies ul');
        moviesUl.appendChild(li)
    }





}