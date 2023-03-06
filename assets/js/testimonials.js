class testimonials {
    constructor(image, content, author) {
        this._image = image
        this._content = content
        this._author = author
    }
    get images() {
        return this._image
    }
    get content() {
        return this._content
    }
    get author() {
        return this._author
    }

    get html() {
        return `<div class="testimonial">
        <img src="${this.images}" class="profile-testimonial" />
        <p class="quote">"${this.content}"</p>
        <p class="author">- ${this.author}</p>
    </div>`
    }
}

// extends = inheritent => keturunan atau child dari orangtua atau parent
class company extends testimonials {
    constructor(image, content, company) {
        super(image, content)
        this._company = company + ' corp';
    }

    get author() {
        return this._company
    }
}

let testi_1 = new testimonials('https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=', "OK!", 'Afif saefuloh')
let testi_2 = new testimonials('https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=', "your a mastery in all progress me", 'udin markondang')
let testi_3 = new company('https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=', "woahh you are goat", 'Google')
let testi_4 = new testimonials('https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=', "your best code", 'boby arthur')
let testi_5 = new company('https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=', "your man is goat", 'bukalapak')


let allTesti = [testi_1, testi_2, testi_3, testi_4, testi_5];
let renderTesti = "";

for (project of allTesti) {
    renderTesti += project.html
}
console.log(renderTesti)

document.getElementById('testimonials').innerHTML = renderTesti




// let arrTesti = [];
// let testi = document.getElementById('testimonials').innerHTML = "";
// for (let i = 0; i < this.testimonialPerson.length; i++) {
//     arrTesti.push(this.testimonialPerson[i])

// }