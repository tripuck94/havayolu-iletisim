# Google Tag Manager ve AdWords Telefon Dönüşüm Takibi Kurulumu

Bu kılavuz, telefon numarası tıklamalarını Google Tag Manager (GTM) ile takip etmek ve AdWords'te dönüşümleri izlemek için gerekli adımları açıklar.

## 1. Mevcut Durum

✅ **Google Tag Manager** zaten sitenizde kurulu (GTM-MRP8QGP4)
✅ **Telefon tracking kodu** tüm sayfalara eklendi
✅ **Event sistemi** çalışır durumda

## 2. Google Tag Manager Konfigürasyonu

### A. Trigger Oluşturma

1. GTM kontrol panelinde **Triggers** sekmesine gidin
2. **New** butonuna tıklayın
3. Aşağıdaki trigger'ı oluşturun:

```
Trigger Name: Phone Call Conversion
Trigger Type: Custom Event
Event Name: phone_call_conversion
```

### B. Conversion Tag Oluşturma

1. **Tags** sekmesine gidin
2. **New** butonuna tıklayın
3. **Google Ads Conversion Tracking** tag'ini seçin
4. Aşağıdaki bilgileri girin:

```
Tag Name: Phone Call Conversion - AdWords
Conversion ID: [AdWords Conversion ID'nizi buraya girin]
Conversion Label: [AdWords Conversion Label'ınızı buraya girin]
Conversion Value: {{DLV - value}} veya sabit değer
Currency: TRY
Trigger: Phone Call Conversion (yukarıda oluşturduğunuz)
```

### C. Debug Variables (İsteğe Bağlı)

Debug için aşağıdaki değişkenleri oluşturabilirsiniz:

```
Variable Name: DLV - phone_number
Variable Type: Data Layer Variable
Data Layer Variable Name: phone_number

Variable Name: DLV - event_source  
Variable Type: Data Layer Variable
Data Layer Variable Name: event_source

Variable Name: DLV - value
Variable Type: Data Layer Variable
Data Layer Variable Name: value
```

## 3. AdWords Conversion Setup

### A. Conversion Action Oluşturma

1. AdWords hesabınızda **Tools & Settings** > **Conversions** 'a gidin
2. **+ New conversion action** butonuna tıklayın
3. **Website** seçeneğini seçin
4. Aşağıdaki bilgileri girin:

```
Conversion Name: Telefon Araması
Category: Phone calls
Value: Every phone call is worth the same → 1 TRY (veya istediğiniz değer)
Count: One (Recommended for this conversion action)
Conversion Window: 30 days
Attribution Model: Data-driven (veya Last click)
```

5. **Create and continue** butonuna tıklayın
6. **Conversion ID** ve **Conversion Label**'ı kopyalayın
7. Bu değerleri GTM'deki tag'inize girin

## 4. Test Etme

### A. GTM Preview Mode

1. GTM'de **Preview** butonuna tıklayın
2. Sitenizi ziyaret edin
3. Bir telefon numarasına tıklayın
4. GTM Debug panelinde şunları kontrol edin:
   - `phone_call_conversion` event'inin tetiklendiği
   - AdWords Conversion tag'inin çalıştığı
   - Data Layer'da doğru değerlerin olduğu

### B. Console Debug

Tarayıcı console'unda telefon tıklaması sonrası şunu görmelisiniz:

```javascript
GTM Phone Click Event: {
  event: 'phone_call_conversion',
  phone_number: '08502428117',
  source: 'ticket_purchase_page'
}
```

### C. AdWords Conversion Test

1. AdWords'te **Tools & Settings** > **Conversions** 'a gidin
2. Oluşturduğunuz conversion action'ına tıklayın
3. **Test your conversion tracking** butonunu kullanın

## 5. Tracking Detayları

### Event Parametreleri

Her telefon tıklamasında aşağıdaki data GTM'e gönderilir:

```javascript
{
  event: 'phone_call_conversion',          // Sabit event adı
  conversion_type: 'phone_call',           // Dönüşüm tipi
  phone_number: '08502428117',             // Aranan telefon numarası
  event_source: 'ticket_purchase_page',    // Tıklamanın geldiği sayfa/konum
  value: 1,                                // Dönüşüm değeri
  currency: 'TRY'                          // Para birimi
}
```

### Event Source Türleri

Farklı sayfalardaki tıklamalar farklı source'larla işaretlenir:

- `floating_button_/services/ticket-purchase` - Sağ alt sabit buton
- `contact_section` - İletişim bölümü
- `ticket_purchase_page` - Bilet satın alma sayfası
- `checkin_page_thy` - THY check-in sayfası
- `checkin_page_pegasus` - Pegasus check-in sayfası
- Ve diğer hizmet sayfaları...

## 6. İzleme ve Raporlama

### AdWords Raporları

1. **Campaigns** > **Extensions** > **Call extensions** 'da telefon araması performansını görebilirsiniz
2. **Tools & Settings** > **Conversions** 'da dönüşüm detaylarını izleyebilirsiniz
3. **Reports** > **Predefined reports** > **Extensions** > **Call details** ile detaylı raporları görüntüleyebilirsiniz

### GTM Real-time Tracking

1. GTM'de **Workspace** > **Built-In Variables** 'da **Events** 'i etkinleştirin
2. Google Analytics'te Real-time > Events'te telefon tıklamalarını görebilirsiniz

## 7. Önemli Notlar

⚠️ **AdWords Conversion ID ve Label'ınızı mutlaka doğru girin**
⚠️ **Test işlemlerini canlıya geçmeden önce tamamlayın**
⚠️ **Privacy policy'nizi tracking konusunda güncelleyin**
⚠️ **KVKK uyumluluğu için gerekli bildirimleri ekleyin**

## 8. Sorun Giderme

### Yaygın Problemler

1. **Event tetiklenmiyor**: Console'da error mesajlarını kontrol edin
2. **AdWords'te dönüşüm görünmüyor**: Conversion ID/Label'ı kontrol edin
3. **Telefon araması çalışmıyor**: Tel: linklerinin doğru formatını kontrol edin

### Debug Komutları

```javascript
// Data Layer'ı kontrol et
console.log(window.dataLayer);

// Belirli telefon tıklamasını manuel test et
gtmEvents.trackPhoneClick("08502428117", "manual_test");
```

Bu kurulum tamamlandığında, tüm telefon numarası tıklamaları AdWords'te dönüşüm olarak görünecek ve reklam performansınızı doğru şekilde ölçebileceksiniz. 