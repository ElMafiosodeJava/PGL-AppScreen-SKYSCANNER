** 4. Indica en una tabla cuáles han sido los iconos que has incorporado a tu proyecto y
cómo los has implementado. Si son de la misma librería, basta con explicar la
implementación de uno.
## PGL-AppScreen-SKYSCANNER

| Nombre                                   | Enlace                      | Imagen                                                                                                          |
|------------------------------------------|-----------------------------|-----------------------------------------------------------------------------------------------------------------|
| Modo avión                               | https://iconos8.es/         | ![Modo avión](PGL-AppScreen-SKYSCANNER/MiAppTS/assets/icons8-activar-el-modo-avión-64.png)                     |
| Búsqueda                                 | https://iconos8.es/         | ![Búsqueda](PGL-AppScreen-SKYSCANNER/MiAppTS/assets/icons8-búsqueda-48.png)                                    |
| Cama                                     | https://iconos8.es/         | ![Cama](PGL-AppScreen-SKYSCANNER/MiAppTS/assets/icons8-cama-64.png)                                            |
| Espumoso                                 | https://iconos8.es/         | ![Espumoso](PGL-AppScreen-SKYSCANNER/MiAppTS/assets/icons8-espumoso-24.png)                                    |
| Más                                      | https://iconos8.es/         | ![Más](PGL-AppScreen-SKYSCANNER/MiAppTS/assets/icons8-más-de-50.png)                                           |
| Me gusta                                 | https://iconos8.es/         | ![Me gusta](PGL-AppScreen-SKYSCANNER/MiAppTS/assets/icons8-me-gusta-50.png)                                    |
| Personas en coche (vista lateral)        | https://iconos8.es/         | ![Personas en coche](PGL-AppScreen-SKYSCANNER/MiAppTS/assets/icons8-personas-en-coche,-vista-lateral-50.png)   |
| Planeta Tierra                           | https://iconos8.es/         | ![Planeta Tierra](PGL-AppScreen-SKYSCANNER/MiAppTS/assets/icons8-planeta-tierra-24.png)                        |
| Trofeo                                   | https://iconos8.es/         | ![Trofeo](PGL-AppScreen-SKYSCANNER/MiAppTS/assets/icons8-trofeo-48.png)                                        |
| Usuario masculino en círculo             | https://iconos8.es/         | ![Usuario masculino en círculo](PGL-AppScreen-SKYSCANNER/MiAppTS/assets/icons8-usuario-masculino-en-círculo-50.png) |
| Torre Eiffel                             | https://images.google.com/  | ![Torre Eiffel](PGL-AppScreen-SKYSCANNER/MiAppTS/assets/photo-1570097703229-b195d6dd291f.jpeg)                 |
| Paisaje de Portugal                      | https://images.google.com/  | ![Portugal](PGL-AppScreen-SKYSCANNER/MiAppTS/assets/Portada-43.png)                                            |
| Skyscanner Symbol                        | https://images.google.com/  | ![Skyscanner](PGL-AppScreen-SKYSCANNER/MiAppTS/assets/Skyscanner-Symbol.png)                                   |

El modo avión por ejemplo bastó con poner una etiqueta imágen con el atributo "source={}" y dentro de las llaves "require()" con la dirección relativa del icono;

< Image  source={require('../assets/icons8-activar-el-modo-avión-64.png')} style={styles.logos}/ >
