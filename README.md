# Allio Notifications PWA

## Déploiement sur GitHub Pages

1. Crée un repo GitHub nommé `allio-notifications`
2. Upload tous ces fichiers dans le repo
3. Va dans Settings → Pages → Source: "main" branch
4. Ton URL sera : https://[ton-username].github.io/allio-notifications

## Avant de déployer

1. Dans Firebase Console → Paramètres du projet → Cloud Messaging
2. Section "Web Push certificates" → "Generate key pair"
3. Copie la VAPID Key générée
4. Remplace "COLLE_TA_VAPID_KEY_ICI" dans index.html par ta vraie clé

## Fonctionnement

1. Chaque closeuse ouvre l'URL sur son téléphone
2. Elle sélectionne son pays
3. Elle clique "Activer les notifications"
4. Elle copie son token FCM et te l'envoie
5. Tu colles le token dans le script Apps Script
6. ✅ Elle reçoit les notifications de ses commandes !
