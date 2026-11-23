# Chat WebSocket com React Native

Projeto didatico com um servidor Node.js e um aplicativo Expo.

## Servidor

```powershell
cd chat-server
npm install
npm start
```

O servidor sera executado em `ws://IP_DO_COMPUTADOR:8080`.

## Aplicativo

Em outro terminal:

```powershell
cd app
npm install
npm start
```

Abra o app no Expo Go, Android Studio ou navegador. Informe o endereco do servidor no campo superior e escolha **Conectar**.

- Em um celular: use o IP IPv4 da rede local do computador, por exemplo `ws://192.168.0.10:8080`.
- No emulador Android: tente `ws://10.0.2.2:8080`.
- O celular e o computador devem estar na mesma rede.
- Libere a porta `8080` no firewall do Windows, se necessario.
