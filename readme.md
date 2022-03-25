# Paso a paso y tareas Prueba Técnica ✨🏃‍♀️🏃‍♀️🏃‍♀️

### ***Fecha Inicio:*** 
### ***Plazo máximo de entrega Prueba Tecnica:*** 
<br>

### **Objetivo principal**
Crear un cuestionario de 11 preguntas, con respuestas verdaderas o falsas en la tecnología en la que está aplicando para trabajar(ReactJS). **No debe implementar solo la solución más básica. Esta es una oportunidad para mostrar tus habilidades e impresionar**.

### **Objetivos**

<ul>
  <li><input type="checkbox"> Implemente las pantallas basadas en los wireframes y la API a continuación.</li>
  <li><input type="checkbox"> Tenga en cuenta que es posible que los esquemas no estén completos, así que use su mejor criterio para la implementación de UI/UX.</li>
  <li><input type="checkbox"> No uses un modelo estándar como React Boilerplate o Ignite para este desafío. Queremos ver cómo estructura su proyecto y qué herramientas utiliza desde cero.</li>
  <li><input type="checkbox"> Crear una aplicación de react está bien para usar.</li>
  <li><input type="checkbox"> Los proyectos de React Native deben usar el flujo de trabajo Expo CLI: https://facebook.github.io/react-native/docs/getting-started </li>
</ul>


### **Aspectos a tener en cuenta**
* Funcionalidad
* Formato de código
* Estructura del proyecto
* Escalabilidad
* mantenibilidad
* Uso de mejores prácticas
* Administración del Estado
* Manejo de efectos secundarios
* Documentación

<br>

***

<br>

## TAREAS DIARIAS
### DIA 1
<br>

1. Revisar el repositorio de GitLab enviado para desestructurar tareas y entender el problema https://gitlab.com/mocipublic/front-code-challenge/-/wikis/home.

<br>

2. Comenzar proceso de planeación de tareas para 5 dias:

    * Dia 1: Planeación y organización.
    * Dia 2: 
    * Dia 3:
    * Dia 4:
    * Dia 5:

<br>

3. Para comenzar el proyecto desde 0, es necesario instalar y configurar Webpack y Babel.

<br>

4. Crear la carpeta del proyecto y abrirlo en el editor de código.

<br>

5. Crear el archivo "package.json" para poder listar las dependencias que se utilizarán en el proyecto y los scripts ó comandos a ejecutar

    ```
    npm init -y
    ```

<br>

6. Instalar Dependencias: Webpack
    ```
    npm i -D webpack webpack-cli webpack-dev-server
    ```

<br>

7. Instalar Dependencias: Babel
    ```
    npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react
    ```

<br>

8. Configurar Webpack y Babel, para esto crear el archivo "webpack.config.js".

<br>

9. Crear los scripts necesarios para el proyecto en el archivo "package.json" sección "scripts":

    **"start": "webpack --mode development"**
    **"build": "webpack --mode production"**

<br>

10. Ejecutar en la terminal el script que se acaba de crear, para probar que funcione, con el siguiente código:
    ```
    npm start
    ```
    Aparece la carpeta "dist" en el proyecto.

<br>

11. Ejecutar en la terminal el script que se acaba de crear, para probar que funcione, con el siguiente código:
    ```
    npm run build
    ```
    Esto para compactar el código en main.js(traducción del webpack)

<br>

12. Crear carpeta source "src".

<br>

13. Crear dentro de la carpeta "src" nuestros archivos principales "index.js" e "index.html".

<br>

14. Dentro del archivo index.html comenzar codigo base y crear el elemento div id "root" donde la aplicacion de react se cargará.

<br>

15. Ejecutar el plugin para copiar el archivo html a la carpeta dist (de desarrollo a producción).
    ```
    npm i html-webpack-plugin
    ```

<br>

16. En el archivo "webpack.config.js", llamar el plugin instalado y exportar la configuración de webpack como objeto, tambien excluir la carpeta node_modules.

<br>

17. Crear archivo para configurar babel ".babelrc" y crear un objeto para la configuración.

<br>

18. Comprobar que la configuración anterior haya quedado bien con:
    ```
    npm start
    ```

19. Crear y comenzar a editar el archivo "readme.md" para documentar el desarrollo del proyecto.

<br>

20. Inicializar el repositorio de git para llevar un control de versiones del proyecto. <br>
Utilizando el comando:
    ```
    git init
    ```

<br>

21. Crear el archivo ".gitignore" para ignorar la carpeta "node_modules".

22. Comenzar trazabilidad del proyecto en git agregando el trabajo realizado hasta el momento en el repositorio de git.

    ```
    git add .

    git commit -m "Primer commit"
    ```
23. Crear el repositorio en GitHub y subir el repo local
