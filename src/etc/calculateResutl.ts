export interface Result {
  extrovert: number, 
  sensing: number, 
  thinking: number, 
  judging: number, 
  introvert: number, 
  intuition: number, 
  feeling: number, 
  perceiving: number, 
  fullLetter: string,
  point: number,
}

export const calculateResult = (data: string[]) => {
    const resultA: number[] = [];
    data.forEach((e: string) => {
      resultA.push(e == "a" ? 1 : 0);
    });

    const resultB: number[] = [];
    data.forEach((e: string) => {
      resultB.push(e == "b" ? 1 : 0);
    });

    const extrovert =
      ((resultA[0] +
        resultA[7] +
        resultA[14] +
        resultA[21] +
        resultA[28] +
        resultA[35] +
        resultA[42] +
        resultA[49] +
        resultA[56] +
        resultA[63]) /
        10) *
      100;
    const sensing =
      ((resultA[1] +
        resultA[2] +
        resultA[8] +
        resultA[9] +
        resultA[15] +
        resultA[16] +
        resultA[22] +
        resultA[23] +
        resultA[29] +
        resultA[30] +
        resultA[36] +
        resultA[37] +
        resultA[43] +
        resultA[29] +
        resultA[50] +
        resultA[51] +
        resultA[57] +
        resultA[58] +
        resultA[64] +
        resultA[65]) /
        20) *
      100;
    const thinking =
      ((resultA[3] +
        resultA[4] +
        resultA[10] +
        resultA[11] +
        resultA[17] +
        resultA[18] +
        resultA[24] +
        resultA[25] +
        resultA[31] +
        resultA[32] +
        resultA[38] +
        resultA[39] +
        resultA[45] +
        resultA[46] +
        resultA[52] +
        resultA[53] +
        resultA[59] +
        resultA[60] +
        resultA[66] +
        resultA[67]) /
        20) *
      100;
    const judging =
      ((resultA[5] +
        resultA[6] +
        resultA[12] +
        resultA[13] +
        resultA[19] +
        resultA[20] +
        resultA[26] +
        resultA[27] +
        resultA[33] +
        resultA[34] +
        resultA[40] +
        resultA[41] +
        resultA[47] +
        resultA[48] +
        resultA[54] +
        resultA[55] +
        resultA[61] +
        resultA[62] +
        resultA[68] +
        resultA[69]) /
        20) *
      100;

    const introvert =
      ((resultB[0] +
        resultB[7] +
        resultB[14] +
        resultB[21] +
        resultB[28] +
        resultB[35] +
        resultB[42] +
        resultB[49] +
        resultB[56] +
        resultB[63]) /
        10) *
      100;
    const intuition =
      ((resultB[1] +
        resultB[2] +
        resultB[8] +
        resultB[9] +
        resultB[15] +
        resultB[16] +
        resultB[22] +
        resultB[23] +
        resultB[29] +
        resultB[30] +
        resultB[36] +
        resultB[37] +
        resultB[43] +
        resultB[29] +
        resultB[50] +
        resultB[51] +
        resultB[57] +
        resultB[58] +
        resultB[64] +
        resultB[65]) /
        20) *
      100;

    const feeling =
      ((resultB[3] +
        resultB[4] +
        resultB[10] +
        resultB[11] +
        resultB[17] +
        resultB[18] +
        resultB[24] +
        resultB[25] +
        resultB[31] +
        resultB[32] +
        resultB[38] +
        resultB[39] +
        resultB[45] +
        resultB[46] +
        resultB[52] +
        resultB[53] +
        resultB[59] +
        resultB[60] +
        resultB[66] +
        resultB[67]) /
        20) *
      100;

    const perceiving =
      ((resultB[5] +
        resultB[6] +
        resultB[12] +
        resultB[13] +
        resultB[19] +
        resultB[20] +
        resultB[26] +
        resultB[27] +
        resultB[33] +
        resultB[34] +
        resultB[40] +
        resultB[41] +
        resultB[47] +
        resultB[48] +
        resultB[54] +
        resultB[55] +
        resultB[61] +
        resultB[62] +
        resultB[68] +
        resultB[69]) /
        20) *
      100;


    const letter1 = extrovert > introvert ? "E" : "I";
    const letter2 = sensing > intuition ? "S" : "N";
    const letter3 = thinking > feeling ? "T" : "F";
    const letter4 = judging > perceiving ? "J" : "P";
    
    const fullLetter = letter1 + letter2 + letter3 + letter4;

    const number1 = letter1 == "I" ? 9 : 5;
    const number2 = letter2 == "S" ? 19 : 14;
    const number3 = letter3 == "T" ? 20 : 6;
    const number4 = letter4 == "J" ? 10 : 16;
    const sumNumber = number1 + number2 + number3 + number4;

    let analisisNumber = 0;
    switch (sumNumber) {
      case 35:
          analisisNumber = 15;
          break;
      case 39:
          analisisNumber = 5;
          break;
      case 40:
          analisisNumber = 14;
          break;
      case 41:
          analisisNumber = 11;
          break;
      case 44:
          analisisNumber = 2;
          break;
      case 45:
          analisisNumber = 7;
          break;
      case 46:
          analisisNumber = 10;
          break;
      case 49:
          analisisNumber = 16;
          break;
      case 50:
          analisisNumber = 4;
          break;
      case 53:
          analisisNumber = 6;
          break;
      case 54:
          analisisNumber = 13;
          break;
      case 55:
          analisisNumber = 12;
          break;
      case 58:
          analisisNumber = 1;
          break;
      case 59:
          analisisNumber = 8;
          break;
      case 60:
          analisisNumber = 9;
          break;
      case 64:
          analisisNumber = 3;
          break;
      }

    const result = {
      "extrovert": extrovert, 
      "sensing": sensing, 
      "thinking": thinking, 
      "judging": judging, 
      "introvert": introvert, 
      "intuition": intuition, 
      "feeling": feeling, 
      "perceiving": perceiving, 
      "fullLetter": fullLetter, 
      "point": analisisNumber 
    }
    return result
  };