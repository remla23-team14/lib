# lib
Library that automatically updates its version number based on the latest git tag.
The git tag is then deleted and recreated, to include the commit that updated the version number.

## Usage
Calling 
```ts
VersionUtil.getVersion()
``` 
allows you to retrieve the current version of the library.
