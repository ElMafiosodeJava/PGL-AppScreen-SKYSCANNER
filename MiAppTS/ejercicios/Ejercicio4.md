** 4. Indica en una tabla cuáles han sido los iconos que has incorporado a tu proyecto y
cómo los has implementado. Si son de la misma librería, basta con explicar la
implementación de uno.

| Nombre                                   | Enlace                 | Imagen                                                                      |
|------------------------------------------|------------------------|-----------------------------------------------------------------------------|
| Modo avión                               | https://iconos8.es/    | ![Modo avión](/mnt/data/icons8-activar-el-modo-avión-64.png)               |
| Búsqueda                                 | https://iconos8.es/    | ![Búsqueda](/mnt/data/icons8-búsqueda-48.png)                              |
| Cama                                     | https://iconos8.es/    | ![Cama](/mnt/data/icons8-cama-64.png)                                      |
| Espumoso                                 | https://iconos8.es/    | ![Espumoso](/mnt/data/icons8-espumoso-24.png)                              |
| Más                                      | https://iconos8.es/    | ![Más](/mnt/data/icons8-más-de-50.png)                                     |
| Me gusta                                 | https://iconos8.es/    | ![Me gusta](/mnt/data/icons8-me-gusta-50.png)                              |
| Personas en coche (vista lateral)        | https://iconos8.es/    | ![Personas en coche](/mnt/data/icons8-personas-en-coche,-vista-lateral-50.png) |
| Planeta Tierra                           | https://iconos8.es/    | ![Planeta Tierra](/mnt/data/icons8-planeta-tierra-24.png)                  |
| Trofeo                                   | https://iconos8.es/    | ![Trofeo](/mnt/data/icons8-trofeo-48.png)                                  |
| Usuario masculino en círculo             | https://iconos8.es/    | ![Usuario masculino en círculo](/mnt/data/icons8-usuario-masculino-en-círculo-50.png) |
| Torre Eiffel                             | https://images.google.com/      | ![Torre Eiffel](/mnt/data/photo-1570097703229-b195d6dd291f.jpeg) |
| Paisaje de Portugal                      | https://images.google.com/      | ![Portugal](/mnt/data/Portada-43.png)              |
| Skyscanner Symbol                        | https://images.google.com/      | ![Skyscanner](/mnt/data/Skyscanner-Symbol.png)     |

El modo avión por ejemplo bastó con poner una etiqueta imágen con el atributo "source={}" y dentro de las llaves "require()" con la dirección relativa del icono;

< Image  source={require('../assets/icons8-activar-el-modo-avión-64.png')} style={styles.logos}/ >
