// sw.js
self.addEventListener('push', function(event) {
    // Digunakan jika nanti Anda ingin push notification dari server
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // Membuka kembali halaman saat notifikasi diklik
    event.waitUntil(
        clients.openWindow('/')
    );
});
