var horoscope = [
{
    sign: "aries",
    img: "img/aries.jpg",
    blurb: "Mar 21 - Apr 20 :Active, Demanding, Determined, Effective, Ambitious"
},
{
    sign: "aquarius",
    img: "img/Aquarius.jpg",
    blurb: "Jan 20 - Feb 18 :Progressive, Original, Idependent, Humanitarian"
},
{
    sign: "pieces",
    img: "img/pieces.jpg",
    blurb: "Feb 19 - Mar 20 :Compassionate, Artistic, Intuitive, Gentle, Wise"
},
{
    sign: "taurus",
    img: "img/taurus.jpg",
    blurb: "April 20-May 20 :Reliable, Patient, Practical, Stable"
},
{
    sign: "gemini",
    img: "img/gemini.png",
    blurb: "May 21-June 20 :Gentle, Curious, Affectionate, Adaptable"
},
{
    sign: "cancer",
    img: "img/cancer.jpg",
    blurb: "June 21 - July 22 :Loyal, Emotional,Tenacious, Persuasive"
},
{
    sign: "leo",
    img: "img/Leo.jpg",
    blurb: "July 23 - August 22 :Creative, Generous, Cheerful, Humonous"
},
{
    sign: "virgo",
    img: "img/virgo.jpg",
    blurb: "Aug 23 - Sept 22 :Loyal, Kind, Hardworking,Practical"
},
{
    sign: "libra",
    img: "img/libra.png",
    blurb: "Sept 23 - Oct 22 :Cooperative, Diplomatic,Gracious"
},
{
    sign: "scorpio",
    img: "img/scorpio.jpg",
    blurb: "Oct 23 - Nov 21 :Brave, Stubborn, Resourceful, Passionate"
},
{
    sign: "sagittarious",
    img: "img/sagittarious.jpg",
    blurb: "Nov 22 - Dec 21 :Genourous, Idealistic, Humonous"
},
{
    sign: "capricorn",
    img: "img/capricorn.jpg",
    blurb: "Dec 22 - Jan 19 :Rsponsible, Disciplined, Self-controlled, Good Manners"
}
];


var input = document.getElementById("userdata");

function getInfo(){
  console.log(input.value)
  for(var i =0; i < horoscope.length; i++) {

    if(input.value == horoscope[i].sign) {
      console.log("success!")
      var output = document.getElementById("output");
      output.textContent = horoscope[i].blurb;

      var signh1 = document.createElement("h1");
      signh1.textContent = horoscope[i].sign;
      output.appendChild(signh1);

      var img = document.createElement("img");
      img.src = horoscope[i].img;
      output.appendChild(img);

    }else{
      //alert("horoscope not found");
    }
  }



}
