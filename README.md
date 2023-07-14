Proje'nin deploy edilmiş hali: https://nurtasksikayetvar3500.netlify.app/

Kullanılan Teknoloji: React(Context),Form(Formik ve yup),fetch,Talwind CSS,
Tamamlanan İşler:
-Login Page: API’den istek göndermeye gerek yoktur ibaresi olduğu için örnek  figma tasarımıyla  birlikte  Username olarak “admin” Password olarak “12345”  ile  home page’e yönlendirilmesi yapılarak basit bir kontrol yapısı oluşturulmuştur.
-Home Page: Figma tasarımı
-Students Page: https://dummyjson.com/docs/users API yardımıyla mevcut  sayfada (default 6 olacak şekilde ayarlandı) 6,12,24,30 öğrencilerin gösterilmesi sağlanmasıyla birlikte(size) sayfalandırma (prev and next page )işlemleri de yapılarak ( toplam 100 adet öğrencinin bilgilerinin gösterilmesi sağlandı).
Yeni öğrenci ekleme ve mevcut öğrencideki bilgilerin update edilmesi(Edit butonu aracılığıyla) işlemleri form yardımıyla gerçekleşildi.
Sil butonu aracılığıyla istenilen öğrencinin İd’si yardımıyla listeden silinmesi gerçekleşildi.
Search alanında yazılan  query durumuna göre öğrencilerin listelenmesi sağlandı.

-Page404 Page: Kullanıcının girmiş olduğu hatalı url’ye gitmek istemesi durumunda açılan sayfa
Projede Sayfanın sol alanı Home ve Students pagelerinde aynı olduğu için kod okunabilirliği açısından LeftPage.js’de kodu yazılmıştır.

