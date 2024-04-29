import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    let typingEffect = new Typed('.typedText',{
      strings : ["Dissenyador web", "Fullstack developer", "Estudiant d'ingenieria"],
      loop : true,
      typeSpeed : 150, 
      backSpeed : 100,
      backDelay : 1500
    })

   window.onscroll = function() {headerShadow()};

   const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
    })

    sr.reveal('.featured-text-card',{})
    sr.reveal('.featured-name',{delay: 100})
    sr.reveal('.featured-text-info',{delay: 200})
    sr.reveal('.featured-text-btn',{delay: 200})
    sr.reveal('.social_icons',{delay: 200})
    sr.reveal('.featured-image',{delay: 300})
    sr.reveal('.project-box',{interval: 200})
    sr.reveal('.top-header',{})

    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true
    })
    
    srLeft.reveal('.about-info',{delay: 100})
    srLeft.reveal('.contact-info',{delay: 100})

    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true
    })
    
    srRight.reveal('.skills-box',{delay: 100})
    srRight.reveal('.form-control',{delay: 100})


    const sections = document.querySelectorAll('section[id]')
    window.addEventListener('scroll', function(){scrollActive(sections)})
  }

  myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");
    if(menuBtn){
      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";        
      }
    }
  }

  closeMenu(){
    let menuBtn = document.getElementById("myNavMenu");
    if(menuBtn) menuBtn.className = "nav-menu";
  }
  
}

function headerShadow() {
  const navHeader =document.getElementById("header");

    if(navHeader){
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }
    }
}

function scrollActive(sections:any) {
  const scrollY = window.scrollY;

  sections.forEach((current: { offsetHeight: any; offsetTop: number; getAttribute: (arg0: string) => any; }) =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
      let prova = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
      if(prova) prova.classList.add('active-link')
    }  else {
      if(prova) prova.classList.remove('active-link')
    }
  })
}

