# See Really - Sitio Web de Visualización de Videos

See Really es una aplicación web creada con React que permite a los usuarios ver y agregar videos de YouTube en diferentes categorías. La aplicación utiliza tecnologías modernas para proporcionar una experiencia de usuario fluida y rápida.

## Características Principales

- **SPA (Single Page Application):** La aplicación está construida como una SPA utilizando React, lo que mejora la velocidad y la interactividad del sitio.

- **React Router:** Se utiliza react-router para gestionar las rutas y permitir una navegación fluida dentro de la aplicación.

- **Sesiones y Almacenamiento Local:** La aplicación utiliza sessionStorage para mantener el estado de la aplicación, lo que mejora la persistencia de datos y reduce las consultas innecesarias a la base de datos y a la API de YouTube.

- **Firebase:** Como base de datos principal, se utiliza Firebase para almacenar y recuperar información sobre videos, categorías y otros datos relevantes.

- **Context API de React:** Se emplea la Context API de React para gestionar un estado global en la aplicación, facilitando la manipulación y actualización de datos en diferentes componentes.

- **Optimización de Carga de Datos:** Se implementa una estrategia para cargar datos solo una vez en la vida de la sesión del usuario, optimizando así el rendimiento y reduciendo la carga en la base de datos y la API de YouTube.

- **Estilos con Tailwind CSS:** La apariencia y el estilo de la aplicación se han diseñado utilizando Tailwind CSS para un desarrollo rápido y mantenible.

## Instrucciones de Uso

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/kevinmolinadev/see-really
   cd see-really
   ```

2. **Instalar Dependencias:**

   ```bash
   npm install
   ```

3. **Configurar Firebase:**

   - Crea un proyecto en Firebase: [Firebase Console](https://console.firebase.google.com/)
   - Configura las credenciales de firebase en un archivo `src/firebase_config.js`

4. **Iniciar la Aplicación:**

   ```bash
   npm start
   ```

5. **Accede a la Aplicación:**

Abre tu navegador y visita [See Really](https://see-really.web.app)

## Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

See Really no solo es un proyecto, sino también un viaje de aprendizaje en el que he tenido la oportunidad de adquirir nuevas habilidades y conocimientos. Desde la planificación hasta la implementación, cada paso de este proyecto ha sido una oportunidad para explorar y crecer como desarrollador.