Schema
======

> A JSON schema for performance metrics specifications.


## Overview

A schema for [doc-metrix](https://github.com/doc-metrix/) metric specifications. The schema uses the IETF's [JSON Schema v4](http://json-schema.org/latest/json-schema-core.html) and can be used by any JSON validator that conforms to `v4` schemas to validate a metric specification JSON file.

We __recommend__ that individuals contributing metric specifications validate their specifications. Validation ensures that specification files conform to a standard that programs using those specification files can rely on.


## Usage

The JSON schema is stored as [JSON](http://json.org/), a lightweight data-interchange format. While human-readable, the schema is intended to be used with a JSON validator, such as those found at the [IEFTF's JSON Schema site](http://json-schema.org/implementations.html).

You are free to use the JSON schema as is or modify it for your own purposes. Simply copy the file and use accordingly.


## Contributing

To contribute to this schema, see the contributing [guide](https://github.com/doc-metrix/contributing). Any updates to the specification should be tagged.

``` bash
$ git tag -a <major.minor.patch> -m "[UPDATE] version."
$ git push origin <major.minor.patch>
```

Use [semantic versioning](http://semver.org/) (semvar) for communicating versions.

*	Any new fields should be communicated as `minor` updates.
*	Any corrections/value modifications should be `patches`.
* 	Any specification restructuring (changing field names, removing fields, etc) should be communicated as a `major` update.



## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. [NodePrime](http://nodeprime.com).
