export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const RESET = "RESET";

// düz string i değişken hale getirerek yanlış yazma olasılıgını kaldırıyoruz. rxconst kısa yolu snippet.
// değişkeni import ederek kullanabileceğiz.
// case INCREASE: global olan hiç değişmeyen sabit ifadeler genellikle büyük harf ile yazılır. harflerde bir değişiklik olursa ilgili case kısmına giremeyeceginden hatalı olur. bunu yüzlerce yerde yazarsak ve bir yerde yanlıs yazarsak hata analizi zor oluyor bu yüzden types klasörüne bunu bir değişken olarak yazıp hata payını azaltıyoruz.
