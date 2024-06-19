# parseDBF

First of all, English is not my first language so there may be some grammatical errors in the documentation, sorry for that. If anyone notices any, please don't hesitate to let me know.

# Install

```
npm i https://github.com/InfinityNT/parseDBF.git
```

# Functions

### parseDBF

This function returns the whole set of records in the dbf database.

`parseDBF('path/to/my/dbf/file', encoding)`

```js
import { parseDBF } from 'parsedbf';

let parsedDBF = parseDBF(dbfFile);
```

### dbfHeader

This function returns the header of the corresponding dbf

`dbfHeader('path/to/my/dbf/file')`

```js
import { dbfHeader } from 'parsedbf';

let dbfHeader = dbfHeader('path/to/my/dbf/file');
```

# To do

1. Add support for more versions and variants of .dbf files.
2. Redo the unit tests.
3. Add type annotations to the functions.
4. Add function to only read a range of records or a single record.
5. Add more details to the README
6. There's more things to do but right now, I only remember these.

# Credits

This module is forked from [calvinmetcalf/parseDBF](https://github.com/calvinmetcalf/parseDBF), which I have modified here and there to better suit my needs.