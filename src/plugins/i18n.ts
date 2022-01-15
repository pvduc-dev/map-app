import i18next from 'i18next';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";

console.log(process.env.I18N_EXPIRATION_TIME)

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'vi',
    backend: {
      backends: [
        LocalStorageBackend,
        HttpApi,
      ],
      backendOptions: [
        {
          expirationTime: 0,
        },
        {
          loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
      ]
    },
  });

export default i18next;
