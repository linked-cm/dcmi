---
"@_linked/dcmi": patch
---

Build with `linked build` instead of a hand-rolled `tsc` + `copyfiles` script, and drop the `rimraf`/`copyfiles` devDependencies. The published `lib/` output is unchanged. Declares `@types/node` as a devDependency, which the compile needs and previously only received transitively.
