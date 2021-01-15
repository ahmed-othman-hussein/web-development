/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

  let i=3;
  let sections = document.querySelectorAll('section');
  let list_element;
  let link_value;
  let link_text ;
  let link_element;
  let l;
  let s;
  const k=document.querySelector('ul');
  let frag=document.createDocumentFragment();
  let m= k.appendChild(frag);
  let links=document.querySelectorAll('a');



// build the nav && Scroll to anchor ID using scrollInTO event

for (let index = 0; index < sections.length; index++) {
  list_element=document.createElement("li");
  link_value =document.getElementById(`section${index+1}`).getAttribute('data-nav');
  link_text = document.createTextNode(link_value);
  link_element=document.createElement("a");
  link_element.addEventListener('click', () => { 
    sections[index].scrollIntoView({behavior:'smooth'});
    });

  l= document.body.appendChild(list_element);
  s= l.appendChild(link_element);
 s.appendChild(link_text);
 frag.appendChild(l);
}
m= k.appendChild(frag);
 
  
// adding new section when click a button 

const mainHeading = document.querySelector('button');
mainHeading.addEventListener('click', function(){
i++;

 const htmlTextToAdd = `<section id="section${i+1}" data-nav="Section ${i+1}">
 <div class="landing__container">
   <h2>Section ${i+1}</h2>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

   <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
 </div>
</section> `

//build the nav && Scroll to anchor ID using scrollInTO event on clicking the button
const main = document.querySelector('main');
main.insertAdjacentHTML('beforeend', htmlTextToAdd);

  sections = document.querySelectorAll('section');
  links=document.querySelectorAll('a');
  const k=document.querySelector('ul');
  let frag=document.createDocumentFragment();
 
  for (let index = i; index < sections.length; index++) {
      list_element=document.createElement("li");
      link_value =document.getElementById(`section${index+1}`).getAttribute('data-nav');
      link_text = document.createTextNode(link_value);
      link_element=document.createElement("a");
      link_element.addEventListener('click', () => { 
        sections[index].scrollIntoView({behavior:'smooth'});
        });
  
      l= document.body.appendChild(list_element);
      s= l.appendChild(link_element);
     s.appendChild(link_text);
     frag.appendChild(l);
  }
  let m= k.appendChild(frag);
});




// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {
  section.classList.remove('your-active-class');
  section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";

};


// adding the active class and active link
const addActive = (active, section) => {
  links=document.querySelectorAll('a');

  if(active){
      section.classList.add('your-active-class');
      section.style.cssText = "background-color: rgba(76, 175, 80, 0.25)";

      links.forEach(link=>{
        if (link.textContent==section.getAttribute('data-nav')) {
          links.forEach(link=>{
            link.classList.remove('active_link');
          });
          link.classList.add('active_link');
          
        }
    
      });

  };

};

//implementating the actual function

const sectionActivation = () => {
    
  sections.forEach(section => {
      const elementOffset = offset(section);

      inviewport = () => elementOffset < 150 && elementOffset >= -150;
     
      removeActive(section);
      
      addActive(inviewport(),section);
     
  });

};

window.addEventListener('scroll' ,sectionActivation);




//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
    links.forEach(link=>{
      link.classList.remove('active_link');
    });
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




