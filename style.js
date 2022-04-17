function myFunction() {
    document.getElementById("myLinks").style.display = "flex";
    document.getElementById("menu").style.display = "none";
}


class Slider {
    constructor(elemSelector, opts) {
        this.sliderSelector = elemSelector;
        this.currentSlide = 0; 
        this.time = null; 
        this.slider = null;
        this.elem = null;
        this.slides = null;
        this.prev = null; 
        this.next = null; 
        this.dots = [];

        const defaultOpts = {
            pauseTime: 0,
            prevText: "Poprzedni slide",
            nextText: "Następny slide",
            generateDots: true,
            generatePrevNext: true
        };
        this.options = Object.assign({}, defaultOpts, opts);

        this.generateSlider();
        this.changeSlide(this.currentSlide);
    }

    generateSlider() {
        
        this.slider = document.querySelector(this.sliderSelector);
        this.slider.classList.add('slider');

       
        const slidesCnt = document.createElement('div');
        slidesCnt.classList.add('slider-slides-cnt');

      
        this.slides = this.slider.children;

       
        while (this.slides.length) {
            this.slides[0].classList.add('slider-slide');
            slidesCnt.appendChild(this.slides[0]);
        }
        this.slides = slidesCnt.querySelectorAll('.slider-slide');
        this.slider.appendChild(slidesCnt);

        if (this.options.generatePrevNext) this.createPrevNext();
        if (this.options.generateDots) this.createPagination();
    }

    slidePrev() {
        this.currentSlide--;
        if (this.currentSlide < 0) {
            this.currentSlide = this.slides.length - 1;
        }
        this.changeSlide(this.currentSlide);
    }

    slideNext() {
        this.currentSlide++;
        if (this.currentSlide > this.slides.length - 1) {
            this.currentSlide = 0;
        }
        this.changeSlide(this.currentSlide);
    }

    changeSlide(index) {
        this.slides.forEach(slide => {
            slide.classList.remove('slider-slide-active');
            slide.setAttribute('aria-hidden', true);
        });

        
        this.slides[index].classList.add('slider-slide-active');
        this.slides[index].setAttribute('aria-hidden', false);

      
        if (this.options.generateDots) {
            this.dots.forEach(dot => dot.classList.remove('slider-pagination-element-active'));
            this.dots[index].classList.add('slider-pagination-element-active');
        }

        
        this.currentSlide = index;

        if (this.options.pauseTime !== 0) {
            clearInterval(this.time);
            this.time = setTimeout(() => this.slideNext(), this.options.pauseTime)
        }
    }

    createPrevNext() {
        this.prev = document.createElement('button');
        this.prev.type = "button";
        this.prev.innerText = this.options.prevText;
        this.prev.classList.add('slider-button');
        this.prev.classList.add('slider-button-prev');
        this.prev.addEventListener('click', this.slidePrev.bind(this));

        this.next = document.createElement('button');
        this.next.type = "button";
        this.next.innerText = this.options.nextText;
        this.next.classList.add('slider-button');
        this.next.classList.add('slider-button-next');
        this.next.addEventListener('click', () => this.slideNext());

        const nav = document.createElement('div');
        nav.classList.add('slider-nav');
        nav.appendChild(this.prev);
        nav.appendChild(this.next);
        this.slider.appendChild(nav);
    }

    createPagination() {
        const ulDots = document.createElement('ul');
        ulDots.classList.add('slider-pagination');

       
        for (let i=0; i<this.slides.length; i++) {
          

            const li = document.createElement('li');
            li.classList.add('slider-pagination-element');

            const btn = document.createElement('button');
            btn.classList.add('slider-pagination-button');
            btn.type = "button";
            btn.innerText = i+1;
            btn.setAttribute('aria-label', `Ustaw slajd ${i+1}`);

            btn.addEventListener('click', () => this.changeSlide(i));

            li.appendChild(btn);

            ulDots.appendChild(li);
            this.dots.push(li);
        }

        this.slider.appendChild(ulDots);
    }
}

const opts2 = {
    pauseTime : 5000,
    generateDots : false
};

const slide2 = new Slider('#slider2', opts2);





eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}',43,43,'||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'),0,{}))
