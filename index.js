const blogSite = document.querySelector("#blogSite");
const blogs = [
  {
    post: "live longer with calgon i bet he drinks carling black label softness is a thing called comfort one instinctively knows when something is right diamonds are forever  we keep your promises fcuk its got to be gordons harp puts out the fire unbridled spirit have a break have a kit-kat the guardian think. Skim milk does not come from skinny cows courtesy and care theyre waffly versatile when youve got it flaunt it youll never put a better bit of butter on your knife easy as dell for successful living you cant top the copper top pure genius computers help people help people there is no substitute. The cat who doesnt act finicky soon loses control of his owner try it youll like it american home has an edifice complex think different aristonand onand on the greatest show on earth du pain, du vin, du boursin we do it your way for mash get smash got milk the heartbeat of america you can always get it at the co-op babies love it one instinctively knows when something is right cats like felix like felix progress is our most important product georgia on my mind starch free as a chip can be the favorite chip of the sec ready when you are 57 varieties give him a right good hemeling tonight wouldnt you rather be hemeling life is random even your best friends wont tell you coffee at its best the curious county",
    id: 1,
  },
  {
    post: "To our members were the fourth emergency service barqs has bite ahh bisto award yourself the cdm image is everything milk from contented cows are your friends living beyond your means enter a higher state crowdstopper where the rubber meets the road guinness gives you strength. Grapes like children need love and affection dont shop for it argos it afore ye go head for the mountains absolutely pure a glass and a half in every half pound perfume worth 9 guineas an ounce the antidote for civilization made especially to prevent sore throats im only here for the beer because the worlds not ready for formula 410 good as gold you meet the nicest people on a honda the guardian think. Clearly canadian sparkling mineral water in wild fruit flavours if man were meant to fly god would have lowered the fares nothing is more effective than anadin theres no place like asda go to work on an egg a little dabll do ya the genuine article everyones a cadburys fruit and nut case image is everything cmon colmans light my fire diamonds are forever  crowdstopper put a tiger in your tank when it absolutely positively has to be there overnight its tingling fresh glaxo builds bonny babies gobble golden flake its much less bovver on a hover what could be nicer than a pendletons twicer life changing you press the button - we do the rest even your best friends wont tell you more reasons to shop at morrisons",
    id: 2,
  },
  {
    post: "Clearly canadian sparkling mineral water in wild fruit flavours the clothes not to be seen in courtesy and care find your happy place in baltimore make someone happy with a phone call got milk the bright lights taste simples arent you glad you use dial dont you wish everybody did good for life the worlds online market place progress is our most important product roar boys roar it tastes like more what a flavor zippity-zow - its grand - and how happiness is a cigar called hamlet cleans round the bend invent the next big thing the best to you each morning lifes good the totally tropical taste fall in love with louisiana all over again more reasons to shop at morrisons. Access - your flexible friend fresh squeezed glaciers grapes like children need love and affection reach out and touch someone victory wont wait for the nation thats late feel the velvet well take more care of you equal pay equal time sixpence worth of heaven got milk soup is good food image is everything milk from contented cows you too can have a body like mine cmon colmans light my fire courier express todays delivery problems solved tomorrow we keep your promises for successful living balanced and fair extinct is forever think globally act locally the crispiest chip in the south on demand mums gone to iceland it is are you because its your stuff the best to you each morning we all adore a kia-ora after dark",
    id: 3,
  },
];

blogs.forEach(
  (blog) =>
    (blogSite.innerHTML +=
      "<article  class='post m-4 p-5 border border-info'>" +
      Object.values(blog).join(" "))
      + "</article>");



let post  = document.getElementsByClassName("post");


for (let i = 0; i < post.length; i++) {
  console.log(post[i].innerHTML);
}