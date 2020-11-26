# InAtlas Frontend test 

**La prueba técnica  consta de:** 
* resolución de 3 consultas técnicas.
* implementación de la prueba técnica.
    
    
# Consultas técnicas

0. Cuál  es tu película favorita?

No sabría decantarme por una en especial, tal vez Blade Runner me viene a la mente, La Vida de Brian, 2001 Odisea en el Espacio, y de actuales me gustó mucho El Renacido, aunque es un remake. Distrito 9 en su momento me encantó. :)

1. Cómo mejorarías la siguiente sintaxis ().
    
```javascript 
    const responseApi = await this.apiService.get();

    if (responseApi) {
      if (responseApi.data && responseApi.data.name) {
        return responseApi.data.name';
      } else {
        return 'success';
      }
    } else {
      return 'error';
    }
```

Así: 

```javascript
    try {
      const responseApi = await this.apiService.get();
      return responseApi.data && responseApi.data.name ? responseApi.data.name : 'success';
    } catch (e) {
      return 'error';
    }
```

2. Cómo eliminar los siguientes statements (IFs).

```javascript
    if (value === 'Vader') {
       return 'vader';
     } else if (value === 'Luke') {
       return 'luke';
     } else if (value === 'Yoda') {
       return 'yoda';
     } else if (value === 'Kylo') {
       return 'kylo';
     } else {
       return 'chewee';
     }
```

Esta sería una forma:

```javascript
    const warriors = ['Vader', 'Luke', 'Yoda', 'Kylo'];
    return warriors.indexOf(value) ? value.toLowerCase() : 'chewee';
```

3. Que prefieres: mar | montaña | crucero | resort

Mar y montaña: isla.

# Prueba técnica
En este proyecto base, debes realizar un fork sobre él, para que al finalizar lances una pull-request para la revisión de la prueba.

La prueba consiste en:
Bajo el consumo de la api: https://swapi.dev , tener una aplicación SPA donde se pueda ver de una forma ordenada y simple los siguientes datos:
* Listado de naves.
* Listado de pilotos.
* Bío de la nave
* Bío del piloto
* Relación de Pilotos / Nave
* Relación de Nave / Piloto
* Recomendación de películas por aparición del piloto en ella
* Recomendación de películas por aparición de la nave en ella


**Nota**
Se valorará activamente performance, uso y práctica de clean code, UX/UI. 
