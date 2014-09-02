Schema
======

A JSON schema for performance metrics.


## Description

A schema for doc-metrix metrics specifications, using the IETF's [JSON Schema v4](http://json-schema.org/latest/json-schema-core.html). This schema can be used by any JSON validator that conforms to v4 schemas to validate a metrics specification JSON file. Validation ensures that specification files conform to a standard that programs using those specification files can rely on.


## Contributing

To contribute to this schema, see the contributing [guide](https://github.com/doc-metrix/contributing). Any updates to the specification should be tagged.

``` bash
$ git tag -a <major.minor.patch> -m "[UPDATE] version."
$ git push origin <major.minor.patch>
```

Use [semantic versioning](http://semver.org/) (semvar) for communicating versions. For example, any new fields should be communicated as `minor` updates, while any corrections should be `patches`. Any schema restructuring (changing field names, removing fields, etc) should be communicated as `major` updates.


## Usage

The JSON schema is itself stored as [JSON](http://json.org/), a lightweight data-interchange format. It is intended to be used with a JSON validator, such as those found at the [IEFTF's JSON Schema site](http://json-schema.org/implementations.html), but it is human-readable.

You are free to use the JSON schema as is or modify it for your own purposes. Simply copy the file and use accordingly.


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. [NodePrime](http://nodeprime.com).
