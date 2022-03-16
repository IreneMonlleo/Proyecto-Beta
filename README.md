# Proyecto-Beta
#Objetivo
En este proyecto se pretende crear un ecommerce para la marca Refer. Se trata de un comercio de muebles y decoración hechos con materiales reciclados, siguiendo el concepto de Upcycling.

#Requisitos
-Instalación
Debes clonar el repositorio del proyecto.

-Contribuir
Debes crear un pull request al proyecto.

#Programas utilizados
El proyecto se ha construido con los siguientes programas:

-Para el diseño:
Figma: diseño de wireframes.

-Para el desarrollo:
Visual Studio Code: editor de código fuente.
Prepos: compilador de archivos.

#Nomenclatura
-Clases
La convención de nombre para las clases de los elementos sigue el patrón BEM:

.bloque{}
.bloque__elemento{}
.bloque--modificador{}
'.bloque': representa el primer nivel de una abstracción o componente, es el elemento padre. 
'.bloque__elemento': representa un hijo del elemento padre '.bloque'. 
'.bloque--modificador': representa un estado diferente de '.bloque'.

#Etiquetas archivos sass
Para la localización rápida de archivos sass emplearemos etiquetas en texto comentado, por ejemplo:

//-------$VARIABLES
//-------$BUTTONS

#SCSS
Los archivos scss son los encargados de aportar los estilos necesarios a los elementos html, estos se encuentran organizados en la carpeta sass/.

Estructura del repositorio scss/
sass/
style.scss
utilities/
_variables.scss
_functions.scss
_mixins.scss
style/
_typo.scss
htmlelements/
_buttons.scss
_tags.scss
structure/
grid.scss
layout/
_main.scss
_header.scss
_navigation.scss
_footer.scss
site/
_site.scss
El archivo main.sass nos indica el path de los elementos así como su nombre. Todos los archivos sass tienen una etiqueta para facilitar su localización mediante la búsqueda de nuestro editor (Cmd/Ctrl + f) y acceder a ellos fácilmente.

#Variables
Las variables que se emplearán en este proyecto se encuentra en el archivo sass/utilites/_variables.scss. Estas variables globales definen los colores, el espaciado y las tipografías de todo el documento.

#Espaciado
Para el espaciado la unidad base será 6px, de la cual se emplearán sus múltiplos en función del espaciado que necesitemos. 

$space-unit: 6px;

#Color
La paleta de colores a utilizar en este proyecto se basara en los tres colores corporativos de la marca, al igual de el degradado de los colores principales.

Se declarará de la siguiente forma: $color-white   $color-greydark   $color-grey   $color-green   $color-turquoise 

#Fuentes
Las fuentes corporativas de la marca son las elegidas para el desarrollo de la web. Utilizando para titulos la Special Elite y para textos Raleway, aunque en alguna ocasion tambien se utilizara para titulos pero simpre acompañada de la Special Elite.

#Recursos multimedia
Los recursos multimedia a emplear en el documento web, se guardarán en la carpeta resources/. Existen dos subcarpetas, una para los iconos resources/icons/ y otra para las imágenes resources/img/. Las imágenes deben de estar optimizadas y no deben superar un peso de 2MB.
