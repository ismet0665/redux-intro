import { DECREASE, INCREASE, RESET } from "../types/counterTypes";

export const inc = () => {
  return { type: INCREASE };
};

export const dec = () => ({ type: DECREASE });
// export const dec = (payload) => ({ type: DECREASE, payload }); payload olsaydı.

export const reset = () => ({ type: RESET });

// dispatch leri çok yerde yazacaksak dispatch({type:INCREASE,payload }) vs bunları func hale getirip kullanabiliriz.burda herhangi bir veri girişi olmadıgı için payload yazmadık butona tıklayınca artır azalt resetle.
// rxaction snippet kullanarak yazılabilir.


