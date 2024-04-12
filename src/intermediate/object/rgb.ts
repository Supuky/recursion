class RGB {
  red: number;
  green: number;
  blue: number;

  constructor(red: number, green: number, blue: number) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  };

  private numberToBit(number: number): string {
    let bit = "";
    while(number > 0) {
      bit = number % 2 + bit;
      number = Math.floor(number / 2);
    };
    return bit;
  };

  private numberToHex(number: number): string {
    if(number === 0) return "00";
    const hexMap = "0123456789abcdef";
    let hex = "";

    while(number > 0) {
      hex = hexMap[number % 16] + hex;
      number = Math.floor(number / 16);
    };

    return hex;
  };

  getHexCode(): string {
    const redHex = this.numberToHex(this.red);
    const greenHex = this.numberToHex(this.green);
    const blueHex = this.numberToHex(this.blue);
    return `#${redHex}${greenHex}${blueHex}`;
  };

  getBits(): string {
    const redBit = this.numberToBit(this.red);
    const greenBit = this.numberToBit(this.green);
    const blueBit = this.numberToBit(this.blue);
    return `${redBit}${greenBit}${blueBit}`;
  };

  getColorShade(): string {
    if(this.red === this.green && this.green === this.blue) return "grayscale";
    
    if(this.red >= this.green) {
      if(this.red >= this.blue) return "red";
    } else if(this.green >= this.red) {
      if(this.green >= this.blue) return "green";
    } 

    return "blue";
  };
}

const color1 = new RGB(0, 153, 255);
console.log(color1.getHexCode());
console.log(color1.getBits());
console.log(color1.getColorShade());

const color2 = new RGB(255, 255, 204)
console.log(color2.getHexCode()) 
console.log(color2.getBits())
console.log(color2.getColorShade())

const color3 = new RGB(0, 87, 0)
console.log(color3.getHexCode())
console.log(color3.getBits())
console.log(color3.getColorShade())

const gray = new RGB(123, 123, 123)
console.log(gray.getHexCode())
console.log(gray.getBits())
console.log(gray.getColorShade())