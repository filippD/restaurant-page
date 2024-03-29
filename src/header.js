const header = () => {
  	const parent = document.createElement('header');
  	const div = document.createElement('div');
  	const brand = document.createElement('h3');
  	const nav = document.createElement('nav');
  	const links = ["Home", "Menu", "Contacts"]  	

  	for (let i=0; i<links.length; i++) {
  		let link = document.createElement('p');
  		link.textContent = links[i];
      link.id = links[i].toLowerCase()
  		link.classList.add("nav-link")
  		nav.appendChild(link);
  	}

  	parent.classList.add("masthead", "mb-auto");
  	div.classList.add("inner");
  	brand.classList.add("masthead-brand");
  	nav.classList.add("nav-masthead", "nav", "justify-content-center");

  	brand.textContent = "Restaurant";
  	div.appendChild(brand);
  	div.appendChild(nav);
  	parent.appendChild(div);
    parent.id = "header"
  	return parent;
  }

  export default header