/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const catsNFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, breed, coat_color, eye_color, personality) {
   const nftMetadata = {
      "name": name, 
      "breed": breed, 
      "coatColor": coat_color, 
      "eyeColor": eye_color,
      "personality": personality
   }
   catsNFT.push(nftMetadata);
   console.log(name + " has been minted.");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for (let i = 0; i < catsNFT.length; i ++){
      console.log("ID: " + (i + 1));
      console.log("Name: " + catsNFT[i].name);
      console.log("Breed: " + catsNFT[i].breed);
      console.log("Coat Color: " + catsNFT[i].coatColor);
      console.log("Eye Color: " + catsNFT[i].eyeColor);
      console.log("Personality: " + catsNFT[i].personality + "\n");
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Number of Minted NFT's: " + catsNFT.length);
}

// call your functions below this line
//name, breed, coat color, eye color, personality
mintNFT("Poofy", "British Shorthair", "gray", "yellow", "Shy");
mintNFT("Bubbles", "Birman", "lilac", "blue", "Playful");
mintNFT("Tiger", "Abyssinian", "orange", "gold", "Dominant");
mintNFT("Dumbo", "Scottish Fold", "gray", "yellow", "Impulsive");
mintNFT("Yoshi", "Chartreux", "gray", "yellow", "Curious");
getTotalSupply();
listNFTs();

