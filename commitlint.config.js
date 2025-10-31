export default {
	extends: ['@commitlint/config-conventional'], // usa la convención estándar

	rules: {
		// Tipo de commit obligatorio y restringido a los más usados
		'type-enum': [
			2,
			'always',
			[
				'feat', // nueva funcionalidad
				'fix', // corrección de bug
				'chore', // tareas de mantenimiento
				'docs', // documentación
				'style', // estilo, formato o limpieza de código
				'refactor', // refactorización de código
				'test', // pruebas
				'perf', // optimización de rendimiento
			],
		],

		// Scope opcional, recomendado si quieres más control en commits grandes
		'scope-empty': [2, 'never'],

		// Título obligatorio con longitud mínima y máxima
		'subject-min-length': [2, 'always', 5],
		'subject-max-length': [2, 'always', 72],

		// Cuerpo opcional pero si existe debe tener mínimo 10 caracteres
		'body-min-length': [2, 'always', 10],

		// No permitir puntos al final del subject
		'subject-full-stop': [2, 'never', '.'],
	},
};

// Explicación de las reglas:

// 'type-enum': Define los tipos de commit permitidos para mantener consistencia.
// 'scope-empty': Obliga a definir un scope para mayor claridad en cambios grandes.
// 'subject-min-length' y 'subject-max-length': Aseguran que el título sea conciso pero descriptivo.
// 'body-min-length': Fomenta descripciones detalladas cuando se incluye un cuerpo.
// 'subject-full-stop': Evita puntos al final del título para mantener un formato limpio.
// Puedes personalizar estas reglas según las necesidades de tu proyecto.

// !Ejemplo de uso:
/*

1️⃣ 'scope-empty': [2, 'never']

⁉️ Qué significa:
Esta regla controla si el scope de un commit puede estar vacío o no.
El scope es la parte opcional dentro del commit que indica sobre qué área del proyecto estás trabajando, por ejemplo:

✅ feat(navbar): agregar botón de login

👍 Aquí el scope es navbar.


⚙️ Configuración [2, 'never']:

2 → nivel de severidad error (el commit falla si no cumple).

'never' → nunca puede estar vacío, es decir, siempre debes poner un scope.

⁉️ Por qué es útil profesionalmente:

Ayuda a organizar commits grandes, especialmente en proyectos con muchas funcionalidades.

Facilita filtrar cambios por área en changelogs o revisiones de código.

==============================================

2️⃣ 'subject-min-length': [2, 'always', 5]

⁉️Qué significa:
Esta regla define la longitud mínima del subject (la primera línea del commit).

⚙️ Configuración [2, 'always', 5]:

2 → error si no cumple.

'always' → se aplica siempre.

5 → mínimo 5 caracteres.

Ejemplo correcto:
✅ fix: corregir error en login

Ejemplo incorrecto:

❌ fix: x

⁉️ Por qué es útil profesionalmente:

Evita commits con títulos demasiado cortos o vagos.

Mantiene claridad y contexto desde el título.

==============================================

3️⃣ 'subject-max-length': [2, 'always', 72]

⁉️ Qué significa:
Longitud máxima del subject. Commitlint recomienda máximo 72 caracteres según la convención estándar.

Por qué 72 caracteres:

Para que el título se vea completo en git log, herramientas de CI/CD, GitHub y changelogs automáticos.

Ejemplo correcto:

✅ feat: agregar navbar responsivo con animaciones y botones de login

Ejemplo incorrecto:

❌ feat: agregar navbar, dropdowns, animaciones, botones, pruebas unitarias, estilos y documentación completa

⁉️ Beneficio profesional:

Commit limpio, fácil de leer y consistente.

==============================================

4️⃣ 'body-min-length': [2, 'always', 10]

⁉️ Qué significa:
Si el commit tiene cuerpo (body), debe tener un mínimo de caracteres.

⚙️ Configuración [2, 'always', 10]:

2 → error si no cumple.

'always' → siempre que haya body.

10 → mínimo 10 caracteres.

Ejemplo correcto:

✅ feat(navbar): agregar botón de login

Se añadió el botón de login en la navbar y se ajustó su estilo.

Ejemplo incorrecto:

❌ feat(navbar): agregar botón

ok

⁉️ Por qué es útil profesionalmente:

Garantiza que las descripciones sean claras y detalladas, no solo títulos cortos.

Facilita revisiones de código y generación de changelogs.

==============================================

5️⃣ 'subject-full-stop': [2, 'never', '.']

⁉️Qué significa:
Controla si el subject puede terminar con un punto (.) o no.

⚙️ Configuración [2, 'never', '.']:

2 → error si no cumple.

'never' → el subject no debe terminar con punto.

'.' → el carácter prohibido.

Ejemplo correcto:

✅ fix(navbar): corregir bug en dropdown

Ejemplo incorrecto:

❌ fix(navbar): corregir bug en dropdown.

⁉️ Por qué es útil profesionalmente:

Mantiene consistencia en commits.

La convención estándar de Conventional Commits indica que el subject no debe tener punto final, mientras que el body sí puede.

🎯 En resumen, estas reglas ayudan a mantener un historial de commits claro, consistente y profesional. Aquí tienes una tabla resumen:

💡 Tabla resumen de reglas de commit:

| Regla                | Nivel | Qué hace                   | Beneficio                     |
| -------------------- | ----- | -------------------------- | ----------------------------- |
| `scope-empty`        | 2     | Obliga a poner scope       | Organiza commits grandes      |
| `subject-min-length` | 2     | Título mínimo 5 chars      | Evita títulos vagos           |
| `subject-max-length` | 2     | Título máximo 72 chars     | Commit limpio y legible       |
| `body-min-length`    | 2     | Body mínimo 10 chars       | Descripción clara y detallada |
| `subject-full-stop`  | 2     | No permitir punto al final | Consistencia con convención   |


*/

// Más información en https://commitlint.js.org/#/guides-local-setup
