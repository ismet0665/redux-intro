import { DECREASE, INCREASE, RESET } from "../types/counterTypes";

const initialState = {
  counter: 0, //? Global state
};

//? reducer Pure js function. Bir dis bagimlilik olmamali.yani dış api fetch axios vs atılmamalı.  bir durum oluşturudugumuzda case INCREASE: gibi o degere karşılık gelen deger hep aynı olmalı return { counter: state.counter + 1 }; verilen degere karşılık alınan deger hep aynı olmalı redux ın tahmin edilebilirlik ilkesi geregi. bunu sağlayabilmek için func. dışa bağımlı olmamalı.dışardan veri çekme bunu bozabilir. fetch axios ile istekte bulunurken bazen veri gelmeyebilir buda kararsızlıga yol açar. pure den kasıt dışa bağımlı olmaması lazım.Kararlı olmalı x girerse y çıkar net. INCREASE olursa  + 1 artırır.
// state = initialState state e bir deger gelmezse başlangıc degeri gelsin. reducer a muhakkak bir state gelmesi lazım. boş olmaması için baslangıc state i vermemiz lazım.
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { counter: state.counter + 1 };
    case DECREASE:
      return { counter: state.counter - 1 };
    case RESET:
      return { counter: 0 };
    default:
      return state;
  }
};
export default counterReducer;

// switch case yapısında return kullandıgımız için break kısmına gerek yok return geri dönüş demektir. return dn sonra aşağı inmeyeceği için break e gerek kalmadı.
// state.counter bunu da state in içindeki value olarak tanımladık.
// action UI dan gelen istek örn buton click ile yapılan artırma işlemi gibi.
//! default kısmına break dememek lazım.reducer bir durum makinası ve reducer muhakkak bir state döndürmesi gerekir.Dolayısıyla case kısımlarında bir deger olmadı ise default olarak muhakkak return olmalı state in kendisi geri dönmeli.obje döndürmeli.

// case INCREASE: global olan hiç değişmeyen sabit ifadeler genellikle büyük harf ile yazılır. harflerde bir değişiklik olursa ilgili case kısmına giremeyeceginden hatalı olur. bunu yüzlerce yazarsak ve bir yerde yanlıs yazarsak hata analizi zor oluyor bu yüzden types klasörüne bunu bir değişken olarak yazıp hata payını azaltıyoruz.
