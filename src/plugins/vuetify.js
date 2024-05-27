import { createVuetify} from 'vuetify';
import 'vuetify/styles'; //importación de los estilos de Vuetify
import { aliases, mdi} from 'vuetify/iconsets/mdi';

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'light',
    },
    icons: {
        defaultset: 'mdi',
        aliases,
        sets:{
            mdi,
        },
    },
});
export default vuetify;