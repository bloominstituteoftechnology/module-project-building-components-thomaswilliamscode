function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(linksArray) {
    //  ✨ do your magic here
    const nav = document.createElement('nav')

    let links = linksArray.map( linkObj => {

      // Destructure the array 
      let { href, textContent, title } = linkObj;

      // create anchor element
      let a = document.createElement('a')

      // set up anchor element 
      a.href = href
      a.textContent = textContent
      a.title = title

      // append anchor to nav 
      nav.appendChild(a)
    })
    return nav
  }
  

  

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
		//  ✨ do your magic here
    
    
    

		// destructuring the learner obj
		let { id, fullName, dateOfBirth, favLanguage } = learner;

    // creating p for each variable
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');

    // finding lang
    // let lang = languages.find( obj => {
    //   if (obj.id === favLanguage) {
    //     return obj.name
    //   }
    // })

    let lang = null

    languages.map( obj => {
      if (obj.id === favLanguage) {
        lang = obj.name
      }
    })


    p1.textContent = fullName
    p2.textContent = `Learner ID: ${id}`;
    p3.textContent = `Date of Birth: ${dateOfBirth}`;
    p4.textContent = `Fav Language: ${lang}`;


		// finding the section
		const section = document.querySelector('section');

		// creating a div
		let div = document.createElement('div');

		// adding the className
		div.classList.add('learner-card');

		//appending div to section
		section.appendChild(div);

    // appending ps to div 
    div.appendChild(p1)
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);

		// ❗ Note that because of the styles applied in `styles.css`, some paragraphs will be hidden from view and you will have use Dev Tools to see them!

		// 7. **To make the cards behave like the ones in the mock**, inside `buildLearnerCard` add a listener for click events on the card that does the following:

    div.addEventListener('click', () => {
      let active = document.querySelector('.active')
      if (active != null) {
        active.classList.remove('active');
      }
      // active.classList.remove('active')
      div.classList.add('active')
    })



		// 1. Adds the class name 'active' to the clicked `div.learner-card`.

		// 2. Removes the 'active' class name from any other card that has it, if any.
    
	}
  

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here

    // - 2B is concerned with **utilizing the function** to create the learner cards and attaching them to the DOM.

    // 2. Switch to **2B** and loop over the `learners` array of data.

    learners.forEach( learner => {
      buildLearnerCard(learner, languages)
    })

    // 3. At each **iteration** of the loop, generate a learner card using `buildLearnerCard`:

    // - The first argument `buildLearnerCard` is the learner of interest in the current iteration of the loop.

    // - The second argument is the whole `languages` array.

    // 4. Also, at each **iteration** of the loop, you need to append the card to the `section` element inside the HTML.

    // 5. Reload Chrome and see all your "WIPs" rendering inside the `section` element, one per learner.

  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
		//  ✨ do your magic here

		// destructuring fotterData obj
		let { companyName, address, contactEmail, socialMedia } = footerData;

		// destructuring social Media Obj
		let { twitter, facebook, instagram } = socialMedia;

		// grab the body
		let body = document.querySelector('body');
		

		// create a footer
		const footer = document.createElement('footer');

		// apend footer to section
		body.appendChild(footer);

		// create divs
		let companyInfoDiv = document.createElement('div');
		let socialMediaDiv = document.createElement('div');
		let titleDiv = document.createElement('div');

		// adding classes to divs
		companyInfoDiv.classList.add('company-info');
		socialMediaDiv.classList.add('social-media');

		// appending the divs
		[companyInfoDiv, socialMediaDiv, titleDiv].forEach((div) => {
			footer.appendChild(div);
		});

		// creating company info ps
		//       <p class="company-name">Bloom Institute of Technology</p>
    let p1 = document.createElement('p');

		//       <p class="address">123 Main Street, City, Country</p>
    let p2 = document.createElement('p');

		//       <p class="contact-email">Email: <a href="mailto:info@example.com"> info@example.com</a></p>
    let p3 = document.createElement('p');

    // giving the p classes 
    p1.classList.add('company-name')
    p2.classList.add('address');
    p3.classList.add('contact-email');

    // giving the p content 
    p1.textContent = companyName
    p2.textContent = address
    p3.textContent = `email: `;

    // creat an anchor for email 
    let a = document.createElement('a');
    a.href = contactEmail;
    a.textContent = contactEmail;

    // append anchor to contact email 
    p3.appendChild(a);

    

    // append the p to company info div 
    [p1, p2, p3].forEach(p => {
      companyInfoDiv.appendChild(p);
    })

    // create anchors for social media div
    let a1 = document.createElement('a');
    let a2 = document.createElement('a');
    let a3 = document.createElement('a');

    // add content to anchor tags 
    a1.textContent = 'Twitter';
    a2.textContent = 'Facebook'
    a3.textContent = 'Instagram'

    // add links to anchor Tags
    a1.href = twitter
    a2.href = facebook
    a3.href = instagram;

    // appending achor tags to social media div 
    [a1, a2, a3].forEach( anchor => {
      socialMediaDiv.appendChild(anchor)
    })

    titleDiv.textContent = 'Bloom Institute Of Technology 2023'

		return document.createElement('footer');
	}

//   This task is more tedious but more straightforward than TASK 2! Implement the `buildFooter` function:

//   1. It takes an object as its only argument, containing all the data needed to build the footer.
//   2. The function returns a fully-built footer.
//   3. Ensure the email link works correctly and attempts to open an email client when clicked.

// See below an example of a possible return value of `buildNav`, depending on the data passed into it:

// ```html
//   <footer>
//     <div class="company-info">
//       <p class="company-name">Bloom Institute of Technology</p>
//       <p class="address">123 Main Street, City, Country</p>
//       <p class="contact-email">Email: <a href="mailto:info@example.com"> info@example.com</a></p>
//     </div>
//     <div class="social-media">
//       <a href="https://twitter.com/example">Twitter</a>
//       <a href="https://www.facebook.com/example">Facebook</a>
//       <a href="https://www.instagram.com/example">Instagram</a>
//     </div>
//     <div>© BLOOM INSTITUTE OF TECHNOLOGY 2023</div>
//   </footer>
// ```

// ❗ After the `buildFooter` function declaration you will find the function being used to create a nav and attach it to the DOM.

//   ---



  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card


  //  ✨ do your magic here
  let section = document.querySelector('section')
  section.addEventListener('click', (e) => {
    let active = section.querySelector('.active');
    if (e.target === section) {
			active.classList.remove('active');
    }
    
  })
}



// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
