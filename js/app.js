const loadPhone = async (seachText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${seachText}`);
    const data = await res.json();
    const phones = data.data;
    //console.log(phones);
    displayPhones(phones);
}

const displayPhones = (phones) =>{
    const getPhonesContainer = document.getElementById('phoneContainer');
    // clear phone container befor add new items
    getPhonesContainer.textContent = '';
  phones.forEach(phone =>{
    console.log(phone)
        const phoneCard = document.createElement('div');
        phoneCard.innerHTML = `
        <div class="card  bg-white shadow-xl text-white p-6">
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body ">
          <h2 class="card-title">${phone.phone_name
          }</h2>
          <p>${phone.slug}</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        `;
        getPhonesContainer.appendChild(phoneCard);

  })
}

// hander serch

const serchHandel = () =>{
    const inputField = document.getElementById('inputField');
    const seachText = inputField.value;
    console.log(seachText);
    loadPhone(seachText)
}

loadPhone()