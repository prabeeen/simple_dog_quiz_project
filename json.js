let api_url_image = "https://dog.ceo/api/breeds/image/random"
let api_url_all_breed = 'https://dog.ceo/api/breeds/list/all'

let btn_1 = document.getElementById('option_one');
let btn_2 = document.getElementById('option_two');
let btn_3 = document.getElementById('option_three');
let btn_4 = document.getElementById('option_four');
let next_btn = document.getElementById('next-button');
let score_span = document.getElementById('score');
function generate_num_list_all() {
    let num_list = []
    for (let i = 0; i < 95; i++) {
        num_list.push(i);
    }
    return (num_list);
}


function generate_num_list_option() {
    let num_list = []
    for (let i = 0; i < 4; i++) {
        num_list.push(i);
    }
    return (num_list);
}

let number_list_all = generate_num_list_all();
let number_list_option = generate_num_list_option();
var url_quiz;

function generate_random_all(max) {
    let random_value = Math.floor(Math.random() * max);
    number_list_all.splice(random_value, 1);
    return random_value;
}


function generate_random_option(max) {
    let random_value = Math.floor(Math.random() * max);
    number_list_option.splice(random_value, 1);
    return random_value;
}

var url_quiz;
var answer;
async function get_image() {
    try {
        let response = await fetch(api_url_image);
        let data = await response.json();

        let image_div = document.getElementById('dog-images');
        let img = document.createElement('img');
        url_quiz = data.message;
        img.setAttribute('src', url_quiz);
        img.setAttribute('alt', 'image');
        img.setAttribute('class', 'images');
        image_div.appendChild(img);

    }
    catch (e) {
        console.log('error');
        console.log(e)
    }
}

async function get_option() {
    let response = await fetch(api_url_all_breed);
    let data = await response.json();
    let regex = /breeds\/([a-zA-Z-_]+)\//;
    let test = regex.exec(url_quiz);
    answer = test[1];
    let key = Object.keys(data.message);

    let four_option = [];
    for (let i = 0; i < 3; i++) {
        four_option.push(key[generate_random_all(number_list_all.length)]);
    }
    four_option.push(answer);
    four_option = four_option.sort(() => Math.random() - 0.5);

    let random_one = generate_random_option(number_list_option.length)
    btn_1.innerText = four_option[random_one];
    four_option.splice(random_one, 1)

    let random_two = generate_random_option(number_list_option.length)
    btn_2.innerText = four_option[random_two];
    four_option.splice(random_two, 1)

    let random_three = generate_random_option(number_list_option.length)
    btn_3.innerText = four_option[random_three];
    four_option.splice(random_three, 1)

    let random_four = generate_random_option(number_list_option.length)
    btn_4.innerText = four_option[random_four];
    four_option.splice(random_four, 1)
}
async function get_quiz_section() {
    await get_image()
    get_option()
}
get_quiz_section()


//------------------------------------Click-event-handler(answer checker)---------------------------------
function disable_after_click()
{
    btn_1.disabled = true;
    btn_2.disabled = true;
    btn_3.disabled = true;
    btn_4.disabled = true;
}
function enable_after_next()
{
    btn_1.disabled = false;
    btn_2.disabled = false;
    btn_3.disabled = false;
    btn_4.disabled = false;

}
btn_1.addEventListener('click', (e) => {
    e.preventDefault();
    value = btn_1.innerText
    if (value == answer) {
        btn_1.style.cssText = "color:white;background:green";
        next_btn.style.display = "block";
        disable_after_click();
        
    }
    else {
        btn_1.style.cssText = "color:white;background:red";
        setTimeout(() => {
            alert(`Sorry! Correct Answer: ${answer} Your Score:${score}`);
            window.location.reload();
        }, 500)

    }


})
btn_2.addEventListener('click', (e) => {
    e.preventDefault();
    value = btn_2.innerText
    if (value == answer) {
        btn_2.style.cssText = "color:white;background:green";
        next_btn.style.display = "block";
        disable_after_click();
    }
    else {
        btn_2.style.cssText = "color:white;background:red";
        setTimeout(() => {
            alert(`Sorry! Correct Answer: ${answer} Your Score:${score}`);
            window.location.reload();
        }, 500)

    }

})
btn_3.addEventListener('click', (e) => {
    e.preventDefault();
    value = btn_3.innerText
    if (value == answer) {
        btn_3.style.cssText = "color:white;background:green";
        next_btn.style.display = "block";
        disable_after_click();
    }
    else {
        btn_3.style.cssText = "color:white;background:red";
        setTimeout(() => {
            alert(`Sorry! Correct Answer: ${answer} Your Score: ${score}`);
            window.location.reload();
        }, 500)

    }

})
btn_4.addEventListener('click', (e) => {
    e.preventDefault();
    value = btn_4.innerText
    if (value == answer) {
        btn_4.style.cssText = "color:white;background:green";
        next_btn.style.display = "block";
        disable_after_click();
    }
    else {
        btn_4.style.cssText = "color:white;background:red";
        setTimeout(() => {
            alert(`Sorry! Correct Answer: ${answer} Your Score:${score}`);
            window.location.reload();
        }, 500)

    }
})
let score = 0;
next_btn.addEventListener('click', (e)=>{
    score++;
    e.preventDefault();
    score_span.innerText = score;
    let ref_image = document.getElementsByClassName('images')[0];
    ref_image.remove();
    get_quiz_section();
    if (btn_1.style.background == 'green')
    {
        btn_1.removeAttribute('style');
    }
    else if(btn_2.style.background == 'green')
    {
        btn_2.removeAttribute('style');
    }
    else if(btn_3.style.background == 'green')
    {
        btn_3.removeAttribute('style');
    }
    else if(btn_4.style.background == 'green')
    {
        btn_4.removeAttribute('style');
    }
    next_btn.style.display = 'none';
    enable_after_next();

})






// fetch(api_url_image).then((res) => res.json())
//     .then((data) => {
//         let image_div = document.getElementById('dog-images');
//         let img = document.createElement('img');
//         url_quiz = data.message;
//         img.setAttribute('src', url_quiz);
//         img.setAttribute('alt', 'image');
//         img.setAttribute('class', 'images');
//         image_div.appendChild(img);
//     });
//
// fetch(api_url_all_breed).then(res => res.json())
//     .then(data => {
//         setTimeout(() => {
//             // img = document.getElementsByClassName('images')[0].getAttribute('src');
//             // console.log(img);

//             let regex = /breeds\/([a-zA-Z-_]+)\//;
//             let test = regex.exec(url_quiz);
//             var answer = test[1];
//             // console.log(answer)

//             let key = Object.keys(data.message);

//             let four_option = [];
//             for (let i = 0; i < 3; i++) {
//                 four_option.push(key[generate_random_all(number_list_all.length)]);
//             }
//             four_option.push(answer);
//             let btn_1 = document.getElementById('option_one');
//             let btn_2 = document.getElementById('option_two');
//             let btn_3 = document.getElementById('option_three');
//             let btn_4 = document.getElementById('option_four');

//             let random_one = generate_random_option(number_list_option.length)
//             btn_1.innerText = four_option[random_one];
//             four_option.splice(random_one, 1)

//             let random_two = generate_random_option(number_list_option.length)
//             btn_2.innerText = four_option[random_two];
//             four_option.splice(random_two, 1)

//             let random_three = generate_random_option(number_list_option.length)
//             btn_3.innerText = four_option[random_three];
//             four_option.splice(random_three, 1)

//             let random_four = generate_random_option(number_list_option.length)
//             btn_4.innerText = four_option[random_four];
//             four_option.splice(random_four, 1)
//         }, 500);
//     });
